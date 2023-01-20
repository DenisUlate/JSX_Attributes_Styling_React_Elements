import React from "react";
import ReactDOM from "react-dom";

let currentYear = new Date().getFullYear();
let copyrightNotice = `Copyright \u00A9 ${currentYear} Denis Ulate`;

const img = "https://picsum.photos/200?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favourite Games
    </h1>
    <div>
      <img alt="img" src={img} />
      <img alt="img" src={img} />
      <img alt="img" src={img} />
      <img alt="img" src={img} />
    </div>
    <ul>
      <li>Conan Exiles</li>
      <li>World of Warcraft</li>
      <li>Need for Speed</li>
      <li>Grim Dawn</li>
    </ul>
    <p>{copyrightNotice}</p>
  </div>,
  document.getElementById("root")
);
