const express = require('express');
const { News, Users, Category } = require('../../models');
// const { message } = require('../../schema/users/loginSchema');
// const { addCategorySchema } = require('../../schema');
const router = express.Router();



const getData = async (id, model) => {
    const result = await model.findById(id).select('-password')
    return result;
}

router.get('/get/news', async (req, res) => {
try {
    const result = await News.find({});
    const promises = await Promise.all(result.map(async el =>{
        return {
            judul: el.judul,
            content: el.content,
            author: await getData(el.author, Users),
            category: await getData(el.author, Category),
        }
        }));
    res.send(promises);
    
} catch(e) {
    res.send({ message: e.message });
}
});
module.exports = router;