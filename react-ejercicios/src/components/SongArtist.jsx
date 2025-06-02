import React from 'react'

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>{artist.strGenre}</p>
      <a href={`https://${artist.strWebsite}`} target="_blank">
        Sitio web oficial
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist