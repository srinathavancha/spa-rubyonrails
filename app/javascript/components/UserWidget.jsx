import React from "react";

export default function UserWidget({ currentUser, logoutPath }) {
  return (
    <div>
      {currentUser ? (
        <>
          Hello {currentUser.username}{" "}
          <a href={logoutPath} data-method="delete" rel="nofollow">
            Logout
          </a>
        </>
      ) : (
        <>
          Hello Guest <a href="/login">Login</a>
        </>
      )}
    </div>
  );
}
