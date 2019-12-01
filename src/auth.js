import axios from 'axios'
const API_URL = process.env.API_URL || "https://express124san.herokuapp.com"

export default {

  user: {
    authenticated: false
  },

  login (email, pass, cb) {
    LoginRequest(email, pass, (res) => {
      this.user.authenticated = res.authenticated
      if (this.user.authenticated) {
        console.log('ok')
        if (cb) cb(true)
      } else {
        console.log('pasok')
        if (cb) cb(false)
      }
    })
  },

  checkAuth () {
    if (getAuth()) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  },

  logout (cb) {
    this.user.authenticated = false
    if (cb) cb()
  }
}

function LoginRequest (username, pass, cb) {
  axios.post(API_URL + '/login', {
    username: username,
    password: pass
  }).then(response => {
    if (response.status === 200) {
      cb({ authenticated: true })
    } else {
      cb({ authenticated: false })
    }
  }, response => {
    cb({ authenticated: false })
  })
}

function getAuth (cb) {
  axios.get(API_URL + '/me').then(response => {
    return true
  }, response => {
    return false
  })
}