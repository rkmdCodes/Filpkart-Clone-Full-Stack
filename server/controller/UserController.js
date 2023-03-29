import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      response.status(401).json({ message: "Username already exists!" });
    } else {
      const user = new User(request.body);
      await user.save();

      response.status(200).json({ message: user });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const data = req.body;

    const user = await User.findOne({ username: data.username });
    
    if (user) {
      if (data.password === user.password) {
        res.status(200).json(user);
      } else res.status(404).json({ message: "Entered Password is wrong!" });
    } else {
      res.status(404).json({ message: " User does not exists !" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
