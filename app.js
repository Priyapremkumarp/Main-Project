// server.js (or your main server file)

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const { Appointment } = require('./Model/appointment');
const adminModel = require('./Model/adminprofile');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.put('/uupdate/:adminId', async (req, res) => {
    try {
        const adminId = req.params.adminId;
        const updatedDetails = req.body;

        // Find the admin profile by ID and update its details
        const updatedAdmin = await adminModel.findByIdAndUpdate(adminId, updatedDetails, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({ error: 'Admin profile not found' });
        }

        res.json({ message: 'Admin profile updated successfully', updatedAdmin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update admin profile' });
    }
});

app.get('/Bview', async (req, res) => {
    try {
        let result = await adminModel.find();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch admin profiles' });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});