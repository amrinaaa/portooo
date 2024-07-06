import React from "react";
import './copyright.css';

function Copyright() {
  const currYear = new Date().getFullYear();
  return (
    <copyright className="copyright">
      <p>Copyright @amrybubb0 {currYear}</p>
    </copyright>
  );
}

export default Copyright;
