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
          <p className='text-[28px] py-8 px-4 mx-auto font-bold centers sourch_fixed'>Tariximiz</p>
        </div>
        <div  className='bg-[#F7F7F7] p-[40px] py-[20px] h-[auto] lg:w-[952px]'>
          <div className="flex justify-center">
            <img src="../assets/img/history.jpg" alt="" />
          </div>
          <p className='p-[40px]'>
            Hər gün iki şeyin xəyalı ilə işə gedirik: dostlarımızla mükəmməl kofeni bölüşmək və dünyanı bir az da yaxşılaşdırmağa töhfə vermək. Bu, ilk Starbucks 1971-ci ildə açılanda başlamışdı və bu gün də aktualdır. <br />
            <br />
            O zaman şirkət Seattle-ın tarixi Pike Place Arkadasında yerləşən tək mağazadan ibarət idi. Starbucks yalnız bir kiçik mağazadan dünyanın ən keyfiyyətli, təzə qovrulmuş kofe dənələrini təklif etdi. Moby Dick-dən ilhamlanan ad, köhnə kofe tacirlərinin dənizçilik ənənəsindən və onların açıq dənizə olan sevgisindən irəli gəlir. <br />
            <br/>
            1981-ci ildə Howard Schultz (Starbucks sədri, baş icraçı direktor) Starbucks mağazasına girdi. Schultz ilk Sumatra fincanı ilə Starbucks-a girdi və bir il sonra şirkətə qoşuldu. <br />
            <br/>
            Bir il sonra, 1983-cü ildə Howard Schultz İtaliyaya səyahət etdi və italyanların espresso barlarına olan sevgisi və kofe təcrübəsinə heyran oldu. İtalyan kafe ənənəsini ABŞ-a gətirmək istəyirdi. İnsanların bir araya gələrək söhbətlərini apara biləcəkləri bir məkan yaratmaq... Evdən və işdən sonra üçüncü ünvanlarını yaratmaq... Schultz Il Giornale kafelərini açmaq üçün qısa müddətə Starbucks-dan ayrıldı və 1987-ci ilin avqustunda yerli investorların köməyi ilə Starbucks-ı aldı. <br />
            <br/>
            Yarandığı gündən etibarən Starbucks fərqli bir şirkətə çevrildi. Bu, yalnız kofe və zəngin kofe mədəniyyəti deyil, bir təcrübə təklif etdi. <br />
            <br/>
            Məqsədimiz insan ruhunu ilhamlandıran və zənginləşdirən brend olmaqdır! <br />
            <br/>
            Bu gün Starbucks 80 ölkədə 33.000-dən çox mağazası ilə kofe almaq və qovurmaq üzrə dünyanın bir nömrəli şirkətidir. Və biz hər fincanla unikal Starbucks Təcrübəsini təqdim etməyə çalışırıq."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sourch