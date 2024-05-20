import React from 'react'
import Header from '../FirstPage/Header'

function Sourch() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="head_pad lg:flex">
                <div className="lg:w-[566px]">
                    <p className='text-[28px] py-8 px-4 mx-auto font-bold centers'>Əlaqə</p>
                </div>
                <div className="bg-[#F7F7F7] lg:w-[970px]">
                    <div  className=' mx-auto  h-[88vh] py-[70px] px-[120px] text-[15px]'>
                        <h3 className='font-bold text-[23px]'>Bizə yazın</h3>
                        <p className=''>Salam! "Starbucks"a xoş gəlmisiniz. Sizə necə kömək edə bilərik? </p> <br />
                        <p className='pb-3'>Fikirləriniz bizim üçün dəyərlidir və sizə təqdim etdiyimiz "Starbucks" təcrübəsini təkmilləşdirməkdə bizə yardımçı olur. Markamızla bağlı bütün sual, şərh və fikirləriniz üçün bizimlə 
                        <a href="mailto:" style={{ textDecoration: "underline rgb(0, 99, 65)", "color": "green", "cursor": "pointer" }}> infostarbucks-az@alshaya.com</a>elektron ünvanı vasitəsilə əlaqə saxlaya bilər.
                        </p>
                        <div className="flex justify-center">
                            <img src="../public/assets/img/contact.jpg" className='rounded-md' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sourch