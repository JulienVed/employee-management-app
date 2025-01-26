import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/employees';

export const EmployeeService = {
    getAllEmployees: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    getEmployeeById: async (id) => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },

    createEmployee: async (employeeData) => {
        const response = await axios.post(API_URL, employeeData);
        return response.data;
    },

    updateEmployee: async (id, employeeData) => {
        const response = await axios.put(`${API_URL}/${id}`, employeeData);
        return response.data;
    },

    deleteEmployee: async (id) => {
        await axios.delete(`${API_URL}/${id}`);
    }
};