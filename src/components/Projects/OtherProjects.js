import React, { useState } from 'react';
import items from '../../data/otherProjects';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const OtherProjects = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const classes = useStyles();

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.caption} target='_blank'>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={
              <Button variant='contained' color='primary'>
                Code
              </Button>
            }
            captionHeader={
              <a href={item.caption} target='_blank'>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={e => {
                    console.log(item.caption);
                  }}
                >
                  Page
                </Button>
              </a>
            }
          />
        </a>
      </CarouselItem>
    );
  });

  return (
    <div className='other-project-container'>
      <div class='header2'>
        <h1>Other Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          molestias mollitia quod, odit ratione, aliquam optio quaerat eligendi
          ullam eius ea libero et quibusdam sint? Consectetur dolorem at non
          illum.
        </p>
      </div>
      <div className='carousel-container'>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText='Previous'
            onClickHandler={previous}
          />
          <CarouselControl
            direction='next'
            directionText='Next'
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default OtherProjects;
