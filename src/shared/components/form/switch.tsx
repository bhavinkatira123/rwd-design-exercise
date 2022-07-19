interface Props {
	checked: boolean;
	name: string;
	label: string;
	setFieldValue: any;
}

const Switch = (props: Props) => {
	return (
		<div className='flex items-center w-full my-10'>
			<label htmlFor={props.name} className='flex items-center cursor-pointer'>
				<label className='text-left font-medium w-[200px]'>{props.label} : </label>
				<div className='relative'>
					<input
						checked={props.checked}
						id={props.name}
						type='checkbox'
						onChange={() => props.setFieldValue(props.name, !props.checked)}
						className='sr-only'
					/>
					<div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
					<div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
				</div>
			</label>
		</div>
	);
};

export default Switch;
