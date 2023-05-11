// (Node) Javascript

// Required Packages:
const axios = require('axios')

axios.get('https://www.reddit.com/r/cats/random/.json')
  .then(res => console.log(res))
  .catch(err => console.log(err))