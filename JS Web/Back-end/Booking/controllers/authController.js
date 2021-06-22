const router = require('express').Router();
const { body, validationResult } = require('express-validator')
const { isGuest, isUser } = require('../middlewares/guards')

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register')
})

router.post('/register',
    isGuest(),
    body('email', 'invalid email').isEmail(),
    body('username').trim().isLength({ min: 3 }).withMessage("Username must be at least 3 characters long"),
    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long').bail()
        .matches(/[a-zA-Z0-9]/)
        .withMessage('Password may contain only latin letters and digits'),
    body('rePass').trim().custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match')
        }
        return true;
    }),
    async (req, res) => {
        const { errors } = validationResult(req);
        console.log(errors);

        try {
            if (errors.length > 0) {

                const message = errors.map(e => e.msg).join('\n')
                throw new Error(message);
            }

            await req.auth.register(req.body.email, req.body.username, req.body.password)

            res.redirect('/') //TODO change redirect location
        } catch (err) {
            console.log(err);

            const ctx = {
                errors: err.message.split('\n'),
                userData: {
                    username: req.body.username,
                    email: req.body.email
                }
            }
            res.render('user/register', ctx)
        }

    })

router.get('/login', isGuest(), (req, res) => {
    res.render('user/login')
})

router.post('/login', isGuest(), async (req, res) => {

    try {
        await req.auth.login(req.body.username, req.body.password)

        res.redirect('/')
    } catch (err) {
        console.log(err.message);
        const ctx = {
            errors: [err.message],
            userData: {
                username: req.body.username
            }
        }
        res.render('user/login', ctx)
    }
})

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
})

router.get('/user', isUser(), async (req, res) => {
    const user = await req.storage.getUserByUsername(req.user.username);
    
    user.bookedHotels = user.bookedHotels.map(h => h.name);
    
    console.log('..... ', user);

    // let userData = req.user
    // console.log('....... ', req.user);
    res.render('user/profile', { user })
})


module.exports = router;