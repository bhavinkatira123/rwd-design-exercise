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
		<div className='mt-3'>
			<h1 className='font-medium text-left text-2xl sm:text-3xl'>Australia's best investment property deals</h1>
			<div className='property-container md:grid-cols-tablet_responsive xl:grid-cols-auto sm:grid-cols-mobile_responsive'>
				{properties.map((property, index) => (
					<PropertyCard key={index} title={property.title} city={property.city} price={property.price} image={property.image} />
				))}
			</div>
			<PropertyForm />
		</div>
	);
};

export default Property;
