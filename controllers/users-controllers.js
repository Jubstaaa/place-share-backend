const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const users = [
  {
    id: "u1",
    name: "İlker Balcılar",
    email: "ilkerbalcilartr@gmail.com",
    password: "22cc92f9b",
    image:
      "https://avatars.githubusercontent.com/u/9998250?s=400&u=d02f5b99b62315ddef450cfb7436fdd5fe832ed6&v=4",
    places: 3,
  },
];

const getUsers = (req, res, next) => {
  res.json(users);
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }

  const { name, email, password } = req.body;

  const hasUser = users.find((user) => user.email === email);
  if (hasUser) {
    throw new HttpError("Could not create user, email already exists.", 422);
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  users.push(createdUser);
  res.status(201).json(createdUser);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = users.find((user) => user.email === email);

  if (!identifiedUser) {
    throw new HttpError("Could not find a user with this credentials.", 401);
  } else if (identifiedUser.password !== password) {
    throw new HttpError("Password is wrong, please check again.", 401);
  }
  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
