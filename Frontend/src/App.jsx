import {Routes, Route } from 'react-router-dom';
import PaymentForm from './Components/PaymentForm';
import Nav from './Components/Nav';
import ThankYou from './Components/Thankyou';

function App() {
  return (
    <>  
      <Nav />
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      </>
  );
}

export default App;