const mongoose = require('mongoose');
const addNewSchema = new mongoose.Schema ({
    judul: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
            type: String,
            required: true
    },
    category: {
            type: String,
            required: true
    }
});
const News = mongoose.model('News', addNewSchema);

module.exports = News;