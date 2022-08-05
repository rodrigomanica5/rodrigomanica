import Header from './components/Header';
import About from './components/About';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './navContext'

function App() {

  return (
    <BrowserRouter>
      <MyProvider>
        <Header />
        <About />
        <ItemListContainer />
        <Footer />
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
