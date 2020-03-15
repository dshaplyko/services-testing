const fetch = require('node-fetch');
const endpoint = require('../../config/endpoint/endpoint');
const HttpsProxyAgent = require('https-proxy-agent');
const proxy =  new HttpsProxyAgent('http://127.0.0.1:8888');

const getEmployees = async () => {
    const response = await fetch(`${endpoint.url}/employees`, {agent: proxy});
    const cookie = response.headers.raw()['set-cookie'][0].split('; ')[0];

    return { cookie: cookie, body: await response.json() };
};

const getEmployee = async id => {
    const employees = await getEmployees();
    const response = await fetch(`${endpoint.url}/employee/${id}`, { headers: { cookie: employees.cookie } , agent: proxy });
    return response.json();
};

const createEmployee = async empl => {

};

const updateEmployee = async empl => {

};

const deleteEmployee = async id => {

};

module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};