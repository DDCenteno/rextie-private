import { combineReducers } from 'redux'
import ConverterReducers from './converter-reducer'
import UserReducers from './user-reducer'



const rootReducer = combineReducers({
  
    isChange: ConverterReducers,
    isUser : UserReducers,
    


});

export default rootReducer;