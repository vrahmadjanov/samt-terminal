import React from 'react';
import {
  StyledTerminal,
  Header,
  Title,
  SpecialtiesGrid,
  SpecialtyCard,
  SpecialtyIcon,
  SpecialtyName
} from './SpecialtyPage.styles';

const specialties = [
  {
    "id": 14,
    "name": "Психотерапевт",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/psihoterapevt.svg"
  },
  {
    "id": 15,
    "name": "Стоматолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/stomatolog.svg"
  },
  {
    "id": 16,
    "name": "Терапевт",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/terapevt.svg"
  },
  {
    "id": 17,
    "name": "Травматолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/travmatolog.svg"
  },
  {
    "id": 18,
    "name": "Уролог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/urolog.svg"
  },
  {
    "id": 1,
    "name": "Дерматолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/dermatolog.svg"
  },
  {
    "id": 2,
    "name": "Эндокринолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/endokrinolog.svg"
  },
  {
    "id": 3,
    "name": "Гастроэнтеролог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/gastroenterolog.svg"
  },
  {
    "id": 4,
    "name": "Гинеколог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/ginekolog.svg"
  },
  {
    "id": 5,
    "name": "Хирург",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/hirurg.svg"
  },
  {
    "id": 6,
    "name": "Кардиолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/kardiolog.svg"
  },
  {
    "id": 7,
    "name": "ЛОР (отоларинголог)",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/lor_otolaringolog.svg"
  },
  {
    "id": 8,
    "name": "Маммолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/mammolog.svg"
  },
  {
    "id": 9,
    "name": "Невролог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/nevrolog.svg"
  },
  {
    "id": 10,
    "name": "Окулист",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/okulist.svg"
  },
  {
    "id": 11,
    "name": "Проктолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/proktolog.svg"
  },
  {
    "id": 12,
    "name": "Психиатр",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/psihiatr.svg"
  },
  {
    "id": 13,
    "name": "Психолог",
    "icon": "https://storage.yandexcloud.net/media-samt/icons/specialties/psiholog.svg"
  }
];

// Mock данные врачей для проверки
const doctors = {
  1: [],
  2: [{ id: 201, name: 'Петров Дмитрий Сергеевич', room: '301' }],
  3: [{ id: 301, name: 'Кузнецова Анна Михайловна', room: '401' }],
  4: [{ id: 401, name: 'Васильев Игорь Николаевич', room: '501' }],
  5: [{ id: 501, name: 'Николаева Татьяна Владимировна', room: '601' }],
  6: [{ id: 601, name: 'Кардиолог Иванов И.И.', room: '701' }],
  7: [{ id: 701, name: 'ЛОР Смирнова А.А.', room: '801' }],
  8: [{ id: 801, name: 'Маммолог Петрова Е.В.', room: '901' }],
  9: [{ id: 901, name: 'Невролог Сидоров П.П.', room: '1001' }],
  10: [{ id: 1001, name: 'Окулист Козлова М.М.', room: '1101' }],
  11: [{ id: 1101, name: 'Проктолог Волков В.В.', room: '1201' }],
  12: [{ id: 1201, name: 'Психиатр Морозова Н.Н.', room: '1301' }],
  13: [{ id: 1301, name: 'Психолог Лебедева О.О.', room: '1401' }],
  14: [{ id: 1401, name: 'Психотерапевт Романова Л.Л.', room: '1501' }],
  15: [
    { id: 1501, name: 'Стоматолог Орлов А.А.', room: '1601' },
    { id: 1502, name: 'Стоматолог Белова С.С.', room: '1602' }
  ],
  16: [
    { id: 1601, name: 'Терапевт Соколова И.И.', room: '1701' },
    { id: 1602, name: 'Терапевт Воробьева Е.Е.', room: '1702' }
  ],
  17: [{ id: 1701, name: 'Травматолог Голубев Д.Д.', room: '1801' }],
  18: [{ id: 1801, name: 'Уролог Соловьев К.К.', room: '1901' }],
};

const SpecialtyPage = ({ onSpecialtySelect, language, translations }) => {
  // Функция для получения перевода названия специальности
  const getSpecialtyTranslation = (specialtyName) => {
    const specialtyKey = specialtyName.toLowerCase().replace(/[^а-яё]/gi, '');
    const translationKey = `specialty${specialtyKey.charAt(0).toUpperCase() + specialtyKey.slice(1)}`;
    return translations[language][translationKey] || specialtyName;
  };

  const hasDoctors = (specialtyId) => {
    return doctors[specialtyId] && doctors[specialtyId].length > 0;
  };

  return (
    <StyledTerminal>
      <Header>
        <Title>{translations[language].specialtyTitle}</Title>
      </Header>
      
      <SpecialtiesGrid>
        {specialties.map(specialty => {
          const isAvailable = hasDoctors(specialty.id);
          return (
            <SpecialtyCard 
              key={specialty.id}
              $disabled={!isAvailable}
              onClick={() => isAvailable && onSpecialtySelect(specialty.id)}
            >
              <SpecialtyIcon 
                src={specialty.icon} 
                alt={specialty.name} 
                $disabled={!isAvailable}
              />
              <SpecialtyName $disabled={!isAvailable}>
                {getSpecialtyTranslation(specialty.name)}
              </SpecialtyName>
            </SpecialtyCard>
          );
        })}
      </SpecialtiesGrid>
    </StyledTerminal>
  );
};

export default SpecialtyPage; 