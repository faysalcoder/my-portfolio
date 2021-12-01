import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleConfig from './Pages/Home/ParticaleConfig/ParticleConfig';
import Particles from 'react-particles-js';
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Typewriter from 'typewriter-effect';
import ViewDetail from './Pages/Home/ViewDetail/ViewDetail';
import Projects from './Pages/Home/Projects/Projects';



function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <div className="App">

      <div>
        {
          loading ? <div style={{ backgroundColor: '#2D2D2D', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>



            <div>
              <h1 style={{ color: '#D7D7D7' }}>
                <Typewriter
                  options={{
                    strings: ['Welcome'],
                    autoStart: true,

                  }}
                />
              </h1> <br />
              <HashLoader color={'#4A90E2'} loading={loading} size={60} />
            </div>


          </div>
            :

            <Router>

              <Switch>
                <Route exact path="/">

                  <Home></Home>
                </Route>
                
                <Route  path="/project">

                 <Projects></Projects>
                </Route>
                <Route  path="/project/:title">

                 <ViewDetail></ViewDetail>
                </Route>
              </Switch>

            </Router>


        }
      </div>




    </div>
  );
}

export default App;
