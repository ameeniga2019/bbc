import  React,{ Component } from "react";
import ReactPlayer from 'react-player';
import './video.css';
class VideoPlayer extends Component{
    render() {
        return (
            <div>
                <ReactPlayer  controls
                    url={this.props.url}
                    onReady={() => console.log('video ready')}
                    onPlay={() => console.log('video playing')}
                    onBuffer={() => console.log('video buffering')}
                    onPause={() => console.log('video paused')}
                > </ReactPlayer>
            </div>
        )
    }
}

export default VideoPlayer;