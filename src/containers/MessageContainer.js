import React from "react";
import { useSelector } from "react-redux";
import Message from "../components/Message";

function MessageContainer() {
  const message = useSelector((state) => state.message);

  return <Message message={message} />;
}

export default MessageContainer;
