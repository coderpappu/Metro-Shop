import React, { useState } from 'react';
import "../App.css"
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
import IceSkatingOutlinedIcon from '@mui/icons-material/IceSkatingOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function searchvar() {

  function categori(){
     let categor = document.querySelector(".btn-cat");
     let categories = document.querySelector(".categoriesss");
      let click = categories.classList.toggle("hidden");
        
      
     }
     
  return (
    <>
        <div className="category-search w-[100%] h-[100px]">
            <div className="container xl:w-[1140px] xl:m-auto">
              <div className="container-row xl:flex flex-wrap flex-row gap-4 ">
                <div className="categoris">
                  <div className="categoris-row relative">
                    <button onClick={categori} className='font-josefin btn-cat bg-black text-white pl-[30px] pr-[70px] pt-[15px] pb-[10px] text-[20px] font-medium rounded-t categories'> <span><SortOutlinedIcon style={{fontSize: 35}}/></span> CATEGORIES</button>
                    <div className="categoriesss hidden absolute z-[10000]">
                      <ul>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[50px] w-[255px] pt-[15px] pb-[10px]  text-[16px] font-[400] rounded-t cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><ManOutlinedIcon style={{ fontSize: 24 }}/></span> Men</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><Woman2OutlinedIcon style={{ fontSize: 24 }}/></span> Women</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><DesktopWindowsOutlinedIcon style={{ fontSize: 24 }}/></span> Electronics</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><DiamondIcon style={{ fontSize: 24 }}/></span> Jewellery</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><IceSkatingOutlinedIcon style={{ fontSize: 24 }}/></span> Shoes</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><ChildCareOutlinedIcon style={{ fontSize: 24 }}/></span> Kid's Wear</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><SportsEsportsOutlinedIcon style={{ fontSize: 24 }}/></span> Sports</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><ToysOutlinedIcon style={{ fontSize: 24 }}/></span> Toys</li>
                        <li className='bg-[#f9f9f9] text-black border-b-[1px] pl-[25px] pr-[70px] pt-[15px] pb-[10px]  text-[16px] font-[400] cursor-pointer hover:bg-[#e4e4e4] ease-in duration-300 categories'> <span className=' mr-2'><CardGiftcardOutlinedIcon style={{ fontSize: 24 }}/></span> Gift Corners</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="search-Allcategoris">
                  <div className="container-row py-[0px] pl-[30px] border-[1px]">
                    <input type="text" className='outline-none pr-[21.25rem] border-r-2' placeholder='Search Products Here..'/>
                    <button className="allcategoris  pl-[30px] pr-[70px]">All Categories <span><ArrowDropDownOutlinedIcon/></span></button>
                    
                    <button className="search pl-[15px] pr-[15px] py-[16px] bg-black text-white rounded-r"><SearchIcon/></button>
                  </div>
                </div>
              </div>
            </div>
        </div>

{
  
  
     
     
     
  

}
        
    </>
    
  )
}

export default searchvar