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

module.exports = {

  handler: async (event) => {
    const PersonModel = dynamoose.model('people-401d94', schema);

    let personData = await PersonModel.scan().exec();

    return {
      statusCode: 200,
      body: JSON.stringify(personData),
    }
  }
}