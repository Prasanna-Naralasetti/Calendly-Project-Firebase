import { createStore, combineReducers, applyMiddleware,compose } from 'redux'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import fbConfig from '../../src/config/fbConfig'
import {firestoreReducer} from 'redux-firestore'
import authReducer from '../reducers/authReducer'
import eventReducer from '../reducers/eventReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      event: eventReducer,
      firestore:firestoreReducer
    }),
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // reactReduxFirebase(fbConfig),
       reduxFirestore(fbConfig)
    )
  );
  return store
}

export default configureStore