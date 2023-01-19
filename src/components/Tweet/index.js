import './style.css';

const Tweet = ({ username, tweet }) => {
  return (
    <li className='tweet'>
      {/* <img src='' alt='' /> */}
      <h2>{username}</h2>
      <p>{tweet}</p>
    </li>
  );
};

export default Tweet;
