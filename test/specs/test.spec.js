const requestHelper = require('../helpers/request.helper');
const data = require('../../config/data/test');

describe('Test suite', () => {

  before(() => {
    //to avoid https:// issue
    NODE_TLS_REJECT_UNAUTHORIZED = 0;
  });

  it('Get all Posts', async () =>  {
    const posts = await requestHelper.getPosts();
    
    expect(posts.length).to.be.above(0);
    posts.forEach(post => {
      expect(typeof post.id).to.equal('number');
      expect(typeof post.userId).to.equal('number');
      expect(typeof post.body).to.equal('string');
      expect(typeof post.title).to.equal('string');
    });
  });

  it('Create a Post', async () =>  {
    const post = await requestHelper.createPost(data);
    expect(post.id).to.equal(101);
  });

  it('Get a single Post', async () =>  {
    const post = await requestHelper.getPost(100);
    
    expect(post.id).to.equal(100);
    expect(typeof post.userId).to.equal('number');
    expect(typeof post.body).to.equal('string');
    expect(typeof post.title).to.equal('string');
  });

  it('Update a post', async () => {
   
  });

  it('Delete a post', async () => {
    
  });

  after(() => {
    //delete created employee
  });

});