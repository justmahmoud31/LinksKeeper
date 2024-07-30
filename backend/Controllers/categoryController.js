const Category = require('../Models/category.js');
const CategorySchema = require('../Validators/CategoryValidator.js');
const addDirectory = async (req, res) => {
    try {
        const { userid } = req.params;
        const { error } = CategorySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ "Status": "Error", "Message": error.details[0].message });
        }
        const { categoryname } = req.body;
        const category = await Category.create({
            userId: userid,
            categoryname: categoryname
        });

        res.status(201).json({ "Status": "Created", "Message": "Category has been added", "data": category });

    } catch (err) {
        return res.status(500).json({ "Status": "Error", "Message": err.message });
    }
};

module.exports = { addDirectory }