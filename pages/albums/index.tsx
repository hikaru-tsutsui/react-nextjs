import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'

const baseURL = "https://jsonplaceholder.typicode.com/albums";

const Album = () => {
    
    const [albums, setAlbums] = useState(null);
  
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setAlbums(response.data);
      });
    }, []);
  
    //データチェック
    if (!albums) return null;

    return (
        <div>
            <h1 className='m-6 text-6xl'>ALBUMS</h1>
            <ul className='grid grid-cols-3 md:grid-cols-5 m-3'>
            {albums.map((album) => (
                <li key={album.id} className="h-52 m-3 px-2 py-6 transition ease-in-out duration-500 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white">
                    <Link
                        href={{ pathname: `albums/albumid/photos`, query: { id: album.id } }}
                        as={"albums/" + album.id +"/photos"}
                    >
                        <p className=""> {album.title}</p>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );

};

export default Album;