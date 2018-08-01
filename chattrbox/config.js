module.exports = function(app){
    var environment = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : null ;
    if(environment == 'local' || !environment){
        return {
            host: 'http://localhost:8000'
        }
    } else if (environment == 'development' || environment == 'dev') {
        return {
            host: 'http://localhost:8000'
        }
    } else if (environment == 'production') {
        return {
            host: 'http://test.com'
        }
    }
}
