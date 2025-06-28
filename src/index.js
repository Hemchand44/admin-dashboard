import { registerLicense } from '@syncfusion/ej2-base';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense('Ngo9BigBOggjHTQxAR8/V1JEaF5cXmRCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXlceHVWR2BfWUd0V0VWYEk='); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);
