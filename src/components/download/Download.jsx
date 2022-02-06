import React from "react";
import { MdDownload } from "react-icons/md";
import data from "../../assets/data.json";

function Download() {
  console.log(data);
  return (
    <div className="download">
      <h1 className="head">
        Downloads from <span className="highlight-white">nyz</span>apps
      </h1>
      <div className="download-items">
        <ul className="datas">
          {data.map((item, index) => (
            <li className="data" key={index}>
              <a href={item.url} className="item">
                <MdDownload className="download-icon" />
                <div className="details">
                  <p className="name">{item.name}</p>
                  <span className="version"> v{item.version}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Download;
