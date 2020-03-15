const fetch = require('node-fetch');
const expect = require('chai').expect;
const endpoint = require('../config/endpoint/endpoint');

describe('Test suite', () => {
  let cookie;

  it('My first test', async function () {
    const response = await fetch(endpoint.url + 'employees');
    const resp = await response.json();
    console.log(resp);
    cookie = response.headers.raw()['set-cookie'];

  });
    
  it('Get a single employee', () => {
    fetch(endpoint.url + 'employee/23', {
      method: 'get',
      headers: {'Cookie': cookie}
    })
      .then(res => res.json())
      .then(json => console.log(json));
  });

});