import React from 'react';

const asciiStyle = {
  position: 'absolute',
  left: 0
}
const charcontainerStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  width: '150mm',
  alignContent: 'flex-start'
}
const charboxStyle = {
  border: '1px solid lightgray',
  marginLeft: '-1px',
  marginTop: '-1px',
  height: '10mm',
  width: '7mm',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const charcodeStyle = {
  fontSize: '8px',
  height: '1.5mm'
}
const charnameStyle = {
  fontSize: '12px',
  height: '4.4mm'
}
const placeholderStyle = {
  fontSize: '12px',
  height: '4.4mm'
}
const zfill = (num, len) => {
  return (Array(len).join("0") + num).slice(-len); 
}
const convertToInt = (ch) => {
  if(typeof ch == 'string'){
    return ch.charCodeAt(0);
  }else{
    return ch;
  }
}
function Ascii() {
  // let chars = 'Gil Heines! This is your mission, should you choose to accept it...\u0000Gibberish, blah, blah... nothing to see here, keep moving!\nPi ~= 3.14159265\u0000'.split('');
  let chars = 'ABCDEFG abcdefg... giberish... Math quiz results of 11 students: '.split('');
  chars = chars.concat([100, 95, 83, 62, 74, 85, 92, 77, 73, 78, 98]);
  chars = chars.concat(' That\'s all folks! The 3rd student\'s grade is 83, the lowest grade is 62.'.split(''));
  const items = chars.map((ch, i) => (
    <div className="charBox" key={i}  style={charboxStyle}>
      <div className="charcode" style={charcodeStyle}>{ zfill(300+i, 3) }</div>
      <div className="charname" style={charnameStyle}>{ convertToInt(ch) }</div>
      <div className="placeholder" style={placeholderStyle}></div>
    </div>
  ));
  return (
    <div style={asciiStyle}>
      <div className="charContainer" style={charcontainerStyle}>
        {items}
        <br />
        In memory there is an array of grades for a class of 11 students, starting at address 365.<br />
        What is the grade of the 3rd student in the array?<br />
        What is the lowest grade?<br />
        You can search for the answers in memory.
      </div>
    </div>
  );
}

export default Ascii;
