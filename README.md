# KEP OM

<img src="https://github.com/kanatsanan6/kanatsanan6/blob/main/kepom.png?raw=true" alt="homepage"/>


## Live Demo

### Live Demo: [KEP-OM](https://kep-om.netlify.app/)

#### Testing Credential

Email: test@test.com / Password: Test1234

## About the Project

KEP OM is a Full-Stack web application built by **React js (Frontend)**, **Node js / Express (Backend)**, and **MongoDB (database).**

*The design prototype has been drafted using **Figma**. Click [here](https://www.figma.com/file/SInsrqwE01a58zV6pdjdrV/Untitled?node-id=0%3A1) to Check it out!

## Usage

#### Front-End

- React

- Redux

- React Router Dom v6

- Axios

- Tailwind CSS

- Material UI

- Firebase ( Authentication )

- Netlify ( Deployment )

#### Back-End

- Node

- Express

- Cors

- MongoDB and mongoose ( Database )

- Heroku ( Deployment )

## Functionalities

#### Basic Functionalities

- User can login using either registerd Email or Gmail.

- User can add a new Transaction.

- User can edit a Transaction.

- User can delete a Transaction.

- User can be able to see the overall payment.

## Installation

#### 1. Clone the project repo

```bash
git clone https://github.com/kanatsanan6/expense-app-mern
```

#### 2. Install the dependencies

- Client dependencies

```bash
cd client
npm install
```

- Server dependencies

```bash
cd server
npm install
```
#### 3. Add Environment variables

- **Client:**
Register and get an API information from firebase authentication.
Create .dnv file in the root directory ( client folder ) and fill the below information

```bash
REACT_APP_API_KEY = "API_KEY"
REACT_APP_AUTH_DOMAIN = "AUTH_DOMAIN"
REACT_APP_PROJECT_ID = "PROJECT_ID"
REACT_APP_STORAGE_BUCKET = "STORAGE_BUCKET"
REACT_APP_MESSAGING_SENDER_ID = "MESSAGING_SENDER_ID"
REACT_APP_API_ID = "API_ID"
```

- **Server:**
Register and get an URL information from Mongodb atlas.
Create .dnv file in the root directory ( server folder ) and fill the below information

```bash
MONGO_URL = "MONGO_URL"
```

#### 4. Start the project

- Client

```bash
cd client
npm start
```

- Server

```bash
cd server
npm dev
```
