# Getting Started

## Frontend Setup

### Install Node.js

Install [node.js](https://nodejs.org/en/download/package-manager) on your local machine, this project is built with node v20.14.0

### Install project dependencies

Install project dependencies by running

```bash
npm install
# or
yarn
```

### Start the development server

Start the development server by running:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend Setup

### Import the .cls and .xml files

The backend code, which includes all the database schema classes, the REST services and the
production, is available under Prototype.
Download the `Prototype` folder and import the folder on the Management Portal into any namespace. `System Explorer -> Classes -> Browse -> Select Prototype`

### Create Web Application

- On the Management Portal navigate to: `System Administration -> Security -> Application -> Web Application -> Create New Web Application`.

- Fill in the form as shown below
![management portal](/public/management_portal.png)

- The APIs defined in `Prototype/DB/RESTServices.cls` will be available at `http://localhost:52773/api/prototype/*`
  - e.g. For example, the route `/patient` will be available at `http://localhost:52773/api/prototype/patients`
  - ![rest api](/public/restservices.png)

### Importing Data

#### Downloading sample data

- Download the `PatientData.csv` file from public

#### Import the Data into IRIS

- On the Management Portal navigate to: `System Explorer -> SQL -> Go -> Wizards -> Data Import`.
![management portal](/public/NavigatingManagementPortal.png)

- Enter the path and name of import file, select the namespace and schema to import to and click `Finish`.
![wizard](/public/Wizard.png)
