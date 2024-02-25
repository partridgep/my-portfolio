import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Head({title, keywords, pageTitle}) {
    return (
        <Helmet 
            title={
                pageTitle ?
                `${title} | ${pageTitle}`
                :
                `${title}`
            }
            meta={[
                {name: "keywords", content: keywords},
                {
                    name: `theme-color`,
                    content: '#FFEA80',
                  },
            ]}
        />
    )
}