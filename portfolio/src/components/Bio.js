import React from "react";
import '../App.css';
import '../fonts.css'
import { Typography, IconButton } from '@mui/material';
import linkedin from '../svgs/linkedin-white.svg';
import github from '../svgs/github-white.svg';
import gmail from '../svgs/gmail-white.svg';

const Bio = () => {
    return (          <div className='about'>
    <Typography style={{
      color: '#FFF8DC',
      fontFamily: 'Khand-Bold',
      fontSize: 48,
      marginTop: '25px',
      marginLeft: '25px'

    }}>
      Parker Ciaramella
    </Typography>
    <Typography style={{
      color: '#FFF8DC',
      fontFamily: 'Khand-Bold',
      fontSize: 24,
      marginLeft: '25px',
      marginBottom: '16px'
    }}>
      Frontend Engineer
    </Typography>
    <Typography style={{
      color: '#FFF8DC',
      fontFamily: 'Khand-Light',
      fontSize: 16,
      marginLeft: '25px',
      marginBottom: '100px'
    }}>
      I like to learn.
    </Typography>
    <div className='bio-div'>
      <Typography style={{
        color: '#FFF8DC',
        fontFamily: 'Khand-Regular',
        fontSize: 16,
        marginLeft: '25px',
        marginBottom: '24px'
      }}>
          In 2017, I had one year left in high school and no idea  what I wanted to do as a career.  That was until my physics teacher recommended I take computer science as my elective during my senior year.
      </Typography>
      <Typography style={{
        color: '#FFF8DC',
        fontFamily: 'Khand-Regular',
        fontSize: 16,
        marginLeft: '25px',
        marginBottom: '24px'
      }}>
          Now, I am a frontend engineer working on a user interface for NCR Voyix. Everyday, I am striving to learn new skills and information that will sharpen me as a developer.</Typography>
      <Typography style={{
        color: '#FFF8DC',
        fontFamily: 'Khand-Regular',
        fontSize: 16,
        marginLeft: '25px'
      }}>
        Outside of work and software development, I am a hobbyist in swimming, coffee, and fragrances and I volunteer at the Fulton County Animal Shelter.</Typography>
    </div>
    {/* CHANGE SVGs and ADD INSTAGRAM!*/}
    <div className='links'>
      <IconButton style={{marginRight: '16px'}} children={
        <img src={github} alt="logo"></img>
      }/>
      <IconButton style={{marginRight: '20px'}} children={
        <img src={linkedin} alt="logo"></img>
      }/> 
     <IconButton children={
        <img src={gmail} alt="logo"></img>
      }/>
    </div>
  </div>);
}

export default Bio;