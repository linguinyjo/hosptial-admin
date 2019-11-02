const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}

// target: 'http://localhost:5000'
// target: 'http://hospital.com:5000'
// 'http://192.168.99.100:5000'