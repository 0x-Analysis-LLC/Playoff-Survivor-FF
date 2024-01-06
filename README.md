# Playoff Survivor Fantasy Football App

## Introduction

Welcome to our Fantasy Football application designed specifically for the NFL playoffs. This is a Next.js application that utilizes a PostgreSQL database, offering a unique blend of survivor and traditional fantasy football gamification, providing an exciting and engaging experience for all NFL fans.

This is an A-Z application that comes with a comprehensive set of features including user authentication, score keeping, live player stats streaming, and league hosting settings. If you're looking to compete with friends in this unique twist on fantasy football or our application has got you covered.

This project was created just for fun, with the aim of enhancing the NFL playoffs experience. We hope you enjoy using it as much as we enjoyed building it!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm or yarn
- PostgreSQL

Experience with PostgreSQL integration is recommended. If you're new to PostgreSQL, you might find the [PostgreSQL Developer Documentation](https://www.postgresql.org/docs/current/index.html) helpful.


### Installing

1. Navigate to the project directory in your terminal.
2. Run `npm install` or `yarn install` to install the necessary dependencies.

### Setting Up Environment Variables

This project requires certain environment variables to be set. You can do this by creating `.env` and `.env.local` files in the root directory of the project.

#### .env file

Create a `.env` file in the root directory of the project and add the following:

```DATABASE_URL="postgresql://USERNAME@localhost:5432/DATABASE_NAME?schema=public"
```

Replace USERNAME and DATABASE_NAME with your PostgreSQL username and database name.

#### .env.local file

Create a .env.local file in the root directory of the project and add the following:

```NEXTAUTH_SECRET=your_secret
SEED_USER_EMAIL=your_email
SEED_USER_USERNAME=your_username
SEED_USER_PASSWORD=your_password
```

Replace your_secret, your_email, your_username, and your_password with your desired values.


### Running the Project

Run npm run dev or yarn dev to start the development server.
Open your browser and navigate to http://localhost:3000.

#### Authors

Nathan Fitzpatrick

#### Acknowledgments

UI library from https://ui.shadcn.com/
PostgreSQL and NextAuth integration help from [Ethan Mick](https://www.youtube.com/@ethan_mick)