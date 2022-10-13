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

    let updatedRecord = [];

    console.log(event.body);
    console.log(event.pathParameters.id);

    if(event.pathParameters && event.pathParameters.id) {
      // const body = JSON.parse(event.body);
      await PersonModel.update({ id: event.pathParameters.id }, event.body);
      updatedRecord = await PersonModel.query('id').eq(event.pathParameters.id).exec();
    } else {
      updatedRecord = {message: 'record not found'}
    }

    return {
      statusCode: 200,
      body: JSON.stringify(updatedRecord),
    }
  }
}