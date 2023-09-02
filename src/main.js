import Landingpage from './Routes/landingpage/landingpage'
import Home from './Routes/home/home'
import './general.css'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const Main = () => {
    return ( 
      <Router>
        <div className="Main">
          <Landingpage />
          <div className="content">
            <Switch>
              <Route path="/Routes/home/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
     );
}
 
export default Main;