import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TweetList from './components/TweetList';

function App() {
  // Creamos los estados para asignar una lista de tweets a cargar
  const [tweets, setTweets] = useState([
    {
      id: 1,
      username: 'manolo12',
      tweet: 'Limonada 🗿',
    },
    {
      id: 2,
      username: 'carola',
      tweet: 'Esto de pelear no me la sé',
    },
    {
      id: 3,
      username: 'ibai',
      tweet:
        'Qué pasa gente, hoy no habrá directo, estoy organizando la velada del año 3',
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <Search tweets={tweets} setTweets={setTweets} />
      <main>
        <TweetList tweets={tweets} />
      </main>
    </div>
  );
}

export default App;
