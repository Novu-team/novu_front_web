import React from 'react'
import styled from 'styled-components'

import imageAgenda from '../../../assets/agenda.jpg'
import imageBookNote from '../../../assets/book_note.jpg'
import imageHotel_piscine from '../../../assets/hotel_piscine.jpg'

import HomeSectionTitle from '../../atoms/HomeSectionTitle'
import HomeSectionSubtitle from '../../atoms/HomeSectionSubtitle'

const StyledImage = styled.img`
  height: 33vh;
  width: 100%;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  z-index: 1;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
`

const HomeIntro = () => {
  return (
    <>
      <StyledContainer>
        <Content>
          <HomeSectionTitle tag='h2'>
            Bienvenue sur Novu
          </HomeSectionTitle>
          <HomeSectionSubtitle>
            L&apos;outil collaboratif pour s&apos;organiser son séjour
          </HomeSectionSubtitle>
        </Content>
        <StyledImage src={imageBookNote} />
      </StyledContainer>
    </>
  )
}

export default HomeIntro