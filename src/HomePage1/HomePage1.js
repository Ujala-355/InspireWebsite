import Rreact, {useState} from "react";
import "./HomePage1.css"
const HomePage=()=>{
    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="video-container mt-5 p-3" onClick={handleOpen}>
        <img
          src="https://html.cwsthemes.com/inspire/assets/images/resources/video-img1.jpg"
          alt="Video Thumbnail"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="play-button p-3">▶</div>
      </div>

      {isOpen && (
        <div className="modal-background" onClick={handleClose}>
          <div style={{ width: '80%', height: '80%' }}>
            <span className="close-button" onClick={handleClose}>✖</span>
            <iframe
              style={{ width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/_Ecl_XEETEA"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
    
}
export default HomePage;