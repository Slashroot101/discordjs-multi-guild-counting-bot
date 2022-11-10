const db = require('../index');
const {Model, DataTypes} = require('sequelize');

class CountingServer extends Model {
    static associate(){

    }
}

CountingServer.init(
    {
        channelId:{
            type: DataTypes.STRING,
            unique: true,
        },
        currentNumber: {
            type: DataTypes.INTEGER,
        }
    },
    {
        paranoid: true,
        sequelize: db,
        modelName: 'CountingChannel',
    }
);

module.exports = CountingServer;