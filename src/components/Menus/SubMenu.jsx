import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
function SubMenu() {
    let [data, setData] = useState([])
    
    useEffect(() => {
        function fetchData() {
            fetch('/data.json').then(res => res.json()).then(res => setData(res))
        }
        fetchData()
    }, [])
    let para = useParams()
    let ickiler = data.find(item => item.slugName == para.cat)
    let subickiler = ickiler?.children.find(item => item.slugName == para.subcat)
    // console.log(subickiler.slugName)
    return (
    
        <div>
            {subickiler?.products.length > 0 ? (
                <div className='grid grid-cols-4 gap-2 max-xl:grid-cols-2  max-md:grid-cols-2'>
                    {subickiler.products.map(item => (
                        <NavLink to={`/products/${ickiler.slugName}/${subickiler.slugName}/${item.seoId}`} className="flex flex-col items-center">
                            {item.images.map(img => (
                                <img className='w-[148px] h-[148px] rounded-full' src={img.url} />
                            ))}
                            <p className='text-[13px] text-center py-2'>{item.name}</p>
                        </NavLink>
                    ))}
                </div>
            ) : (
                <div className=''>
                    {subickiler?.children.map(item => (
                        <>
                        <h2 className='font-bold text-[24px]'>{item.name}</h2>
                        <div className="grid grid-cols-4 gap-2 max-xl:grid-cols-2 max-md:grid-cols-2 ">
                        {item.products.map(subitem => (
                            <NavLink to={`/products/${ickiler.slugName}/${subickiler.slugName}/${subitem.seoId}`}>
                                <div className='flex flex-col items-center'>
                                    {subitem.images.map(img => (
                                        <img className='w-[148px] h-[148px] rounded-full' src={img.url} />
                                    ))}
                                    <p className='text-[13px] text-center flex py-2 '>{subitem.name}</p>
                                </div>
                            </NavLink>
                        ))}
                        </div>
                        </>
                    )
                    )}
                </div>
            )}
        </div>
    );

}

export default SubMenu