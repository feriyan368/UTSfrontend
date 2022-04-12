const Hero = () => {
  return (
    <div>
      <section id="hero-area">
        <div id="slider-hero-nav" />
        <div className="owl-carousel" id="slider-hero">
          <div className="slider-item">
            <div className="slider-item-img">
              <img src="img/hero1.jpg" height={500} width="100%" alt />
            </div>
            <div className="slider-item-content">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
