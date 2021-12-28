import User from '../models/User.js'
import generateToken from '../utils/generateToken.js'

class UserController {
	getUser() {}

	getProfile() {}

	async login(req, res) {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (user && (await user.matchPasswords(password))) {
			return res.status(200).json({
				_id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				token: generateToken(user._id),
			})
		} else {
			return res.status(401).json({
				message: 'Invalid email or password',
				status: 'error',
				code: res.statusCode,
			})
		}
	}

	async register(req, res) {
		const { email, password, firstName, lastName } = req.body

		const userExists = await User.findOne({ email })

		if (
			!email.length ||
			!password.length ||
			!firstName.length ||
			!lastName.length
		) {
			return res.status(400).json({
				message: 'Please, Fill up all the fields!',
				status: 'error',
				code: res.statusCode,
			})
		}

		if (userExists) {
			return res.status(400).json({
				message: 'User already exists!',
				code: res.statusCode,
				status: 'error',
			})
		}

		const user = await User.create({ email, password, firstName, lastName })

		if (user) {
			return res.status(201).json({
				message: 'Successfully registered!',
				user: {
					_id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					token: generateToken(user._id),
				},
				status: 'success',
				code: res.statusCode,
			})
		} else {
			return res.status(400).json({
				message: 'Invalid user data!',
				status: 'error',
				code: res.statusCode,
			})
		}
	}
}

export default new UserController()
