import { getByTitle } from '@testing-library/react';
import React from 'react';

import './Preview.css';

export default function Preview({ getByTitle, subtitle, titleFont, align, text }) {
  return (
    <div className={`preview ${titleFont}`} style={{ textAlign: align }}>
      <h1>{getByTitle}</h1>
      <h3>{subtitle}</h3>
      <p>{text}</p>
    </div>
  );
}
// implement a Preview screen here
//  Note - the HTML should have the following structure
//  the main div should have a class of preview and the font-name prop
//  and should have style interpolated using the alignment prop

// <div class="preview indie-flower" style="text-align: center;">
//   <h1> Blog Title</h1>
//   <h3> Blog Subtitle</h3>
//   <p>This is some blog text. </p>
// </div>
