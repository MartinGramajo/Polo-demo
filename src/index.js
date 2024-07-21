import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageProvider from './context/LanguageContext';
import LanguageServiceProvider from './context/LanguageContextService';
import LanguageContactProvider from './context/LanguageContextContact';
import { LanguageSupProvider } from './context/LanguageSupContext';
import LanguageComoTrabajamosProvider from './context/LanguageContextComoTrabajamos';
import LanguageBiografiaProvider from './context/LanguageContextBiografia';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageSupProvider>
      <LanguageContactProvider>
        <LanguageBiografiaProvider>
          <LanguageComoTrabajamosProvider>
            <LanguageServiceProvider>
              <LanguageProvider>
                <App />
              </LanguageProvider>
            </LanguageServiceProvider>
          </LanguageComoTrabajamosProvider>
        </LanguageBiografiaProvider>
      </LanguageContactProvider>
    </LanguageSupProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
