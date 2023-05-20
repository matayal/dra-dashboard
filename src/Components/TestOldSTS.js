import React, { useState } from "react";
import FileUpload from "./FileUpload";
import DatabaseSTS from "./DatabaseSTS";
import "../App.css";

function TestOldSTS() {
  const [selectedOption, setSelectedOption] = useState("uploadSTS");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="form">
      <th className="th">
        &emsp; &emsp; &emsp;
        <input
          type="radio"
          value="uploadSTS"
          checked={selectedOption === "uploadSTS"}
          onChange={handleOptionChange}
          Checked
        />
        &nbsp; Load STS from File &emsp; &emsp; &emsp;&emsp; &emsp; &emsp;
        <input
          type="radio"
          value="databaseSTS"
          checked={selectedOption === "databaseSTS"}
          onChange={handleOptionChange}
        />
        &nbsp; Load STS from Database &emsp; &emsp; &emsp;
      </th>

      {selectedOption === "uploadSTS" && <FileUpload />}
      {selectedOption === "databaseSTS" && <DatabaseSTS />}
    </form>
  );
}

export default TestOldSTS;
