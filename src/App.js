import { useState } from 'react';
import './App.css';
import DeleteButton from './components/DeleteButton';
import Header from './components/Header';
import Search from './components/Search';
import TweetList from './components/TweetList';

function App() {
  // Creamos los estados para asignar una lista de tweets a cargar
  const [tweets, setTweets] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Search tweets={tweets} setTweets={setTweets} />
      <main>
        <TweetList tweets={tweets} />
      </main>
      {/* Este es un boton que usaremos para eliminar la lista de tweets, estará en posición fixed */}
      <DeleteButton setTweets={setTweets} />
    </div>
  );
}

export default App;
