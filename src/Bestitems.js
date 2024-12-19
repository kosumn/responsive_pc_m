import './main.css'
import React from 'react'

function Bestitems() {

    let imgarray = [];

    imgarray.push('https://www.venus-eshop.co.kr/images/VBRQ86320210602170641473Product01.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/SBRE23020240403161207911Product07.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/SBRD45520241104095419257Product07.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBRI63020241008101810162Product08.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBR099020240814163021280Product06.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBRI64220241115092311928Product08.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/SBRE21020230601161508707Product07.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBR099120241120085142295Product08.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBRI64320230417150948124Product08.png');
    imgarray.push('https://www.venus-eshop.co.kr/images/VBRI63120241008101249757Product10.png');

  return (
    <>
        <div style={{textAlign:'left',padding:'70px'}}>
            <div style={{paddingBottom:'30px'}}>
                <span>WEEKELY BEST</span>
                <span>금주의 인기 상품</span>
            </div>
            <div className='item-wrap'>

            { imgarray.map( src =>

                <div className='item'>
                    <div>
                        <img src={ src }/>
                    </div>
                    <div>
                        <div>비너스 풀컵 부유방 퇴근</div>
                        <div>45,000 원</div>
                    </div>
                </div>  

            ) }

            </div>
        </div>
    </>
  );
}

export default Bestitems;
