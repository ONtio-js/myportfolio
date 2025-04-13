interface FormFieldProps {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	required?: boolean;
}

const FormField = ({
	label,
	type,
	name,
	placeholder,
	required,
}: FormFieldProps) => {
	return (
		<div className='flex flex-col gap-2'>
			<label
				htmlFor={name}
				className='text-gray-500 font-medium'
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				required={required}
				className='border border-gray-300 rounded-md p-5 focus:outline-none'
			/>
		</div>
	);
};

export default FormField;
