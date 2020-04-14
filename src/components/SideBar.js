import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

function SideBar(props) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("https://opentable.herokuapp.com/api/cities")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setCities(result.cities);
        },
        (error) => {
          console.log("Get list of cities: " + error);
        }
      );
  }, []);

  const handleSelectChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSelectedCity(value);

    fetch(`http://opentable.herokuapp.com/api/restaurants?city=${value}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          props.updateDashboard(result.restaurants);
        },
        (error) => {
          console.log("Get list of restaurants: " + error);
        }
      );
  };

  const options = cities.map((city) => {
    return (
      <option key={`${city}`} value={`${city}`}>
        {city}
      </option>
    );
  });

  return (
    <div className='sidebar'>
      <span className='sidebar__logo'></span>
      <Form>
        <Form.Group>
          <Form.Label style={{ color: "white" }} htmlFor='sidebar__select'>
            Please select your city:
          </Form.Label>
          <Form.Control
            id='sidebar__select'
            as='select'
            custom
            name='selectedCity'
            value={selectedCity === "" ? -1 : selectedCity}
            onChange={handleSelectChange}
            data-live-search={true}
          >
            <option disabled value={-1} key={-1}>
              --
            </option>
            {options}
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SideBar;
