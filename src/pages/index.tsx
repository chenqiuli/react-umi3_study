import React from 'react';
import { Redirect } from 'umi';

export default function index() {
  // 重定向到films页面
  return <Redirect from="/" to="/films" />;
}
