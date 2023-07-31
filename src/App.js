import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js'
import Shiju from './Shiju.jpg';

import './styles.css';

function lpp() {
  return (
    <div className="lpp">
      <Header />
      <div class="picture">
    <img src={Shiju} className="lpp-logo" alt="logo" />   
    </div>
    
    <About/>
      
       
       
       
       
       
       
       <p><Footer/></p>
  
  
  
    </div>
    
  );
}

export default lpp;

 
