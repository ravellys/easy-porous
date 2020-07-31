import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{ background: "#282a36" }} >
      
      <section style={{ background: "#282a36" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url} 
        videoDescription={""}
      />
      </section >
      <section style={{ background: "#44475a" }} >
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />  

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
      </section>

      <Footer />

 
    </div>
  );
}

export default App;
