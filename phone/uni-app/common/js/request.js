const BASE_URL = process.env.NODE_ENV == 'development' ? 'https://dsxwq.com:60317/api?method=' : '生产环境'

const request = (opts) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + opts.url,
			method: opts.method,
			data: opts.data,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		}).then(res => {
			resolve(res)
		}).catch(err => {
			console.log(err.message);
		})
	})
}

const post = (url, data) => {
	return request({
		url: url,
		method: 'POST',
		data: data
	})
}

const get = (url, data) => {
	return request({
		url: url,
		method: 'GET',
		data: data
	})
}

export default {
	post,
	get
};
