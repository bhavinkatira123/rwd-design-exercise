import {useState} from 'react';
import {Cross, Logo, Menu, User} from 'shared/svg/svg';

const websiteHeaderOptions = [
	{name: 'Buy', link: '/'},
	{name: 'Rent', link: '/'},
	{name: 'Sold', link: '/'},
	{name: 'New Developments', link: '/'},
	{name: 'Price Estimator', link: '/'},
	{name: 'Find Agents', link: '/'},
	{name: 'Auction Results', link: '/'},
	{name: 'Advice', link: '/'},
	{name: 'News', link: '/'},
	// {name: 'Our Network', link: '/'},
	// {name: 'Loans', link: '/'},
	// {name: 'Conveyancing', link: '/'},
];

const responsiveHeaderMainOptions = [
	{name: 'Buy', link: '/'},
	{name: 'Rent', link: '/'},
	{name: 'Sold', link: '/'},
	{name: 'New Developments', link: '/'},
	{name: 'Price Estimate', link: '/'},
];

const responsiveHeaderSubOptions = [
	{name: 'Businesses', link: '/'},
	{name: 'Rural', link: '/'},
	{name: 'Holiday Rentals', link: '/'},
	{name: 'Find Agents', link: '/'},
	{name: 'Auction Results', link: '/'},
	{name: 'Advice', link: '/'},
	{name: 'News', link: '/'},
	{name: 'Loans', link: '/'},
	{name: 'Conveyancing', link: '/'},
	{name: 'About Us', link: '/'},
	{name: 'Contact Us', link: '/'},
	{name: 'Terms of Use', link: '/'},
	{name: 'Privacy Policy', link: '/'},
];

const Header = () => {
	const [isMenuOpen, setISMenuOpen] = useState(false);

	return (
		<>
			{isMenuOpen && (
				<div className='w-full h-full bg-white fixed top-[74px] left-0 overflow-auto'>
					<div className='border-y-gray border-solid border-y'>
						<div className='my-5'>
							{responsiveHeaderMainOptions.map((ele) => {
								return <li className='p-3 pl-4 text-gray-500'>{ele.name}</li>;
							})}
						</div>
					</div>
					<div className='pt-5 mb-24'>
						{responsiveHeaderSubOptions.map((ele) => {
							return <li className='p-3 pl-4 text-gray-500'>{ele.name}</li>;
						})}
					</div>
				</div>
			)}
			<div className='header lg:border-none lg:justify-start justify-between border-b-black border-solid border-b-2'>
				<div className='text-left lg:hidden'>
					{isMenuOpen ? (
						<Cross onClick={() => setISMenuOpen(!isMenuOpen)} />
					) : (
						<Menu
							onClick={() => {
								setISMenuOpen(!isMenuOpen);
								document.body.style.overflow = 'hidden';
							}}
						/>
					)}
				</div>
				<Logo />
				<div className='hidden lg:flex'>
					{websiteHeaderOptions.map((ele, index) => {
						return (
							<li key={index}>
								<a key={index} href={ele.link} className='p-1 lg:p-3 text-gray-500'>
									{ele.name}
								</a>
							</li>
						);
					})}
					<li className='absolute right-0 text-gray-500 '>
						<a href='/' className='p-1 lg:p-3 text-gray-500'>
							Sign In
						</a>
					</li>
				</div>
				<div className='lg:hidden '>
					<User />
				</div>
			</div>
		</>
	);
};

export default Header;
