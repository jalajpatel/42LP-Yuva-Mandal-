import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: '1.png', link: 'https://drive.google.com/file/d/1kryTi2Yx-sb_mU5uvgFwhaLiAcCNGRdq/view?usp=share_link', description: 'Mosambi Juice' },
    { src: '2.png', link: 'https://drive.google.com/file/d/18WzGZQMjk7k6mgpGbYj--Ok5-nYeOUJw/view?usp=share_link', description: 'KhodalDham Yatra' },
    { src: '3.png', link: 'https://drive.google.com/file/d/1Dzyihwh6pCreqp-h9M2ypbyuL_LXFS8b/view?usp=share_link', description: 'Bahucharaji Seva' },
    { src: '4.png', link: 'https://drive.google.com/file/d/1G7ALraoc_ZRw2r8A5Uz_-9IGrckGiQ93/view?usp=share_link', description: 'Photo Gallery' },
    { src: '5.png', link: 'https://drive.google.com/file/d/1Xvi3jVx3jvU6I4FkDgIhfc2_WLxhCs5s/view?usp=share_link', description: 'Photo Gallery 2' },
    { src: '6.png', link: 'https://drive.google.com/file/d/1rpTjiwoSDufOsPLYOxyhMGd4bVEW5sPW/view?usp=share_link', description: 'Vadil Vandana' },
    { src: '7.png', link: 'https://drive.google.com/file/d/1JEwfu2p3glO6rX5kZ-A74h1mcTQb8xqp/view?usp=share_link', description: '42 LP Film 2' },
    { src: '1.png', link: 'https://drive.google.com/file/d/1MY2MoUt5v4P6HsWujNy5Tv9uFkYF0-fS/view?usp=sharing', description: 'Cricket League' },
    { src: '2.png', link: 'https://drive.google.com/file/d/1TaFDWbauhi1R7d6_AkzdUdwJdyyGpLo7/view?usp=share_link', description: 'Mahila Sangathan' },
    { src: '3.png', link: 'https://drive.google.com/file/d/1-VyiurQSCLt2QGFo5CuZvdO1Vyt01lQ7/view?usp=share_link', description: 'Film 1' },
    { src: '4.png', link: 'https://example.com/photo2', description: 'Will Add' },
    { src: '5.png', link: 'https://example.com/photo1', description: 'Will Add' },
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
                  • કોરોના કાળમાં સતત ૧૫ દિવસ મોસંબી જ્યૂસનું વિતરણ.
                  <br />
• ક્રિકેટ ટુર્નામેન્ટનું વાર્ષિક આયોજન.
<br />
• સરકારી નોકરી મેળવેલ સમાજ બંધુઓનો સન્માન કાર્યક્રમ.
<br />
• બ્લડ ડોનેશન કેમ્પનું આયોજન.
<br />
• સિનિયર સિટીઝન યાત્રા વર્ષ ર૦રર/૨૩/૨૪ કરાવી.
<br />
• વડીલ વંદના કાર્યક્રમ.
<br />
• સમાજના જરૂરિયાતમંદ દીકરા/દિકરીઓની અભ્યાસ માટે દત્તકર યોજના.
<br />
• વાર્ષિક બહુચરાજી સેવા કેમ્પ.
<br />
• મેગા સર્વાઈકલ (ગર્ભાશય મુખ)ના કેન્સર પ્રતિરોધક રસીકરણ અને સ્કીનિગ કેમ્પ.
<br />
• વ્યસન મુક્તિ માટે સંકલ્પ.
<br />
• બંધુત્વની ભાવના કેળવાય માટે "એકતા લાડુ" પ્રોગ્રામ.
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
                  • રાહત દરે વિધાર્થીઓને ચોપડા વિતરણ.
                  <br />
• સમૂહલગ્ન આયોજન.
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
