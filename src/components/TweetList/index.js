import Tweet from '../Tweet';
import './style.css';

const TweetList = ({ tweets }) => {
  console.log('Lista de tweets: ', tweets);

  return (
    <section id='tweet-list'>
      <h2>Lista de Tweets</h2>
      <ul>
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              username={tweet.username}
              tweet={tweet.tweet}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TweetList;
