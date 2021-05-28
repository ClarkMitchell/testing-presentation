import { useRef, useState } from 'react';

export default function Tags() {
  const inputEl = useRef(null);
  const [ tags, setTags ] = useState([]);
  const MAXIMUM_TAGS = 3;

  function submit() {
    if (tags.length === MAXIMUM_TAGS) {
      return;
    }

    const uniqueTags = new Set([...tags, inputEl.current.value]);
    setTags(Array.from(uniqueTags));
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
