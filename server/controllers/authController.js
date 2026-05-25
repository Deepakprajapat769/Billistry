import * as authService from "../services/authService.js";

export const signup = async (req, res) => {
  try {
    const result = await authService.signup(req.body);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};