import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Drinks() {
    let [data, setData] = useState([])

    useEffect(() => {
        function fetchData() {
            fetch('https://starbucks-api-mocha.vercel.app').then(res => res.json()).then(res => setData(res))
        }
        fetchData()
    }, [])
    return (
        <div>
            {data.map((category, catIndex) => {
                return (
                    <>
                        <h1 className='text-2xl py-3 font-bold'>Menu</h1>
                        <div key={catIndex} className="">
                            <h2 className='text-[23px]'>{category.name}</h2>
                            <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
                                {category.children.map(((subcategory, subIndex) => <div >{subcategory.images.map(item => <NavLink to={`${category.slugName}/${subcategory.slugName}`} className='flex flex-col items-center'><img className='w-[148px] h-[148px] rounded-full' src={item.url} /><p className='text-[13px] text-[#202020] py-2'>{subcategory.name}</p></NavLink>)}</div>))}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Drinks