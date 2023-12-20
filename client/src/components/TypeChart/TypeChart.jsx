import { Divider } from "antd";
import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import * as ProductService from "../../services//ProductService";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";
const TypeChart = (props) => {
  const { typeCounts } = props;
  const renderCustomAxisTick = ({ x, y, payload }) => {
    console.log("payload", payload);
    let text = "";
    switch (payload.value) {
      case `${payload.value}`:
        text = `${payload.value}`;
        break;

      default:
        text = "";
    }

    return (
      <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
        {text}
      </text>
    );
  };
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-10}
      >{`quantity: ${value}`}</text>
    );
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        marginBottom: "20px",
        borderRadius: "5px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          padding: "2% 0 0 4%",
          textTransform: "uppercase",
        }}
      >
        Quantity chart of each type of product
      </h1>
      <Divider />
      <BarChart
        key="product-type-chart"
        width={1200}
        height={400}
        data={typeCounts}
      >
        <XAxis dataKey="type" tick={renderCustomAxisTick} />
        <YAxis />
        <Bar
          dataKey="uv"
          barSize={30}
          fill="#1F2937"
          label={renderCustomBarLabel}
        />
      </BarChart>
    </div>
  );
};

export default TypeChart;
