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
    try {
      let person = JSON.parse(event.body);
      console.log(person);
      const personData = new PersonModel(person);
      const personRecord = await personData.save();

      return {
        statusCode: 200,
        body: JSON.stringify(personRecord),
      };
    } catch(e) {
      console.log(e);
    }    
  }
}