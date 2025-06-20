const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.getAllUsers);
router.post('/create', usercontroller.createUser);
router.get('/delete/:id', usercontroller.deleteUser);
router.get('/edit/:id', usercontroller.showeditForm);
router.post('/update/:id', usercontroller.updateUser);

module.exports = router;
