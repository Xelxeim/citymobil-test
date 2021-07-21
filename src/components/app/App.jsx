import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Table from '../table';
import SearchField from '../search-field';
import InfoBlock from '../info-block/InfoBlock';

import './App.scss';

import apiInteractor from '../../services/api-interactor';

const App = () => {

  const data = apiInteractor.getData("https://city-mobil.ru/api/cars");
  console.log(data);


  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <section className="content">
          <SearchField />
          <Table />
          <InfoBlock />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
