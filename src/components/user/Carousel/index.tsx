import ImageContainer from '@/components/common/Image';
import useEmblaCarousel from 'embla-carousel-react';

interface carouselProps {
  images: string[];
}

export default function Carousel({ images }: carouselProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden w-[244px]" ref={emblaRef}>
      <div className="flex">
        {images &&
          images.map((imageUrl, index) => (
            <div key={index} className="grow-0 shrink-0 flex">
              <ImageContainer
                type={'extraLarge'}
                src={imageUrl}
                alt={imageUrl}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
