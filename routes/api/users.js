const router = require('express').Router();

const { User } = require('../../db');

//login
router.post('/login', async(req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });

    if(user) {
        const pass = req.body.password;
        if(pass == user.password) {
            res.json({user: user});
        }else {
            res.json({ error: 'Contraseña incorrecta'});
        }
    } else {
        res.json({ error: 'Email invalido'});
    }
});

module.exports = router;