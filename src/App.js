import './App.css';

function App() {

  const images = document.querySelectorAll(".image-container img");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;

      const image = entry.target;

      image.src = image.src.replace("&w=0&", "&w=1000&")
    })
  }, {});

  images.forEach((image) => {
    observer.observe(image);
  });

  return (
    <div className="App">
      <h1 className="title">Florestas Pelo Mundo</h1>
      <div className="container">
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1458782106/pt/foto/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.webp?b=1&s=170667a&w=0&k=20&c=iPYlJJ5paG7lQs_zbV82BHUxrsTLxN9GwvwECtJg1Ps=" alt="Floresta 1" />
          <p>Floresta 1</p>
        </div>
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1611151233/pt/foto/lakes-of-alaska-in-summer.webp?b=1&s=170667a&w=0&k=20&c=2prg-JlbTvtvjufmTyRua1kYM1efNju2i2zMJl6pYkw=" alt="Floresta 2" />
          <p>Floresta 2</p>
        </div>
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1491158797/pt/foto/the-lush-green-trees-rise-up-into-the-air.webp?b=1&s=170667a&w=0&k=20&c=bkUMEI9KKbgQNEO5V-fpTFYsrFu0mwnccnEObRZkFh0=" alt="Floresta 3" />
          <p>Floresta 3</p>
        </div>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxvcmVzdGF8ZW58MHx8MHx8fDA%3D" alt="Floresta 4" />
          <p>Floresta 4</p>
        </div>
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1427695363/pt/foto/fairy-forest-mystical-atmosphere-paranormal-another-world-stranger-forest-in-a-fog-dark-scary.webp?b=1&s=170667a&w=0&k=20&c=SzmIfQLgabezP5pfVv45qhXwZBqQoVen6U16NxOeT30=" alt="Floresta 5" />
          <p>Floresta 5</p>
        </div>
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1421166630/pt/foto/aerial-shot-of-trees-and-sunset.webp?b=1&s=170667a&w=0&k=20&c=cyQbCL9gFkV_g2IZgIQRWcSQf49DqXpRE2Fx3ornMyw=" alt="Floresta 6" />
          <p>Floresta 6</p>
        </div>
      </div>
    </div>
  );
}

export default App;
