import React from "react";
import Box from "../../components/Box/Box";
import Download from "../../components/download/Download";

function DownloadMain() {
  return (
    <div className="download-main">
      <Box prev={"Home "} current={"Downloads"} />
      <Download />
    </div>
  );
}

export default DownloadMain;
