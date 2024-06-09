import React from 'react';

export default function RightArrow({ fill, width, height }) {

  return (

	<svg
		fill={fill}
		width={width}
		height={height}
		viewBox='0 0 24 24'
		id='right-arrow-direction-square'
		data-name='Flat Line'
		xmlns='http://www.w3.org/2000/svg'
		className='icon flat-line'>
			<path
				id='secondary'
				d='M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3Zm-3.38,9.69L13.5,14.83a1,1,0,0,1-1.5-.69V9.86a1,1,0,0,1,1.5-.69l3.12,2.14A.82.82,0,0,1,16.62,12.69Z'
				style={{fill: '#7ab6cb',strokeWidth: 2, }}
			>
			</path>
			<path
				id='primary'
				d='M7,12h5m4.63-.69L13.5,9.17a1,1,0,0,0-1.5.69v4.28a1,1,0,0,0,1.5.69l3.12-2.14A.82.82,0,0,0,16.63,11.31ZM4,21H20a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V20A1,1,0,0,0,4,21Z'
				style={{fill: 'none', stroke: '#003243', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2}}
			>
			</path>
	</svg>
  )
}
