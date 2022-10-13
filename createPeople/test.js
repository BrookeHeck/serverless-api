'use strict';

const createPeople = require('./index');

const event = {
  body: {
    id: "2",
    name: "test",
  }
}

createPeople.handler(event)
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e);
  });