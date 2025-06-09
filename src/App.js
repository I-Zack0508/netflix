import React, { useState, useEffect } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import './App.css';
import Header from './components/Header';


export default () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, [])


  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 10) {
        setBlackHeeader(true)
      } else {
        setBlackHeeader(false)
      }
    }
    window.addEventListener('scroll', scrollListner);
    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, []);


  return (
    <div className='page'>
      <Header
        black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>

      <footer>
        Created by Isaac R
      </footer>

    </div>
  )
};








































// AMO PROGRAMAÇÃO DE CORAÇÃO 😊😊😊😊👍👍😁😁💕💕


























































// socorro 🥲🥲🥲🥲
