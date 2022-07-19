import {Formik, Field, ErrorMessage, FormikValues} from 'formik';
import * as Yup from 'yup';

import {fieldErrorMessage, renderInput} from 'shared/components/form/inputTypes';
import {COUNTRY, STATE} from 'shared/constants/constants';
import Switch from 'shared/components/form/switch';

const initialValues = {
	firstName: '',
	lastName: '',
	country: '',
	email: '',
	phone: '',
	gender: 'MALE',
	state: '',
	emailNotification: true,
	mobileNotification: true,
};

const PropertyForm = () => {
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validateOnBlur={true}
				validateOnChange={true}
				onSubmit={(values: FormikValues) => console.log(values, 'data object')}
				validationSchema={FormValidationSchema}
			>
				{({handleSubmit, values, setFieldValue}) => {
					return (
						<form onSubmit={handleSubmit}>
							<fieldset>
								<div className='flex flex-col lg:flex-row'>
									<div className='property-form'>
										<h1 className='font-bold sm:text-4xl text-2xl'>Primary Form</h1>
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
										<div className='pt-5'>
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
										<Field
											type='text'
											label='Email'
											placeholder='Email'
											component={renderInput}
											name='email'
											autoComplete='off'
										/>
										<ErrorMessage name='email' component={fieldErrorMessage} />
										<Field
											type='number'
											label='Phone Number'
											placeholder='Phone Number'
											component={renderInput}
											name='phone'
											autoComplete='off'
										/>
										<ErrorMessage name='phone' component={fieldErrorMessage} />
										<div className='text-left pt-8'>
											<label className='mr-6 font-medium'>Gender: </label>
											<input
												type='radio'
												id='male'
												name='gender'
												value='MALE'
												checked={values.gender === 'MALE'}
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
												checked={values.gender === 'FEMALE'}
												onChange={(e) => setFieldValue('gender', e.target.value)}
											/>
											<label className='px-2' htmlFor='css'>
												FEMALE
											</label>
										</div>
									</div>
									<div className='property-form lg:ml-10 lg:mt-0 mt-10'>
										<h1 className='font-bold sm:text-4xl text-2xl'>Secondary Form</h1>
										<div className='pt-5'>
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
										<ErrorMessage name='state' component={fieldErrorMessage} />
										<Switch
											checked={values.emailNotification}
											setFieldValue={setFieldValue}
											label='Email Notification'
											name='emailNotification'
										/>
										<Switch
											checked={values.mobileNotification}
											setFieldValue={setFieldValue}
											label='Mobile Notification'
											name='mobileNotification'
										/>
									</div>
								</div>
								<div className='text-center py-7'>
									<button
										type='submit'
										className='bg-[#FF6400] text-white px-5 py-2 rounded hover:bg-orange-500 transition active:bg-yellow-700'
									>
										Submit
									</button>
								</div>
							</fieldset>
						</form>
					);
				}}
			</Formik>
		</div>
	);
};

const FormValidationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(3, 'First Name must be at least 3 characters')
		.max(30, 'First Name must be at most 3 characters')
		.required('First Name is required')
		.strict(true),
	lastName: Yup.string()
		.min(3, 'Last Name must be at least 3 characters')
		.max(30, 'Last Name must be at least 3 characters')
		.required('Last Name is required')
		.strict(true),
	country: Yup.string().required('Country is required').strict(true),
	email: Yup.string().email().required('Email is required').strict(true),
	phone: Yup.number()
		.test('maxDigits', 'Phone number must be less than or equal to 10 digits', (number) => String(number).length <= 10)
		.positive('Phone Number must be a positive number')
		.required('Phone Number is required')
		.strict(true),
	state: Yup.string().required('State is required').strict(true),
});

export default PropertyForm;
