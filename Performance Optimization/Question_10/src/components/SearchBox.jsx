import React, { memo } from 'react'


const SearchBox = memo(function SearchBox({ value, onChange, placeholder }) {
return (
<input
className="input"
value={value}
onChange={(e) => onChange(e.target.value)}
placeholder={placeholder}
aria-label="search"
/>
)
})


export default SearchBox