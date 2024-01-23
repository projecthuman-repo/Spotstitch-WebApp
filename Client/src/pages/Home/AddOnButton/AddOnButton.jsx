import React from 'react'

const AddOnButton = ({icon, addAttachment}) => {
  return (
    <button className="btn nopadding w-auto"
			onClick={addAttachment}> {icon}
    </button>
  )
}

export default AddOnButton