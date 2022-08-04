import React from "react";
import Entry from "./Entry";
import playerInfos from "../playerInfo";

function createEntry(THPlayers) {
  return (
    <Entry
      key={THPlayers.id}
      emoji={THPlayers.emoji}
      img={THPlayers.playerImage}
      playerName={THPlayers.playerName}
      playerAge={THPlayers.playerAge}
      clubPlayer={THPlayers.clubPlayer}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>TransferHub</span>
      </h1>
      <dl className="dictionary">{playerInfos.map(createEntry)}</dl>
    </div>
  );
}

export default App;
