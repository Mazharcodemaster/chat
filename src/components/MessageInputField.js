import React, { useRef, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

const MessageInputField = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileFor,setFileFor]=useState(null)

  const handleFileClick = () => {
    inputRef.current.click(); // Trigger the hidden input click
  };

  const fileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log(selectedFile);
      
    const fileFormate=  selectedFile.type.split('/')
    setFileFor(fileFormate)
    
    }
  };

  const handleSendMessage = () => {
    if (message || file) {
      console.log("Sending message:", message);
      if (file) {
        console.log("Sending file:", file);
        // You can handle file upload here (e.g., send the file to your backend)
      }
      setMessage(""); // Clear the message field after sending
      setFile(null);  // Clear the file after sending
    }
  };

  return (
    <div className="flex items-center border rounded-2xl px-2 py-1 w-full">
      
      <input
        type="file"
        onChange={fileChange}
        ref={inputRef}
        style={{ display: "none" }}
      />

      {/* Attach file icon */}
      <AttachFileIcon onClick={handleFileClick} className="ml-1 cursor-pointer" />

      {/* Message input */}
      <input
        type="text"
        className="w-full py-2 px-3 outline-none rounded-2xl"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Send icon */}
      <SendIcon
        className="hover:cursor-pointer ml-2"
        onClick={handleSendMessage}
      />
    </div>
  );
};

export default MessageInputField;
