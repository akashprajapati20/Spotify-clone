console.log("spotify app");

// initialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemPlay = document.getElementsByClassName('songItemPlay');
let songItem =Array.from(document.getElementsByClassName('songItem'));



let songs= [ 
    {songsName:"Until i found you-Stephan,Beihold ",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songsName:"Kill Bill-SZA",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songsName:"Dandelions-Ruth B",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songsName:"I Wish-One Direction",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songsName:"I Want-One Direction",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songsName:"Blank spaces-Taylor Swift",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songsName:"Hold the applause-Mira Housey",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songsName:"Miley Cyrus - Flowers ",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
]
// audioElement.play();

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songsName;
});

//play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
//update seekbar
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100 ;
})

const makeAllPlays=()=>{
    Array.from(songItemPlay).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(songItemPlay).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex  = parseInt(e.target.id);
        
        if(audioElement.paused){
            makeAllPlays();
           e.target.classList.remove('fa-play');
           e.target.classList.add('fa-pause');
           audioElement.src = `songs/${songIndex}.mp3`;
           masterSongName.innerText =songs[songIndex-1].songsName;
           audioElement.currentTime=0;
           audioElement.play();
        
           gif.style.opacity=1;
           masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');}

        else{makeAllPlays();
            e.target.classList.remove('fa-pause');
           e.target.classList.add('fa-play');audioElement.src = `songs/${songIndex}.mp3`;
           masterSongName.innerText =songs[songIndex-1].songsName;
           audioElement.currentTime=0;
           audioElement.pause();
        
           gif.style.opacity=1;
           masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        }
    })
})


document.getElementById('next').addEventListener('click',()=>{
      if(songIndex>=8  ){
        songIndex=0;
      }
      else{
        songIndex+=1;
      }
      audioElement.src = `songs/${songIndex}.mp3`;
           audioElement.currentTime=0;
           audioElement.play();
           masterSongName.innerText =songs[songIndex-1].songsName;
           masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
      if(songIndex<=0  ){
        songIndex=0;
      }
      else{
        songIndex-=1;
      }
      audioElement.src = `songs/${songIndex}.mp3`;
           audioElement.currentTime=0;
           audioElement.play();
           masterSongName.innerText =songs[songIndex-1].songsName;
           masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

            
document.getElementById('muteOption').addEventListener('click',()=>{
    muteOption.classList.remove('fa-volume');
    muteOption.classList.add('fa-volume-xmark');
})
