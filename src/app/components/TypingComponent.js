"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from "@/app/styles/typing.module.css";

const TypingComponent = () => {
  const [text, setText] = useState('');
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  // Function to count lines in the text
  const countLines = (text) => {
    const lineBreaks = (text.match(/\n/g) || []).length;
    return lineBreaks + 1;
  };

  // Function to handle saving the signature
  const saveSignature = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL();  // Convert canvas content to data URL
    const link = document.createElement('a');
    link.href = url;
    link.download = 'signature.png'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to reset the  canvas
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 1;

    const startDrawing = (e) => {
      const rect = canvas.getBoundingClientRect(); //this method returns the size of an element
      let x, y;
      if (e.type === 'mousedown') {    //will check the event type is mouse click or touch
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else if (e.type === 'touchstart') {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      }

      setIsDrawing(true);
      setPrevPosition({ x, y });

      // Start drawing only when the mouse or touch is pressed
      context.beginPath();
      context.moveTo(x, y);
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      let x, y;
      if (e.type === 'mousemove') {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else if (e.type === 'touchmove') {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      }

      context.lineTo(x, y);
      context.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('touchstart', startDrawing);

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchmove', draw);

    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchend', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('touchstart', startDrawing);

      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('touchmove', draw);

      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [isDrawing]);

  return (
    <div>
      <div className={styles.container}>
        <textarea className={styles.textContainer}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          cols={50}
        />
        <div className={styles.typingContainer}>
          <button className={styles.typeWordBtn}>Typed Words: {text.trim().split(/\s+/).filter(word => word !== '').length}</button>
          <button className={styles.numOfCharBtn}>Number of Characters: {text.length}</button>
          <button className={styles.numOfLineBtn}>Number of Lines: {countLines(text)}</button>
        </div>

        {/* Canvas for drawing signature */}
        <div className={styles.canvasContainer}>
          <h2 className={styles.signHeading}>Draw your Signature</h2>
          <canvas className={styles.canvas}
            ref={canvasRef}
            width={300}
            height={150}
            style={{ border: '1px solid', cursor: 'crosshair' }}
          />
          <div className={styles.btnContainer}>
            <button className={styles.dwnldBtn} onClick={saveSignature}>Download Signature</button>
            <button className={styles.resetBtn} onClick={resetCanvas}>Reset Signature</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingComponent;
