const router = require("express").Router();
const { validate } = require('../middleware/validatonHandle');
const { verifyAuth, isAdmin } = require('./../middleware/verifyAuth');
const { postOrderSchema } = require('./../schemaValidation/postOrder');
const { getOrderSchema } = require('./../schemaValidation/getOrders');
const { statusSchema } = require('./../schemaValidation/orderStatus');
const { postOrders, getOrders, orderStatus } = require('./../controller/order');


router.post('/', validate(postOrderSchema, 'body'), verifyAuth, postOrders);
router.get('/:status', validate(getOrderSchema, 'query'), verifyAuth, getOrders);
router.put('/:status', validate(statusSchema, 'all'), verifyAuth, isAdmin, orderStatus);

module.exports = router;