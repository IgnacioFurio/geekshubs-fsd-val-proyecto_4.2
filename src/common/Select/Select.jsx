import React from 'react'

export const Select = (dataMap) => {
    return (
        <select>
            <option value="default">----------</option>
            {dataMap.map(data => {return <option value={data.id}>{data.name}</option>})}
        </select>
    );
};
