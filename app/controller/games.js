'use strict';

const gamesArr = [
  {
    id: 1,
    title: '2020年比赛',
    children: [
      {
        id: 1,
        title: '2020年半场',
        startTime: '2020年01月',
        endTime: '2020年12月',
      },
      {
        id: 2,
        title: '2020年全明星赛',
        startTime: '2020年07月',
        endTime: '2020年10月',
        projects: '技巧挑战赛、投篮大赛、三分大赛、全明星正赛',
      },
    ],
  },
  {
    id: 2,
    title: '2019年比赛',
    children: [
      {
        id: 3,
        title: '2019年全明星赛',
        startTime: '2019年02月23日',
        endTime: '2019年03月02日',
        projects: '技巧挑战赛、投篮大赛、三分大赛、全明星正赛',
      },
      {
        id: 4,
        title: '2019年春季赛',
        startTime: '2019年03月09日',
        endTime: '2019年05月25日',
        projects: '七场四胜',
      },
      {
        id: 5,
        title: '2019年夏季赛',
        startTime: '2019年05月27日',
        endTime: '2019年07月08日',
        projects: '七场四胜',
      },
      {
        id: 6,
        title: '2019年夏季联赛',
        startTime: '2019年07月15日',
        endTime: '2019年09月09日',
      },
      {
        id: 7,
        title: '2019年半场',
        startTime: '2019年01月',
        endTime: '2019年12月',
      },
    ],
  },
  {
    id: 3,
    title: '2018年比赛',
    children: [
      {
        id: 8,
        title: '2018年全明星',
        startTime: '2018年03月03日',
        endTime: '2020年03月10日',
        projects: '技巧挑战赛、投篮大赛、三分大赛、全明星正赛',
      },
      {
        id: 9,
        title: '2018年春季赛',
        startTime: '2020年03月17日',
        endTime: '2020年05月26日',
        projects: '2018年03月17日开始春季赛',
      },
      {
        id: 10,
        title: '2018年夏季争霸赛',
        startTime: '2020年06月09日',
        endTime: '2020年07月07日',
        projects: '四个队伍，每队4-6人，半场7个球，惩罚：俯卧撑',
      },
      {
        id: 11,
        title: '2018年夏季联赛',
        startTime: '2020年07月21日',
        endTime: '2020年08月25日',
      },
      {
        id: 12,
        title: '2018年秋季联赛',
        startTime: '2020年08月25日',
        endTime: '2020年09月30日',
      },
      {
        id: 13,
        title: '2018年秋季赛',
        startTime: '2020年10月13日',
        endTime: '2020年11月24日',
      },
      {
        id: 14,
        title: '2018年冬季赛',
        startTime: '2020年12月01日',
        endTime: '2020年12月31日',
      },
    ],
  },
  {
    id: 4,
    title: '2017年比赛',
    children: [
      {
        id: 15,
        title: '2017年夏季赛',
        startTime: '2020年05月20日',
        endTime: '2020年07月15日',
        projects: '2017年夏季赛，“早起，啪啪啪”篮球群，首次组织全场比赛',
      },
      {
        id: 16,
        title: '2017年全明星赛',
        startTime: '2017年07月22日',
        endTime: '2017年07月22日',
        projects: '四个项目：一、技巧挑战赛，二、投篮大赛，三、三分大赛，四、全明星赛',
      },
      {
        id: 17,
        title: '2017年友谊赛',
        startTime: '2017年07月29日',
        endTime: '2017年07月29日',
        projects: '放松式全场比赛',
      },
      {
        id: 18,
        title: '2017年夏季联赛',
        startTime: '2017年08月05日',
        endTime: '2017年08月26日',
        projects: '2017夏季联赛，采用全场模式，循环进行比赛，比赛强度不大',
      },
      {
        id: 19,
        title: '2017年秋季赛',
        startTime: '2017年09月02日',
        endTime: '2017年10月28日',
        projects: '七场四胜制',
      },
      {
        id: 20,
        title: '2017年冬季争霸赛',
        startTime: '2017年01月',
        endTime: '2017年12月',
        projects: '分四个队伍，采用争霸方式进行半场比赛',
      },
    ],
  },
];

const Controller = require('egg').Controller;

class GamesController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = gamesArr;
  }
}

module.exports = GamesController;
