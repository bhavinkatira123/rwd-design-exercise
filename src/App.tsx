import React from 'react';

import Header from './shared/components/header/header';

import Property from 'features/property/components/property';

const App = () => {
	return (
		<div className='p-4 overflow-hidden'>
			<Header />
			<Property />
		</div>
	);
};

export default App;
