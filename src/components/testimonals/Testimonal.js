import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { CurasolItem } from './CurasolItem';
import Banner from '../banner/Banner';
import './Testimonal.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1198, itemsToShow: 4 },
  { width: 1220, itemsToShow: 4 }
];

const Testimonals = () => {
  const testimonalItem = CurasolItem.map((testItem, idx) => {
    return (
      <Item key={idx}>
        <div className="testimonals-item-box">
          <div className="testimonals-item">
            <img src={testItem.svg} alt={testItem.courseName} className="img-fluid" />
            <h5 className="course-name">
              {testItem.courseName}
            </h5>
          </div>
          <div className="know-more">
            <a href={testItem.courseLink} className="course-link">
              {testItem.details}
            </a>
          </div>

        </div>

      </Item>
    );
  });

  return (
    <div className="testimonal-container">
      <div className="container testimonal">
        <div className="carousal">
          <Carousel breakPoints={breakPoints}>
            {testimonalItem}
          </Carousel>
        </div>
        <div className="down-box">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Testimonals;