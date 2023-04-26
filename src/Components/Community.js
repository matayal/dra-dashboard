import React from "react";

function Community() {
  const data = [
    { graphName: "Graph 1", stsName: "Tuning Set 1" },
    { graphName: "Graph 2", stsName: "Tuning Set 1" },
    { graphName: "Graph 3", stsName: "Tuning Set 2" },
    { graphName: "Graph 1", stsName: "Tuning Set 1" },
    { graphName: "Graph 2", stsName: "Tuning Set 1" },
    { graphName: "Graph 3", stsName: "Tuning Set 2" },
  ];

  const renderTableData = () => {
    return data.map((dra, index) => {
      const { graphName, stsName } = dra;

      let determineCommunity = (
        <button className="btn">Determine Community</button>
      );

      let modifyCommunity = (
        <button className="btn-red">Modify Community</button>
      );

      return (
        <tr key={index}>
          <td>{graphName}</td>
          <td>{stsName}</td>
          <td>
            {determineCommunity} &emsp; &emsp; &emsp;{modifyCommunity}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="form">
      <h4>Community</h4>
      <br />
      <br />
      <br />
      <table className="table">
        <thead>
          <tr className="tr">
            <th className="th">Graph Name</th>
            <th bgcolor="#41afca">STS Name</th>
            <th bgcolor="#41afca" color="#f1f5f9">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}

export default Community;
