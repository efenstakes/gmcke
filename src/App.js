import { 
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom'



import HomePage from './pages/home/home.page'
import ChallengesPage from './pages/challenges/challenges.page'
import ApplyPage from './pages/apply/apply.page'
import AboutPage from './pages/about/about.page'


function App() {
  return (
    <div className="">
      <Router>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>

          {/* challenges */}
          <Route exact path="/challenges"
            component={ChallengesPage}
          />
          
          {/* apply */}
          <Route exact path="/apply" 
            component={ApplyPage} 
          />
          
          {/* About */}
          <Route exact path="/about"
            component={AboutPage} 
          />

          {/* home */}
          <Route path="/"
            component={HomePage}
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
