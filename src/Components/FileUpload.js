import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FileUpload() {
  const [sqlTuningSet, setSqlTuningSet] = useState("");

  const [fileName, setFileName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!name || !email) return;
    alert("congrats!");
    //callAPI
    navigate("/load-sts");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    const formData = new FormData();
    formData.append("file", file);

    // Replace 'API_URL' with the URL of your backend API
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
    <section className="section">
      <form onSubmit={handleSubmit}>
        {/* <h4>STS Details:</h4> */}
        <br />
        <br />
        <br />
        <br />
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
    </section>
  );
}

export default FileUpload;
