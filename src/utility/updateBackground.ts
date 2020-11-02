import axios from 'axios';
import seattle from '../asset/seattle.jpg';
import seattleSmall from '../asset/seattle-small.jpg';

//const mainContainer = document.getElementById('main-container') ! as HTMLDivElement;

const backgroundContainer = document.getElementById('background-container')! as HTMLDivElement;

const changeBackground = (largeBG:string,thumbnail:string):void => {
    backgroundContainer.innerHTML = "";
    const lazingLoadBG = `
    <figure data-href=${largeBG} class="progressive replace " id="hd">
        <img src=${thumbnail} loading="lazy" alt="background" class="preview reveal" id="preview">
</figure>`
    backgroundContainer.innerHTML = lazingLoadBG;
    
}


export function updateBackground(cityName:string){
    let background:string;
    let backgroundPreview:string;

    if(cityName.split(",")[0].toLowerCase() === "seattle"){
        background = seattle
        backgroundPreview = seattleSmall
        changeBackground(background,backgroundPreview)
    }else{

    axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`

    },
    params:{
        page:1,
        query:cityName.split(",")[0],
        orientation:"landscape"
    }}
    ).then(response=>{
        //console.log(response.data.results[0].urls.full);
         background = response.data.results[0].urls.raw + "&w=1800";
         backgroundPreview = response.data.results[0].urls.thumb;
        //mainContainer.style.backgroundImage = `url(${background})`
        changeBackground(background,backgroundPreview)
       

    }).catch(error=>{
        console.log(error)
    })
}
}