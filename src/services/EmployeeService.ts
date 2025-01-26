import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/employees';

export const EmployeeService = {
    getAllEmployees: async (): Promise<any> => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    getEmployeeById: async (id: string): Promise<any> => {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },

    createEmployee: async (employeeData: any): Promise<any> => {
        const response = await axios.post(API_URL, employeeData);
        return response.data;
    },

    updateEmployee: async (id: string, employeeData: any): Promise<any> => {
        const response = await axios.put(`${API_URL}/${id}`, employeeData);
        return response.data;
    },

    deleteEmployee: async (id: string): Promise<void> => {
        await axios.delete(`${API_URL}/${id}`);
    }
};