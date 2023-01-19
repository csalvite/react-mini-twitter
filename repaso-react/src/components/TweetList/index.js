import Tweet from '../Tweet';
import './style.css';

const TweetList = () => {
  return (
    <section id='tweet-list'>
      <ul>
        <Tweet username='manolo24' tweet='Limonada 🗿' />
        <Tweet username='manolo24' tweet='Esto es un tweet con mucho texto' />
      </ul>
    </section>
  );
};

export default TweetList;
