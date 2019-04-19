const express = require('express');
const Router = express.Router();

const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const listRouter = require('./list');



// 格式化传入的参数
// req.query
// Router.use(bodyParser.json(),bodyParser.urlencoded({ extended: false }));
Router.use(express.json(),express.urlencoded({ extended: false }));

// 配置路由信息
// 商品
Router.use('/goods',goodsRouter);
Router.use('/cart',cartRouter);
Router.use('/list',listRouter);

module.exports = Router;
