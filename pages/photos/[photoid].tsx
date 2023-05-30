import { useRouter } from "next/router";
import React from "react";
//import Image from 'next/image';

const Photoid = () => {

    const router = useRouter();

    interface photo {
        id: string;
        title: string;
        url: string;
    }
    const photos: photo = { id: router.query.id as string, title: router.query.title as string, url: router.query.url as string};

    return (
        <>
            <h1 className='m-6 text-6xl'>PHOTO</h1>
            <p className='m-6 text-2xl'>TITLE : {photos.title}</p>
            <p className='m-6 text-2xl'>ID : {photos.id}</p>
            <img
                src={photos.url}
                alt={photos.title}
                width={150}
                height={150}
                className="mx-auto object-contain max-w-md"
              />
            
        </>
    );
}

export default Photoid;