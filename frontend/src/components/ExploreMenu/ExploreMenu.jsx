import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exp-menu' id='exp-menu'>
        <h1>Explore our Menu</h1>
        <p className='exp-menu-text'>Every dish tells a story.
        From appetizers to desserts, our menu brings together fresh ingredients, authentic recipes, and mouthwatering flavors you'll come back for.</p>
        <div className="exp-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  className='exp-menu-list-item' key={index}>
                        <img className={category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu