import request from './request.js'

// test
export const test = (data) => {
	return request.post('pageData', data);
}
