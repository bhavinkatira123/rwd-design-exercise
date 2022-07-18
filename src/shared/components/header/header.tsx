// import Logo from 'assets/logo.png';

const links = [
	{name: 'Buy', link: '/'},
	{name: 'Rent', link: '/'},
	{name: 'Sold', link: '/'},
	{name: 'New Developments', link: '/'},
	{name: 'Price Estimator', link: '/'},
	{name: 'Find Agents', link: '/'},
	{name: 'Auction Results', link: '/'},
	{name: 'Advice', link: '/'},
	{name: 'News', link: '/'},
	{name: 'Our Network', link: '/'},
	{name: 'Loans', link: '/'},
	{name: 'Conveyancing', link: '/'},
];

const Header = () => {
	return (
		<div className='header'>
			{links.map((ele, index) => {
				return (
					<button key={index} className='p-3 text-gray-500'>
						{ele.name}
					</button>
				);
			})}

			<button className='p-3 float-right text-gray-500 '>Sign In</button>
		</div>
	);
};

export default Header;
