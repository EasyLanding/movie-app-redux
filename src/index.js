import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/reducer';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
)
