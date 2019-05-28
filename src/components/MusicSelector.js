import React from "react";

const MusicSelector = props => {
  const options = props.music.map((entry, index) => {
    return (
      <option key={index} value={index}>
        {entry["im:name"].label}
      </option>
    );
  });

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onMusicSelect(selectedIndex);
  }

  return (
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">
        Choose
      </option>
      {options}
    </select>
  );
};

export default MusicSelector;
