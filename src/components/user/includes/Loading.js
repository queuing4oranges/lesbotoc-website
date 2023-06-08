import React from "react";
import LoadingIcon from "./LoadingIcon";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#7ab6cb",
        color: "#003243",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <LoadingIcon height={135} width={135} fill={"#eb5a49"} />
    </div>
  );
}
