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
const zfill2 = (num, len, filler = "z") => {
  return (Array(len).join(filler) + num).slice(-len); 
}
const zfillright = (num, len, filler = "z") => {
  return (num + Array(len).join(filler)).slice(0, len); 
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
  // let chars = 'ABCDEFG abcdefg... giberish... Math quiz results of 11 students: '.split('');
  // chars = chars.concat([100, 95, 83, 62, 74, 85, 92, 47, 73, 78, 98]);
  // chars = chars.concat(' That\'s all folks!'.split(''));
  let names = ['Gil', 'Ohad', 'Wilhelmina', 'Annamaria', 'Shaked', 'Batshi', 'Amnon', 'Constantinopolechick', 'Ami', 'Anat', 'Jerry'];
  names = names.map(nm => zfillright(nm + '\u0000', 25, ' '));
  let chars = names.join('').split('');
  console.log(chars);
  const items = chars.map((ch, i) => (
    <div className="charBox" key={i}  style={charboxStyle}>
      <div className="charcode" style={charcodeStyle}>{ zfill2(300+i, 3) }</div>
      <div className="charname" style={charnameStyle}>{ convertToInt(ch) }</div>
      <div className="placeholder" style={placeholderStyle}></div>
    </div>
  ));
  return (
    <div style={asciiStyle}>
      <div className="charContainer" style={charcontainerStyle}>
        {items}
        <br />
        In memory there is an array of 11 names starting at address 300, each name can be up to 25 characters.<br />
        Each name is NULL terminated, so no need to look after the NULL.<br />
        What is the longest name?<br />
        What is the 10th name?
      </div>
    </div>
  );
}

export default Ascii;
