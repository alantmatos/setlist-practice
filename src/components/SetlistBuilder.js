import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

const [ songs , setSongs ] = useState([])
// const [ selectedSong , setSelectedSong ] = useState({})
const [ reload, setReload ] = useState(false)
const [songList, setSongList] = useState([]);


useEffect(()=> {
    fetch('http://localhost:3110/tracks')
    .then(response => response.json())
    .then ((data)=> {
        //console.log(data)
        setSongs(data)
    })
},[reload])


// function handleClick (song) {
//     setSelectedSong(song)
//     console.log(selectedSong)}


function handleDelete (song) {
        fetch("http://localhost:3110/tracks/"+song.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"}        
    });
    setReload(!reload)
}


function handleClick (song) {
            const foundIndex = songList.findIndex(item => item.id === song.id);
        if (foundIndex === -1) {
            setSongList([...songList, song]);
        } else {
            console.log("Show already on watch list...");
        }
    }

function removeFromSetList (song) {
    const foundIndex = songList.findIndex(item => item.id === song.id );
    if (foundIndex === -1) {
        console.log('if statement ran')
    } else {
        const copyArray = [...songList];
        copyArray.splice(foundIndex,1)
        setSongList(copyArray)
    }
}



    return(
        <div className="builder">
            <SongList songs={songs} handleClickProp={handleClick} handleDeleteProp={handleDelete}/>
            <div className="vl"></div>
            <Setlist selectedSong={songList} removeFromSetListProp={removeFromSetList}/>
        </div>
    );
}

export default SetlistBuilder;