import {Formik, Field, ErrorMessage, FieldArray, FormikValues} from 'formik';
import * as Yup from 'yup';

import {fieldErrorMessage, renderInput} from 'shared/components/form/inputTypes';
import {COUNTRY, STATE} from 'shared/constants/constants';

const initialValues = {
	firstName: '',
	lastName: '',
	country: 0,
	email: '',
	phone: '',
	gender: 'MALE',
	state: '',
	emailNotification: '',
	mobileNotification: '',
};

const PropertyForm = () => {
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validateOnBlur={true}
				validateOnChange={true}
				onSubmit={(values: FormikValues) => console.log(values, 'values')}
				validationSchema={FormValidationSchema}
			>
				{({handleSubmit, values, setFieldValue}) => (
					<form onSubmit={handleSubmit}>
						<fieldset>
							<div className='flex flex-col lg:flex-row'>
								<div className='property-form'>
									<h1 className='font-bold text-4xl'>Primary Form</h1>
									<Field
										type='text'
										label='First Name'
										placeholder='First Name'
										component={renderInput}
										name='firstName'
										autoComplete='off'
									/>
									<ErrorMessage name='firstName' component={fieldErrorMessage} />
									<Field
										type='text'
										label='Last Name'
										placeholder='Last Name'
										component={renderInput}
										name='lastName'
										autoComplete='off'
									/>
									<ErrorMessage name='lastName' component={fieldErrorMessage} />
									<div className='py-3'>
										<select
											onChange={(e) => setFieldValue('country', e.target.value)}
											className='w-full p-2 rounded outline-none'
											name='country'
											id='country'
										>
											<option value=''>Select</option>
											{COUNTRY.map((country, index) => (
												<option key={index} value={country.id}>
													{country.name}
												</option>
											))}
										</select>
									</div>
									<ErrorMessage name='country' component={fieldErrorMessage} />
									<Field type='text' label='Email' placeholder='Email' component={renderInput} name='email' autoComplete='off' />
									<ErrorMessage name='email' component={fieldErrorMessage} />
									<Field
										type='text'
										label='Phone Number'
										placeholder='Phone Number'
										component={renderInput}
										name='phone'
										autoComplete='off'
									/>
									<ErrorMessage name='phone' component={fieldErrorMessage} />
									<div className='text-left py-3'>
										<label className='mr-6'>Gender: </label>
										<input
											type='radio'
											id='male'
											name='gender'
											value='MALE'
											onChange={(e) => setFieldValue('gender', e.target.value)}
										/>
										<label className='px-2' htmlFor='male'>
											MALE
										</label>
										<input
											className='ml-8'
											type='radio'
											id='css'
											name='gender'
											value='FEMALE'
											onChange={(e) => setFieldValue('gender', e.target.value)}
										/>
										<label className='px-2' htmlFor='css'>
											FEMALE
										</label>
									</div>
								</div>
								<div className='property-form lg:ml-10 lg:mt-0 mt-10'>
									<h1 className='font-bold text-4xl'>Secondary Form</h1>
									<div className='py-3'>
										<select
											onChange={(e) => setFieldValue('state', e.target.value)}
											className='w-full p-2 rounded outline-none'
											name='state'
											id='state'
										>
											<option value=''>Select</option>
											{STATE.map((state, index) => {
												if (state.country_id === Number(values.country)) {
													return (
														<option key={index} value={state.id}>
															{state.name}
														</option>
													);
												}
												return null;
											})}
										</select>
									</div>
									<div>
										<label className='switch'>
											<input className='w-0 h-0' type='checkbox' />
											<span className='switch-slider'></span>
										</label>
									</div>
									<div>Switch</div>
								</div>
							</div>
							<div className='text-center py-7'>
								<button type='submit' className='bg-yellow-600 text-white px-5 py-2 rounded'>
									Submit
								</button>
							</div>
						</fieldset>
					</form>
				)}
			</Formik>
		</div>
	);
};

const FormValidationSchema = Yup.object().shape({
	firstName: Yup.string().min(3).max(30).required('First Name is required').strict(true),
	lastName: Yup.string().min(3).max(30).required('Last Name is required').strict(true),
	country: Yup.string().required('Country is required').strict(true),
	email: Yup.string().email().required('First Name is required').strict(true),
	phone: Yup.string().required('Phone Number is required').strict(true),
	state: Yup.string().required('State is required').strict(true),
});

export default PropertyForm;
