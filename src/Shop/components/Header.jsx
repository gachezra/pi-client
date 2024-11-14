import React from "react";

const Header = ({ user, onSignIn, onSignOut }) => (
  <header style={{ padding: 8, backgroundColor: "gray", color: "white", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div style={{ fontWeight: "bold" }}>Pi Bakery</div>
    <div>
      {user === null ? (
        <button onClick={onSignIn}>Sign in</button>
      ) : (
        <div>@{user.username} <button type="button" onClick={onSignOut}>Sign out</button></div>
      )}
    </div>
  </header>
);

export default Header;