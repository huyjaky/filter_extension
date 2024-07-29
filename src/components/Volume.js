import React from "react";
import BTN from "../assets/images/BTNSounds.png";
import '../components/style/Volume.css';

const Volume = ({width}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{}}>
            <img src={BTN} style={{ paddingTop: '5px'}} alt="Button Sounds" />
            </div>
            <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.02} 
                className="custom-range"
                style={{ 
                    width: width ? width : '180px',
                    height: '20px',
                }} 
            />
        </div>
    );
}

export default Volume;
