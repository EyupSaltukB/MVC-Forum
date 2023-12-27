import React, { useEffect, useState } from 'react'
import ListPostsView from './ListPostsView';
import axios from "axios";

const ListPostsController = () => {
    // post verilerini tuttuğumuz state
    const [data,setData] = useState([])

    const [showPopUp,setShowPopUp] = useState(false)
    const [userName, setUserName] = useState("")
    
    useEffect(() => {
        // API'a get isteği atılarak post verilerinin alınması
        axios.get("http://localhost:3005/posts")
        .then((res) => setData(res.data) )
        .catch((err) => console.log(err))
    }, [])
  
    return (
        // veriler data şeklinde view tarafına aktarılır.
    <ListPostsView data={data} showPopUp={showPopUp} setShowPopUp={setShowPopUp} setUserName={setUserName} userName={userName}/>
  )
}

export default ListPostsController