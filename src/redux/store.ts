import { useMemo } from 'react';
import { createStore, applyMiddleware, Store, combineReducers, AnyAction } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig, reducer, taskInitialState, TaskState } from './reducer';
import { Persistor } from 'redux-persist/es/types';

let store: Store<any, AnyAction> | undefined;

const isClient = typeof window !== 'undefined';

export interface StoreState {
  myTasks: TaskState;
}

export const storeInitialState: StoreState = {
  myTasks: taskInitialState,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const rootReducer = combineReducers({
  myTasks: persistedReducer,
});

function makeStore(initialState: any = storeInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState: StoreState | undefined) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (!isClient) return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: StoreState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  let persistor: Persistor;
  persistor = persistStore(store as Store<any, AnyAction>, {}, () => {});
  return { store, persistor };
}
