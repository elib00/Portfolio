import React from 'react'
import Image from "next/image";

const TechCard = ( { imageSource, alt, width = 64, height = 64} : { imageSource : string, alt: string, width?: number, height?: number }) => {
  return (
    <div className="flex items-center justify-center mb-4">
        <Image
            src={imageSource}
            alt={alt}
            title={alt}
            width={width}
            height={height}
        />
    </div>
  )
}

export default TechCard
