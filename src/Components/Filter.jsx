import React,{useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [searchParams, setSearchParams]=useSearchParams();

const initialcategoryParams=searchParams.getAll("category");

const initialSortParams=searchParams.getAll("sortBy");

const [category, setCategory]=useState(initialcategoryParams || []);

const [sortBy, setSortBy]= useState( initialSortParams[0] || "");

useEffect(()=>{
  if(category || sortBy){
     const params={};

     category && (params.category=category);
     sortBy && (params.sortBy=sortBy);
     setSearchParams(params);
  }

},[category,setSearchParams,sortBy]);



const handlecategoryChange=(e)=>{


  const option=e.target.value;
  let newCategory=[...category];

  if(category.includes(option)){

  newCategory.splice(newCategory.indexOf(option),1);
  }else{

  newCategory.push(option);
  }

  setCategory(newCategory);

}

const handleSortBy=(e)=>{

   setSortBy (e.target.value)
 }
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" defaultChecked={category.includes('Sneakers')}  onChange={handlecategoryChange} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" defaultChecked={category.includes('Loafers')}  onChange={handlecategoryChange} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" defaultChecked={category.includes('Canvas')}  onChange={handlecategoryChange} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots"  defaultChecked={category.includes('Boots')}  onChange={handlecategoryChange}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
