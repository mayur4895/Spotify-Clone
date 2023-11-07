 
 
// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3399e12fb5msh527df92c7add037p1dc1e7jsn92c012d24be1',
//       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3399e12fb5msh527df92c7add037p1dc1e7jsn92c012d24be1');
            headers.set('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
        },
    }),
    endpoints: (builder) => ({
        getTracks: builder.query({
            query: () => '/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=100&numberOfTopResults=50',
        }),
       
      
    }),
});
 
export const { useGetTracksQuery    } = spotifyApi;
 