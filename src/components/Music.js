import React from "react";

const Music = ({ music }) => {
  if (music === null) {
    return <p />;
  }

  return (
    <>
      <h2>Name: {music["im:name"].label}</h2>
      <h2>
        Image: <img src={music["im:image"][0].label} />
      </h2>
      <h2>Collection: {music["im:collection"]["im:name"].label}</h2>
    </>
  );
};

export default Music;
