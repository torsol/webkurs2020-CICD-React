import React from 'react'
import vake from './vake.png';

const styles = {
    height: '200px',
    width: '100vw',
    padding: '10px',
    textAlign: 'center',
    fontSize: '30px',
  };

  const img_style = {
    height: '50%',
    widt: '50%'

  };

const Header = () => {
    return (
        <div style={styles}>
            <img style={img_style} src={vake} alt="Logo" />
            <h4>AIS-signaler hentet fra VAKE og visualisert i mapbox, viktig del av min prosjektoppgave</h4>
        </div>
    )
}

export default Header
