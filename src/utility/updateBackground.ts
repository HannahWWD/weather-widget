import axios from 'axios';

const mainContainer = document.getElementById('main-container') ! as HTMLDivElement;


export function updateBackground(cityName:string){
    axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`

    },
    params:{
        page:1,
        query:cityName,
        orientation:"landscape"
    }}
    ).then(response=>{
        //console.log(response.data.results[0].urls.full);
        const background = response.data.results[0].urls.full;
        mainContainer.style.backgroundImage = `url(${background})`
    }).catch(error=>{
        console.log(error)
    })
}