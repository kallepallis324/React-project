import React from "react";
import LoaderImg from "";

function Loader() {
  return (
    <div>
      <img
        src={LoaderImg}
        style={{ width: "300px", marginLeft: "30%", marginTop: "10%" }}
      />
    </div>
  );
}

export default Loader;
