import PropertyCard from './propertyCard';

import OLEA from 'assets/olea.jpg';
import LiveCity from 'assets/live_city.jpg';
import Victoria from 'assets/victoria_albert.jpg';
import PropertyForm from './propertyForm';

const properties = [
	{image: OLEA, title: 'OLEA', city: 'caulfield North, Victoria', price: 50000},
	{image: LiveCity, title: 'Live City', city: 'Footscray, Victoria', price: 70000},
	{image: Victoria, title: 'Victoria & ALbert, Broadbeach', city: 'Broadbeach, Queensland', price: 90000},
];

const Property = () => {
	return (
		<div>
			{/* repeat(auto-fill, minmax(460px, 1fr)) */}
			<h1 className='font-medium text-left text-3xl py-3'>Australia's best investment property deals</h1>
			<div className='property-container' style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
				{properties.map((property, index) => (
					<PropertyCard key={index} title={property.title} city={property.city} price={property.price} image={property.image} />
				))}
			</div>
			<PropertyForm />
		</div>
	);
};

export default Property;
