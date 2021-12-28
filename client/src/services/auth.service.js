import axios from 'axios'

const API_URL = 'http://localhost:8000/api/user/'

const register = (user) => {
	return axios.post(`${API_URL}register`, user)
}

const login = (email, password) => {
	return axios
		.post(`${API_URL}login`, {
			email,
			password,
		})
		.then((res) => {
			if (res.data.token) {
				localStorage.setItem('user', JSON.stringify(res.data))
			}

			return res.data
		})
}

const logout = () => localStorage.removeItem('user')

const authService = {
	register,
	login,
	logout,
}

export default authService
