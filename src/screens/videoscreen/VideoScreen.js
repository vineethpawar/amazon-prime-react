import React from 'react'
import './VideoScreen.css'
function VideoScreen() {
    return (
        <div className="video__screen">
            <iframe className="youtube__player" src="https://www.youtube-nocookie.com/embed/mUR0DIsUZyI?modestbranding=0&autohide=1&showinfo=0&fs=1&rel=0" title="YouTube video player" framebBrder="0" allow="accelerometer; autoplayencrypted-media; gyroscope;" allowfullscreen="true"></iframe>
        </div>
    )
}

export default VideoScreen
