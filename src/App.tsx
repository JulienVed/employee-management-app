import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Employee Management System</h1>
                <Switch>
                    <Route path="/" exact component={EmployeeList} />
                    <Route path="/add" component={AddEmployee} />
                    <Route path="/edit/:id" component={EditEmployee} />
                    <Route path="/details/:id" component={EmployeeDetails} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;