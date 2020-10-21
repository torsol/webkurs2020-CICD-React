import React from 'react'
import vake from './vake.png';

const styles = {
    height: '500px',
    width: '100vw',
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px',
  };

const Header = () => {
    return (
        <div style={styles}>
            <img src={vake} alt="Logo" />
            <header>AIS-signaler hentet fra VAKE og visualisert i mapbox (stor fil tar lang tid)</header>
        </div>
    )
}

export default Header
