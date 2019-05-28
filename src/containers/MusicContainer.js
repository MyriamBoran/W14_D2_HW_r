import React from "react";
import MusicSelector from "../components/MusicSelector";
import Music from "../components/Music";

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      selectedEntry: null
    };
    this.selectAnEntry = this.selectAnEntry.bind(this);
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ entries: data.feed.entry });
      });
  }

  selectAnEntry(selectedIndex) {
    const selectedEntry = this.state.entries[selectedIndex];
    this.setState({ selectedEntry: selectedEntry });
  }

  render() {
    return (
      <div>
        <h2>Top 20 UK Songs</h2>
        <MusicSelector
          music={this.state.entries}
          onMusicSelect={this.selectAnEntry}
        />
        <Music music={this.state.selectedEntry} />
      </div>
    );
  }
}

export default MusicContainer;
