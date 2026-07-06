import User from "../models/users.model.js";
import bcrypt from 'bcrypt';
import generateToken from "../utils/generateToken.js";

export const checkActive = async (req, res) => {
    res.send("RUNNING.........");
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({ message: "Account already exists. Please sign in." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);

        const newUser = new User({
            name, email, password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },

            message: "User Created"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({
            email
        })

        if (!user) {
            return res.status(404).json({ message: "User don't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        const token = generateToken(user);

        if (isMatch) {
            res.json({ message: "Login successful", token})
        } else {
            res.status(401).json({
                message: "Invalid credentials"
            });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}


