import React from "react";
import Restaurant from "./Restaurant";

function Dashboard(props) {
  return (
    <div className='dashboard'>
      {props.restaurants.map((res) => (
        <Restaurant key={res.id} res={res} />
      ))}
    </div>
  );
}

export default Dashboard;
