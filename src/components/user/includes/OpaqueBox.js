import React from "react";
import { Fragment } from "react";

export default function OpaqueBox(props) {
  return (
    <Fragment>
      <div
        className="opaque-bg-box"
        style={{ width: props.width, height: props.height }}
      ></div>
    </Fragment>
  );
}
