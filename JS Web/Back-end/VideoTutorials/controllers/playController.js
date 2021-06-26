const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util/parsers');

const router = require('express').Router()

router.get('/create', isUser(), (req, res) => {
    res.render('play/create')
})

router.post('/create', isUser(), async (req, res) => {
    try {
        const playData = {
            title: req.body.title.trim(),
            description: req.body.description.trim(),
            imageUrl: req.body.imageUrl.trim(),
            public: Boolean(req.body.public),
            author: req.user._id
        }

        await req.storage.createPlay(playData);

        res.redirect('/')

    } catch (error) {

        const ctx = {
            errors: parseError(error),
            playData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public),
            }
        }
        res.render('play/create', ctx)
    }

})

router.get('/details/:id', async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        play.hasUser = Boolean(req.user);
        play.isAuthor = req.user && req.user._id == play.author
        play.liked = req.user && play.usersLiked.find(u => u._id == req.user._id)

        res.render('play/details', { play })
    } catch (error) {
        console.log(error);
        res.redirect('/404')
    }
})

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.author != req.user._id) {
            throw new Error('Cannot edit play you have not created')
        }
        res.render('play/edit', { play })
    } catch (error) {
        res.redirect('/play/details/' + req.params.id)
    }
})

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.author != req.user._id) {
            throw new Error('Cannot edit play you have not created')
        }
        await req.storage.editPlay(req.params.id, req.body);

        res.redirect('/')

    } catch (error) {
        const ctx = {
            errors: parseError(error),
            play: {
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public),
            }
        }

        res.render('play/edit', ctx)
    }
})

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id)

        if (play.author != req.user._id) {
            throw new Error('Cannot delete play you have not created')
        }

        await req.storage.deletePlay(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
        res.redirect('/play/details/' + req.params.id)
    }
})

router.get('/like/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id)

        if (play.author == req.user._id) {
            throw new Error('Cannot like your own play')
        }

        await req.storage.likePlay(req.params.id, req.user._id);
        res.redirect('/play/details/' + req.params.id);
    } catch (error) {
        console.log(error.message);
        res.redirect('/play/details/' + req.params.id)
    }
})

module.exports = router;