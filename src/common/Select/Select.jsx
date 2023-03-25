import React, { useState, useEffect  } from 'react';

export const Select = ({dataMap, nameSelect, changeFunction}) => {
    
    const dataMapping = dataMap
    const name = nameSelect

    return (
        <>
            <select name={name} className={'my-1 py-2'} onChange={changeFunction}>
                <option name={name} value="default">----------</option>
                {dataMapping.map(data => {return <option  key={data.id} name={name} value={data.id}>{data.name} {data.surname}</option>})}
            </select>
        </>
    )
};
