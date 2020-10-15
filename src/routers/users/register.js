const express = require('express');
const { Users } = require('../../models');
const { registerSchema } = require('../../schema');
const router = express.Router();

router.post('/users/register', async (req, res) => {

    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        };
        const {
            username,
            namaLengkap,
            email,
            password
        } = value;

        const user = new Users({
            username,
            namaLengkap,
            email,
            password
        });
        await user.save();
        res.send({ username, namaLengkap, email });
    } catch (e) {
        res.send({ message: e.message });
    }
});
// request pada http, BACA
module.exports = router; // agar file dapat diakses dari luar wajib ada di setiap file.js


// membuat login pr
// bikin router, bikin schema, 
// balikan username, namalengkap, email  