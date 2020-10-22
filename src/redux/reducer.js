import {GETDATA,POSTDATA} from './actionTypes'
   
   const initState = {
      data:[],
      postMessage:''
   }
   
   const reducer = (state = initState, { type, payload }) => {
       switch (type) {
           case GETDATA: {
               console.log('getRequest',payload.data[0])
               return {
                   ...state,
                   data:payload.data,
               }
           }
           case POSTDATA: {
            return {
                ...state,
            }
        }
           default:
               return state
       }
   }
   
   
   export default reducer;