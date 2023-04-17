import Carousel from './Carousel';
import SlickCarousel from './SlickCarousel';

const App = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <h2>Custom Built Carousel</h2>
      <Carousel />
      <h2>React Slick Carousel</h2>
      <SlickCarousel />
    </main>
  );
};
export default App;
