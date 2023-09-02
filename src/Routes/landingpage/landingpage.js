import './landingpage.css'
import Navbar from './navbar';

const Landingpage = () => {

  return ( 
    <div className="fullLaningPage">
      <Navbar />
      <div className="About_Section">
        <p className="aboutInfo">Welcome to BookSwap Hub - Your Community for Literary Adventures!</p>
        <p className="aboutTitle">About Us</p>
        <div className="ourStoryContainer">
          <p className="ourStory">At BookSwap Hub, we believe that every book has a story, and every reader has a treasure waiting to be discovered. Our journey began with a shared love for books and a passion for fostering connections within our local communities. We envisioned a platform where book lovers could come together, exchange stories, and build lasting friendships through the magic of reading.</p>
        </div>
      </div>
    </div>
  
  );
}
 
export default Landingpage;