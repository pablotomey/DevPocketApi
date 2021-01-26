module.exports = (sequelize, type) => {
    return sequelize.define('tencology' , {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        description: type.STRING,
        image: type.STRING,
        category: {
            type: type.INTEGER,
            references: {
                model: 'categories',
                key: 'id',
                deferrable: type.Deferrable.INITIALLY_INMEDIATE
            }
        },
        subcategory: {
            type: type.INTEGER,
            references: {
                model: 'subcategories',
                key: 'id',
                deferrable: type.Deferrable.INITIALLY_INMEDIATE
            }
        }
    })
}