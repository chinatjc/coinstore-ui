import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { Button } from './coinstore-ui';

const container = document.getElementById('root');

const App = () => {
  return <Button className='wer' type="danger">Button</Button>;
};

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  throw new Error('[src/main]: cannot found container dom!');
}
