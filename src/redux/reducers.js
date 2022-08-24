import * as loginReducer from './features/auth/loginSlice';
const reducers= {
  login:loginReducer.default.loginReducer,
}

export default reducers