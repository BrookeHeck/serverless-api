'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    default: '000-000-0000',
  },
});

const PersonModel = dynamoose.model('people-401d94', schema);

module.exports = {

  handler: async (event) => {

    let deletedRecord = [];

    if(event.pathParameters && event.pathParameters.id) {
      await PersonModel.delete(event.pathParameters.id);
    } else {
      deletedRecord = {message: 'record not found'};
    }

    return {
      statusCode: 200,
      body: JSON.stringify(deletedRecord),
    };
  },
};