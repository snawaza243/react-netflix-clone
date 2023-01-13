import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import Login from './screens/LoginScreen';
function App() {

  // if user not exist
  const user = null;

  // if user exist
  // const user = {
  //   name :"sam",
  // };
  return (
    <div className="App">
      {/* <HomeScreen /> */}
      <Router>
        {!user ? (
          <Login />
        ) : (
        <Routes>
        <Route 
            path='/' 
            element={<HomeScreen/>}
          />
        
        <Route 
          path='/test'
          element={
            <h1>Testing the tag in route</h1>
          }

        />
        </Routes>
        )}
      </Router>

    </div>
  );
}

export default App;

