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

    let peopleData = [];

    if(event.pathParameters && event.pathParameters.id) {
      peopleData = await PersonModel.query('id').eq(event.pathParameters.id).exec();
    } else {
      peopleData = await PersonModel.scan().exec();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(peopleData),
    }
  }
}