import axios from 'axios';
import React, { useState, useEffect } from 'react';

type MaoyanList = {
  nm: string;
  id: React.Key;
};

function Mine() {
  const [maoyanList, setmaoyanList] = useState<Array<MaoyanList>>([]);

  // 调用mock接口
  useEffect(() => {
    axios('/users').then((res) => {
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios(
      '/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4',
    ).then((res) => {
      console.log(res.data.data.hot);
      setmaoyanList(res.data.data.hot);
    });
  }, []);

  return (
    <div>
      Mine
      <ul>
        <div style={{ color: 'red' }}>猫眼电影如下：</div>
        {maoyanList.map((item) => (
          <li>{item.nm}</li>
        ))}
      </ul>
    </div>
  );
}

// 给Mine组件包裹上Auth父组件，做路由拦截
Mine.wrappers = ['@/wrappers/Auth'];
export default Mine;
