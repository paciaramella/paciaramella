import React from "react";
import { makeStyles } from '@mui/styles';
import styles from '../styles/EducationCard.css';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

const useStyles = makeStyles({
    edu: styles,
});

  
function EducationCard() {
    const classes = useStyles();
    const edu_info = {
        college: 'University of Georgia',
        gpa: '3.86',
        major: 'Computer Science',
        minor: 'Business',
        emphasis: 'Applied Data Science',
    }

    const CardComponent = (
        <>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {edu_info.college}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </>
    );

    return (
      <div className="edu">
        <Card variant="outlined">{CardComponent}</Card>
      </div>  
    );
};

export default EducationCard;