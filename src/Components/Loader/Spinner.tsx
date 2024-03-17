import React from 'react'
import { Puff } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <Puff
            height="80"
            width="80"
            radius={2}
            color="#F5793D80"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}

export default Spinner
