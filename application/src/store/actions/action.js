export const ADD = (item) => {
        return {
                type: "ADD_CART",
                payload: item,
        }

}
export const LOGIN =(userdetails)=>
{
        return{
                type:'LOGIN',
                payload:userdetails,
        }
}
