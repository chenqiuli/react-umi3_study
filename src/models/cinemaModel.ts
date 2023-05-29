import axios from 'axios';
import { Action, CinemaList } from '../utils/state';

export default {
  namespace: 'cinema',
  state: {
    list: [],
  },
  // 异步更新state
  effects: {
    *getCinemaList(action: Action, { call, put }: any): any {
      const res = yield call(fetchList, action.payload.cityId); // 调用请求，call后面返回一个promise对象，第二个参数是传递给fetchList的
      // 同步给reducers更新state
      yield put({
        type: 'save',
        payload: res,
      });
    },
  },
  // 同步更新state
  reducers: {
    save: (prevState: CinemaList, action: Action) => {
      return { ...prevState, list: action.payload };
    },

    clearModel: (prevState: CinemaList, action: Action) => {
      return { ...prevState, list: [] };
    },
  },
};

async function fetchList(cityId: number) {
  const res = await axios({
    url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=2906283`,
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"310100"}',
      'X-Host': 'mall.film-ticket.cinema.list',
    },
  });
  return res.data.data.cinemas;
}
