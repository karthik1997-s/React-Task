const initalState={
      
        users:[],
        loggedinuser:null,
}
const LoginReducer=(state=initalState,action)=>{
        switch(action.type){
                case 'LOGIN':
                        return{
                               ...state,
                               users:[...state.users,action.payload] 
                        }
                        default:
                                return state;

        }
}
export default LoginReducer;