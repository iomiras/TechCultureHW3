// import './App.scss';
import logo from './content/logo.png';
import star from './content/star.png';
import cooperation from './content/cooperation.png';
import experience from './content/experience.png';
import goal1 from './content/goal1.png';
import goal2 from './content/goal2.png';
import goal3 from './content/goal3.png';
import temirlan from './content/members/Temirlan.jpeg'
import aisultan from './content/members/Aisultan.jpg'
import aslan from './content/members/Aslan.jpg'
import azamat from './content/members/Azamat.jpg'
import kir from './content/members/Kir.jpg'
import yessenkhan from './content/members/Yessenkhan.jpg'
import kostas from './content/advisors/kostas.png'
import atakan from './content/advisors/atakan.png'
import spitas from './content/advisors/spitas.png'
import ig from './content/ig.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="motto-holder">

        <header>
          <img alt='logo' className='logo' src={logo}></img>
          <a href="#footer"><button className='contact-us-1'>Contact us</button></a>
        </header>

        <div className='motto'>
          <h1 className='motto-text'>Start, Accelerate <br /> and <span className='emphasis'>Never Stop</span></h1>
          <p className='sub-motto'>First Formula SAE team in KZ</p>
          <a href="#footer"><button className='contact-us-2'>Contact us</button></a>
        </div>

      </div>

      {/* Vision and mission */}
      <br />
      <div className='vision-and-mission-holder'>
        <h2 className='title'>Vision and Mission</h2>
        <div className='missions-holder'>

          <div className='mission-item'>
            <img className='mission-logo-holder' alt='star' src={star}></img>
            <h3 className='mission-title'>First FSAE in KZ</h3>
            <p className='mission-description'>Develop engineering community in KZ via motor racing.</p>
          </div>

          <div className='mission-item'>
            <img className='mission-logo-holder' alt='experience' src={experience}></img>
            <h3 className='mission-title'>Experience exchange</h3>
            <p className='mission-description'>Exchange experience with Kazakh universities and raise industry-ready engineers.</p>
          </div>

          <div className='mission-item'>
            <img className='mission-logo-holder' alt='cooperation' src={cooperation}></img>
            <h3 className='mission-title'>Cooperation</h3>
            <p className='mission-description'>Become a bridge between Kazakh and foreign competitive engineers.</p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <br />
      <div className='goals-holder'>
        <h2 className='title'>Goals</h2>

        <div className='goal-holder'>
          <div className='goal-text'>
            <p className='goal-tag tag-global'>GLOBAL</p>
            <h2 className='goal-title'>Participate in FSAE</h2>
            <p className='goal-description'>Enter the top 30 in the Formula Student Competition competition in 5 years</p>
          </div>
          <img className='goal-image' alt='formula sae logo' src={goal1}></img>
        </div>

        <div className='goal-holder' style={{ 'flex-direction': 'row-reverse' }}>
          <div className='goal-text'>
            <p className='goal-tag tag-local'>LOCAL</p>
            <h2 className='goal-title'>Formula car</h2>
            <p className='goal-description'>Build the first formula car in Central Asia</p>
          </div>
          <img className='goal-image' alt='formula 1 car' src={goal2}></img>
        </div>

        <div className='goal-holder'>
          <div className='goal-text'>
            <p className='goal-tag tag-local'>LOCAL</p>
            <h2 className='goal-title'>Heritage</h2>
            <p className='goal-description'>Leave long lasting sustainable heritage</p>
          </div>
          <img className='goal-image' alt='our team' src={goal3}></img>
        </div>
      </div>

      {/* Events */}
      <br />
      <div className='events-holder'>
        <h2 className='title'>Events</h2>

        <div className='events'>
          <div className='static-event-holder'>
            <h2 className='event-name'>Static event</h2>
            <p className='event-description'>Design Event: which consists in the presentation of the completed project of the car.<br /> Business Event: which consists in a simulation of the presentation of their project and Cost Event</p>
            <a href="https://www.formula-ata.it/static-events/">
              <button onClick={"location.href='https://google.com"} className='btn-what-is-it'>What is it?</button>
            </a>
          </div>

          <div className='dynamic-event-holder'>
            <h2 className='event-name'>Dynamic event</h2>
            <p className='event-description'>Acceleration, Skid Pad, Autocross, Endurance and Trackdrive events</p>
            <a href="https://www.formula-ata.it/dynamic-events/">
              <button onClick={"location.href='https://google.com"} className='btn-what-is-it'>What is it?</button>
            </a>
          </div>
        </div>

      </div>

      {/* Team Members */}
      <br />
      <div className='members-holder'>
        <h2 className='title'>Team members</h2>
        <div className='profiles-holder'>
          <div className='profile'>
            <img className='photo' alt='temirlan' src={temirlan}></img>
            <h3 className='name'>Temirlan Sarbupin</h3>
            <p className='role'>Team Leader</p>
          </div>

          <div className='profile'>
            <img className='photo' alt='aisultan' src={aisultan}></img>
            <h3 className='name'>Aisultan Kaipiyev</h3>
            <p className='role'>Managment Head</p>
          </div>

          <div className='profile'>
            <img className='photo' alt='aslan' src={aslan}></img>
            <h3 className='name'>Aslan Sabyrov</h3>
            <p className='role'>Propulsion Head</p>
          </div>

          <div className='profile'>
            <img className='photo' alt='azamat' src={azamat}></img>
            <h3 className='name'>Azamat Malgazhdar</h3>
            <p className='role'>Chassis/<br />Aerodynamics Head</p>
          </div>

          <div className='profile'>
            <img className='photo' alt='yessenkhan' src={yessenkhan}></img>
            <h3 className='name'>Yessenkhan Dildabek</h3>
            <p className='role'>Grounded Low Voltage Head</p>
          </div>

          <div className='profile'>
            <img className='photo' alt='kir' src={kir}></img>
            <h3 className='name'>Kir Smolyarchuk</h3>
            <p className='role'>Suspension Head</p>
          </div>
        </div>

      </div>

      {/* Advisors */}
      <br />
      <div className='members-holder'>
        <h2 className='title'>Advisors</h2>
        <div className='profiles-holder'>

          <div className='ad-profile'>
            <img className='ad-photo' alt='spitas' src={spitas}></img>
            <h3 className='name'>Christos Spitas</h3>
            <p className='ad-role'>Associate Professor Mechanical &
              Aerospace engineering</p>
          </div>

          <div className='ad-profile'>
            <img className='ad-photo' alt='atakan' src={atakan}></img>
            <h3 className='name'>Huseyin Atakan</h3>
            <p className='ad-role'>Chair & Professor
              Robotics Engineering</p>
          </div>

          <div className='ad-profile'>
            <img className='ad-photo' alt='kostas' src={kostas}></img>
            <h3 className='name'>Konstantinos Kostas</h3>
            <p className='ad-role'>Associate Professor Mechanical &
              Aerospace engineering</p>
          </div>
        </div>

      </div>

      {/* Sponsor levels */}
      <br />
      <div className='sponsor-levels-holder'>
        <h2 className='title'>Sponsor levels</h2>
        <div className='sponsor-levels-container'>

          <div className='sponsor-levels-card'>
            <h3 className='sponsor-title'>Titanium</h3>
            <ul>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Large company logo on car</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Website logo display</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Presentation time at team meetings</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Access to visit team shop</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Access to team recruitment email</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Team and car footage access</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>Central area on car</li>
              <li className='sponsor-pr sponsor-on'><span className='tick tick-on'>✔</span>T-shirt logo display</li>
            </ul>
          </div>

          <div className='sponsor-levels-card'>
            <h3 className='sponsor-title'>Gold</h3>
            <ul>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Large company logo on car</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Website logo display</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Presentation time at team meetings</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to visit team shop</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to team recruitment email</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Team and car footage access</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>Central area on car</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>T-shirt logo display</span></li>
            </ul>
          </div>

          <div className='sponsor-levels-card'>
            <h3 className='sponsor-title'>Silver</h3>
            <ul>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Medium company logo on car</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Website logo display</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Presentation time at team meetings</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to visit team shop</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to team recruitment email</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-off'>Team and car footage access</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>Central area on car</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>T-shirt logo display</span></li>
            </ul>
          </div>

          <div className='sponsor-levels-card'>
            <h3 className='sponsor-title'>Bronze</h3>
            <ul>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Small company logo on car</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Website logo display</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Presentation time at team meetings</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to visit team shop</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to team recruitment email</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-off'>Team and car footage access</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>Central area on car</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>T-shirt logo display</span></li>
            </ul>
          </div>

          <div className='sponsor-levels-card'>
            <h3 className='sponsor-title'>Patron</h3>
            <ul>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Website logo display</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Presentation time at team meetings</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to visit team shop</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-on'>Access to team recruitment email</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-off'>Company logo on car</span></li>
              <li className='sponsor-pr'><span className='tick tick-on'>✔</span><span className='sponsor-off'>Team and car footage access</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>Central area on car</span></li>
              <li className='sponsor-pr '><span className='tick tick-off'>✔</span><span className='sponsor-off'>T-shirt logo display</span></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className='footer' id="footer">
        <div className='footer-1'>
          <a href="#header"><h2 className='logo-title'>NU Motorsports</h2></a>
          <a href='#header' className='about-us'>About Us</a>
          <a href='https://www.instagram.com/nu.motorsports/'>
            <img className='ig_logo' alt='instagram logo' src={ig}></img>
          </a>
          <a className='icon_src' href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Aldo Cervantes - Flaticon</a>
        </div>

        <div className='footer-2'>
          <h3 className='logo-title'>Contact us</h3>
          <h4 className='contact_us'>E. fsae@nu.edu.kz</h4>
          <h4 className='contact_us'>A. 53, Kabanbay batyr Ave., Nur-Sultan city, 010000, Republic of Kazakhstan</h4>
          <h4 className='contact_us'>P. +7 (701) 874 - 44 - 87</h4>
        </div>
        <br />
      </footer>
    </div>
  );
}

export default App;
