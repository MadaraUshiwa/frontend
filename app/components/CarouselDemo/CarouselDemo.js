'use client';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselDemo.css';

export default function CarouselDemo() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(true);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='carousel-container'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Carousel responsive={responsive}>
          {games.map((game, index) => (
            <div key={index}>
              <img className="carousel-image" src={game.thumbnail} alt={game.title} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}