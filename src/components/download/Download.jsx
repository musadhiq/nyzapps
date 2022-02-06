import React, { useState } from "react";
import { MdDownload } from "react-icons/md";
import wAdata from "../../assets/wa.json";
import instadata from "../../assets/insta.json";

function Download() {
  const [active, setActive] = useState(true);
  let data;
  if (active) {
    data = wAdata;
  } else {
    data = instadata;
  }
  return (
    <div className="download">
      <h1 className="head">
        Downloads from <span className="highlight-white">nyz</span>apps
      </h1>
      <div className="tabs">
        <div
          className={active ? "tab-wa active" : "tab-wa"}
          onClick={() => setActive(true)}
        >
          <div className="tab-head">
            <h4>nyzwhatsapp</h4>
          </div>
          <div className="whatsapp"></div>
        </div>
        <div
          className={active ? "tab-insta" : "tab-insta active"}
          onClick={() => setActive(false)}
        >
          <div className="tab-head">
            <h4>nyzinsta</h4>
          </div>
          <div className="instagram"></div>
        </div>
      </div>
      <div className="download-items">
        <ul className="datas">
          {data.map((item, index) => (
            <li className="data" key={index}>
              <a href={item.url} className="item">
                <MdDownload className="download-icon" />
                <div className="details">
                  <p className="name">{item.name}</p>
                  <span className="version"> v{item.version}</span>
                  {item.latest && <small className="latest">latest</small>}
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
