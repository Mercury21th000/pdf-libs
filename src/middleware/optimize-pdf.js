'use strict';

const os = require('os');
const path = require('path');
const {v4: uuid} = require('uuid');
const {psToPdf} = require('../converters/ps2pdf');

/**
 * Express middleware.
 * Used for optimizing pdf (whatever that means).
 * Used when converting pdf to html, and everything breaks without it.
 * @param req
 * @param res
 * @param next
 */
const optimizePdf = (req, res, next) => {
  const outputPath = path.join(os.tmpdir(), `${uuid()}.pdf`);
  psToPdf(req.filePath, outputPath, (err, filePath) => {
    if (err) {
      res.status(500).send(err);
    }
    if (!filePath) {
      res.status(500).send('Error when optimizing PDF file');
    }
    req.filePath = filePath;
    req.optimizedPdf = true;
    next();
  });
};

module.exports = optimizePdf;
