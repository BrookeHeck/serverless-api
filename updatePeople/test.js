'use strict';

const updatePeople = require('./index');

const event = {
  body: { name: "test" },
  pathParameters: { id: "2" }
}

updatePeople.handler(event)
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e);
  });