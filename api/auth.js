import axios from 'axios'
const baseURL = process.env.BASE_URL
export function logIn(data) {
  const url = `${baseURL}/auth/login/`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status) {
          resolve(response.data.data)
        } else {
          reject(response)
        }
      })
      .catch((response) => {
        reject(response)
      })
  })
}

export function signUp(data) {
  const url = `${baseURL}/auth/register/`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status) {
          resolve(response.data.data)
        } else {
          reject(response)
        }
      })
      .catch((response) => {
        reject(response.response.status)
      })
  })
}

export function getUserInfo() {
  const url = `${baseURL}/auth/get_info/`
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status == 201) {
          resolve(response.data)
        } else {
          reject(response)
        }

      })
      .catch((response) => {
        reject(response)
      })
  })
}
