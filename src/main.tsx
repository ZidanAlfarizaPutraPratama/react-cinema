import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import aos from 'aos';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './App/store.ts';
import { persistStore } from 'redux-persist';

// Suspense Skeleton
import SuspenseContainer from './Containers/SuspenseContainers/SuspenseContainer.tsx'

// Importing CSS From Package
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

aos.init();
const persist = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <Suspense fallback={<SuspenseContainer />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
