const validateSignup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({
      message: "Email, Name and password are required"
    });
  }
  if (typeof email !== "string") {
    return res.status(400).json({
      message: "Email must be a string"
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters"
    });
  }
  next();
};

module.exports = { validateSignup };