// ! audio

let audio = document.getElementById('audio')

audio.play() // ! почне грати
audio.pause() // ! пауза 

audio.currentTime = 62 // ! вказуємо з якого часу почне грати трек
audio.volume = 0.5 // ! так регулюєм звук
audio.loop = true // ! зациклюєм трек
audio.muted = true // ! так виключаєм звук
audio.paused // ! перевіряємо чи трек на паузі

audio.onload // ! означає що трек завантаживився повністю
audio.onended // ! коли трек закінчить вона спрацює
audio.oncanplay // ! означає шо трек можна запустити і що мінімуму завантажився 



// ! Observer - 
