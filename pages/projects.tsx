import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: '1.png', link: 'https://example.com/photo1', description: 'Photo 1' },
    { src: '2.png', link: 'https://example.com/photo2', description: 'Photo 2' },
    { src: '3.png', link: 'https://example.com/photo1', description: 'Photo 3' },
    { src: '4.png', link: 'https://example.com/photo2', description: 'Photo 4' },
    { src: '5.png', link: 'https://example.com/photo1', description: 'Photo 5' },
    { src: '6.png', link: 'https://example.com/photo2', description: 'Photo 6' },
    { src: '7.png', link: 'https://example.com/photo1', description: 'Photo 7' },
    { src: '1.png', link: 'https://example.com/photo1', description: 'Photo 1' },
    { src: '2.png', link: 'https://example.com/photo2', description: 'Photo 2' },
    { src: '3.png', link: 'https://example.com/photo1', description: 'Photo 3' },
    { src: '4.png', link: 'https://example.com/photo2', description: 'Photo 4' },
    { src: '5.png', link: 'https://example.com/photo1', description: 'Photo 5' },
  ];

  return (
    <React.Fragment>
      <Header />
      <div style={{ paddingTop: "120px", paddingBottom: "50px" }}>
        <div className="events-table">
          <div className="events-row">
            <div className="events-column">
              <div style={{ padding: "20px", boxSizing: "border-box" }}>
                <div style={{ color: "#333", fontSize: "24px", marginBottom: "15px", borderBottom: "2px solid #333", paddingBottom: "10px" }}>
                  Past Events
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* Your past events content here */}
                </div>
              </div>
            </div>
            <div className="events-column">
              <div style={{ padding: "20px", boxSizing: "border-box" }}>
                <div style={{ color: "#333", fontSize: "24px", marginBottom: "15px", borderBottom: "2px solid #333", paddingBottom: "10px" }}>
                  Upcoming Events
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* Your upcoming events content here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ color: "#333", fontSize: "24px", margin: "40px 0 20px", textAlign: "center" }}>Photo Gallery</h2>
        <PhotoGallery images={images} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

const PhotoGallery: React.FC<{ images: { src: string; link: string; description: string }[] }> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <a href={image.link} key={index} className="gallery-item">
          <div className="gallery-item-content">
            <img src={image.src} alt={`Photo ${index + 1}`} />
            <p>{image.description}</p>
          </div>
        </a>
      ))}
      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 10px;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          margin-bottom: 20px; /* Add margin to create space between gallery and footer */
        }
        .gallery-item {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .gallery-item-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        img {
          border-radius: 50%;
          overflow: hidden;
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
        p {
          margin-top: 5px;
          font-size: 12px;
          color: #333;
        }

        @media (min-width: 768px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }
          .events-table {
            display: table;
            width: 100%;
            border-collapse: collapse;
          }
          .events-row {
            display: table-row;
          }
          .events-column {
            display: table-cell;
            vertical-align: top;
          }
        }
        @media (min-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
