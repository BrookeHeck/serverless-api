'use strict';

const readPeople = require('./index.js');

const event = {
  pathParameters: {
    id: "3",
  },
};

readPeople.handler({})
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e);
  });

  readPeople.handler(event)
    .then(response => {
      console.log(response)
    })
    .catch(e => {
      console.log(e);
    });

