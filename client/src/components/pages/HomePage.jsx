import MainCard from '../ui/MainCard';
// import Gallery from '../ui/Gallery'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClientPage from './ClientPage';

export default function HomePage({}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('/content').then((res) => setContent(res.data));
  }, []);

  return (
    <>
      <MainCard></MainCard>
      <ClientPage />
      {/* <div>
            {content.map((card) =>(
                <Gallery content = {card}></Gallery>
            ))}
        </div> */}
    </>
  );
}
