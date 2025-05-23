import jwt from 'jsonwebtoken';
import User from '../Models/UserModel.js';

export const handleAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Session expired or unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = currentUser;
    next();
  } catch (error) {
    console.error('Invalid token:', error.message);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
