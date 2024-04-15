import React from "react";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";
import js from  '../svgs/javascript.png';
import ts from  '../svgs/typescript.svg';
import react from '../svgs/react.svg';
import nodejs from '../svgs/nodejs.svg';
import graphql from '../svgs/graphql.png';
import python from '../svgs/python.svg';
import java from '../svgs/java.svg';
import sql from '../svgs/sql.png';

import { Typography } from "@mui/material";

const data = [
    {
      value: "JavaScript / TypeScript",
      lineWidth: "510px",
      imgSrc: ts,
      margin: '5px'
    },
    {
      value: "React",
      lineWidth: "480px",
      imgSrc: react,
      margin: '110px',
    },
    {
      value: "NodeJS",
      lineWidth: "460px",
      imgSrc: nodejs,
      margin: '80px'
    },
    {
      value: "GraphQL",
      lineWidth: "440px",
      imgSrc: graphql,
      margin: '95px'
    },
    {
      value: "Python",
      lineWidth: "400px",
      imgSrc: python,
      margin: '102px'
    },
    {
      value: "Java",
      lineWidth: "300px",
      imgSrc: java,
      margin: '120px'
    },
    {
      value: "C++",
      lineWidth: "250px",
      imgSrc: '',
      margin: '98px'
    },
    {
      value: "SQL",
      lineWidth: "200px",
      imgSrc: sql,
      margin: '125px'
    }
  ];



const StatBar = (props) => {
  const { data } = props;
  const { lineWidth, value, imgSrc, margin } = { ...data };
  return (
    <div className="full-line" style={{ marginLeft: margin, marginTop: '16px' }}>
        <Typography style={{ fontFamily: "Khand-Bold", color: '#F0F3FA', marginRight: '16px' }}>{value}</Typography>
        <img src={imgSrc}  alt="logo" style={{ marginRight: '16px' }}/>
      <div
        className="line"
        style={{
          width: lineWidth,
          marginTop: '8px',
        }}
      ></div>
    </div>
  );
};

const SkillsTab = () => {
  return (
    <div className="skill-section">
      <Typography style={{ fontFamily: "Khand-Bold", color: '#F0F3FA', marginLeft: '50%'}}> Languages & Frameworks </Typography>
      {data.map((obj) => {
        return <StatBar data={obj} />
      })}
    </div>
  );
};

export default SkillsTab;
