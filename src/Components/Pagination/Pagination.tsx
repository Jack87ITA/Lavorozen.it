import React from 'react'
import { Pagination as Pag } from 'antd'

type Props = {
    total: number,
    current: number,
    onChange: (page: number) => void
}

const Pagination = (props: Props) => {
  return (
    <Pag showSizeChanger={false} current={props.current} onChange={props.onChange} total={props.total}/>
  )
}

export default Pagination