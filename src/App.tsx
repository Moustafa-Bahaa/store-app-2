import { memo } from 'react';
import './App.css';
import Store from './components/store';
import "./styles/shared.css"
function App() {
  return (
    <div className="App">
     <Store/>
    </div>
  );
}

export default memo(App)
