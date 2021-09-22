import Main from './components/Main';

import Normalize from 'react-normalize'
import './styles/global.css'
import Cards from './components/Cards';

import Slider from './components/Slider';
import { AppContextProvider } from './context/appContext';

function App() {

  return (
    <>
    <Normalize/>
    <AppContextProvider>
      <Slider/>
      <Main/>
      <Cards/>
    </AppContextProvider>
    </>
  );
}

export default App;
