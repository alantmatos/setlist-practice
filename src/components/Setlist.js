import React from 'react'
import SetlistBuilder from './SetlistBuilder';
import Song from './Song';

function Setlist({ selectedSong , removeFromSetListProp }) {


    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">

            {
                selectedSong.map((song)=> {
                    return <Song key={song.id} handleClickProp={removeFromSetListProp} song={song}/>
                })
            }

        </div>
        </>
    );
}

export default Setlist;