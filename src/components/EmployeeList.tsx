import React, { useEffect, useState } from 'react';
import { EmployeeService } from '../services/EmployeeService';
import { Employee } from '../interfaces/Employee';

const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await EmployeeService.getAllEmployees();
        setEmployees(data);
    };

    const handleDelete = async (id: string) => {
        await EmployeeService.deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date of Birth</th>
                        <th>Exit Date</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.dateOfBirth}</td>
                            <td>{employee.exitDate}</td>
                            <td>{employee.jobTitle}</td>
                            <td>{employee.department}</td>
                            <td>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;