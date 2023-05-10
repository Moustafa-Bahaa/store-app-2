import { memo } from 'react';
import './App.css';
import Table from './components/table-container/table';
import "./styles/shared.css"
function App() {
  return (
    <div className="App">
     <Table/>
    </div>
  );
}

export default memo(App)
