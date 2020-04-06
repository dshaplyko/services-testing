const fetch = require('node-fetch');
const endpoint = require('../../config/endpoint/endpoint');
const HttpsProxyAgent = require('https-proxy-agent');
/**
 * Here is the option to turn on/off fiddler capturing
 */
const isCaptured = false;
let proxy;
 
//https://jsonplaceholder.typicode.com/guide.html
const sendRequest = async (method, url, body = null) => {
	isCaptured ? proxy =  new HttpsProxyAgent('http://127.0.0.1:8888'): proxy;
	body ? body = JSON.stringify(body) : body;

	const headers = {
		"Content-type": "application/json; charset=UTF-8"
	};

	const response = await fetch(`${endpoint.url}/${url}`,{
		method: method,
		headers: headers,
		agent: proxy,
		body: body
	});
	return response.json();
};

const getPosts = async () => {
	return sendRequest('GET', 'posts');
};

const getPost = async id => {
	return sendRequest('GET', `posts/${id}`);
};

const createPost = async post => {
	return sendRequest('POST', 'posts/', post);
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