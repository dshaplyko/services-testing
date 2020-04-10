const requestHelper = require('../helpers/request.helper');
const data = require('../../config/data/test');

describe('Test suite', () => {
  let testId;

  before(() => {
    //to avoid https:// issue
    //NODE_TLS_REJECT_UNAUTHORIZED = 0;
  });

  it('Get all Posts', async () =>  {
    const posts = await requestHelper.getPosts();
    
    expect(posts.length).to.be.above(0);
    posts.forEach(post => {
      expect(typeof post.id).to.equal('number');
      expect(typeof post.title).to.equal('string');
      expect(typeof post.author).to.equal('string');
    });
  });

  it('Create a Post', async () =>  {
    const post = await requestHelper.createPost(data);
    testId = post.id;

    expect(post.author).to.equal(data.author);
    expect(post.title).to.equal(data.title);
  });

  it('Get a single Post', async () =>  {
    const post = await requestHelper.getPost(testId);
    
    expect(post.id).to.equal(testId);
    expect(typeof post.author).to.equal('string');
    expect(typeof post.title).to.equal('string');
  });

  it('Update a post', async () => {
    const post = {
      id: testId,
      title: 'updated',
      author: 'updated'
    };
    
    const response = await requestHelper.updatePost(testId, post);
    expect(response.title).to.equal(post.title);
    expect(response.author).to.equal(post.author);
  });

  it('Delete a post', async () => {
    await requestHelper.deletePost(testId);
    const post = await requestHelper.getPost(testId);
    expect(post).to.be.empty;
  });

  after(() => {
    //delete created employee
  });

});