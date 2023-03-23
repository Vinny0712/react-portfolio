import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Project from './components/project';

import {  Parallax, ParallaxLayer } from "@react-spring/parallax";
import Connect from './components/connect';

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  
  return (
    <div className="App" >
      
      
      <Parallax pages={14} style={{ backgroundColor: '#101721' }}>
        
        <ParallaxLayer
        
          sticky={{ start: 0, end: 1 }}
          speed={-1}
          factor={0}
        >
          <header className="App-body">
            <Navbar/>
            <About/>
            <Project/>
            <Connect /> 
            
          
          </header>
           
        </ParallaxLayer>
        
        
        <ParallaxLayer 
          offset={3}
          speed={0.3}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        

        <ParallaxLayer 
          offset={0}
          speed={0.3}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer 
          offset={5}
          speed={0.3}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer 
          offset={8}
          speed={0.3}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer 
          offset={10}
          speed={0.3}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

<ParallaxLayer 
          offset={13}
          speed={0.3}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />


         
         
      
        

        <ParallaxLayer offset={1} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={6} speed={1} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src="images/meteor.png" style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-0.8} style={{ opacity: 0.6 }}>
          <img src="images/astro.png"style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={-0.3} style={{ opacity: 0.6 }}>
          <img src="images/rocket.png" style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={-0.3} style={{ opacity: 0.6 }}>
          <img src="images/spacebot.png"style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={9}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

      
        </Parallax>
        
        
  
    </div>
  );
}

export default App;
