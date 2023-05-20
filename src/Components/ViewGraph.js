import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "../Css/styles.css";
import { Link } from "react-router-dom";

function ViewGraph() {
  const svgRef = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define the data for the nodes and links
    const nodes = [
      { id: "ORDER_CATALOG", color: "white" },
      { id: "PHARMACY_NOTES", color: "white" },
      { id: "ORDER_THERAP_SBSTTN", color: "white" },
      { id: "ORDER_COMMENT", color: "white" },
      { id: "ORDER_INGREDIENT", color: "white" },
      { id: "ORDER_DISPENSE", color: "white" },
      { id: "RAD_PROCEDURE_GROUP", color: "white" },
      { id: "RAD_PROCEDURE_ASSOC", color: "white" },
      { id: "ORDER_NOTIFICATION", color: "white" },
      { id: "OUTCOME_ACTIVITY", color: "white" },
      { id: "OUTCOME_CRITERIA", color: "white" },
      { id: "ORDER_IV_INFO", color: "white" },
      { id: "RAD_FOLLOW_UP_CONTROL", color: "white" },
    ];

    const links = [
      { source: "ORDER_CATALOG", target: "PHARMACY_NOTES", weight: 0.01738 },
      { source: "PHARMACY_NOTES", target: "ORDER_CATALOG", weight: 0.01738 },
      {
        source: "ORDER_CATALOG",
        target: "ORDER_THERAP_SBSTTN",
        weight: 0.01806,
      },
      {
        source: "ORDER_THERAP_SBSTTN",
        target: "ORDER_CATALOG",
        weight: 0.01806,
      },
      { source: "ORDER_COMMENT", target: "ORDER_INGREDIENT", weight: 0.02289 },
      { source: "ORDER_INGREDIENT", target: "ORDER_COMMENT", weight: 0.02289 },
      {
        source: "ORDER_INGREDIENT",
        target: "ORDER_THERAP_SBSTTN",
        weight: 0.03398,
      },
      {
        source: "ORDER_THERAP_SBSTTN",
        target: "ORDER_INGREDIENT",
        weight: 0.03398,
      },
      { source: "ORDER_COMMENT", target: "ORDER_DISPENSE", weight: 0.03402 },
      { source: "ORDER_DISPENSE", target: "ORDER_COMMENT", weight: 0.03402 },
      { source: "ORDER_COMMENT", target: "PHARMACY_NOTES", weight: 0.05445 },
      { source: "PHARMACY_NOTES", target: "ORDER_COMMENT", weight: 0.05445 },
      { source: "ORDER_DISPENSE", target: "ORDER_INGREDIENT", weight: 0.02746 },
      { source: "ORDER_INGREDIENT", target: "ORDER_DISPENSE", weight: 0.02746 },
      { source: "ORDER_CATALOG", target: "ORDER_DISPENSE", weight: 0.02892 },
      { source: "ORDER_DISPENSE", target: "ORDER_CATALOG", weight: 0.02892 },
      { source: "PHARMACY_NOTES", target: "ORDER_INGREDIENT", weight: 0.0314 },
      { source: "ORDER_INGREDIENT", target: "PHARMACY_NOTES", weight: 0.0314 },
      { source: "ORDER_CATALOG", target: "ORDER_COMMENT", weight: 0.01443 },
      { source: "ORDER_COMMENT", target: "ORDER_CATALOG", weight: 0.01443 },
      {
        source: "PHARMACY_NOTES",
        target: "ORDER_THERAP_SBSTTN",
        weight: 0.22629,
      },
      {
        source: "ORDER_THERAP_SBSTTN",
        target: "PHARMACY_NOTES",
        weight: 0.22629,
      },
      { source: "ORDER_CATALOG", target: "ORDER_INGREDIENT", weight: 0.24342 },
      { source: "ORDER_INGREDIENT", target: "ORDER_CATALOG", weight: 0.24342 },
      {
        source: "RAD_PROCEDURE_GROUP",
        target: "RAD_PROCEDURE_ASSOC",
        weight: 0.27193,
      },
      {
        source: "ORDER_CATALOG",
        target: "RAD_PROCEDURE_ASSOC",
        weight: 0.00626,
      },
      {
        source: "RAD_PROCEDURE_ASSOC",
        target: "ORDER_CATALOG",
        weight: 0.00626,
      },
      {
        source: "ORDER_CATALOG",
        target: "ORDER_NOTIFICATION",
        weight: 0.00894,
      },
      {
        source: "ORDER_NOTIFICATION",
        target: "ORDER_CATALOG",
        weight: 0.00894,
      },
      {
        source: "OUTCOME_ACTIVITY",
        target: "OUTCOME_CRITERIA",
        weight: 0.44791,
      },
      {
        source: "OUTCOME_CRITERIA",
        target: "OUTCOME_ACTIVITY",
        weight: 0.44791,
      },
      { source: "ORDER_DISPENSE", target: "PHARMACY_NOTES", weight: 0.06061 },
      { source: "PHARMACY_NOTES", target: "ORDER_DISPENSE", weight: 0.06061 },
      {
        source: "ORDER_COMMENT",
        target: "ORDER_THERAP_SBSTTN",
        weight: 0.06174,
      },
      {
        source: "ORDER_THERAP_SBSTTN",
        target: "ORDER_COMMENT",
        weight: 0.06174,
      },
      {
        source: "ORDER_DISPENSE",
        target: "ORDER_THERAP_SBSTTN",
        weight: 0.06934,
      },
      {
        source: "ORDER_THERAP_SBSTTN",
        target: "ORDER_DISPENSE",
        weight: 0.06934,
      },
      { source: "ORDER_CATALOG", target: "ORDER_IV_INFO", weight: 0.12618 },
      { source: "ORDER_IV_INFO", target: "ORDER_CATALOG", weight: 0.12618 },
      {
        source: "RAD_FOLLOW_UP_CONTROL",
        target: "RAD_PROCEDURE_ASSOC",
        weight: 0.17339,
      },
      { source: "ORDER_IV_INFO", target: "ORDER_INGREDIENT", weight: 0.20379 },
      { source: "ORDER_INGREDIENT", target: "ORDER_IV_INFO", weight: 0.20379 },
    ];

    // Create the force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-50))
      .force("center", d3.forceCenter(300, 150));

    // Create the links
    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");

    // Add weight labels to the links
    // const weightLabel = svg
    //   .selectAll(".weight-label")
    //   .data(links)
    //   .enter()
    //   .append("text")
    //   .attr("class", "weight-label")
    //   .attr("text-anchor", "middle")
    //   .attr("dy", "-0.5em")
    //   .text((d) => d.weight);

    // Create the nodes
    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .attr("fill", (d) => d.color);

    // Add labels to the nodes
    const label = svg
      .selectAll(".label")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .text((d) => d.id);

    // Add the arrowhead marker to the svg
    svg
      .append("defs")
      .selectAll("marker")
      .data(["arrowhead"])
      .enter()
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 20)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5");

    // Add arrowhead marker to the svg
    svg
      .append("defs")
      .selectAll("marker")
      .data(["arrowhead"])
      .enter()
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 25)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5");

    // Add the text for weight to the edges
    const text = svg
      .selectAll(".text")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "text")
      .text((d) => d.weight);

    // Update the position of the text on each tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label.attr("x", (d) => d.x).attr("y", (d) => d.y);

      text
        .attr("x", (d) => (d.source.x + d.target.x) / 2)
        .attr("y", (d) => (d.source.y + d.target.y) / 2);
    });
  }, []);

  return (
    <div>
      <svg ref={svgRef} width="400" height="258"></svg>
      {/* <div>
        <Link to="/graphs">
          <button className="btn" onClick={handleClick}>
            OK
          </button>
        </Link>
      </div> */}
    </div>
  );
}

export default ViewGraph;
