import React from 'react'
interface GeneratePodcastPops{
  setAudioStorageId:any
  setAudio:any
  voiceType:any
  audio:any
  voicePrompt:any
  setVoicePrompt:any
  setAudioDuration:any
}

const GeneratePodcast = ({setAudioStorageId,setAudio,voiceType,audio,voicePrompt,setVoicePrompt,setAudioDuration}:GeneratePodcastPops) => {
  return (
    <div>{voiceType}</div>
  )
}

export default GeneratePodcast