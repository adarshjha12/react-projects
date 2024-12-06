import React, {useId} from 'react'

function SelectBox({
    options,
    label,
    classname = '',
    ...props
}, ref) {

  const id = useId()

  return (
    <div>
      {label && <label htmlFor={id}> </label>}

      <select 
        name="SelectBox" 
        className='bg-red-600 text-white px-2' 
        id={id}
        ref={ref}
        {...props}
      >
        {options?.map((opt) => (
          <option 
            value={opt}
            key={opt}
          >
            {opt}
          </option>
        )) }
      </select>
    </div>
  )
}

export default React.forwardRef(SelectBox)