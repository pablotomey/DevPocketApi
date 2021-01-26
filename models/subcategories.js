module.exports = (sequelize, type) => {
    return sequelize.define('subcategory', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        category: {
            type: type.INTEGER,
            references: {
                model: 'categories',
                key: 'id',
                deferrable: type.Deferrable.INITIALLY_INMEDIATE
            }
        }
    })
}