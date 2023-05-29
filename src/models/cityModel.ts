import { Action, MState } from '../utils/state';

export default {
  namespace: 'city',

  state: {
    cityName: '北京',
    cityId: 110100,
  },
  // 同步更新state
  reducers: {
    changeState: (prevState: MState, action: Action) => {
      return {
        ...prevState,
        cityName: action.payload.cityName,
        cityId: action.payload.cityId,
      };
    },
  },
};
