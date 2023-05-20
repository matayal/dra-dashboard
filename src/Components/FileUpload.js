import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FileUpload() {
  const [sqlTuningSet, setSqlTuningSet] = useState("");

  const [fileName, setFileName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedCard(true);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    const formData = new FormData();
    formData.append("file", file);

    fetch("API_URL", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("File uploaded successfully!");
        } else {
          setSuccessMessage("File upload failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setSuccessMessage("File upload failed. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <th>Load SQL Tuning Set by File:</th>
          <Link to="/load-sts">
            <button
              className="btn-cross btn-cross-form"
              onClick={() => setSelectedCard(null)}
            >
              X
            </button>
          </Link>
          <br />
          <br />

          <div className="form-row">
            <label htmlFor="sqlTuningSet" className="form-label">
              SQL Tuning Set Name:
            </label>
            <input
              type="text"
              className="form-input"
              id="stsName"
              required
              value={sqlTuningSet}
              onChange={(e) => setSqlTuningSet(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="file-upload" className="form-label">
              Choose STS file:
            </label>
            <input
              type="file"
              className="form-input"
              accept=".json, .csv"
              onChange={handleFileUpload}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-block">
            Load STS
          </button>
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
      {selectedCard !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-cross" onClick={() => setSelectedCard(null)}>
              X
            </button>
            <h2>Load STS Success!!!</h2>
            <button
              className="btn"
              style={{
                width: "140px",
                height: "40px",
                margin: "20px 20px 20px 200px",
              }}
              onClick={() => setSelectedCard(null)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
