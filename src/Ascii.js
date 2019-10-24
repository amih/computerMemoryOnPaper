import React from 'react';

const asciiStyle = {
  width: '27mm',
  position: 'absolute',
  right: 0
}
const charcontainerStyle = {
  display: 'flex',
  flexFlow: 'column wrap',
  height: '220mm'
}
const charboxStyle = {
  border: '1px solid blue',
  marginRight: '-1px',
  marginTop: '-1px',
  height: '7mm',
  width: '7mm',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const charcodeStyle = {
  fontSize: '11px',
}
const charnameStyle = {
  fontSize: '12px',
  height: '4.4mm'
}
const zfill = (num, len) => {
  return (Array(len).join("0") + num).slice(-len); 
}
function Ascii() {
  let chars = [];
  for(let i = 0; i< 32; i++){
    chars[i] = ' ';
  }
  for(let i = 32; i< 128; i++){
    chars[i] = String.fromCharCode(i);
  }
  chars[0] = 'NUL';
  chars[10] = 'LF';
  chars[13] = 'CR';
  chars[32] = 'SP';
  chars[127] = 'DEL';
  const items = chars.map((ch, i) => (
    <div className="charBox" key={i}  style={charboxStyle}>
      <div className="charcode" style={charcodeStyle}>{ zfill(i, 3) }</div>
      <div className="charname" style={charnameStyle}>{ch}</div>
    </div>
  ));
  return (
    <div style={asciiStyle}>
      <div className="charContainer" style={charcontainerStyle}>
        {items}
      </div>
    </div>
  );
}

export default Ascii;
