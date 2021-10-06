import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 className="error">Error</h1> {/* its work becouse* is global scope/}
      {/* <h1 className={styles.success}>Success</h1> its not work becose is local scope*/}
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
