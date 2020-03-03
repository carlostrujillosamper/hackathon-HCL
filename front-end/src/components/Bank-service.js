import axios from 'axios'

class BankService {
  constructor() {
    this.service = axios.create({
      baseURL:'http://localhost:3000' ,
      withCredentials: true
    })
  }

   getUsers = () => {
      return this.service.get('/customers')
      .then(response => response.data)
    }

    getUser = (uuid) => {
      return this.service.get(`/customers/${uuid}`)
      .then(response => response.data)
    }

    getTransactions = () => {
      return this.service.get(`/transactions`)
      .then(response => response.data)
    }

  }


  export default BankService;

