const expect = require('chai').expect;
const requestHelper = require('../helpers/request.helper');

describe('Test suite', () => {

  before(() => {
    //create an employee
  });

  it('Get all employees', async () =>  {
    const response = await requestHelper.getEmployees();
    //console.log(response);
  });

  it('Create an employee', async () =>  {
    
  });
    
  it('Get a single employee', async () => {
    const response = await requestHelper.getEmployee(23);
    console.log(response.data.id);
    expect(response.data.id).to.equal('23');
  });

  it('Modify an employee', async () => {
   
  });

  it('Delete an employee', async () => {
    
  });

  after(() => {
    //delete created employee
  });

});