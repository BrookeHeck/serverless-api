'use strict';

const dynamoose = require('dynamoose');

const schema = dynamoose.Schema({
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
        const personData = new PersonModel(event.body);
        const personRecord = await personData.save();

        return {
          statusCode: 200,
          body: JSON.stringify(personRecord),
        }
      
    } catch(e) {
      console.log(e);
    }    
  }

}