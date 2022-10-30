import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  let { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      {/* <h3>Friend details are coming soon.... {friendId}</h3> */}
      <h3>Name: {friend.name}</h3>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetails;
