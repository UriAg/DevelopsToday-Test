# DevelopsToday test

This repository haves both backend and frontend application's code.
Nextare the details to execute both components in yout develop and production environtment

## Project structure

- **Frontend**: User interface code.
- **Backend**: Server logic and API code.

## Requirements

Make you sure you have [Node.js](https://nodejs.org/) installed. Can you verify the installation executing:

```bash
node -v
npm -v
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd <frontend/src or backend/src>
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Frontend endpoints

Obtain available countries:

- **Endpoint**: *countries/getAvailableCountries*
- **Method**: GET
- **Description**: Get a list of available countries.

Obtain a single country information:
- **Endpoint**: countries/getCountryInfo/:countryId
- **Method**: GET
- **Description**: Recovery population, flag and border countries of a single country.


## API's documentation

- **Country List API**: [Nager.Date API Documentation](https://date.nager.at/swagger/index.html)
- **Country Info API**: [Postman Country Info API Documentation](https://documenter.getpostman.com/view/1134062/T1LJjU52)
