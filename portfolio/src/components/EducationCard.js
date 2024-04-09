import React from "react";
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/EducationCard.css';  
import '../App.css';

function EducationCard(props) {
    const { content } = props;
    const right = content?.right;

    return (
     <Card className="flip-card">
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
                <p style={{fontSize: 15}}>{content.backText}</p>
              </Typography>
            </CardContent>
          </div>
        </div>
      </Card>
    );
};

export default EducationCard;