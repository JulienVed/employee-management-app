import React from 'react';
import { Employee } from '../interfaces/Employee';


interface EmployeeDetailsProps {
    employee: Employee | null;
    onEdit: () => void;
    onDelete: () => void;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee, onEdit, onDelete }: EmployeeDetailsProps) => {
    if (!employee) {
        return <div>No employee selected</div>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
            <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
            <p><strong>Exit Date:</strong> {employee.exitDate}</p>
            <p><strong>Job Title:</strong> {employee.jobTitle}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default EmployeeDetails;