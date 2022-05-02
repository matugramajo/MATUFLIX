import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
      title="ORIGINALES DE MATUFLIX" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow={true}
      />
      <Row title="Tendencias" fetchUrl={requests.fetchTrending} />
      <Row title="Mas Vistas" fetchUrl={requests.fetchTopRated} />
      <Row title="Acción" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentales" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
