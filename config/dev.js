require('dotenv').config()


module.exports = {
  googleClientID:
    '70265989829-0t7m7ce5crs6scqd3t0t6g7pv83ncaii.apps.googleusercontent.com',
  googleClientSecret: '8mkniDQOqacXtlRD3gA4n2az',
  mongoURI: `mongodb://admin:${process.env.MONGODB_USER_PASS}@cluster0-shard-00-00.f7wzc.mongodb.net:27017,cluster0-shard-00-01.f7wzc.mongodb.net:27017,cluster0-shard-00-02.f7wzc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ufdbn1-shard-0&authSource=admin&retryWrites=true&w=majority`,
  cookieKey: '123123123',
}
