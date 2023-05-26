import { useRouter } from "next/router";
import React from "react";

export default function Photoid(){

    const router = useRouter();

    return (
        <>
            <h1 className='m-6 text-6xl'>PHOTO</h1>
            <p className='m-6 text-2xl'>TITLE : {router.query.title}</p>
            <p className='m-6 text-2xl'>ID : {router.query.id}</p>
            <img src={router.query.url} alt="" className='mx-auto object-contain max-w-md'/>
            
        </>
    );
}