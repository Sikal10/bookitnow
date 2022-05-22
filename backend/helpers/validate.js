import bcrypt from "bcryptjs";

export const validateUserData = (username, email, password, res) => {
    if (!username || !email || !password) return res.status(400).json({message: "Please enter all fields"});
};

export const hashPasswordHandler = async (password) => {
    return await bcrypt.hash(password, 12);
};

export const comparePassword = async (password, user) => {
    return await bcrypt.compare(password, user.password);
}