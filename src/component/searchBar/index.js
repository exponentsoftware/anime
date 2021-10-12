import React from 'react'
import { useState } from 'react';
import SearchBox from './SearchBox';

function Search() {

    const [search,setSearch]=useState('');
    const [inputValue,setInputValue]=useState('');

    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        setSearch(inputValue);
        console.log(search)
        alert(search)
    }
    return (
       <SearchBox handleSubmit={handleSubmit} handleChange={handleChange}/>
    )
}

export default Search
