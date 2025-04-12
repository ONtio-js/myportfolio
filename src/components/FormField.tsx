

const FormField = ({label, type, name, placeholder}: {label: string, type: string, name: string, placeholder: string}) => {
  return (
    <div className='flex flex-col gap-y-1 my-4 '>
        <label htmlFor={name} className='text-gray-500 font-medium my-1'>{label}</label>
        <input type={type} name={name} id={name} className='w-full border border-gray-300 rounded-md p-2 px-5 focus:outline-none focus:border-gray-300 focus:ring-0 focus:ring-gray-300' placeholder={placeholder} />
    </div>
  )
}

export default FormField