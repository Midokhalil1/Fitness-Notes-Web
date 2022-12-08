import { Link } from "react-router-dom";
import { Button } from "antd";
import { useState } from "react";
export default function Header({ user }) {
  return (
    <ul className="header-container">
      <Button className="home-button" type="primary" href="/">
        Home
      </Button>
      {!user ? ( //if NOT user show sign in
        <>
          <Link to={"/sign-in"}>
          <Button type="primary" htmlType="button">
              Sign-in
            </Button>
          </Link>
        </>
      ) : ( //else show notes
        <Link to={"/Notes"}>
          <Button type="primary" hoverable>
            My Notes
          </Button>
        </Link>
      )}

      {/* <a href="/add note">Add Note</a> */}
    </ul>
  );
}

// import React from 'react';
// import { Button, Space } from 'antd';
// const App = () => (
//   <Space wrap>

//     <Button type="primary">HOME</Button>

//     <Button type="primary">Add New Notes</Button>
//     <Button type="primary">Sign In</Button>

//   </Space>
// );
// export default App;