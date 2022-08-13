import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () => {
  const [categories, setCategories] =useState(['One Punch'])

  const onAddCategory = (onNewCategory) =>{
    if(categories.includes(onNewCategory)) return;
    setCategories([onNewCategory, ...categories])

  }
  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewCategory={onAddCategory}/>
      {
        categories.map(category =>{
         return <GifGrid key={category} category={category} />
        })
      }
    </>
  )
}
