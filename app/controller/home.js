'use strict';

const { apiSuccess } = require('../extend/context');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res=await ctx.service.user.find(1);
    ctx.apiSuccess(res);
  }
}

module.exports = HomeController;