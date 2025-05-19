const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const { fileJoi } = require('./files');
const { questionJoi, quizJoi } = require('./question');
const { setupJoi, commandJoi } = require('./scene');
const { challengeTypes } = require('../../shared/config/challenge-types');

// Gabungkan semua sub-validator ke dalam satu schema utama

const schema = Joi.object().keys({
  // ... potongan-potongan validasi utama
});

const challengeSchemaValidator = () => {
  return challenge => schema.validate(challenge);
};

module.exports = { challengeSchemaValidator };
