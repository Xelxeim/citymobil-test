import './App.scss';
import apiInteractor from '../../services/api-interactor';

const App = () => {

  const data = apiInteractor.getData("https://city-mobil.ru/api/cars");

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
