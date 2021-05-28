import { useRef, useState } from 'react';

export default function Tags() {
  const inputEl = useRef(null);
  const [ tags, setTags ] = useState([]);

  function submit() {
    if (tags.length === 3) {
      return;
    }

    setTags([...tags, inputEl.current.value]);
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
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  )
}
