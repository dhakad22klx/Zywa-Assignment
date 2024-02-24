# Zywa Assigment Documentation

This is task that i have implement as a part of Zywa Recruitment Assignment , implement task with proper file structuring.The project involves processing data from a CSV file, storing it in a MongoDB database, and creating an API endpoint to retrieve the latest status of a card.

## Features

- We have given set of data for user's card.
- So implementd an endpoint to get status of user card.

## Technologies Used

- Node.js (javascript)
- Express
- MongoDb
- Mongoose 

## Setup

To run following project , follow these steps:

1. Clone the repository to your local machine (mycase it is ubuntu)

   ```
   git clone https://github.com/dhakad22klx/Zywa-Assignment
   ```

2. Install the required packages.

   ```
   cd Zywa-Assigment
   npm i
   ```
3. Start the application.
   
   ```
   nodemon app.js
   ```

8. Open the application in your web browser and pass json in body having cardId as one attribute.

   ```
   http://localhost:{3000}/user/getcardstatus
   ```

## Architectural Decisions

1. Schema Design: Four schemas are created to represent different card statuses. This design choice allows for efficient querying and retrieval of status data.

2. API Endpoint: An endpoint is created to provide a convenient interface for retrieving card statuses. The endpoint is designed to be intuitive and RESTful, accepting a card ID as input and returning the latest status.

3. Error Handling: Error handling middleware is implemented to gracefully handle errors and provide meaningful responses to clients.

4.  Database Selection : We could have used SQL in place of NoSQL but i have choosed this one considering scalability in mind and easy to implement or data complexity in future.


## Possible Improvements

1. Input Validation: Implement input validation to ensure that only valid card IDs are accepted by the API endpoint.

2. Authentication & Authorization: Add authentication and authorization mechanisms to secure the API endpoints and restrict access to authorized users.

