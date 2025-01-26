import React, { useState } from 'react';

const AddEmployee: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('');
    const [exitDate, setExitDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle employee addition goes here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Surname:</label>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
            </div>
            <div>
                <label>Exit Date:</label>
                <input type="date" value={exitDate} onChange={(e) => setExitDate(e.target.value)} />
            </div>
            <div>
                <label>Job Title:</label>
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
            </div>
            <div>
                <label>Department:</label>
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;