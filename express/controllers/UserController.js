import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist." });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isCorrectPassword)
      return res.status(404).json({ message: "User does not exist." });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ user: existingUser, access_token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const user = req.body;

  try {
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    const hashedPassword = await bcrypt.hash(user.password, 12);

    const result = await User.create({
      email: user.email,
      password: hashedPassword,
      name: user.name,
      phone: user.phone,
      class: user.class,
    });

    const token = jwt.sign(
      {
        email: user.email,
        id: result._id,
      },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ user: existingUser, access_token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
