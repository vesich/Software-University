const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const { getAll, createItem, update, del } = require('../services/furniture');
const { parseError } = require('../util');

router.get('/', async (req, res) => {
    console.log(req.user);
    const data = await getAll();
    res.json(data)
})

router.post('/', isAuth(), async (req, res) => {
    const data = {
        make: req.body.make,
        model: req.body.model,
        year: Number(req.body.year),
        description: req.body.description,
        price: Number(req.body.price),
        img: req.body.img,
        material: req.body.material,
        owner: req.user._id
    }

    try {
        const result = await createItem(data);
        res.status(201).json(result)
    } catch (error) {
        const message = parseError(error);
        res.status(error.status || 400).json({ message })
    }
})

router.get('/:id', preload(), async (req, res) => {
    const item = req.data.toObject();
    item._ownerId = item.owner && item.owner.toString();
    res.json(item)
});

router.put('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    const updatedData = {
        make: req.body.make,
        model: req.body.model,
        year: Number(req.body.year),
        description: req.body.description,
        price: Number(req.body.price),
        img: req.body.img,
        material: req.body.material,

    }

    try {
        const result = await update(req.data, updatedData);
        res.json(result)
    } catch (error) {
        const message = parseError(error);
        res.status(error.status || 400).json({ message })
    }
})

router.delete('/:id',isAuth(), preload(), isOwner(), async (req, res) => {
    try {
        await del(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(error.status || 400).json({ message: error.message })
    }
} )

module.exports = router;