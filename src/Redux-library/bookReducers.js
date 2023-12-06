import { BORROW_BOOKS } from "./actiontypes";

const initialstate={
    NumberofBooks:200
}

const bookreducer=(state=initialstate, action)=>{
    switch(action.type){
        case BORROW_BOOKS:
            return{
                ...state,
                NumberofBooks:state.NumberofBooks-1
            }
            default:
                return state
    }
}
export default bookreducer;