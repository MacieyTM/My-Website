import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2026, text: '4 lata kom. dośw. w firmie RBC Polska'},
  { number: 2024, text: 'Obrona pracy inżynierskiej na 5.0'},
  { number: 2020, text: 'Złoty Indeks PK'},
  { number: 2020, text: 'Złoty Indeks Politechniki Śląskiej'},
  { number: 2019, text: 'Reprezentant Polski w grze TrackMania'},
  { number: 2018, text: 'Wyróżniony betatester'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Osiągnięcia</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
