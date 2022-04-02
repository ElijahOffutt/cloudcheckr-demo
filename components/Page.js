import react from "react";
import Meta from './meta'

export default function Page({children}){
    return (
        <>
            <Meta />
            {children}
        </>
    )
}