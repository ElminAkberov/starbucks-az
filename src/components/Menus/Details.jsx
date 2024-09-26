import React, { useEffect, useState } from 'react'
import Header from '../FirstPage/Header'
import { NavLink, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

function Details() {
    let [data, setData] = useState()
    let { info, type, seoId } = useParams()
    useEffect(() => {
        getData()
    }, [])
    function getData() {
        fetch("/data.json").then(res => res.json()).then(res => setData(res))
    }
    return (
        <div>
            <div >
                <Header />
            </div>
            menu/ickiler/qisa-muddete-sizinle
            {console.log()}
            <div className="flex flex-col h-[100vh] md:flex-row ">
                {data?.find(item => item.slugName == info).children.map(item => item?.products.filter(item => item?.seoId == seoId).map(item => (
                    <>
                        <div className="lg:justify-start p-6 justify-center order-first md:order-last lg:w-[970px] bg-[#F7F7F7] ">
                            <img src={item?.images.map(item => item.url)} className='rounded-full mt-[80px] lg:w-[388px]' />
                        </div>
                        <div className=" p-[40px] py-[20px] h-[auto] lg:w-[566px] lg:pt-80">
                            <NavLink to={`/menu/${info}/${type}`} className="flex items-center capitalize"><IoIosArrowBack />{type.split("-").join(" ")}</NavLink>
                            <h1 className='text-[28px] font-bold'>{item?.name}</h1>
                        </div>
                    </>
                )))}
            </div>
        </div>
    )
}

export default Details