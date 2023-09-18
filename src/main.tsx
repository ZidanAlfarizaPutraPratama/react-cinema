import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import aos from 'aos';
import SuspenseContainer from './Containers/SuspenseContainers/SuspenseContainer.tsx'

// Importing CSS From Package
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

aos.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseContainer />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
