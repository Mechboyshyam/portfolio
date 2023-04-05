import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home/Home.js"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          {/* <Route path="/login" element={< Login />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/booktable" element={< BookTable />} />
          <Route path="/mylist" element={< MyList />} />
          <Route path="/myorders" element={< MyOrders />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
