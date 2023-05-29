import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { history } from 'umi';

type List = {
  filmId: React.Key;
  name: String;
};

export default function NowPlaying() {
  const [list, setlist] = useState<List[]>([]);

  useEffect(() => {
    axios(
      'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=9780651',
      {
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list',
        },
      },
    ).then((res) => {
      // console.log(res.data.data.films);
      setlist(res.data.data.films);
    });
  }, []);

  return (
    <div>
      {list.map((item) => (
        <li
          key={item.filmId}
          onClick={() => {
            history.push(`/detail/${item.filmId}`);
          }}
        >
          {item.name}
        </li>
      ))}
    </div>
  );
}
