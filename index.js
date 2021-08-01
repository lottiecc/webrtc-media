const mediaStreamConstrains = {
  video: true,
  audio: true,
  echoCancellation: true,
  noiseSuppression: true,
}

const v = document.querySelector('video')

function gotLocalMediaStream(mediaStream) {
  v.srcObject = mediaStream
}

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error)
}

navigator.mediaDevices.getUserMedia(mediaStreamConstrains)
.then(gotLocalMediaStream)
.catch(handleLocalMediaStreamError)


