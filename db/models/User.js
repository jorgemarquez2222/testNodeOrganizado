import express from 'express'
import db from '../connection.js'
import { Sequelize, DataTypes, Op } from 'sequelize'

export const User = db.sequelize.define('user', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  });

