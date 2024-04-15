import React, { useState } from "react";
import "../App.css";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography } from "@mui/material";

const experienceVals = [
  {
    company: "NCR Voyix",
    title: "Software Engineer",
    dateRange: "2022 - Present",
    desc: "As part of the retail-loyalty team, build a UI that grants marketing professionals a site to create promotions, loyalty programs, coupons, stores, etc. and connect this data to the point of sale.",
  },
  {
    company: "UPS",
    title: "Datical Database Administrator (Co-Op)",
    dateRange: "2021 - 2022",
    desc: "Deployed UPS projects onto Datical databases , gaining hands-on experience with CI-CD workflows.",
  },
];
const TitleSection = (props) => {
  const { obj } = props;
  return (
    <>
      <div className="exp-tab">
        <Typography style={{ fontFamily: "Khand-Bold" }}>
          {obj.dateRange}
        </Typography>
        <CircleIcon
          sx={{
            width: "12px",
            height: "12px",
            marginLeft: "8px",
            marginTop: "4px",
            marginRight: "8px",
          }}
        />
        <Typography style={{ fontFamily: "Khand-Bold" }}>
          {obj.title}
        </Typography>
        <CircleIcon
          sx={{
            width: "12px",
            height: "12px",
            marginLeft: "8px",
            marginTop: "4px",
            marginRight: "8px",
          }}
        />
        <Typography style={{ fontFamily: "Khand-Bold" }}>
          {obj.company}
        </Typography>
      </div>
      <div className="exp-desc">
        <Typography style={{ fontFamily: "Khand-Light" }}>
          {obj.desc}
        </Typography>
      </div>
    </>
  );
};

const ExperienceTab = () => {
  return (
    <div className="exp-section">
      {experienceVals.map((obj) => {
        return <TitleSection obj={obj} />;
      })}
    </div>
  );
};

export default ExperienceTab;
