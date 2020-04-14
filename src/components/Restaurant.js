import React from "react";
import { Card } from "react-bootstrap";

function Restaurant({ res }) {
  console.log(res);

  const priceBadge = "$".repeat(res.price);

  return (
    <Card className='restaurant'>
      <Card.Img
        variant='top'
        src={res.image_url}
        className='restaurant__image'
        alt=''
      />
      <Card.Body>
        <Card.Title>{res.name}</Card.Title>
        <p>{priceBadge}</p>
        <hr />
        <Card.Text>
          {res.address}
          <br />
          {res.city} {res.state} {res.postal_code}
          <br />
          {res.country}
        </Card.Text>
        <a href={res.reserve_url} target='_blank' rel='noopener noreferrer'>
          <button className='restaurant__btn'>Find a Table</button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Restaurant;
