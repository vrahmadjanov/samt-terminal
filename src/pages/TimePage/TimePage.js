import React from 'react';
import {
  StyledTerminal,
  Header,
  Title,
  Subtitle,
  SlotsGrid,
  SlotCard,
  SlotTime
} from './TimePage.styles';

// Пример структуры слотов:
// const slots = [
//   { time: '09:00', is_available: true },
//   { time: '09:30', is_available: false },
//   ...
// ];

const TimePage = ({ timeSlots = [], onSelect, language, translations }) => {
  return (
    <StyledTerminal>
      <Header>
        <Title>{translations[language].timeTitle}</Title>
        <Subtitle>{translations[language].timeSubtitle}</Subtitle>
      </Header>
      <SlotsGrid>
        {timeSlots.map((slot, idx) => (
          <SlotCard
            key={slot.time + idx}
            $disabled={!slot.is_available}
            onClick={() => slot.is_available && onSelect(slot.time)}
          >
            <SlotTime $disabled={!slot.is_available}>{slot.time}</SlotTime>
          </SlotCard>
        ))}
      </SlotsGrid>
    </StyledTerminal>
  );
};

export default TimePage; 