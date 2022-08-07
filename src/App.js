import Header from './components/Header';
import About from './components/About';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './navContext'
import Contact from './components/Contact';

function App() {

  return (
    <BrowserRouter>
      <MyProvider>
        <Header />
        <About />
        <ItemListContainer />
        <Contact/>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
