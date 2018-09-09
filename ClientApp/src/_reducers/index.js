import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

import { gridProducts, typeOfBusiness } from './filtered.reducer';
import { trackingTransport } from './trackingtransport.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  gridProducts,
  typeOfBusiness,
  trackingTransport
});

export default rootReducer;