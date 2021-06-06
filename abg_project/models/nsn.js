  module.exports = (sequelize, Sequelize) => {

    const NSN = sequelize.define("nsn", {
        NAME: {
            type: Sequelize.STRING
        },
        FSC: {
            type: Sequelize.INT
        },
        NIIN: {
            type: Sequelize.INT
        }
    });
    return NSN;
    };