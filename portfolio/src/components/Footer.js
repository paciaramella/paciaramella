import React from 'react';
import { Typography, Link } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E2022', color: '#A5A6F6', padding: '20px' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} paciaramella
      </Typography>
    </footer>
  );
}

export default Footer;
