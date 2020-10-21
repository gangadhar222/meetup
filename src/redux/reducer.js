import {GETDATA,POSTDATA} from './actionTypes'
   
   const initState = {
      data:[],
      postMessage:''
   }
   
   const reducer = (state = initState, { type, payload }) => {
       switch (type) {
           case GETDATA: {
               return {
                   ...state,
                   data:payload,
               }
           }
           case POSTDATA: {
               if(payload){
                   console.log(payload,"reducer")
               }
            return {
                ...state,
            }
        }
           default:
               return state
       }
   }
   
   
   export default reducer;