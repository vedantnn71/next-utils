import Image from "next/image";

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage = ({ src }: BackgroundImageProps) => {
  return <Image src={src} {...props} />;
}

export default BackgroundImage;
