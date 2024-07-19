import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageProvider from './context/LanguageContext';
import LanguageServiceProvider from './context/LanguageContextService';
import LanguageServiceCardsProvider from './context/LanguageContextServiceCards';
import LanguageContactProvider from './context/LanguageContextContact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageContactProvider>
      <LanguageServiceProvider>
        <LanguageServiceCardsProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </LanguageServiceCardsProvider>
      </LanguageServiceProvider>

    </LanguageContactProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
