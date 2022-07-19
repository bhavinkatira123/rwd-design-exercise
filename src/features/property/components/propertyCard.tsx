interface Props {
	image: string;
	title: string;
	city: string;
	price: number;
}

const PropertyCard = (props: Props) => {
	return (
		<div className='property-card lg:rounded-[10px] md:rounded-[8px] rounded-[4px]'>
			<div className='overflow-hidden lg:rounded-image_radius md:rounded-tablet_image_radius rounded-mobile_image_radius cursor-pointer'>
				<img
					className='object-cover lg:min-h-[310px] lg:max-h-[310px] md:min-h-[250px] md:max-h-[250px] min-h-[200px] max-h-[200px] w-full hover:scale-110 transition-all duration-500'
					src={props.image}
					alt='property-img'
				/>
			</div>
			<div className='p-4'>
				<label className='font-medium text-xl leading-8'>{props.title}</label>
				<p className='text-gray-500 text-lg leading-8'>{props.city}</p>
				<span className='text-gray-400 text-base leading-8'>from ${props.price}</span>
			</div>
		</div>
	);
};

export default PropertyCard;
