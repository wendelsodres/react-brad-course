import React, { useEffect, memo} from 'react'
import Container from './Container'

const Page = (props) => {

   useEffect(() =>{
      document.title = `${props.title} | React App`
      window.scrollTo(0,0)
   },[])

   return (<Container wide={props.wide}>{props.children}</Container>
   )
}

export default memo(Page)