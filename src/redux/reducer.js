import { GETDATA, POSTDATA, REPORTSDATA } from "./actionTypes";

const initState = {
  data: [],
  reportData: [],
  ages: [],
  postMessage: "",
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETDATA: {
      return {
        ...state,
        data: payload.data,
      };
    }
    case REPORTSDATA: {
        let ages = []
      if (payload) {
        let below18 = payload.data.filter((item) => item.data.age < 18);
        let below25 = payload.data.filter(
          (item) => item.data.age >= 18 && item.data.age <= 25
        )
        let above25 = payload.data.filter((item) => item.data.age > 25);
        ages = [below18.length, below25.length, above25.length];
      }
      return {
        ...state,
        reportData: payload.data,
        ages: ages,
      };
    }
    case POSTDATA: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
