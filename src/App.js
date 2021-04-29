import './App.css';
import { i18n } from './translate/i18n'
// https://www.youtube.com/watch?v=5p9EMWwieyo

function App() {
  return (
    <div className="App">
      <h1>{i18n.t('titles.app')}</h1>
      <p>{i18n.t('messages.itWorks')}</p>
      <button>{i18n.t('buttons.save')}</button>
      <small>{i18n.t('messages.smallText')}</small>
    </div>
  );
}

export default App;
