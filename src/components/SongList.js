import React from 'react'
import Song from './Song'

function SongList({songs, handleClickProp, handleDeleteProp}) {

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {
                songs.map((song) => ( <Song key={song.id} handleClickProp={handleClickProp} handleDeleteProp={handleDeleteProp} song={song} />))
            }
        </div>
        </>
    );
}

export default SongList;



// at this point the handle delete function becones one same prop, 
// so the next child ( song ) the same click will trigger will fire 
// the same function in differnent places.
