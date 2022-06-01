import React, { useState, useEffect } from "react";
import io, { connect } from "socket.io-client";
export default function Chat() {
  const socket = io.connect("http://localhost");
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("data :", data);
    });
  }, [socket]);
  return <div>jbjskbfbk</div>;
}
