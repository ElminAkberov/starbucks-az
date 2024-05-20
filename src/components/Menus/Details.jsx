import React, { useEffect, useState } from 'react'
import Header from '../FirstPage/Header'
import { NavLink, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

function Details() {
    let [data, setData] = useState()
    let para = useParams()
    useEffect(() => {
        getData()
    }, [])
    function getData() {
        fetch("https://starbucks-api-mocha.vercel.app/product", {
            method: "POST",
            body: JSON.stringify({
                seoId: para.seoId
            })
        }).then(res => res.json()).then(res => setData(res))

    }
    return (
        <div>
            <div >
                <Header />
            </div>
            <div className="flex flex-col h-[100vh] md:flex-row ">
                <div className="lg:justify-start p-6 justify-center order-first md:order-last lg:w-[970px] bg-[#F7F7F7] ">
                    <img src={data?.image} className='rounded-full mt-[80px] lg:w-[388px]' />
                </div>
                <div className=" p-[40px] py-[20px] h-[auto] lg:w-[566px] lg:pt-80">
                    <NavLink to={`/menu/${data?.mainCate.slugName}/${data?.parent.slugName}`} className="flex items-center"><IoIosArrowBack />{data?.parent.name}</NavLink>
                    <h1 className='text-[28px] font-bold'>{data?.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default Details