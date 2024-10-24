import React from "react";
import { Audio } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div>
      <Audio
        height="160"
        width="160"
        color="#e44848"
        ariaLabel="loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClass="loader-container"
      />
    </div>
  );
};

export default Loader;
