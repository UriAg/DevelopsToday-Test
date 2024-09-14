# Project Overview

This project is a web application built with Node.js, Express.js, and Next.js. The backend is handled by Express.js, while the frontend is built using Next.js.

 ## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/UriAg/DevelopsToday-test.git
   ```
2. **Install Dependencies:**
   <br>Backend
   
   ```bash
   cd backend
   npm install
   ```
   Frontend
   
   ```bash
   cd frontend
   npm install
   ```
   
3. **Run the project in development environment**
   <br>Backend
   
   ```bash
   cd backend
   npm run dev
   ```
   Frontend
   
   ```bash
   cd frontend
   npm run dev
   ```
   <br>

The frontend will be running in http://localhost:3000 and the backend in http://localhost:3002

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
   
