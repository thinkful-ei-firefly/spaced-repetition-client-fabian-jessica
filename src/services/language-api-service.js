import config from '../config'
import TokenService from './token-service'
import IdleService from './idle-service'

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => {
        if (res.status === 401){
          TokenService.clearAuthToken()
          TokenService.clearCallbackBeforeExpiry()
          IdleService.unRegisterIdleResets()
        }else{
          return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        }
      })
  },

  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => {
        if (res.status === 401){
          TokenService.clearAuthToken()
          TokenService.clearCallbackBeforeExpiry()
          IdleService.unRegisterIdleResets()
        }else{
          return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        }
      })
  },

  setGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method:'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({guess}),
    })
      .then(res => {
        if (res.status === 401){
          TokenService.clearAuthToken()
          TokenService.clearCallbackBeforeExpiry()
          IdleService.unRegisterIdleResets()
        }else{
          return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        }
      })
  }
}

export default LanguageApiService
