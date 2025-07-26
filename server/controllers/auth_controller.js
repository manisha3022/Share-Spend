const User = require('../models/auth');
const jwt = require('jsonwebtoken');

const signupAction = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;

    try {
        const data= await User.create({ email, firstName, lastName, password });
        res.json({ data, message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const loginAction = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user._id, email: user.email }});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const logoutAction = (req, res) => {
    res.clearCookie(req.headers.authorization.split(' ')[1]);
    res.json({ message: 'Logged out successfully' });
    req.user = null; 
};

module.exports = { signupAction, loginAction, logoutAction };