const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('../estudiantes.json');

//
router.get('/', (req, res) => {
    res.json(data);
});

router.post('/', (req, res) => {
    const { id, estudiante, grado,  } = req.body;
    if (id && estudiante && grado 
        ) {
        const id = data.length + 1;
        const estudiante = { ...req.body, id };
        data.push(estudiante);
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(data, (estudiante, i) => {
        if (estudiante.id == id) {
            data.splice(i, 1);
        }
    });
    res.send(data);
})

module.exports = router;