import React from 'react';

function Logo() {
  const logoStyles = {
    fontFamily: "'Martian Mono', monospace, 'Mooli', sans-serif, 'Roboto', sans-serif",
    fontSize: '3rem', // Adjust the font size as needed
    fontWeight: 'bold', // You can adjust the font weight
    color:"gray.500"
  };

  return (
    <h2 style={logoStyles}>Yumsies !</h2>
  );
}

export default Logo;
