const videoElement = document.getElementById('main-video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volume = document.querySelector('#volume');
const speedSelect = document.querySelector('#speed');

const videos = [
    {
        title: 'Video 1',
        artist: 'Artist 1',
        poster: 'https://i.pinimg.com/736x/11/49/42/114942d809e15fc3257ac12c871d2dba.jpg',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
        title: 'Video 2',
        artist: 'Artist 2',
        poster: 'https://placehold.co/400x220',
        src: 'https://www.w3schools.com/html/movie.mp4'
    }
    
];

let videoIndex = 0;
let isPlaying = false;
let speedValue = 1;

function loadVideo(video) {
    title.textContent = video.title;
    artist.textContent = video.artist;
    videoElement.src = video.src;
    videoElement.poster = video.poster;
}

function playVideo() {
    playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
    videoElement.play();
    isPlaying = true;
}

function pauseVideo() {
    playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
    videoElement.pause();
    isPlaying = false;
}

function nextVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    loadVideo(videos[videoIndex]);
    if (isPlaying) videoElement.play();
}

function prevVideo() {
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    loadVideo(videos[videoIndex]);
    if (isPlaying) videoElement.play();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const durationMins = Math.floor(duration / 60);
    let durationSecs = Math.floor(duration % 60);
    if (durationSecs < 10) durationSecs = `0${durationSecs}`;
    durationEl.textContent = `${durationMins}:${durationSecs}`;

    const currentMins = Math.floor(currentTime / 60);
    let currentSecs = Math.floor(currentTime % 60);
    if (currentSecs < 10) currentSecs = `0${currentSecs}`;
    currentTimeEl.textContent = `${currentMins}:${currentSecs}`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = videoElement.duration;
    if (!isNaN(duration)) {
        videoElement.currentTime = (clickX / width) * duration;
    }
}

loadVideo(videos[videoIndex]);

playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

nextBtn.addEventListener("click", nextVideo);
prevBtn.addEventListener("click", prevVideo);

videoElement.addEventListener('timeupdate', updateProgress);
videoElement.addEventListener('loadedmetadata', updateProgress);
videoElement.addEventListener('ended', nextVideo);

progressContainer.addEventListener('click', setProgress);

volume.addEventListener('input', (e) => {
    videoElement.volume = e.target.value;
});

speedSelect.addEventListener('change', (e) => {
    speedValue = parseFloat(e.target.value);
    videoElement.playbackRate = speedValue;
});