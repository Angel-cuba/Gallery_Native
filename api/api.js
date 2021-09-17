import axios from 'axios'

// 563492ad6f917000010000010ffb3472046f4752bb0477a79cee0867

export const getImage = async (searchString = 'programming') => 
  await axios.get(`https://api.pexels.com/v1/search?query=${searchString}`, {
           headers: { 
                Authorization: "563492ad6f917000010000010ffb3472046f4752bb0477a79cee0867"
                },
           })
       