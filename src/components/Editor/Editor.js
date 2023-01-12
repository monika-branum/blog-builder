import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSubtitle, setTitleFont, setAlign, setText }) {
  const handleTitle = (e) => setTitle(e.target.value);
  const handleAlign = (e) => setAlign(e.target.value);
  const handleFont = (e) => setTitleFont(e.target.value);
  const handleSubtitle = (e) => setSubtitle(e.target.value);
  const handleText = (e) => setText(e.target.value);
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" onChange={handleTitle} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" onChange={handleSubtitle} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select onChange={handleFont}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input name="align" type="radio" value="left" onClick={handleAlign} />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" onClick={handleAlign} />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" onClick={handleAlign} />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} onChange={handleText} />
        <label>Text</label>
      </div>
    </div>
  );
}
