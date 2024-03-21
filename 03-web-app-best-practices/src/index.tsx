import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);
