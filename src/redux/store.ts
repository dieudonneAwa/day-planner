import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { persistConfig, reducer, storeInitialState, StoreState } from './reducer';

let store: Store<PersistPartial, any> | undefined;

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState: any = storeInitialState) {
  return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware()));
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
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: StoreState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
