import React from 'react';

interface Props {
	image: string;
	title: string;
	city: string;
	price: number;
}

const PropertyCard = (props: Props) => {
	return (
		<div className='property-card'>
			<img className='object-cover h-[400px] rounded-[12px] w-full' src={props.image} alt='property-img' />
			<div className='p-4'>
				<label className='font-medium'>{props.title}</label>
				<p className='text-gray-500'>{props.city}</p>
				{/* <span>Apartments</span> */}
			</div>
		</div>
	);
};

export default PropertyCard;
