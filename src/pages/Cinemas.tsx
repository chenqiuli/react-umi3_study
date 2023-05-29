import React, { useEffect } from 'react';
import { connect, history } from 'umi';
import { SearchOutline } from 'antd-mobile-icons';
import { NavBar, DotLoading } from 'antd-mobile';
import { CinemaItem } from '@/utils/state';

function Cinemas(props: any) {
  console.log(props, 'props');
  const { cityName, cityId, list, loading } = props;

  useEffect(() => {
    if (list.length) {
      console.log('缓存');
    } else {
      props.dispatch({
        type: 'cinema/getCinemaList',
        payload: {
          cityId,
        },
      });
    }
  }, []);

  return (
    <div>
      <NavBar
        back={cityName}
        onBack={() => {
          history.push('/city');
          props.dispatch({
            type: 'cinema/clearModel',
          });
        }}
        backArrow={false}
        right={<SearchOutline />}
      >
        标题
      </NavBar>
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <DotLoading />
        </div>
      )}
      <ul>
        <p>影院数据如下：</p>
        {list.map((item: CinemaItem) => {
          return <li key={item.cinemaId}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (allModels: any) => {
  // console.log(allModels);
  return {
    a: 1,
    cityName: allModels.city.cityName,
    list: allModels.cinema.list,
    cityId: allModels.city.cityId,
    loading: allModels.loading.global, // dva-loading插件自动集成
  };
};

export default connect(mapStateToProps)(Cinemas);
