import React, { useState } from 'react'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Footer() {
  const [infoOpen, setInfoOpen] = useState(false)
  const [kofeOpen, setKofeOpen] = useState(false)
  const [socialOpen, setSocialOpen] = useState(false)

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className="text-2xl">
        <h2 className='mb-20'>MAĞAZALARIMIZ</h2>

        <div className="mb-20">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setInfoOpen(!infoOpen)}>
            <h4>HAQQIMIZDA</h4>
            {infoOpen ? <IoChevronUpOutline size={45} className='hover:bg-[#EDEBE9] rounded-full duration-300 p-3' /> : <IoChevronDownOutline size={45} className='hover:bg-[#EDEBE9] rounded-full duration-300 p-3' />}
          </div>
          <div className='text-[14px] cursor-pointer' style={{ display: infoOpen ? "block" : "none" }}>
            <p>Tariximiz</p>
            <p>Şirkətimiz</p>
            <p>Mağazalarımız</p>
            <p>Starbucks Xeberler</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setKofeOpen(!kofeOpen)}>
            <h4>KOFE</h4>
            {kofeOpen ? <IoChevronUpOutline size={45} className='hover:bg-[#EDEBE9] rounded-full duration-300 p-3' /> : <IoChevronDownOutline size={45} className='hover:bg-[#EDEBE9] rounded-full duration-300 p-3' />}
          </div>
          <div className='text-[14px] cursor-pointer' style={{ display: kofeOpen ? "block" : "none" }}>
            <p>Kofe Təchizatı & Qovurma & Qarışdırma</p>
            <p>Qovrulmasına görə kofe növləri</p>
            <p>Mükəmməl kofeni necə hazırlamaq olar?</p>
            <p>Kofe haqqında tez-tez verilən suallar</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setSocialOpen(!socialOpen)}>
            <h4>SOSIAL MƏSULIYYƏT</h4>
            {socialOpen ? <IoChevronUpOutline size={45} className='hover:bg-[#EDEBE9] rounded-full duration-300 p-3' /> : <IoChevronDownOutline size={45} className='hover:bg-[#EDEBE9] rounded-full duration-300 p-3' />}
          </div>
          <div className='text-[14px] cursor-pointer' style={{ display: socialOpen ? "block" : "none" }}>
            <p>Korporativ etika</p>
            <p>Cəmiyyətə töhfə</p>
            <p>Ətraf mühit</p>
            <p>Variyasiya</p>
            <p>Davamlılıq</p>
          </div>
        </div>
      </div>

      <hr className='border border-black' />
      <div className="font-bold">
        <h4 className='py-9'>Qida dəyəri siyahısı</h4>
        <div className="flex items-center">
          <NavLink target='_blank' to={"https://www.facebook.com/starbucksaz"}><FaFacebook size={32} /></NavLink>
          <NavLink target='_blank' to={"https://www.instagram.com/starbucks__az/"}><FaInstagramSquare className='rounded-full' size={35} /></NavLink>
          
          
        </div>
      </div>
    </div>
  )
}

export default Footer
