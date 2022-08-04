import Image from "next/image";
import * as React from 'react';

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage = ({ src, ...props }: BackgroundImageProps) => {
  return <Image src={src} {...props} />;
}

export default BackgroundImage;
