// utils/env.js
require('dotenv').config();

exports.getEnv = function(key, fallback) {
    return process.env[key] || fallback;
};