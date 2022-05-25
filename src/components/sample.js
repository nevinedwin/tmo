
import React, { useState } from 'react'

const Sample = () => {

    const [value, setValue] = useState('')
    console.log(value)

    return (
        <div onClick={() => setValue('nevin')}>sample</div>
    )
}

export default Sample