module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Projects", {
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      project_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 250]
        }
      },
      urgency: {
        type: DataTypes.STRING,
        defaultValue: "Low"
      },
      project_status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
      },
      due_date: {
          type: DataTypes.DATEONLY,
      },
      category: {
          type: DataTypes.STRING,
          defaultValue: "Personal"
      }
    });
    return Project;
  };