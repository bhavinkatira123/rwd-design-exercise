import React from 'react';
import {FieldProps} from 'formik';
// import {Moment} from 'moment';
// import {Eye, HideEye} from 'shared/icons/icons';

interface TextFieldProps {
	type: string;
	label: string;
	placeholder: string;
	className: string;
	autoComplete: string;
	multiline: boolean;
	rows: string;
	disabled: boolean;
	// minDate?: Moment | null;
	autoFocus?: boolean;
	disablePast?: boolean;
	showMonthYear?: boolean;
	format?: string;
	isLabel?: boolean;
}

/**
 * common input field component
 * @param props { field, form: { touched, errors }, ...props }
 */
const renderInput = (props: FieldProps<any> & TextFieldProps) => {
	const field = props.field;

	return (
		<div className='py-3'>
			{/* <label className='font-weight-400 font-size-18' style={{color: '#8E8EA1'}}>
				{props.placeholder}
			</label> */}
			<input
				type={props.type}
				name={field.name}
				value={field.value}
				placeholder={props.placeholder}
				className={'w-full p-2 rounded outline-none'}
				onChange={field.onChange}
				onBlur={field.onBlur}
				autoComplete={props.autoComplete}
				disabled={props.disabled ? props.disabled : false}
				autoFocus={props.autoFocus}
			/>
		</div>
	);
};

/**
 * common field error message component
 * @param props
 */
const fieldErrorMessage = (props: any) => <span className='Error'>{props.children}</span>;

export {renderInput, fieldErrorMessage};
