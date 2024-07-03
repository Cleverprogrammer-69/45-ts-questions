interface Album{
    artist:string,
    album_title:string,
    tracks?:number
}
function make_album(
  artist: string,
  album_title: string,
  tracks?: number
): Album {
  let album: Album = {
    artist,
    album_title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}
console.log(make_album("John","In the Rain"))
console.log(make_album("The Beatles", "Abbey Road", 17))