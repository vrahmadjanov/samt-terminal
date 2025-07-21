import React from 'react';
import {
  StyledTerminal,
  Header,
  Title,
  Subtitle,
  DoctorsGrid,
  DoctorCard,
  DoctorAvatar,
  DoctorInfo,
  DoctorName,
  DoctorSpecialty,
  DoctorRoom
} from './DoctorPage.styles';

const DoctorPage = ({ doctors, onSelect, language, translations }) => {
  return (
    <StyledTerminal>
      <Header>
        <Title>{translations[language].doctorTitle}</Title>
        <Subtitle>{translations[language].doctorSubtitle}</Subtitle>
      </Header>
      <DoctorsGrid>
        {doctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            onClick={() => onSelect(doctor)}
          >
            <DoctorAvatar>
              {doctor.name.split(' ').map(n => n[0]).join('')}
            </DoctorAvatar>
            <DoctorInfo>
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorSpecialty>{doctor.specialty || (language === 'ru' ? 'Специалист' : 'Мутахассис')}</DoctorSpecialty>
              <DoctorRoom>{translations[language].doctorRoom} {doctor.room}</DoctorRoom>
            </DoctorInfo>
          </DoctorCard>
        ))}
      </DoctorsGrid>
    </StyledTerminal>
  );
};

export default DoctorPage; 