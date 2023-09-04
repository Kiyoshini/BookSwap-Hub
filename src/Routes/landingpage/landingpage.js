import './landingpage.css'
import Navbar from './navbar';

const Landingpage = () => {

  return ( 
    <div className="fullLaningPage">
      <Navbar />
      <div className="About_Section_Container">
        <div className="About_Section_Section_Text_Container">
          <p className="aboutTitle_First">Building a Community of Readers</p>
          <p className="aboutTitle_Second">Connecting Readers with Shared Interests</p>
          <p className="aboutTitle_Third">Promoting Sustainable Reading</p>
          <p className="ourStory">At BookSwap Hub, we believe that every book has a story, and every reader has a treasure waiting to be discovered. </p>
          <button className="startConnecting_Button">
            Start Connecting
          </button>
        </div>
        <img className='bookCover_image' src="/Images/Landingpage/ba030f2144b392a5ecf6b521795e22f4.png" alt="" />
      </div>
      <div className="ourMisson_Section">
        <img src="/Images/Landingpage/handingBooks_over.png" alt="" className="handingBooks_over" />
        <p>Our mission is simple - to connect book lovers like you with others who share your passion for the written word. Whether you're a seasoned bibliophile or a casual reader, BookSwap Hub is your gateway to a vibrant community of fellow enthusiasts.</p>
      </div>
    </div>
  );
}
 
export default Landingpage;