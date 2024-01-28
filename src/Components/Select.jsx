import React, {forwardRef, useId} from 'react'

function Select  (  {
    label,
    options,/////array hoga 
clasName="",
...props
},ref) {
    const id=useId()
   
  return (
    <div className=' w-full'>  {label && <label className=' block mb-1' htmlFor={id} >{label}</label>
    
} <select {...props} id={id}
 className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${clasName}`} 
 ref={ref}>
  {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
   
     </select></div>
  )
}

export default forwardRef(Select)