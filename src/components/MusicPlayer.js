import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import audioList from './audioList'

function MusicPlayer() {
    
    return (
        <ReactJkMusicPlayer
            audioLists={audioList}
            defaultPosition={{top: 8, left: 8}}
            style={{fontFamily: 'sans-serif', fontWeight: 'bolder'}}
            defaultVolume={0.2}
            autoPlay={false}
            glassBg={true}
        />
    )
}

export default MusicPlayer