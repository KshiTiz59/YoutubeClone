import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'


import  Videos from "./Videos"
import ChannelCard from './ChannelCard'
import { fetchfromapi } from '../utils/fetchfromapi'

const ChannelDetail = () => {
const [channelDetail ,setchannelDetail] = useState(null); 
const [videos, setvideos]  = useState([]) ;


const {id} = useParams() ;
// console.log(channelDetail , videos);
useEffect(()=>{
fetchfromapi(`channels?part=snippet&id=${id}`).then((data)=>{
  setchannelDetail(data?.items[0])
})
  fetchfromapi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{
    setvideos(data?.items)
})
}, [id])

  return (
   <Box minHeight="95vh">
<Box>
 < div style={{background: "rgb(34,193,195)" ,
background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(156,45,253,1) 100%)" , zIndex:10, height:'250px'}}/>
<ChannelCard channelDetail={channelDetail} marginTop="-115px"/>
</Box>
<Box display="flex" p ="2">
<Box sx={{mr:{sm:"100px"}}}/>
  <Videos videos={videos}/>
</Box>
   </Box>
  )
}

export default ChannelDetail
