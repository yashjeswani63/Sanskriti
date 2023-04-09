import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data"
import { SearchItems } from "./SearchItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1>
            <label>
              Authentic <span>Traditional</span>
            </label>
            <br />
            <label>
            <span>art pieces </span> with historical visual effect
            </label>
          </h1>
          <p>You can get your authenticity on the table.</p>
          <div className='search'>
            <span>All States</span>
            <hr />
            <input type='text' placeholder='Search by state...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p> For example, Rajasthan, Gujarat, Kerala, etc. </p>
        </div>
      </section>
    </>
  )
}
