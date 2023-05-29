import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Link from "next/link";

const baseURL = "https://jsonplaceholder.typicode.com/albums/";


const Photos = () => {
    const router = useRouter();

    const [photos, setPhotos] = useState([]);
    
    //取得したデータをphotosにセット
    useEffect(() => {
        axios.get(baseURL + router.query.id + "/photos")
        .then((response) => {
            setPhotos(response.data)
        });
    }, []);

    if(!photos) return null;

    interface photo {
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }

    return (
        <div>
            <h1 className='m-6 text-6xl'>PHOTOS</h1>
            <ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-3'>
                {photos.map((photo :photo ) => (
                <li key={photo.id} className="h-70 m-3 px-2 py-6 transition ease-in-out duration-500 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white">
                    <div>
                    <Link href={{ pathname: `../../photos/${photo.id}`,
                     query: { id: photo.id, url: photo.url, title:photo.title} }}
                     as={"../../photos/" + photo.id}
                    >
                    <p className='text-center mb-2 h-24'>
                        {photo.title}
                    </p>
                    <img src={photo.thumbnailUrl} alt="" className='mx-auto'/>
                    </Link>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Photos;