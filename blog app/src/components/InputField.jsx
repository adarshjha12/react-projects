import React, {useId} from 'react'

const InputField = React.forwardRef( ({
  type = 'text',
  label,
  placeholder = 'enter text',
  name,
  classname = '',
  id,
  ...props
}, ref ) => {

  const id = useId()

  return (
    <div> 
      {label && <label 
        className='inline-block mb-2 pl-2'
        htmlFor={id}>
        {label}
      </label>}

      <input 
        type={type}
        placeholder={placeholder}
        name={name}
        id={id} 
        className={`rounded-md pl-2 text-black ${classname}`}
        ref={ref} 
        {...props}
      />
    </div>
  )
}) 



export default InputField