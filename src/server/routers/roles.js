const { Router } = require('express');

const Tables = require('../../schema');

const api = require('../middleware/api');
const list = require('../middleware/list');

module.exports = () => {

  const router = Router();

  router.get('/', api('/profiles'), list({ schema: Tables.roles }));

  router.get('/', (req, res, next) => {
    res.template = 'roles';
    res.pdfTemplate = 'pdf/roles';
    next();
  });

  return router;

};
