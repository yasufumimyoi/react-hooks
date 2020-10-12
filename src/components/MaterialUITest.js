import React, { useState } from "react";
import ReactPlayer from "react-player";
import Checkbox from "@material-ui/core/Checkbox";

const MaterialUITest = () => {
  const [isFinished, setFinished] = useState(false);
  return (
    <div>
      <ReactPlayer
        controls
        onEnded={() => setFinished(true)}
        url="https://www.youtube.com/watch?v=tKzSnjWPtEw"
      />
      <span>Completed:</span>
      <Checkbox
        checked={isFinished}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default MaterialUITest;
