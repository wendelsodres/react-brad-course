import React, {memo} from 'react'

const Container = (props) => {

   return (
      <div className={"container py-md-5 " + (props.wide ? '' : 'container--narrow')}>
         {props.children}
      </div>
   )
}

export default memo(Container)