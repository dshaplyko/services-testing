const fetch = require('node-fetch');
const endpoint = require('../../config/endpoint/endpoint');
const HttpsProxyAgent = require('https-proxy-agent');
const proxy =  new HttpsProxyAgent('http://127.0.0.1:8888');

const getPosts = async () => {
    const response = await fetch(`${endpoint.url}/posts`, {agent: proxy});
    return response.json();
};

const getPost = async id => {
    const response = await fetch(`${endpoint.url}/posts/${id}`, {agent: proxy});
    return response.json();
};

const createPost = async post => {

};

const updatePost = async post => {

};

const deletePost = async post => {

};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};