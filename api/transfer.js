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
        reject(response.message)
      })
  })
}

export function getPhoto(namebank, data) {
  const url = `${baseURL}/api/${namebank}/bill/`
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((response) => {
        reject(response.response.data.message)
      })
  })
}

export function getListBank(namebank) {
  const url = `${baseURL}/api/${namebank}/bank/`
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((response) => {
        reject(response.response.data.message)
      })
  })
}
