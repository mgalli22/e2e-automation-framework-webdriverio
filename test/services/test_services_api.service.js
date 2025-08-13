// test/services/api.service.js
const axios = require('axios');
const { getEnv } = require('../../utils/env');

class ApiService {
    constructor() {
        this.client = axios.create({
            baseURL: getEnv('API_BASE_URL', 'https://api.publicapis.org'),
            timeout: 5000
        });
    }

    async getCategories() {
        const res = await this.client.get('/categories');
        return res.data.categories;
    }
}

module.exports = new ApiService();