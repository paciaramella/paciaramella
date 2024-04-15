import React, { useState } from "react";
import "../App.css";
import { Tabs, Tab } from "@mui/material";
import { lighten } from "polished";
import ExperienceTab from "./ExperienceTab";

const TabMenu = () => {
  const [selTab, setSelTab] = useState(0);

  const handleChange = (event, newTab) => {
    setSelTab(newTab);
  };

  const labels = ["Experience", "Skills", "Interests"];
  const brighterColor = lighten(0.1, "#1D2824"); // Increase the lightness by 10%

  return (
    <>
      <div className="vertical-carousel">
        <Tabs
          value={selTab}
          onChange={handleChange}
          orientation="vertical"
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              left: 0, // Move the indicator to the top
              right: "auto", // Ensure the bottom is set to 'auto' to override default positioning
              backgroundColor: brighterColor, // Change the color of the tabs indicator
              outline: `1px solid ${brighterColor}`,
            },
          }}
        >
          {labels.map((label) => {
            return (
              <Tab
                label={label}
                style={{ fontFamily: "Khand-Bold " }}
                sx={{
                  color: "#F0F3FA", // Text color when tab is not selected
                  "&.Mui-selected": {
                    color: "#F0F3FA", // Text color when tab is selected
                  },
                  "&.hover": {
                    backgroundColor: brighterColor, // Change the color of the tabs indicator]
                  },
                }}
              />
            );
          })}
        </Tabs>
      </div>
      <div style={{ marginTop: "20px" }}>
        {/* Content for each tab */}
        {selTab === 0 && <ExperienceTab />}
        {selTab === 1 && <div></div>}
        {selTab === 2 && <div></div>}
      </div>
    </>
  );
};

export default TabMenu;
