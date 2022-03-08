import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Header from './components/Header/header';

const App=()=> {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
