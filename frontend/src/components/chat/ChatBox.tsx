"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./styles/chatBox.module.css";
import Image from "next/image";
import { socket } from "@/socket";

type ChatBoxProps = {
  members: string[];
  auth?: string;
};

const ChatBox: React.FC<ChatBoxProps> = ({ members, auth }) => {
  let originalHeight : number | undefined;
  const [input, setInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatsRef = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null)
  const chatBox = useRef<HTMLDivElement>(null)

  const addChatMessage = useCallback(
    (content: string, isOutgoing: boolean) => {
      if (!content) return;

      const chatDiv = document.createElement("div");
      chatDiv.className = styles.chat;
      chatDiv.textContent = content;

      if (isOutgoing) {

        const lastChild :any = chatsRef.current?.lastChild;

        if (lastChild?.classList.value.startsWith("chatBox_outgoingChat")) {
          chatsRef.current?.lastChild?.appendChild(chatDiv);
        } else {
          const outgoingDiv = document.createElement("div");
          outgoingDiv.className = styles.outgoingChat;
          outgoingDiv.appendChild(chatDiv);
          chatsRef.current?.appendChild(outgoingDiv);
        }
      } else {

        const lastChild :any = chatsRef.current?.lastChild;

        if (lastChild?.classList.value.startsWith("chatBox_incomingChat")) {
          chatsRef.current?.lastChild?.appendChild(chatDiv);
        } else {
          const incomingDiv = document.createElement("div");
          incomingDiv.className = styles.incomingChat;
          incomingDiv.appendChild(chatDiv);
          chatsRef.current?.appendChild(incomingDiv);
        }
      }
    },
    []
  );

  function scrollToBottom() {
    if(chatsRef.current)
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };


  const setChatBoxAccordingInputArea = (scrollHeight :number)=>{
    const updatedHeight = window.visualViewport?.height;
    if(!(chatBox.current&&box.current&&originalHeight&&updatedHeight&&chatsRef.current)){return}
    chatsRef.current.style.marginTop = `-${scrollHeight-20}px`;
    // chatsRef.current.style.height = `calc(${updatedHeight - scrollHeight - 50}px)`;
    scrollToBottom()
  };

  const handleSubmit = () => {
    if(textareaRef.current){  
      textareaRef.current?.focus();
      addChatMessage(input.trim(), true);
      setInput("");
      scrollToBottom();
      // setChatBoxAccordingInputArea(0);
      textareaRef.current.style.height = "auto"
    }
    if(chatsRef.current)chatsRef.current.style.marginTop = "0px"
  };



  useEffect(() => {
    const viewPort = window.visualViewport?.height;
    originalHeight = viewPort;
  }, [])
  

  useEffect(() => {

    window.addEventListener("resize", (e :any)=>{
      
      const updatedHeight = window.visualViewport?.height;
      if(!(chatBox.current&&box.current&&originalHeight&&updatedHeight&&chatsRef.current)){return}
      
      chatsRef.current.style.overflowX = "overflow"
      box.current.style.bottom = `${originalHeight-updatedHeight+10}px`;
      chatsRef.current.style.height = `calc(${updatedHeight - 105}px)`;
      chatBox.current.style.height = `calc(${updatedHeight - 60}px)`;
    })
    socket.emit("joinToRoom", {
      type: "directConversation",
      members: members.join(","),
      auth,
    });

    const handleIncomingMessage = (payload: any) => {
      addChatMessage(payload.message, false);
    };

    socket.on("message", handleIncomingMessage);

    scrollToBottom()
    return () => {
      socket.off("message", handleIncomingMessage);
      socket.emit("dis", members.join(","));
    };
  }, [addChatMessage]);



  const expandTextarea = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = scrollHeight < 115 ? `${scrollHeight}px` : "96px";
    if(scrollHeight<115){
      setChatBoxAccordingInputArea(scrollHeight)
    }
  }, []);

  return (
    <div ref={chatBox} className={styles.chatBox}>
      <div className={styles.test}>lorem500</div>
      <div ref={chatsRef} className={styles.chats}>
        <div style={{flexGrow: 1}}></div>
        {/* Initial Chats */} 
        <div className={styles.incomingChat}>
          <div className={styles.chat}>Sample incoming message 1</div>
          <div className={styles.chat}>Sample incoming message 2</div>
          <div className={styles.chat}>Sample incoming message 3</div>
        </div>
        <div className={styles.outgoingChat}>
          <div className={styles.chat}>Sample outgoing message 1</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
        </div>
      </div>

      <div ref={box} className={styles.inputArea}>
        <div className={styles.inputBox}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onInput={expandTextarea}
            onFocus={(e:any)=>{
              e.preventDefault({preventScroll: true})
            }}
            rows={1}
            id="textarea"
            autoCorrect="off"
            spellCheck={false}
            name="input"
            className={styles.input}
            placeholder="Type...."
          />
        </div>
        <div className={styles.sendBtn}>
          <Image
            onClick={handleSubmit}
            height={20}
            width={20}
            alt="Send"
            src="/icons/send.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
