
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      src: "/lovable-uploads/c944beab-4dc9-4c20-ab24-66041a8ed45d.png",
      category: "prp",
      title: "PRP Hair Treatment Results",
      description: "Natural hair growth stimulation"
    },
    {
      src: "/lovable-uploads/9cf7bdac-8b2e-4e93-bf71-dc3c525cbac7.png",
      category: "hair",
      title: "Hair Transplant Before & After",
      description: "Complete transformation"
    },
    {
      src: "/lovable-uploads/54ceabba-2773-483d-93f6-2ee493c23abc.png",
      category: "hair",
      title: "Hair Transplant Process",
      description: "Step-by-step procedure"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Results' },
    { id: 'hair', label: 'Hair Transplant' },
    { id: 'skin', label: 'Skin Treatment' },
    { id: 'prp', label: 'PRP Therapy' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-vshine-teal mb-6">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Witness the transformational results of our advanced treatments
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterItem.id
                    ? 'bg-vshine-teal text-white shadow-lg'
                    : 'bg-vshine-light-beige text-vshine-teal hover:bg-vshine-beige'
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer card-hover"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vshine-teal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-vshine-beige text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-vshine-coral transition-colors"
              >
                <X size={32} />
              </button>
              
              <img 
                src={filteredImages[selectedImage].src} 
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-xl mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-vshine-coral transition-colors"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-vshine-coral transition-colors"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
