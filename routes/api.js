const router = require('express').Router();

const userRoute = require('./api/users');
//const tecnologyRoute = require('./api/tecnologies');
//const subcategoryRoute = require('./api/subcategories');
//const categoryRoute = require('./api/categories');


router.use('/users', userRoute);
//router.use('tecnologies', tecnologyRoute);
//router.use('/categories', categoryRoute);
//router.use('/subcategories', subcategoryRoute);


module.exports = router;