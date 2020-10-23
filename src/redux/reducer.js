import { GETDATA, POSTDATA, REPORTSDATA } from "./actionTypes";

const initState = {
  data: [],
  reportData: [],
  ages: [],
  professionalsCount: 0,
  studentsCount: 0,
  averageTeamSize: 0,
  locations: null,
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
      let ages = [];
      let studentsCount,
        professionalsCount,
        averageTeamSize,
        locations;
      if (payload) {
        let below18 = payload.data.filter((item) => item.data.age < 18);
        let below25 = payload.data.filter(
          (item) => item.data.age >= 18 && item.data.age <= 25
        );
        let temp = payload.data;
        let above25 = temp.filter((item) => item.data.age > 25);
        ages = [below18.length, below25.length, above25.length];
        let arr = temp.filter((item) => item.data.profession === "student");
        studentsCount = arr.length;
        professionalsCount = temp.length - arr.length;
        let sum = 0;
        let obj = {}
        for (let i = 0; i < temp.length; i++) {
          sum += Number(temp[i].data.guests);
          if (temp[i].data.location in obj) {
            obj[temp[i].data.location]++;
          } else {
            obj[temp[i].data.location] = 1;
          }
        }
        locations = obj
        averageTeamSize = Math.ceil(sum / temp.length);
      }

      return {
        ...state,
        reportData: payload.data,
        ages: ages,
        studentsCount: studentsCount,
        professionalsCount: professionalsCount,
        averageTeamSize: averageTeamSize,
        locations:locations
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
