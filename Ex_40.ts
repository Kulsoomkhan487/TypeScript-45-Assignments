// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title: string, tracks?: number):{
  artist: string, title: string, tracks?: number
}
{
  const album = {
  artist,
  title,
  tracks
  };
  if(tracks !== undefined){
    album.tracks = tracks;
  }
  return album;
  }
  // function calls
const album1 = make_album('Bee Gees', 'Staying Alive');
const album2 = make_album('Harry Belafonte', 'Island in the Sun', 16);
const album3 = make_album('Billy Ocean', 'Caribbean Queen', 12);
console.log(album1)
console.log(album2)
console.log(album3)