import React from 'react'
import Header from '../FirstPage/Header'

function Sourch() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="head_pad lg:flex">
                <div className="w-11/12">
                    <p  className='text-[28px] py-8 px-4 mx-auto font-bold centers sourch_fixed'>Korporativ etika</p>
                </div>
                <div className='bg-[#F7F7F7] px-[40px] py-[20px] h-[100vh]'>
                    <h2 style={{ letterSpacing: " -.01em" }} className='text-[17px] font-bold leading-6'>Bizim uğurumuz məhsullarımızı yetişdirən və istehsal edən fermerlərin və təchizatçıların uğurundan irəli gəlir.</h2>
                    <p className='py-5'>İnsanların uğurlarına töhfə vermək, qonaqlarımıza təqdim etdiyimiz dünya səviyyəli məhsulların gələcəkdə də davam edəcəyinə əminlikdir. Kofe, çay, kakao və emal olunmuş məhsullarımızı etik satınalma prinsipləri və məsuliyyətli istehsal çərçivəsində ən yüksək keyfiyyətlə təklif etməyə davam edəcəyik.</p>
                    <div className="flex gap-10 mx-5">
                        <div className="">
                            <h4 className='font-bold text-[17px] py-3'>Məsuliyyətli İstehsal</h4>
                            <img src="/assets/img/img1.jpg" className='w-full' alt="" />
                            <p className='text-[14px] py-4'>Biz kofe yetişdirilən bölgələri iqlim dəyişikliyinə qarşı qorumaq və kofe fermerlərinin həyat keyfiyyətini yaxşılaşdırmaq üçün Conservation International* ilə işləyirik. </p>
                            <b className='text-[14px]'>* Conservation International ətraf mühitin mühafizəsi uğrunda mübarizə aparan dünyada ən fəal qeyri-hökumət təşkilatlarından biridir.</b>
                        </div>
                        <div className="">
                            <h4 className='font-bold text-[17px] py-3'>Fermer Dəstəyi</h4>
                            <img src="/assets/img/img2.jpg" className='w-full' alt="" />
                            <p className='text-[14px] py-4'>Biz kofe yetişdirilən bölgələri iqlim dəyişikliyinə qarşı qorumaq və kofe fermerlərinin həyat keyfiyyətini yaxşılaşdırmaq üçün Conservation International* ilə işləyirik. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sourch