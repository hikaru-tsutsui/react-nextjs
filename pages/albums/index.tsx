import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'

const baseURL = "https://jsonplaceholder.typicode.com/albums";

export default function App() {
    
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
            <h1 className='m-6 text-6xl'>ALUBUMS</h1>
            <ul className='grid grid-cols-3 md:grid-cols-5 m-3'>
            {Object.keys(albums).map((key) => (
                <li key={key} className="h-52 m-3 px-2 py-6 transition ease-in-out duration-500 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white">
                    <Link
                        href={{ pathname: `albums/albumid/photos`, query: { id: albums[key].id } }}
                        as={"albums/" + albums[key].id +"/photos"}
                    >
                        <p className=""> {albums[key].title}</p>
                    </Link>
                </li>
            ))};
            </ul>
        </div>
    );

  }
