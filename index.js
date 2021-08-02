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

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log('enumerateDevices not supported.')
}

navigator.mediaDevices.enumerateDevices()
.then(function (deviceInfos) {
  deviceInfos.forEach(function (deviceInfo) {
    console.log(deviceInfo.kind + ': ' + deviceInfo.label + ' id= ' + deviceInfo.deviceId)
  })
}).catch(function (err) {
  console.log(err.name + ': ' + err.message)
})
