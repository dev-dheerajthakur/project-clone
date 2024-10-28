"use client"
import { socket } from '@/socket'
import React from 'react'

const ScoketInitializer = ({auth} : {auth?: string}) => {

  socket.emit("welcome", {auth});

  socket.on("welcome",(payload)=>{
    console.log(payload)
  });
  
  return (
    <div>
      
    </div>
  )
}

export default ScoketInitializer
