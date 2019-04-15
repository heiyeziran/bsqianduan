import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/commons/Home.vue'], resolve),
      meta: {title: '首页'},
      children:[{
        path: '/index',
        component: resolve => require(['../components/page/Index.vue'], resolve),
        meta: {title: '首页'}
      },{
        path:'/index/buy',
        component:resolve=> require(['../components/page/Buy.vue'],resolve),
        meta:{title:'买票'}
      }
      ,
        {
          //影片组件
          path:'/moive',
          component:resolve=>require(['../components/page/Moive.vue'],resolve),
          meta:{title:'影片'},
          children:[{
            path:'/movie',
            component:resovle=> require(['../components/module/ListOne.vue'],resovle),
            meta:{title:'热门排列'}
          },{
            path:'/movie/listtwo',
            component:resovle=> require(['../components/module/ListTwo.vue'],resovle),
            meta:{title:'评价排列'}
          }]
        },{
          //电影详情hot
          path:'/h/:id',
          component:resolve=>require(['../components/page/IntroductionHot.vue'],resolve),
          meta:{title:'电影详情'},
          children:[{
            path:'/h/:id/some',
            component:resolve=> require(['../components/module/Some.vue'],resolve),
            meta:{title:'简介'}
          },{
            path:'/h/:id/actors',
            component:resolve=> require(['../components/module/Actors.vue'],resolve),
            meta:{title:'演员'}
          },{
            path:'/h/:id/pics',
            component:resolve=> require(['../components/module/Pics.vue'],resolve),
            meta:{title:'图集'}
          }

          ]
        },{
          //电影详情coming
          path:'/c/:id',
          component:resolve=>require(['../components/page/IntroductionComing.vue'],resolve),
          meta:{title:'电影详情'},
          children:[{
            path:'/c/:id/some',
            component:resolve=> require(['../components/module/Some.vue'],resolve),
            meta:{title:'简介'}
          },{
            path:'/c/:id/actors',
            component:resolve=> require(['../components/module/Actors.vue'],resolve),
            meta:{title:'演员'}
          },{
            path:'/c/:id/pics',
            component:resolve=> require(['../components/module/Pics.vue'],resolve),
            meta:{title:'图集'}}]
        },{
          //电影详情all
          path:'/a/:id',
          component:resolve=>require(['../components/page/IntroductionAll.vue'],resolve),
          meta:{title:'电影详情'},
          children:[{
            path:'/a/:id/some',
            component:resolve=> require(['../components/module/Some.vue'],resolve),
            meta:{title:'简介'}
          },{
            path:'/a/:id/actors',
            component:resolve=> require(['../components/module/Actors.vue'],resolve),
            meta:{title:'演员'}
          },{
            path:'/a/:id/pics',
            component:resolve=> require(['../components/module/Pics.vue'],resolve),
            meta:{title:'图集'}}]

        },
        {
           //电影院
           path:'/cinema',
           component:resolve=> require(['../components/page/Cinema.vue'],resolve),
           meta:{title:'电影院'}
        },
        {
          //个人中心
          path:'/personmiddle',
          compontent:resolve=>require(['../components/page/PersonMiddle.vue'],resolve),
          meta:{title:'个人中心'}
        }
      ]
    }, {
      //登录
      path:'/sign_in',
      component: resolve =>require(['../components/page/Signin.vue'],resolve),
      meta:{title:'登陆'}
    },{
      //注册
      path:'/sign_up',
      component: resolve =>require(['../components/page/Signup.vue'],resolve),
      meta:{title:'注册'}
    }
  ]
})
