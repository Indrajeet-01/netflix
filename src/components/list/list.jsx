import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import "./list.scss"
import ListItem from '../listItem/ListItem'
import { useRef } from 'react'


function List() {
    const listRef = useRef()

    const handleClick = (direction) =>{
        if(direction === "left"){
            listRef.current.style.transform = `translateX(230px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")}/>
            <div className="container" ref={listRef}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default List