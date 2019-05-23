export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  API_URL: "http://localhost:3000",
  ACCESS_TOKEN : "0z6v8b4uua",
  ERROR: {
  	 100: 'Please put a valid image url',
  	 101: 'Please refresh and try to login again'
  },
  GOOGLE_CLIENTID: "38122336055-2l78jb89vfsj8qtr8ac58t5onqv5bs3j.apps.googleusercontent.com",
  GOOGLE_SECRET: "Sk34RldCKENc73QcQWxfd1JU",
  LOGOUT_REDIRECT: "http://localhost:8080"
}