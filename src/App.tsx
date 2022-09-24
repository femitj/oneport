import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customers from './pages/customers';
import Shipments from './pages/shipments';
import Details from './pages/shipments/details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Customers />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/shipments/:customerId' element={<Shipments />} />
        <Route path='/shipments_details/:id' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
