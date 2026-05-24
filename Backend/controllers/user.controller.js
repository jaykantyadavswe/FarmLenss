import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const ActiveCheck = (req, res) => {
    console.log("I am Active");
    res.send('I am Active');
};

export const register = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const newUser = new User({
            name, email, password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            newUser,
            message: "User Created"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const login = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(404).json({ message: "User don't exists" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        console.log("SECRET:", process.env.JWT_SECRET);
        console.log("USER:", user);

        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}