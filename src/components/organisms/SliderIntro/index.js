import React, { useState } from 'react'
import styled from 'styled-components'
import ItemsCarousel from 'react-items-carousel'
import { get, map } from 'lodash'

import HebergementPicture from '../../../assets/hebergement.jpg'
import ValisesPicture from '../../../assets/Valises.jpg'
import DepensesPicture from '../../../assets/Dépenses.jpg'
import DatePicture from '../../../assets/Dates.jpg'
import CoursesPicture from '../../../assets/Courses.jpg'

const SliderContainer = styled.div`
  padding: 40px 40px;
  background: ${({ theme }) => get(theme, 'primary', '#FFF')};
`

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const BottomSliderContainer = styled.div`
  z-index: 1;
  top: 25vh;
  position: absolute;
  align-items: center;
  flex-direction: column;
`

const TitleSliderText = styled.h1`
  color: white;
`

const sliderPictures = [
  {
    image: HebergementPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: DatePicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: HebergementPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: DepensesPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: HebergementPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: ValisesPicture,
    title: '',
    content: '',
    icon: ''
  }, {
    image: CoursesPicture,
    title: '',
    content: '',
    icon: ''
  }
]

const SliderIntro = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <SliderContainer>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        { map(sliderPictures, (item, key) => {
          return <div style={{ height: '50vh', background: '#EEE' }}>
            <BottomSliderContainer>
              <TitleSliderText>Test</TitleSliderText>
            </BottomSliderContainer>
            <BackgroundImage src={get(item, 'image')} />
          </div>
        })}
      </ItemsCarousel>
    </SliderContainer>
  );

}

export default SliderIntro