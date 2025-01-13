import React, { useState, useRef } from "react";
import BTN from "../assets/images/mic-speak.png";
import '../components/style/Volume.css';
import Label from "./Label";

const Speak = () => {
    const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported("audio/wav")
        ? "audio/wav"
        : "audio/webm";
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        console.log("Chunk received:", event.data);
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const audioUrl = URL.createObjectURL(audioBlob);
        const link = document.createElement("a");
        link.href = audioUrl;
        link.download = "recording.wav";
        link.click();
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{left: '10px'}}>
                <button onClick={recording ? stopRecording : startRecording} style={{cursor: 'pointer', backgroundColor: 'transparent', border: 'none'}}>
                    <img src={BTN} style={{ color: '#E57F01' }} width={32} height={32} alt="Button speak" />
                </button>
            </div>
            <Label
                text={"Phát âm của bạn"}
                alignContent={'center'}
                height={'25px'}
                width={'190px'}
                textAlign={'center'}
                border={'none'}
                backgroundColor={"#FFDB5A"}
                color={"#A83D00"}
                boxShadow={'none'}
            />
        </div>
    );
}

export default Speak;
