import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  errorsCount: number;
  promoFilm: {
    title: string;
    genre: string;
    releaseDate: string;
  };
}

function App({errorsCount, promoFilm}: AppScreenProps): JSX.Element {
  return <MainPage errorsCount={0} promoFilm={promoFilm} />;
}

export default App;
