import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("messages/getAll").then((response) => {
      setMessages(response.data);
      // console.log("script");
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("bde0f3674fd52f1121be", {
      cluster: "us2",
    });

    //creating channel where pusher will be listen with the actions happening on backend
    //and reflecting it on the frontend
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
