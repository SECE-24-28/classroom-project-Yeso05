import React from 'react'

export const Content = ({frnds}) =>
     {
  return (
    <div>
        <ul>
            {
                frnds.map((val)=>(
                    <li >{val}</li>
                )
                )
            }
        </ul>
    </div>
  )
}
export default Content
