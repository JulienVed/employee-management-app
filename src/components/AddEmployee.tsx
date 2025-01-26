import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EmployeeService } from '../services/EmployeeService';

const AddEmployee: React.FC = () => {
    const history = useHistory();
    const [employee, setEmployee] = useState({
        name: '',
        surname: '',
        dateOfBirth: '',
        exitDate: '',
        jobTitle: '',
        department: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await EmployeeService.createEmployee(employee);
        history.push('/employees');
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
                <input type="text" name="surname" value={employee.surname} onChange={handleChange} placeholder="Surname" required />
                <input type="date" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} required />
                <input type="date" name="exitDate" value={employee.exitDate} onChange={handleChange} />
                <input type="text" name="jobTitle" value={employee.jobTitle} onChange={handleChange} placeholder="Job Title" required />
                <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;