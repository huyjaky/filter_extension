import React from "react";

const Label = ({textAlign, text, height, fontSize, alignContent, fontPadding, color, width, paddingLeft, border, backgroundColor, boxShadow, fontWeight}) => {
    return (
        <div style={{
            width: width ? width : '100%',
            border: border ? border : '2px solid #59A5FF',
            height: height,
            backgroundColor: backgroundColor ? backgroundColor : '#0083E1',
            borderRadius: '10px',
            textAlign: textAlign,
            alignContent: alignContent,
            boxShadow: boxShadow ? boxShadow : '0 0 10px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.5)',
            paddingLeft: paddingLeft,
            color: color,
            fontWeight: fontWeight ? fontWeight : 'bold',
            fontSize: fontSize ? fontSize : '15px',
            padding: fontPadding,
        }}>
            {/* <p style={{
                color: color,
                fontWeight: fontWeight ? fontWeight : 'bold',
                fontSize: fontSize ? fontSize : '15px',
                padding: fontPadding,
            }}>{text}</p> */}
            {text}
        </div>
    );
}

export default Label;