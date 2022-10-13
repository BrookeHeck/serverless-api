'use strict';

const deletePeople = require('./index');

const event = {
  pathParameters: {
    id: '3',
  },
};

deletePeople.handler(event)
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e);
  });