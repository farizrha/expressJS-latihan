const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`<div>
    <h1>Menu</h1>
    <ul>
        <li>
            <a href='/pizza'>Pizza</a>
        </li>
        <li>
            <a href='/burger'>Burger</a>
        </li>
        <li>
            <a href='chicken'>Fried Chicken</a>
        </li>
    </ul>
</div>`);
});

router.get('/pizza', (req, res) => {
    res.send({
        foodName: 'Pizza',
        availability: 20,
        price: 20
    });
});

router.get('/burger', (req, res) => {
    res.send({
        foodName: 'Burger',
        availability: 40,
        price: 10
    });
});

router.get('/chicken', (req, res) => {
    res.send({
        foodName: 'Fried Chicken',
        availability: 60,
        price: 10
    });
});




module.exports = router;