import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TweetList from './components/TweetList';

function App() {
  return (
    <div className='App'>
      <Header />
      <Search />
      <main>
        <TweetList />
      </main>
    </div>
  );
}

export default App;
