import { deletedatasuccess, updatedatasuccess,adddatasuccess,datasinglesuccess,datasuccess,failure,request,loginsuccess} from "./ActionTypes";
const initialstate = {
  isrequest: false,
  isauth: false,
  token: "",
  iserror: false,
  products:[],
  singledata:{},
  totallength:0
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case request:return {...state,isrequest:true}
    case datasuccess:return{...state,isrequest:false,products:action.payload,totallength:action.payload1}
    case datasinglesuccess:return{...state,isrequest:false,singledata:action.payload}
    case loginsuccess:return{...state,isrequest:false,isauth:true,token:action.payload}
    case adddatasuccess:return{...state,isrequest:false}
    case deletedatasuccess:return{...state,isrequest:false}
    case updatedatasuccess:return{...state,isrequest:false}
    case failure:return{...state,isrequest:false,iserror:true}
    default:
      return state;
  }
};
