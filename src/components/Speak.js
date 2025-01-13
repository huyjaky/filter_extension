import React, { useState, useRef } from "react";
import BTN from "../assets/images/mic-speak.png";
import '../components/style/Volume.css';
import Label from "./Label";

const Speak = () => {
  const [recording, setRecording] = useState(false);
  let waveform = [] // To store the waveform data
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
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        processAudioBlob(audioBlob);
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

  const processAudioBlob = async (audioBlob) => {
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    try {
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // Extract waveform data
      const channelData = audioBuffer.getChannelData(0); // Get data from the first channel
      const sampledData = downsampleArray(channelData, 500); // Reduce the size for simplicity

      waveform = sampledData;
      console.log("Waveform Data:", waveform);
      saveWaveformAsWav(waveform)

      console.log("Waveform data extracted:", channelData);
      console.log("Waveform length:", channelData.length);
      console.log("First 10 samples:", channelData.slice(0, 10));
      console.log("Min value:", Math.min(...channelData));
      console.log("Max value:", Math.max(...channelData));

      // Clear waveform after logging
      setTimeout(() => {
        waveform = [];
        console.log("Waveform cleared. Ready for new recording.");
        console.log(waveform)
      }, 1000);
    } catch (error) {
      console.error("Error decoding audio data:", error);
    }
  };

  // Helper function to downsample the waveform array for better performance
  const downsampleArray = (data, targetLength) => {
    const sampledData = [];
    const step = Math.floor(data.length / targetLength);

    for (let i = 0; i < targetLength; i++) {
      sampledData.push(data[i * step]);
    }

    return sampledData;
  };

  const saveWaveformAsWav = (waveform, sampleRate = 44100) => {
    if (!waveform || waveform.length === 0) {
      console.error("Waveform is empty, cannot generate WAV file.");
      return;
    }
  
    // 1. Prepare WAV Header
    const wavHeader = new ArrayBuffer(44); // 44 bytes for header
    const view = new DataView(wavHeader);
  
    const writeString = (view, offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
  
    writeString(view, 0, "RIFF"); // ChunkID
    view.setUint32(4, 36 + waveform.length * 2, true); // ChunkSize (36 + data length)
    writeString(view, 8, "WAVE"); // Format
    writeString(view, 12, "fmt "); // Subchunk1ID
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
    view.setUint16(22, 1, true); // NumChannels (1 for mono)
    view.setUint32(24, sampleRate, true); // SampleRate
    view.setUint32(28, sampleRate * 2, true); // ByteRate (SampleRate * NumChannels * BitsPerSample/8)
    view.setUint16(32, 2, true); // BlockAlign (NumChannels * BitsPerSample/8)
    view.setUint16(34, 16, true); // BitsPerSample (16 bits)
    writeString(view, 36, "data"); // Subchunk2ID
    view.setUint32(40, waveform.length * 2, true); // Subchunk2Size (data length)
  
    // 2. Prepare WAV Data
    const wavData = convertWaveformToWavData(waveform);
  
    // 3. Create Blob
    const wavBlob = new Blob([wavHeader, wavData], { type: "audio/wav" });
  
    // 4. Trigger Download
    const url = URL.createObjectURL(wavBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "waveform.wav";
    a.click();
    URL.revokeObjectURL(url);
  
    console.log("WAV file generated and download triggered.");
  };
  
  const convertWaveformToWavData = (waveform) => {
    const wavData = new ArrayBuffer(waveform.length * 2); // 16-bit samples
    const dataView = new DataView(wavData);
  
    for (let i = 0; i < waveform.length; i++) {
      const sample = Math.max(-1, Math.min(1, waveform[i])); // Clamp to [-1, 1]
      dataView.setInt16(i * 2, sample * 32767, true); // Scale to 16-bit
    }
  
    return wavData;
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
