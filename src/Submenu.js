import './main.css'
import React from 'react'

function Submenu() {

    let imgarray = [];
    let imgarray2 = [];

    imgarray.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_cate01.png');
    imgarray.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_cate02.png');
    imgarray.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_cate03.png');
    imgarray.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_cate06.png');
    imgarray.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_cate05.png');

    imgarray2.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_brand01.png');
    imgarray2.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_brand02.png');
    imgarray2.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_brand03.png');
    imgarray2.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_brand04.png');
    imgarray2.push('https://www.venus-eshop.co.kr/m/assets/v3/images/ico_more_round.png');


  return (
    <>
        
        <div className='item-wrap'>
            { imgarray.map( (src,index) =>

                <div className='item' key={index}>
                    <div>
                        <img src={ src }/>
                    </div>
                    <div style={{}}>
                        <div>메뉴명</div>
                    </div>
                </div>  

            ) }
        </div>

        <div className='item-wrap'>
            { imgarray2.map( (src,index) =>

                <div className='item' key={index}>
                    <div>
                        <img src={ src }/>
                    </div>
                    <div>
                        <div>메뉴명</div>
                    </div>
                </div>  
            ) }

        </div>
    </>
  );
}

export default Submenu;
