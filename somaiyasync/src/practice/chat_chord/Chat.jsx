// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import moment from "moment";
// import { useParams } from "react-router-dom";
// import "./style.css";

// const Chat = () => {
//   const { username, room } = useParams();
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [roomName, setRoomName] = useSxtate("");

//   useEffect(() => {
//     const socket = io();

//     // Join chatroom
//     socket.emit("joinRoom", { username, room });

//     // Get room and users
//     socket.on("roomUsers", ({ room, users }) => {
//       setRoomName(room);
//       setUsers(users);
//     });

//     // Message from server
//     socket.on("message", (message) => {
//       setMessages([...messages, message]);

//       // Scroll down
//       const chatMessages = document.querySelector(".chat-messages");
//       chatMessages.scrollTop = chatMessages.scrollHeight;
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Emit message to server
//     const socket = io();
//     socket.emit("chatMessage", message);

//     // Clear input
//     setMessage("");
//   };

//   return (
//     <div className="chat-container">
//       <header className="chat-header">
//         <h1>
//           <i className="fas fa-smile"></i> ChatCord
//         </h1>
//         <button
//           className="btn"
//           onClick={() => (window.location = "../index.html")}
//         >
//           Leave Room
//         </button>
//       </header>
//       <main className="chat-main">
//         <div className="chat-sidebar">
//           <h3>
//             <i className="fas fa-comments"></i> Room Name:
//           </h3>
//           <h2>{roomName}</h2>
//           <h3>
//             <i className="fas fa-users"></i> Users
//           </h3>
//           <ul>
//             {users.map((user, index) => (
//               <li key={index}>{user.username}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="chat-messages">
//           {messages.map((msg, index) => (
//             <div key={index} className="message">
//               <p className="meta">
//                 {msg.username}
//                 <span>{moment(msg.time).format("h:mm a")}</span>
//               </p>
//               <p className="text">{msg.text}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//       <div className="chat-form-container">
//         <form id="chat-form" onSubmit={handleSubmit}>
//           <input
//             id="msg"
//             type="text"
//             placeholder="Enter Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//             autoComplete="off"
//           />
//           <button className="btn" type="submit">
//             <i className="fas fa-paper-plane"></i> Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Chat;
