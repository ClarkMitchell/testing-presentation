import { useRef, useState } from 'react';
import { camelCase } from '../../utils';

export default function Tags() {
  const inputEl = useRef(null);
  const [tags, setTags] = useState([]);
  const MAXIMUM_TAGS = 3;

  function submit(e) {
    e.preventDefault();

    if (!inputEl.current.value || tags.length === MAXIMUM_TAGS) {
      return;
    }

    const uniqueTags = new Set([...tags, camelCase(inputEl.current.value)]);
    setTags(Array.from(uniqueTags));
    inputEl.current.value = '';
  }

  return (
    <div className="tags">
      <form className="tags__form" onSubmit={submit}>
        <div className="tags__input">
          <label htmlFor="input">
            <h1>Tags</h1>
            <input type="search" id="input" ref={inputEl} />
          </label>
        </div>
        <div className="tags__button">
          <button type="submit">Enter</button>
        </div>
      </form>
      <div className="tags_pills">
        {tags.map((tag) => (
          <span className="pill" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
