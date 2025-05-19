const Joi = require('joi');
const {
  availableCharacters,
  availableBackgrounds,
  availableAudios,
  availableAlignments
} = require('../config/scene-assets');

const positionJoi = Joi.object().keys({
  x: Joi.number().required().strict(),
  y: Joi.number().required().strict(),
  z: Joi.number().required().strict()
});

// ...setupCharacterJoi, setupAudioJoi, DialogueJoi, commandJoi, setupJoi

module.exports = {
  positionJoi,
  setupCharacterJoi,
  setupAudioJoi,
  commandJoi,
  setupJoi
};
