# Getting Started with Users and Cars Application

This project is a simple React and Redux Toolkit application built with TypeScript. It manages a list of cars, allowing the user to add, search, and delete cars, as well as calculate the total cost of all cars. The application demonstrates usage of Redux Toolkit for state management, with separation of concerns for the car form, car list, and total value components.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

This command starts the app in development mode. You can view it by opening [http://localhost:3000](http://localhost:3000) in the browser. The app will automatically reload if you make changes to the source files, and any lint errors will be shown in the console.

### `npm test`

Launches the test runner in interactive watch mode. You can add unit tests to verify that your code is working as expected.

### `npm run build`

This command creates a production build of the app. It optimizes and bundles the app for production, making the build ready for deployment.

### `npm run eject`

If you need to customize the default Create React App configuration, you can run `npm run eject`. This is a one-way operation and cannot be undone, so only use this if you need complete control over the build tools and configurations.

## Application Overview

The project consists of several components, each responsible for a different part of the car management system:

- **CarForm**: Allows the user to input car details (name and cost) and add them to the list.
- **CarList**: Displays all cars, allowing for searching by name and deleting specific cars.
- **CarSearch**: Provides a search bar for filtering cars by name.
- **TotalCarValue**: Calculates and displays the total value of all listed cars.

## State Management

The app uses Redux Toolkit to handle global state:

- **carFormSlice**: Manages the state of the car form (name and cost inputs).
- **carsSlice**: Manages the list of cars, including adding, deleting, and filtering based on the search term.

## Features

- **Add Car**: Users can input a car name and cost to add a new car to the list.
- **Search Cars**: Users can search for cars by name. The list updates in real-time as the search term is entered.
- **Delete Car**: Each car in the list has a delete button to remove it.
- **Calculate Total Value**: The total cost of all displayed cars is calculated and shown at the bottom of the list.

## Folder Structure

The project follows a typical React + Redux architecture, with a focus on modular components and Redux slices:

```
src/
├── components/          # UI components such as CarForm, CarList, etc.
├── hooks/               # Custom hooks for searching and string checks
├── slices/              # Redux slices for car form and car list
├── store/               # Redux store configuration
├── styles.css           # Global CSS styles
├── App.tsx              # Main application component
└── index.tsx            # Entry point for the React application
```

## Learn More

To learn more about the technologies used in this project, you can refer to the following documentation:

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started)

---

Happy coding!
