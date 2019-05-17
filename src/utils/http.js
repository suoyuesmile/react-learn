import axios from 'axios'
import FetchJsonp from 'fetch-jsonp'

export const fetch = (url, params, type) => {
  switch (type) {
    case 'get':
      axios.get(url, { params })
      break
  }
}

export const fetchJsonp = url => {
  FetchJsonp(url)
}
