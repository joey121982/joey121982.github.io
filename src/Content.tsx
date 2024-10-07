import React from 'react'

import Link from './Link.tsx'
import sitelist from './sitelist.ts'

const Content = () => {
    const sites = sitelist.map((site, index) => {
        return <Link url={sitelist[index].url} name={sitelist[index].name} image={sitelist[index].image} />
    });

    return (
        <div>
            {sites}
        </div>
    )
}

export default Content;