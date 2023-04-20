import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className='video' autoPlay progress controls src="https://www.videvo.net/video/pair-of-lionesses-walking-together/463057/"  />
    </div>
  )
}

export default Watch