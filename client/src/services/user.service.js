import axios from 'axios'
import authHeader from '../helpers/auth-header'

const API_URL = 'http://localhost:8000/api/user/'

const getUserProfile = () => {
	return axios.get(`${API_URL}profile`, { headers: authHeader() })
}

export { getUserProfile }
