import axios from "axios";
const base_url =  'https://youtube-v31.p.rapidapi.com'; 

const options = {

  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd5b7d1e676msh052563ca3875628p152f44jsnca03cd34b509',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchfromapi =async (url)=>{
const {data} = await axios.get(`${base_url}/${url}`, options);
return data ;
}