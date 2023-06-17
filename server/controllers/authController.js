
//test
// export const addPost = (req, res) =>{
//     res.json("from controller")
// }
import bcrypt from 'bcrypt';
import { User } from "../model/User.js";

export const register = async (req, res) => {
    try {
        // take data from the UI (req.body)
        const { username, email, password } = req.body;

        // if account have -> dont create
        const existingEmail = await User.findOne({ email })
        if (existingEmail) {
            return res.status(400).json({ message: 'Email is already registed' })
        }
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: 'username is already registed' })
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // if account dont have create new
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfull' })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured while registering User' })
    }

}

export const login = async (req, res) => {
    try {
        // Retrieve username and password from the request body
        const { username, password } = req.body;

        // Find the user in the database
        const user = await User.findOne({ username });

        // If the user doesn't exist, return an error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Check the password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        // If the password is incorrect, return an error
        if (!isPasswordCorrect) {
            return res.status(404).json({ message: 'Password incorrect' });
        }

        // If the username and password are correct, return a success message
        res.status(201).json({ message: 'Login successful', user : user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while logging in' });
    }
};
export const logout = async (req, res) => {
    try {
      
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while logging out' });
    }
  };