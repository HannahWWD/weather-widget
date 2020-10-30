import axios from 'axios';

//const mainContainer = document.getElementById('main-container') ! as HTMLDivElement;

const backgroundContainer = document.getElementById('background-container')! as HTMLDivElement;



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
        const backgroundPreview = response.data.results[0].urls.thumb;
        //mainContainer.style.backgroundImage = `url(${background})`
        console.log(backgroundContainer)
        backgroundContainer.innerHTML = "";
        const lazingLoadBG = `
        <figure data-href=${background} class="progressive replace " id="hd">
            <img src=${backgroundPreview} loading="lazy" alt="background" class="preview reveal" id="preview">
    </figure>`
        backgroundContainer.innerHTML = lazingLoadBG;

    }).catch(error=>{
        console.log(error)
    })
}