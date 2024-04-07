import React, { useState } from "react";
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import '../styles/EducationCard.css';  
import '../App.css';

function EducationCard(props) {
    const { content } = props;
    const right = content?.right;

    return (
     <Card className="flip-card" sx={right ? {  marginLeft: '130px'} : {} }>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <CardContent>
                {content?.icon ? (<img src={content?.icon} alt={"logo"} />) : (
                    <p style={{fontSize: 20}}>Loren ipsum</p>
                )}   
            </CardContent>
          </div>
          <div className="flip-card-back">
            <CardContent>
              <Typography variant="h5" component="div">
                <p>{content.backText}</p>
              </Typography>
            </CardContent>
          </div>
        </div>
      </Card>
    );
};

export default EducationCard;