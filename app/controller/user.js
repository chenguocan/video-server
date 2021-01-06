'use strict';

const { apiSuccess } = require('../extend/context');

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx,app } = this;
    ctx.validate({
      username:{
        type:'string',
        required:true,
        desc:'用户名'
      },
      password:{
        type:'string',
        required:true,
        desc:'密码'
      },
      repassword:{
        type:'string',
        required:true,
        desc:'确认密码'
      }
    })
    let {username,password,repassword}=ctx.request.body;
    if(password!==repassword){
       ctx.throw(400,'请确认密码是否一致');
    }
    let res=await ctx.service.user.find(username)
    if(!res){
      let register=await ctx.service.user.register({username,password});
      if(register){
        ctx.apiSuccess(register,'注册成功');
      }else{
        ctx.body={
          status:200,
          errMsg:'注册失败'
        }
      }
    }else{
      ctx.body={
        status:400,
        errMsg:'注册用户已存在'
      }
    }
  }
}

module.exports = UserController;
