import React from 'react'
import arrow from "../../../assets/homePage/top_right_arrow.png"

const DetailBtn = ({content,className}) => {
  return (
    <button className={`${className} text-sm border border-orange-500 text-orange-500 flex items-center gap-3 rounded-xl px-2 py-1`}>
        {content} <img  src={arrow} alt="" />
    </button>
  )
}

export default DetailBtn