import React, { useEffect , useState } from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault'
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}> 

      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].title}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

  return (
    <Carousel
      key={category.id}
      category={category}
    />
  );
})}

    </PageDefault>
  );
}

export default Home;
