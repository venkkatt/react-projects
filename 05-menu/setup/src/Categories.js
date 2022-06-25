import React from 'react'

const Categories = ({ categories, filterItems }) => {
  console.log(categories)
  return (
    <div className='btn-container'>
      {categories.map((item, idx) => (
        <button
          key={idx}
          type='button'
          className='filter-btn'
          onClick={() => filterItems(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Categories
