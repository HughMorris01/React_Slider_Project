import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [activePerson, setActivePerson] = useState(1);

  const prevPerson = () => {
    setActivePerson((oldPerson) => {
      const newPerson = (oldPerson - 1 + people.length) % people.length;
      return newPerson;
    });
  };

  const nextPerson = () => {
    setActivePerson((oldPerson) => {
      const newPerson = (oldPerson + 1) % people.length;
      return newPerson;
    });
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      nextPerson();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [activePerson]);

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - activePerson)}%)`,
              opacity: activePerson === index ? 1 : 0,
              visibility: activePerson === index ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button
        type="button"
        onClick={() => {
          prevPerson();
        }}
        className="prev"
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => {
          nextPerson();
        }}
        className="next"
      >
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
