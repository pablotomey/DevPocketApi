const Sequelize = require('sequelize');

const UserModel = require('./models/users');
const CategoryModel = require('./models/categories');
const SubcategoryModel = require('./models/subcategories');
const TecnologyModel = require('./models/tecnologies');

const sequelize = new Sequelize('devpocketdb','postgres','01485*', {
    host: 'localhost',
    dialect: 'postgresql',
    define: {
        timestamps: false
    }
});

const User = UserModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Subcategory = SubcategoryModel(sequelize, Sequelize);
const Tecnology = TecnologyModel(sequelize,Sequelize);

sequelize.sync({ force: false }).then( () => {
    console.log('Tablas sincronizadas');
});

module.exports = {
    User,
    Category,
    Subcategory,
    Tecnology
}