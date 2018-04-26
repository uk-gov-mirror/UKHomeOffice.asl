const Busboy = require('busboy');
const csv = require('csv-parse');

module.exports = () => {
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
        req.stream = file
          .pipe(csv({ columns: true }))
          .on('data', row => req.records.push(row));
      })
      .on('finish', () => {
        if (req.stream) {
          return req.stream.on('finish', () => next());
        }
        next();
      })
      .on('error', next);
    req.pipe(busboy);
  };
};
