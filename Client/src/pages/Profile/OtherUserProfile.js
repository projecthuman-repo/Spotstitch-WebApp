import message from "../../assets/Button.svg";
import Vector from "../../assets/icons/Vector.svg";
import "./OtherUserProfile.css";
import initialUsers from "./mockUsers.json";
import React, { useState, useEffect } from "react";
function OtherUserProfile({ id }) {
  const [users, setUsers] = useState(initialUsers);
  function visitedUser(i) {
    return users.filter((item) => item.id === i);
  }
  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  function toggleFollowing() {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, isFollowing: !user.isFollowing };
      }
      return user;
    });
    setUsers(updatedUsers);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "400px",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <div className="message-other-profile">
          <img src={message}></img>
        </div>
        {visitedUser(id)[0].isFollowing ? (
          <div className="following-other-profile" onClick={toggleFollowing}>
            <img src={Vector}></img>Following
          </div>
        ) : (
          <div className="follow-other-profile" onClick={toggleFollowing}>
            + Follow
          </div>
        )}
      </div>
    </>
  );
}

export default OtherUserProfile;
