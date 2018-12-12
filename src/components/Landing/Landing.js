import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './Landing.css';

const items = [
  { 
    id: 0,
    text: 'O volta é uma iniciativa digital social, uma plataforma para a conexão e reconhecimento de moradores de rua.',
    altText: 'O que é o Volta?',
    caption: 'Social'
  },
  {
    id: 1,
    text: 'Nós visamos o auxílio ao próximo, na recuperação da dignidade do morador de rua e no reencontro com sua família.',
    altText: 'O que fazemos?',
    caption: 'Digital'
  },
  {
    id: 2,
    text: 'Ajude ao volta, divulgue!',
    altText: 'Começar!',
    caption: 'Conectado'
  }
];

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <div className="Landing">
            <h1>Volta</h1>

            <h4>{item.text}</h4>
            <div>
              <button><Link to='/signup'>Sign in</Link></button>
              <button><Link to='/login'>Login</Link></button>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 100vh;
                background: #F5BD42;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default Landing;