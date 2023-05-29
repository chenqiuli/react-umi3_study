import React from 'react';
import { Redirect, useLocation } from 'umi';

export default function Films(props: any) {
  // 路由重定向
  const location = useLocation();
  if (location.pathname === '/films' || location.pathname === '/films/') {
    return <Redirect from="/films" to="/films/nowplaying" />;
  }

  return (
    <div>
      <div style={{ height: '200px' }}>大轮播</div>
      {/* 嵌套路由 */}
      {props.children}
    </div>
  );
}
