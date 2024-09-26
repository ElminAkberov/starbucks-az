import React, { useEffect, useState } from 'react'
import Header from '../FirstPage/Header'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import Drinks from './Drinks'

function Menu() {
  let [data, setData] = useState([])

  useEffect(() => {
    function fetchData() {
      fetch('/data.json').then(res => res.json()).then(res => setData(res))
    }
    fetchData()
  }, [])
  return (
    <div className='bg-[#F7F7F7]'>
      <div >
        <Header />
      </div>
      <div className="head_pad">
        <div className='max-w-7xl px-4 mx-auto'>
          <p className='text-lg py-2 border-b-4 font-bold border-[#00A862] w-max '>Menu</p>
        </div>
        <hr />
      </div>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex">
          <div style={{"flex-basis": "450px"}} className="max-[1024px]:hidden">
            {data.map((category, catIndex) => {
              return (
                <>
                  <div key={catIndex} className="py-3">
                    <h2 className='text-[18px] font-bold'>{category.name}</h2>
                    <div className="py-1 ">
                      {category.children.map(((subcategory) => <NavLink to={`${category.slugName}/${subcategory.slugName}`} className="block py-1 text-[#6C6C6C]">{subcategory.name}</NavLink>))}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div style={{flex:" 1 1 0"}} className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu