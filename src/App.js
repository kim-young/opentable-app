import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import { Container, Row } from "react-bootstrap";
import "./App.scss";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const updateDashboard = (result) => {
    setRestaurants(result);
  };

  return (
    <div className='App'>
      <main>
        <Container>
          <Row>
            <div className='col-sm-4 col-md-3'>
              <SideBar updateDashboard={updateDashboard} />
            </div>
            <div className='col-sm-8 col-md-9'>
              <Dashboard restaurants={restaurants} />
            </div>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
