const { Router } = require('express');
const Busboy = require('busboy');
const csv = require('csv-parse');

const actions = require('../../actions');
const Tables = require('../../schema');

const api = require('../middleware/api');
const list = require('../middleware/list');

const diff = require('../lib/diff/places');

const parse = () => {
  return (req, res, next) => {
    if (req.method !== 'POST') {
      return next();
    }
    req.records = [];
    const busboy = new Busboy({ headers: req.headers })
      .on('file', (fieldname, file, filename, encoding, mimetype) => {
        if (mimetype !== 'text/csv') {
          return file.resume();
        }
        file.pipe(csv({ columns: true })).on('data', row => req.records.push(row));
      })
      .on('finish', () => next())
      .on('error', next);
    req.pipe(busboy);
  };
};

module.exports = () => {

  const router = Router();

  router.get('/', api());

  router.get('/', list({ schema: Tables.places }));

  router.get('/', (req, res, next) => {
    res.template = 'places';
    res.pdfTemplate = 'pdf/places';
    next();
  });

  router.get('/update', (req, res, next) => {
    res.store.dispatch(actions.setChangeset(Object.values(req.session.changes)));
    res.template = 'update';
    next();
  });

  router.post('/update', parse(), (req, res, next) => {
    Promise.resolve()
      .then(() => {
        const url = `/establishment/${req.user.get('establishment')}/places`;
        return req.api(url)
          .then(response => response.json.data)
          .then(places => diff(places, req.records));
      })
      .then(diff => {
        req.session.changes = req.session.changes || {};
        diff.forEach(record => {
          req.session.changes[record.id] = record;
        });
      })
      .then(() => res.redirect(req.originalUrl))
      .catch(next);
  });

  return router;

};
