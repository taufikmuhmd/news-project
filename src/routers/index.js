const users = require('./users'); 
const category = require('./category'); 
const news = require('./news');

const routers = [
    ...users,
    ...category,
    ...news
]; 

const router = (arg) => {
    arg.use(routers);
};

module.exports = router;