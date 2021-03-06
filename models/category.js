const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String
    },
})

const Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategoryById = (id, callback) => {
    Category.findById(id, callback);
}

module.exports.addCategory = (newCategory, callback) => {
    newCategory.save(callback);
}

module.exports.removeCategoryById = (categoryId, callback) => {
    Category.deleteOne({'_id': categoryId}, callback);
}

module.exports.removeCategoryByName = (categoryName, callback) => {
    Category.deleteOne({'name': categoryName}, callback);
}
