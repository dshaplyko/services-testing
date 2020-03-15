const fetch = require('node-fetch');
const endpoint = require('../../config/endpoint/endpoint');

const getEmployees = async () => {
    const response = await fetch(`${endpoint.url}/employees`);
    return { cookie: response.headers.raw()['set-cookie'], body: await response.json() };
};

const getEmployee = async id => {
    const employees = await getEmployees();
    const response = await fetch(`${endpoint.url}/employee/${id}`, { headers: { 'Cookie': employees.cookie } });
    return response.json();
};

module.exports = {
    getEmployees,
    getEmployee
};