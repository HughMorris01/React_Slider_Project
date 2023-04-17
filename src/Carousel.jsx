import { useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [activePerson, setActivePerson] = useState(1);

  const prevPerson = (index) => {
    if (activePerson > 0) {
      setActivePerson(activePerson - 1);
    } else {
      setActivePerson(people.length - 1);
    }
  };

  const nextPerson = (index) => {
    if (activePerson < people.length - 1) {
      setActivePerson(activePerson + 1);
    } else {
      setActivePerson(0);
    }
  };

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - activePerson)}%)`,
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
          prevPerson(activePerson);
        }}
        className="prev"
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => {
          nextPerson(activePerson);
        }}
        className="next"
      >
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
