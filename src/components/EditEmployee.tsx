import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { EmployeeService } from '../services/EmployeeService';

const EditEmployee: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [employee, setEmployee] = useState({
        name: '',
        surname: '',
        dateOfBirth: '',
        exitDate: '',
        jobTitle: '',
        department: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await EmployeeService.updateEmployee(id, employee);
        history.push('/employees');
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
                <input type="text" name="surname" value={employee.surname} onChange={handleChange} placeholder="Surname" required />
                <input type="date" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} required />
                <input type="date" name="exitDate" value={employee.exitDate} onChange={handleChange} />
                <input type="text" name="jobTitle" value={employee.jobTitle} onChange={handleChange} placeholder="Job Title" required />
                <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
}

export default EditEmployee;