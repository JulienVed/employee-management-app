# Employee Management App

This is a React application for managing employees. It allows users to create, edit, and delete employee records through a user-friendly interface.

## Features

- Add new employees with details such as name, surname, date of birth, exit date, job title, and department.
- Edit existing employee information.
- View a list of all employees with options to delete or edit their details.
- Detailed view of each employee's information.

## Project Structure

```
employee-management-app
├── src
│   ├── components
│   │   ├── AddEmployee.tsx
│   │   ├── EditEmployee.tsx
│   │   ├── EmployeeList.tsx
│   │   └── EmployeeDetails.tsx
│   ├── services
│   │   └── EmployeeService.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   ├── index.html
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd employee-management-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the "Add Employee" form to create new employee records.
- Click on an employee in the list to view their details or edit their information.
- Use the delete option to remove an employee from the list.

## Technologies Used

- React
- TypeScript
- Webpack
- CSS for styling

## License

This project is licensed under the MIT License.