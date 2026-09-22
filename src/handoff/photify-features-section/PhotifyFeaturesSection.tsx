import './photify-features-section.css';

type PhotifyFeatureImage = {
  src: string;
  alt: string;
};

const photifyFeatureImages: PhotifyFeatureImage[] = [
  {
    src: './images/phot1.jpeg',
    alt: 'Photify mobile app screen',
  },
  {
    src: './images/phot2.jpeg',
    alt: 'Photify mobile app screen',
  },
  {
    src: './images/phot3.jpeg',
    alt: 'Photify mobile app screen',
  },
  {
    src: './images/phot4.jpeg',
    alt: 'Photify mobile app screen',
  },
  {
    src: './images/phot5.jpg',
    alt: 'Photify mobile app screen',
  },
];

export function PhotifyFeaturesSection() {
  return (
    <section className="photify-features" aria-label="Photify feature screens">
      <div className="photify-features__gallery">
        {photifyFeatureImages.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width="1290"
            height="2796"
          />
        ))}
      </div>
    </section>
  );
}

export default PhotifyFeaturesSection;
