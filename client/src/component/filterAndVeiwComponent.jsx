import React from 'react'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';

const filterAndVeiwComponent = () => {
  return (
  <>
  <div className="filter flex flex-wrap justify-between mb-30px">
                                    <div className="left-Filter">
                                        <p className='font-[400] text-[17px]'>Showing 1–9 of 103 results</p>
                                    </div>
                                    <div className="Right-Filter">
                                        <div className="option-filter flex flex-wrap gap-3">
                                            <select id="prices" className='cursor-pointer rounded-sm pr-[10px] pl-[10px] pt-[8px] pb-[8px] border-[1px]'>
                                                <option value="Latest">Latest</option>
                                                <option value="Popularity">Popularity</option>
                                                <option value="Avarage Rating">Avarage Rating</option>
                                                <option value="Price: low to high">Price: low to high</option>
                                                <option value="Price: high to low">Price: high to low</option>
                                            </select>
                                            <div className=' cursor-pointer p-[8px] border-[1px] rounded-sm'><AppsOutlinedIcon/></div>
                                            <div className='cursor-pointer p-[8px] border-[1px] rounded-sm text-[#cccccc] hover:text-[black] transition-[0.3s]'><ViewListIcon/></div>
                                        </div>
                                    </div>
                                </div>
  </>
  )
}

export default filterAndVeiwComponent