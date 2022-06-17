import React from "react";

export default function Title({ name }) {
  return (
    <>
      {" "}
      <div class="row page-titles mx-0">
        <ol class="breadcrumb">
          <li class="breadcrumb-item ">
            <div>{name}</div>
          </li>
        </ol>
      </div>{" "}
    </>
  );
}
