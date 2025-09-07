import React, { useState, useMemo, useCallback } from 'react'
import MapView from './components/MapView'
import SearchBox from './components/SearchBox'
import POIList from './components/POIList'
import samplePOIs from './data/samplePOIs'
import useDebounce from './hooks/useDebounce'


export default function App() {
const [search, setSearch] = useState('')
const [selected, setSelected] = useState(null)
const [sortOrder, setSortOrder] = useState('asc')


const debounced = useDebounce(search, 250)


// create a normalized search term once (guarded) to avoid repeated work
const term = useMemo(() => (debounced || '').toLowerCase(), [debounced])


// filtered + sorted list — memoized so heavy list operations only run when inputs change
const visiblePOIs = useMemo(() => {
const filtered = samplePOIs.filter((p) => (p.title || '').toLowerCase().includes(term))
return filtered.sort((a, b) => (sortOrder === 'asc' ? (a.title || '').localeCompare(b.title || '') : (b.title || '').localeCompare(a.title || '')))
}, [term, sortOrder])


const onSelectPOI = useCallback((poi) => setSelected(poi), [])
const onMarkerClick = useCallback((poi) => setSelected(poi), [])


return (
<div className="app">
<div className="sidebar">
<div className="header">
<h2>Map Explorer</h2>
<div className="small">{visiblePOIs.length} results</div>
</div>


<div style={{marginBottom:10}}>
<SearchBox value={search} onChange={setSearch} placeholder="Search places or POI" />
</div>


<div style={{ marginBottom: 10, display: 'flex', gap: 8 }}>
<button onClick={() => setSortOrder('asc')}>Sort A→Z</button>
<button onClick={() => setSortOrder('desc')}>Sort Z→A</button>
</div>


<POIList items={visiblePOIs} onSelect={onSelectPOI} />


{selected && (
<div style={{marginTop:12}} className="small">
<strong>Selected:</strong> {selected.title}
</div>
)}
</div>


<div className="map-container">
<MapView center={[40.758896, -73.98513]} markers={visiblePOIs} onMarkerClick={onMarkerClick} />
</div>
</div>
)
}
