// import React from "react";
// import { Button, Checkbox, Form, Input } from "antd";
// import logo1 from '../assets/logo1.png'
// import '../assets/Styles.css'

// const App = () => {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (

//     <>
//      <div className="logo-container">
//               <img src={logo1} alt=""className="logo1" />
//             </div>
   

//     <Form
//       name="basic"
//       labelCol={{
//         span: 9,
//       }}
//       wrapperCol={{
//         span: 7,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//       >
     

//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: "Please input your username!",
//           },
//         ]}
//       >
     

//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!",
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//           offset: 10,
//           span: 16,
//         }}
//       >
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 16,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     </>
//   );
// };
// export default App;
