const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();


setInterval(()=>
    {
var d = new Date(); // for now
var hr= d.getHours(); // => 9
var min = d.getMinutes(); // =>  30
var sec = d.getSeconds(); 
if(hr>12)
{
    hr = hr-12;
}
//console.log(`${hr}:${min}:${sec}`)  
document.querySelector("#Time").innerHTML = `${hr}:${min}:${sec}`;
    },1000)

let fetchData = async (rand)=>
    {
        let res = await fetch("https://type.fit/api/quotes");
        let result = await res.json();
        document.querySelector("#newq").innerHTML = `${result[rand].text}`; 
    }
setInterval(()=>{
    const rand = Math.floor(Math.random() * 6) + 1
fetchData(rand)

},4000)






const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  
   
    {
    songSrc: "./music/Titli _ Satinder Sartaaj _ Official Video _ Latest Punjabi Song 2022 _New Romantic Song__JugnuGlobal(MP3_320K).mp3",
    title: "Ashok",
    artist: "Chandel",
    imgSrc: "./img/music1.jpg",
  },
    {
    songSrc: "./music/music1.mp3",
    title: "Assalamu Alaika",
    artist: "Maher Zain",
    imgSrc: "./img/music1.jpg",
  },
  {
    songSrc: "./music/music2.mp3",
    title: "Deen Islam",
    artist: "Mohamed Tarek",
    imgSrc: "./img/music2.jpg",
  },
  {
    songSrc: "./music/music3.mp3",
    title: "Mix",
    artist: "Mohammad Tarek",
    imgSrc: "./img/music3.jpg",
  },
  {
    songSrc: "./music/music4.mp3",
    title: "Mohammad Nabina",
    artist: "Unknown",
    imgSrc: "./img/music4.jpg",
  },
  {
    songSrc: "./music/music5.mp3",
    title: "Asslamu Alaika",
    artist: "Maher Zain",
    imgSrc: "./img/music5.jpg",
  },
  {
    songSrc: "./music/music6.mp3",
    title: "Maulaya Salli o sallam Dayima",
    artist: "Sami Yusuf",
    imgSrc: "./img/music6.jpg",
  },
  {
    songSrc: "./music/music7.mp3",
    title: "Lakhon Salam",
    artist: "Atif Aslam",
    imgSrc: "./img/music7.jpg",
  },
  {
    songSrc: "./music/music8.mp3",
    title: "Assalamu Alaika",
    artist: "Maher zain",
    imgSrc: "./img/music1.jpg",
  },
  {
    songSrc: "./music/music9.mp3",
    title: "Maulaya Salli",
    artist: "Mix",
    imgSrc: "./img/music6.jpg",
  },
  {
    songSrc: "./music/music10.mp3",
    title: "Inshallah",
    artist: "Maher Zain",
    imgSrc: "./img/music10.jpg",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;


mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});


//for time functionality

function updatedate(){
    var currentDate = new Date();
    
    var hr = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
  var date = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Adding 1 to match the usual month format
  var year = currentDate.getFullYear();
if (hr>12){
    hr = hr-12;
}
if (sec < 10) {
    sec = "0"+sec;
}
    if (min < 10) {
    min = "0"+min;
}
     if (hr < 10) {
    hr = "0"+hr;
}
if (hr == 0){
	hr = 12;
}
 

    if (date < 10) {
    date = "0"+date;
}  
  if (month < 10) {
    month = "0"+month;
}
           var ampm = (currentDate.getHours() < 12) ? "AM" : "PM";
      var datestring = "Time: " +hr+ ":" +min+ ":" +sec+ " "+ampm+"    Date: " +date+"-"+month+"-"+year;
//var datestring = year+"-"+month+"-"+date+" "+hr+":"+min+":"+sec;
            //console.log(datestring);
            document.getElementById("time").innerHTML = datestring;
}


/*function append(datestring) {
    jQuery(".time").html(datestring);
}*/

updatedate();

setInterval(updatedate,1000);
