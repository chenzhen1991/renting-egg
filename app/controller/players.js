'use strict';

const playersArr = [
  {
    id: 1,
    name: '凌路',
    position: [ '中锋', '前锋' ],
    headPic: 'http://tp5.luluct.cn/static/basketball/images/linglu00.jpg',
    num: '06',
    good: [ '篮板', '防守' ],
  },
  {
    id: 2,
    name: '邹智睿',
    headPic: 'http://tp5.luluct.cn/static/basketball/images/lanqiu00.jpg',
    num: '03',
    good: [ '组织', '控球', '中投', '突破' ],
    slogan: '爱篮球 爱运动',
  },
  {
    id: 3,
    name: '陈晨',
    headPic: 'http://tp5.luluct.cn/static/basketball/images/chenchen00.jpg',
    num: '03',
    good: [ '组织', '控球', '中投', '突破' ],
  },
  {
    id: 4,
    name: '陈学伟',
    headPic: 'http://tp5.luluct.cn/static/basketball/images/lanqiu00.jpg',
    num: '02',
    good: [ '防守' ],
  },
];

const Controller = require('egg').Controller;

class PlayersController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = playersArr;
  }
}

module.exports = PlayersController;
