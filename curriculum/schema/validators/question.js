const Joi = require('joi');

const questionJoi = Joi.object().keys({
  text: Joi.string().required(),
  answers: Joi.array()
    .items(
      Joi.object().keys({
        answer: Joi.string().required(),
        feedback: Joi.string().allow(null)
      })
    )
    .required()
    .unique('answer'),
  solution: Joi.number().required()
});

const quizJoi = Joi.object().keys({
  questions: Joi.array()
    .items(
      Joi.object().keys({
        text: Joi.string().required(),
        distractors: Joi.array()
          .items(Joi.string().required())
          .length(3)
          .required()
          .unique(),
        answer: Joi.string().required()
      })
    )
    .custom((value, helpers) => {
      return value.length === 10 || value.length === 20
        ? value
        : helpers.error('array.invalidLength');
    })
    .messages({
      'array.invalidLength': 'Quiz must have exactly 10 or 20 questions.'
    })
    .required()
});

module.exports = { questionJoi, quizJoi };
