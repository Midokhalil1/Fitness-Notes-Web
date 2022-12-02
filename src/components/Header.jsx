import { Link } from "react-router-dom";
import { Button } from "antd";
export default function Header() {
  return (
    <ul className="header-container">
      <Button type="primary" href="/">
        Home
      </Button>

      <Link to={"/Notes"}>
        <Button type="primary" htmlType="button">
          Add Notes
        </Button>
      </Link>

      <Link to={"/sign-in"}>
        <Button type="primary" htmlType="button">
          Sign-in
        </Button>
      </Link>
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
