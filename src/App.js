import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from "./Home/Home.js"
import Resume from "./Resume/Resume.js"

function App() {
  return (
    <div className='app-img'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/resume" element={< Resume />} />
          {/* <Route path="/signup" element={< Signup />} />
          <Route path="/booktable" element={< BookTable />} />
          <Route path="/mylist" element={< MyList />} />
          <Route path="/myorders" element={< MyOrders />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
