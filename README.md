# Full Stack Organize App

Organize App helps you to save your todo lists! The application is mobile, tablet and desktop friendly. 
You can create a new list and add todos there. When you are done with the list, you can mark it done. 
The lists and todos are saved in a database, so you can always keep track of it. 

## Setup
The development environment for this full-stack web application consist of three main parts:

1. Database (MongoDB).
2. Backend server (ExpressJS).
3. Frontend development server (React with Typescript).

### Prerequisites
- `mongodb-community`
- `brew`

### Starting the database
You can start with 

```
brew services start mongodb-community@5.0
```
or stop with 

```
brew services stop mongodb-community@5.0
```
### Starting the backend server
Open the root folder and run
```
npm install
```
to install all the dependencies needed for the project.
Then start the server by running
```
npm start
```
### Starting the frontend development server
The frontend application is in the directory `client`. From there, run 
```
npm install
```
to install all the dependencies needed for the project.

Then start the frontend application by running
```
npm start
```
