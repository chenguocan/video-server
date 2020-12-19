'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE,ENUM,TEXT } = app.Sequelize;

  const User = app.model.define('users',{
    id:{
      type:INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    username:{
      type:STRING(30),
      allowNull:false,
      defaultValue:'',
      comment:'用户名',
      unique:true, 
    },
    nickname:{
      type:STRING(50),
      allowNull:false,
      defaultValue:'',
      comment:'昵称'
    },
    password:{
      type:STRING(20),
      allowNull:false,
      defaultValue:'',
      comment:'密码'
    },
    email:{
      type:STRING(200),
      allowNull:false,
      defaultValue:'',
      comment:'邮箱'
    },
    avatar:{
      type:STRING,
      allowNull:true,
      defaultValue:'',
      comment:'头像'
    },
    phone:{
      type:STRING(11),
      allowNull:false,
      defaultValue:'',
      comment:'电话号码'
    },
    gender:{
      type:ENUM,
      values:['男','女','保密'],
      defaultValue:'男',
      allowNull:false,
      comment:'性别',
    },
    desc:{
      type:TEXT,
      allowNull:true,
      defaultValue:'',
      comment:'个性签名',
    },
    created_time:DATE,
    updated_time:DATE,
  });

  return User;
};