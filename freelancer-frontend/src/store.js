import { combineReducers } from 'redux';
import authReducer from './reducer/login';
import profileReducer from './reducer/profile';
import signUpReducer from './reducer/signup';
import add_project from "./reducer/add_project";
import projectReducer from "./reducer/project";

const rootReducer = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    signup:signUpReducer,
    addProject:add_project,
    project:projectReducer
});

export default rootReducer;