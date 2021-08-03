const mediaStreamConstrains = {
  video: {
    width: 1280,
    height: 720,
    frameRate: 15,
  },
  audio: true,
  echoCancellation: true,
  noiseSuppression: true,
}

const v = document.querySelector('video')
const pic = document.getElementById('picture')
pic.width = 640
pic.height = 480

setTimeout(() => {
  pic.getContext('2d').drawImage(v, 0, 0, pic.width, pic.height)
}, 1000)

function download(url) {
  const aTag = document.createElement('a')
  aTag.download = 'photo'
  aTag.href = url
  aTag.click()
  aTag.remove()
}

document.querySelector('#take-photo').onclick = function () {
  download(pic.toDataURL('image/jpeg'))
}

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
