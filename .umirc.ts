import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  // hash模式配置
  history: {
    type: 'browser',
  },
  // 配置反向代理
  proxy: {
    '/api': {
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    },
  },
  // 关掉默认的antd集成组件库，使用自己安装的antd版本
  antd: {
    mobile: false,
  },
});
