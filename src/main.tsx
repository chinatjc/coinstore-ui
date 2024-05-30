import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { Link } from './coinstore-ui';

const container = document.getElementById('root');

const App = () => {
  return <Link href="http://baidu.com">go to baidu</Link>;
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
