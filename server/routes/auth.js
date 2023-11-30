const router = require('express').Router();
const { loginSchema } = require('./../schemaValidation/login');
const { registerSchema } = require('./../schemaValidation/signup');
const { deleteUser } = require('./../schemaValidation/delete');
const { validate } = require('./../middleware/validatonHandle');
const { login, register, deleteuserModel,updateUser } = require('./../controller/auth');
const { verifyAuth } = require('./../middleware/verifyAuth');

router.post('/login', validate(loginSchema, 'body'), login);
router.post('/signup', validate(registerSchema, 'body'), register);
router.delete('/delete', validate(deleteUser, 'body'), deleteuserModel);
router.patch('/updateUser', verifyAuth, updateUser);

module.exports = router;