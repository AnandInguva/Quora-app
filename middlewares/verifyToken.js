const jwt = require('jsonwebtoken');

const User = require('../models/users');

const verify = async (req, res, next) => {
	let authHeader = req.get('Authorization');
	const token = authHeader.split(' ')[1];
	if (!token) {
		return res.status(401).json({
			message: 'Not authenticated'
		});
	}

	let decodedToken;
	try {
		decodedToken = jwt.verify(token, 'Anand_app');
	} catch (error) {
		return res.status(500).json({
			message: 'Not authenticated'
		});
	}

	const user = await User.findById(decodedToken.userId);
	if (!user) {
		return res.status(404).json({
			messgae: 'wrong credentials'
		});
	}
	req.userId = decodedToken.userId;
	next();
};

module.exports = verify;
