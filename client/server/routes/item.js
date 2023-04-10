const router = require("express").Router();
const { validate } = require('../middleware/validatonHandle');
const { verifyAuth, isAdmin } = require('./../middleware/verifyAuth');
const { itemSchema } = require('./../schemaValidation/item');
const { postItem, getMenu, deleteMenuItem } = require('./../controller/item');
const { deleteItem } = require("../schemaValidation/deleteItem");

router.post('/', validate(itemSchema, 'body'), verifyAuth, isAdmin, postItem);
router.get('/getmenu', getMenu);
router.delete('/', validate(deleteItem, 'body'), verifyAuth, isAdmin, deleteMenuItem);

module.exports = router;