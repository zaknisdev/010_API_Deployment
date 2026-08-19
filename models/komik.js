module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        penulis_id: {
            type: DataTypes.INTEGER,
            allowNull: false,   
        }
    }, {
        tableName: 'komik',
        timestamps: true,
    });
    komik.associate = (models) => {
        komik.belongsTo(models.Penulis, {
            foreignKey: "penulis_id",
            as: "penulis"
        });
        komik.belongsToMany(models.Genre, {
            through: 'komik_genre',
            foreignKey: "komik_id",
            otherKey: "genre_id",
            as: "genres"
        });
    };
    return komik;
};
