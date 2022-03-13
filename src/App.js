import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Rewards Application
      </header>
      <nav>
        <Link
          className="link"
          to='/users'
        > Click for Users </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;


