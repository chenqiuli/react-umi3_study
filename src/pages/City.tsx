import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { IndexBar, List } from 'antd-mobile';
import { IndexBarRef } from 'antd-mobile/es/components/index-bar';
import { connect, history } from 'umi';

type CityType = {
  title: string;
  items: any[];
};

function City(props: any) {
  const [cityList, setcityList] = useState<CityType[]>([]);

  const filterCities = (cities: any) => {
    // 遍历生成26个字母
    const letterArr: Array<string> = [];
    for (let i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i));
    }
    // console.log(letterArr);
    // 根据12个字母筛选出来，遍历为二维数组
    const barList = [];
    for (let i in letterArr) {
      const items = cities.filter(
        (ele: any) => ele.pinyin.slice(0, 1).toUpperCase() === letterArr[i],
      );
      items.length &&
        barList.push({
          title: letterArr[i],
          items,
        });
    }
    // console.log(barList);
    return barList;
  };

  useEffect(() => {
    axios('https://m.maizuo.com/gateway?k=6500062', {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.city.list',
      },
    }).then((res) => {
      // console.log(res.data.data.cities);
      const data = filterCities(res.data.data.cities);
      setcityList(data);
    });
  }, []);

  const indexBarRef = useRef<IndexBarRef>(null);

  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar ref={indexBarRef}>
        {cityList.map((group) => {
          const { title, items } = group;
          return (
            <IndexBar.Panel index={title} title={title} key={title}>
              <List>
                {items.map((item, index) => (
                  <List.Item
                    key={index}
                    onClick={() => {
                      props.dispatch({
                        type: 'city/changeState',
                        payload: {
                          cityName: item.name,
                          cityId: item.cityId,
                        },
                      });
                      history.goBack();
                    }}
                  >
                    {item.name}
                  </List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          );
        })}
      </IndexBar>
    </div>
  );
}

export default connect()(City);
