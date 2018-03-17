'use strict';

module.exports = (sequelize, DataTypes) => {
    var Profile = sequelize.define('Profile', {
        phone: {
            type:DataTypes.STRING,
            validate:{
                isMobilePhone:true
            }
        },
        image: {
            type:DataTypes.STRING,
            defaultValue:"profile.png"
        },
        about:{
            type:DataTypes.STRING,
        },
        name:{
            type:DataTypes.STRING
        }

    }, {

    });

    Profile.associate = function(models) {
       Profile.belongsTo(models.User,{as:'puser'});
    };


    return Profile;
};

