const requestHelper = require('../helpers/request.helper');

describe('Test suite', () => {

  before(() => {
    //to avoid https:// issue
    NODE_TLS_REJECT_UNAUTHORIZED=0;
  });

  it('Get all Posts', async () =>  {
    const response = await requestHelper.getPosts();
    console.log(response);
  });

  it('Get a single Post', async () =>  {
    const response = await requestHelper.getPost(1);
    console.log(response);
  });



  it('Create a Post', async () =>  {
    
  });
    

  it('Update a post', async () => {
   
  });

  it('Delete a post', async () => {
    
  });

  after(() => {
    //delete created employee
  });

});