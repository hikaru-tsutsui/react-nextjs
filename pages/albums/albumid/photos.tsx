import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import Link from "next/link";

const baseURL = "https://jsonplaceholder.typicode.com/albums/";

export default function Photos(){
    const router = useRouter();

    const [photos, setPhotos] = useState(undefined);
    
    //取得したデータをphotosにセット
    useEffect(() => {
        axios.get(baseURL + router.query.id + "/photos")
        .then((reseponse) => {
            setPhotos(reseponse.data)
        });
    }, []);

    if(!photos) return null;

    return (
        <div>
            <h1 className='m-6 text-6xl'>PHOTOS</h1>
            <ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-3'>
            {Object.keys(photos).map((key) => (
                <li key={key} className="h-70 m-3 px-2 py-6 transition ease-in-out duration-500 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white">
                    <div>
                    <Link href={{ pathname: `../../photos/${photos[key].id}`,
                     query: { id: photos[key].id, url: photos[key].url, title:photos[key].title} }}
                     as={"../../photos/" + photos[key].id}
                    >
                    <p className='text-center mb-2 h-24'>
                        {photos[key].title}
                    </p>
                    <img src={photos[key].thumbnailUrl} alt="" className='mx-auto'/>
                    </Link>
                    </div>
                </li>
            ))};
            </ul>
        </div>
    );
}