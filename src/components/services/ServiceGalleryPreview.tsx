interface ServiceGalleryPreviewProps {
  images: string[];
  title: string;
}

const ServiceGalleryPreview = ({ images, title }: ServiceGalleryPreviewProps) => {
  if (images.length === 0) return null;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <h3 className="text-2xl font-heading font-bold text-secondary mb-8 text-center">
          Sacred Moments
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGalleryPreview;
