// @desc    register a new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: 'register user' });
};

// @desc    authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: 'Login user' });
};

// @desc    Get user data
// @route   GET /api/user/me
// @access  Public

const getMe = (req, res) => {
  res.json({ message: 'User data display' });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
