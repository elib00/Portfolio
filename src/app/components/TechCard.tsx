import React from 'react'
import Image from "next/image";

const TechCard = ( { imageSource, alt, width = 80, height = 80} : { imageSource : string, alt: string, width?: number, height?: number }) => {
  return (
    <div className="flex items-center justify-center h-20 mb-4">
        <Image
            src={imageSource}
            alt={alt}
            title={alt}
            width={width}
            height={height}
            className="object-cover"
        />
    </div>
  )
}

export default TechCard
