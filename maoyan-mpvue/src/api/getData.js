import axios from 'axios'
export const movies = axios.get('https://www.easy-mock.com/mock/5b3d8905b5c00d5315cf37e9/maoyan/maoyan#!method=get')
.then( (res) => console.log(res.data))
.catch((err)=>{
  console.log(err)
})
