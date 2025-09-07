import React, { memo } from 'react'


const POIList = memo(function POIList({ items, onSelect }) {
return (
<div>
{items.length === 0 && <div className="small">No results</div>}
{items.map((poi) => (
<div key={poi.id} className="poi-item" onClick={() => onSelect(poi)}>
<div><strong>{poi.title}</strong></div>
<div className="small">{poi.category}</div>
</div>
))}
</div>
)
})


export default POIList
