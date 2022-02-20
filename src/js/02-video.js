import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player')

let currentTime

const time = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(time).then(function (seconds) {

    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(onPlayedTime, 1000));

function onPlayedTime() {
    player.getCurrentTime().then(function (seconds) {
    
        currentTime = seconds;

}).catch(function(error) {
    // an error occurred
});
    localStorage.setItem('videoplayer-current-time', currentTime)
 
    console.log('played the video!');
};
    
