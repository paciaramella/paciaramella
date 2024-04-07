import React from 'react';
import { Paper } from '@mui/material';
import '../styles/Album.css';

function Album(props) {
    return (
        <Paper className='paper'>
            <img src={props.album.cover} />
            <p>{props.album.name}</p>
            <p>{props.album.artist}</p>
        </Paper>
    )
}

export default Album;