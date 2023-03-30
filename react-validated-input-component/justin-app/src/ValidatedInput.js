import { useState } from 'react';

export default function ValidatedInput() {
  const [input, setInput] = useState('');

  const digit = /\d+/;
  const digitRes = digit.test(input);

  const capital = /[A-Z]+/;
  const capitalRes = capital.test(input);

  const escape = /[!,@ ,# ,$ ,& ,^ ,& ,* ,( ,)]+/;
  const escapeRes = escape.test(input);

  const goodLength = input.length > 7;

  let text = 'A password is required.';
  let check = "❌";

  if (input.length > 0 && input.length < 8) {
    text = 'Your password is too short.';
  } else if (!digitRes && goodLength) {
    text = 'Your password needs at least one number.';
  } else if (!capitalRes && goodLength) {
    text = 'Your password needs at least on capital letter.';
  } else if (!escapeRes && goodLength) {
    text = 'Your password needs at least on special character: !, @, #, $, %, ^, &, *, (, or ).;'
  } else if (goodLength) {
    text = '';
    check = "✅";
  }

  return (
    <form>
      <label style={{display: "block" }}>Password</label>
      <input value={input} onChange={e => setInput(e.target.value)}></input>
      {check}
      <p style={{color: "red"}}> {text} </p>
    </form>
  );
}
