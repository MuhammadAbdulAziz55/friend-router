import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;

  //   let history = useHistory();

  //   function handleClick(friendId) {
  //     const url = `/friend/${friendId}`;
  //     history.push(url);
  //   }

  const friendStyle = {
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <div style={friendStyle}>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>
        <Link to={`/friend/${id}`}>
          <button>Show Friend Details</button>
        </Link>
      </p>
    </div>
  );
};

export default Friend;
