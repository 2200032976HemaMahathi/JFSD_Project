// events.js
import { Link } from 'react-router-dom';

function Events() {
  const carouselData = [
    [
      { id: 1, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+1', link: '/E1' },
      { id: 2, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+2', link: '/E2' },
      { id: 3, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+3', link: '/E3' },
    ],
    [
      { id: 4, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+4', link: '/E4' },
      { id: 5, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+5', link: '/E5' },
      { id: 6, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+6', link: '/E6' },
    ],
    [
      { id: 7, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+7', link: '/E7' },
      { id: 8, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+8', link: '/E8' },
      { id: 9, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+9', link: '/E9' },
    ],
    [
      { id: 10, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+10', link: '/E10' },
      { id: 11, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+11', link: '/E11' },
      { id: 12, imgSrc: 'https://via.placeholder.com/200x100.png?text=Event+12', link: '/E12' },
    ],
  ];

  const carouselContainerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    gap: '20px',
    padding: '10px 0',
  };

  const imageStyle = {
    width: '200px',
    height: '100px',
    borderRadius: '8px',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upcoming Events</h2>
      {carouselData.map((carousel, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>Carousel {index + 1}</h3>
          <div style={carouselContainerStyle}>
            {carousel.map(event => (
              <Link to={event.link} key={event.id}>
                <img src={event.imgSrc} alt={`Event ${event.id}`} style={imageStyle} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
