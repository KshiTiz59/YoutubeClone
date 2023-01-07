import React, { useEffect ,useState } from 'react'
import { Box,  Typography } from "@mui/material";
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchfromapi } from '../utils/fetchfromapi';

const SearchDetail = () => {
const [videos ,setVideos] = useState([]) ;
const {searchTerm} = useParams() ;


useEffect(() => {
  fetchfromapi(`search?q=${searchTerm}&part=snippet`).then((data)=>{
    setVideos(data.items).catch(err=>console.log(err))
  })
}, [searchTerm])


  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Search Results for:<span style={{ color: "#FC1503" }}> {searchTerm} </span>Videos
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchDetail