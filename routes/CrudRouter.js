try {
    const express = require('express');
    const router = express.Router();
    const { Create, Show, Update, Delete } = require('../Controller/CrudController');

    router.post('/Create', Create);
    router.get('/Show', Show);
    router.patch('/Update', Update);
    router.delete('/Delete', Delete);

    module.exports = router;

    console.log("Routers Is Nice Working...");
} catch (error) {
    console.log("Routers Is Not Working", error.message, "...");
}