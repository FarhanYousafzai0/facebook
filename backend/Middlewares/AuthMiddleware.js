import jwt from 'jsonwebtoken';
import user from '../Models/UserModel.js';

export const handleAuth = async(req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.split(' ')[1]; // ✅ Extract token after "Bearer"
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Use your secret
      let user =  await user.findById(decoded.id);
      req.user = user
      next();
      console.log(user)


     console.log(decoded)
    } catch (error) {
      console.error('Invalid token:', error);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'Session expired or unauthorized' });
  }
};






//Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Mjc3NDRkNzMwNjg3MTM4MTUyNDM3NiIsImlhdCI6MTc0NzQxNjE0MSwiZXhwIjoxNzQ3NTAyNTQxfQ.XDr0Wd7BP5ZsKhUOzmMuFKN1msDfco__f0oiiao80YY