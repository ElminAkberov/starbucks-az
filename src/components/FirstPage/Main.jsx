import React from 'react'
import Footer from './Footer'

function Main() {
    return (
        <>
            <div className='main_flex'>
                <div className="bg-[#203A30] left_side ">
                    <div className='max-w-7xl mx-auto px-4 top'>
                        <div className="fix_img">
                            <img className="flex image_w" src="../public/assets/img/starbuck.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-[#f7f7f7] right_side'>
                    <img className='lg:mt-20' src="../public/assets/img/1.jpg"/>
                    <div className="p-10">
                        <h2 className='font-bold pb-3'>Kofemiz</h2>
                        <p>1971-ci ildən bu günə qədər keyfiyyət əsas prioritetimizdir. Ən yaxşı ”Arabica" kofe dənələrini xüsusi diqqətlə seçir, qruplaşdırır və qayğı ilə qovururuq. Kofeyə duyduğumuz istək yalnız onu sevgi ilə bölüşməyimizlə ölçülə bilər.</p>
                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card1.jpg" alt="" />
                        </div>
                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>STARBUCKS®’A YAY GƏLDİİİ! ☀️​</h3>
                            <p>Gəlin yayın YENİ soyuq kofe trendlərini birlikdə kəşf edək! 😎</p>
                            <p>Qarşında Iced White Chocolate Pistachio Oat Shaken Espresso və Chocolate Cream Cold Brew. ☕🧊</p>
                        </div>
                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card2.jpg" alt="" />
                        </div>
                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Starbucks®-da Sevimli 10 İçkini Al, Növbəti Bizdən Olsun!​</h3>
                            <p>Starbucks® Azərbaycanda baristalarımız tərəfindən sizin üçün diqqətlə hazırlanan hər içki üçün Starbucks® kartınıza bir ədəd möhür vurulur. Cəmi 10 möhürə çatdıqda, Starbucks® kartınızı təhvil verərək seçdiyiniz istənilən Tall ölçülü içkini Starbucks® mağazalarında ala bilərsiniz. Nuş olsun!</p>
                            <button className='px-3 py-[8px] bg-[#008248] text-white rounded-full font-bold active:scale-95 hover:opacity-65'>Ətraflı məlumat</button>
                        </div>

                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card3.jpg" alt="" />
                        </div>
                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Starbucks®-dan açıqlamalar​</h3>
                            <p>Starbucks®-dan açıqlamalar</p>
                            <p>Qarşında Iced White Chocolate Pistachio Oat Shaken Espresso və Chocolate Cream Cold Brew. ☕🧊</p>
                            <button className='px-3 py-[8px] bg-[#008248] text-white rounded-full font-bold active:scale-95 hover:opacity-65'>Ətraflı məlumat</button>
                        </div>

                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card4.jpg" alt="" />
                        </div>
                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Starbucks® Yaxın Şərq haqqında məlumat​</h3>
                            <p>Starbucks-ın Türkiyənin də daxil olduğu Yaxın Şərq və Şimali Afrika (MENA) bölgəsindəki mağazalarının açılması və fəaliyyət göstərməsi səlahiyyəti Küveytdə yerləşən Alshaya Qrupuna məxsusdur. Starbucks kökləri ABŞ-da olan, lakin bütün dünyada fəaliyyət göstərən bir kofe brendidir. 86 bazarda yer alan Starbucks-ın Türkiyə də daxil olmaqla Yaxın Şərq və Şimali Afrika əməliyyatları 13 ölkədə 1900-dən çox mağazası olan Alshaya Group tərəfindən həyata keçirilir.</p>
                            <button className='px-3 py-[8px] bg-[#008248] text-white rounded-full font-bold active:scale-95 hover:opacity-65'>Ətraflı</button>
                        </div>

                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card5.jpg" alt="" />
                        </div>

                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Menyu​</h3>
                            <p>Kustar üsulla hazırlanmış içki və yeməklərimizi kəşf edin, ləzzətindən zövq alın.</p>
                            <button className='px-3 py-[8px] bg-[#008248] text-white rounded-full font-bold active:scale-95 hover:opacity-65'>Menyu</button>
                        </div>
                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card6.jpg" alt="" />
                        </div>
                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Haqqımızda​</h3>
                            <p>Əlli bir il bundan əvvəl kiçik mağaza kimi fəaliyyətə başlayandan bəri imzamız olan hər yerdə hər şeyin ən yaxşısını yaratmaq üçün əlimizdən gələni əsirgəmirik.</p>
                            <button className='px-3 py-[8px] bg-[#008248] text-white rounded-full font-bold active:scale-95 hover:opacity-65'>Ətraflı</button>
                        </div>
                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card7.jpg" alt="" />
                        </div>

                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Sosial məsuliyyət​</h3>
                            <p>Ətraf mühitin keşiyində durmaq kofe və kofe fermerlərinin gələcəyi və yer kürəsi üçün zəruridir. Məhz buna görə də biz 1971-ci ildən bəri qonaqlarımızın, biznes tərəfdaşlarımızın (işçilərimizin) və qonşularımızın etimadını doğrultmaq üçün sosial məsuliyyət siyasəti çərçivəsində fəaliyyət göstərməyə çalışırıq.</p>
                        </div>
                    </div>
                    <div className="card p-10 flex gap-4 fd-c">
                        <div className="cards_w">
                            <img src="../public/assets/img/card8.jpg" alt="" />
                        </div>

                        <div className="cards_w">
                            <h3 className='font-bold text-2xl'>Kofe​</h3>
                            <p>Dünyanın 30 ölkəsindən valehedici və müxtəlif çeşidli kofeləri alır, qovurur, dəmləyir və qonaqlarımıza təqdim edirik. Mədəniyyətlər, coğrafiya və yetişdirilmə üsulları ölkəyə görə fərqlənir. Beləliklə, fərqli kofe ləzzətləri meydana gəlir.</p>
                            <button className='px-3 py-[8px] bg-[#008248] text-white rounded-full font-bold active:scale-95 hover:opacity-65'>Ətraflı</button>
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default Main