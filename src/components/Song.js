import React from 'react'

function Song({song, handleClickProp , handleDeleteProp}) {


    

    return(
        <div className="song" onClick={()=>handleClickProp(song)} >
            <img src={song.image}/>
            <div className="song-info">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
            <button onClick={()=>handleDeleteProp(song)}>X</button>
        </div>
    );
}

export default Song;