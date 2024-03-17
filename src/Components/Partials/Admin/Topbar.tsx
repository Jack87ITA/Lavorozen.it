import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { BsLayoutSidebar } from 'react-icons/bs'

type Props = {
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const Topbar = (props: Props) => {
    return (
        <div className="w-full h-[50px] flex justify-between items-center p-2 bg-[#F1F1F1]">
            {/* Disclosure icon */}
            <BsLayoutSidebar
                className="cursor-pointer"
                onClick={() => {
                    props.setCollapsed((prev) => !prev)
                }}
            />
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="h-[36px] w-[36px] rounded-full overflow-hidden bg-primary"></div>
                <p>Anand</p>
                <AiOutlineDown className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Topbar
