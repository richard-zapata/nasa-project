import { send } from './request.js';
import { read } from './response.js';

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);