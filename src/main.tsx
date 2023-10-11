import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
//
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
      {/* </BrowserRouter> */}
    </Provider>
  </HelmetProvider>
);
