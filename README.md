# serverless-api

Author: Brooke Heck

Version: 1.0.0

Deployed Link: https://gpemc1d3hf.execute-api.us-west-2.amazonaws.com/prod/

## Overview
This project was setting up a RESTful API using AWS API Gateway. I created resources and methods on the API Gateway, and then attached them to lambda functions. Each request made to the server triggers a different lambda function. The project also used DynamoDB. The DB stored people with their id, name, and phone number. In the lambda functions I used dynamoose to interact with DynamoDB.

## API

endpoint: https://gpemc1d3hf.execute-api.us-west-2.amazonaws.com/prod/

### GET
- GET /people
- returns a list of all people

</br>

- GET /people/:id
- find person by id, provide id as a parameter in the URL

### POST
- POST /people
- add a user to the database
- sample body
```js
{
  id: "100"
  name: "test user",
  phone: "111-111-111"
}
```
- all values need to be strings
- id and name are required in the body, but phone will default to 000-000-0000 if no phone is provided

### PUT
- PUT /people/:id
- updates the person by id, provide id as a parameter in URL
- provide the update information in the body
```js
{
  phone: "206.111.2222"
}
```

### DELETE
- DELETE /people/:id
- delete person by id, provide id as a parameter in URL

## Change Log
- 10/12/2022:1948 - AWS RESTful API server working with all four methods, requests trigger AWS lambda functions