import React from 'react';
import downloadLogo from '../../images/download.svg';
import printLogo from '../../images/print.svg';
import './Graph.css';

export default function Graph() {
  return (
    <div className='graph-container'>
      <div className='graph-header'>
        <div className='graph-title'>Scatter Plot Graph</div>
        <div className='graph-options'>
            <div className='graph-download'>
                <img src={downloadLogo} alt='download'/>
            </div>
            <div className='graph-print'>
            <img src={printLogo} alt='print'/>
            </div>
        </div>
      </div>
      <div className='graph-plotting'>

      </div>
    </div>
  )
}
