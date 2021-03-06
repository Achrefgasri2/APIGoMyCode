import React from "react";
import { Card } from "react-bootstrap";
import logo from '../image/user.png'
const CardList = ({ user }) => {
  return (
      <Card className="card" style={{ width: "18rem",height:'auto',margin:"20px" , borderRadius:"15px"}}>
        
        <Card.Body>
        <img src={logo} alt="logo-user" width={100}  height={100}/>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <h4>username:{user.username} </h4>
            <p>
              <strong>email:</strong>
              {user.email}
            </p>
            <p>
              <strong>address:</strong>
              {user.address.city}
            </p>
          </Card.Text>
         
        </Card.Body>
      </Card>
    
  );
};

export default CardList;
