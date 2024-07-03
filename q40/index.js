"use strict";
function make_album(artist, album_title, tracks) {
    let album = {
        artist,
        album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("John", "In the Rain"));
console.log(make_album("The Beatles", "Abbey Road", 17));
