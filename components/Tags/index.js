import { useRef, useState } from 'react';

export default function Tags() {
  const inputEl = useRef(null);
  const [ tags, setTags ] = useState([]);

  function submit() {
    inputEl.current.value = '';
  }

  return (
    <div>
      <label htmlFor="input">
        Tags
        <input type="text" id="input" ref={inputEl} />
      </label>
      <button type="button" onClick={submit}>
        Enter
      </button>
    </div>
  )
}
