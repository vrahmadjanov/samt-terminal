import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import homeIcon from './home.svg';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import PhonePage from './pages/PhonePage/PhonePage';
import SpecialtyPage from './pages/SpecialtyPage/SpecialtyPage';
import DoctorPage from './pages/DoctorPage/DoctorPage';
import RecordTypePage from './pages/RecordTypePage/RecordTypePage';
import TimePage from './pages/TimePage/TimePage';
import TicketPage from './pages/TicketPage/TicketPage';
import { BodyContainer, SquareContainer, Header, HomeButton, RuButton, TjButton, TimeText, Main, Footer, MarqueeFooter, MarqueeText } from './App.styled';


// Mock данные
const specialties = [
  { id: 1, name: 'Терапевт' },
  { id: 2, name: 'Хирург' },
  { id: 3, name: 'Офтальмолог' },
  { id: 4, name: 'Невролог' },
  { id: 5, name: 'Кардиолог' },
];

const doctors = {
  1: [
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
  ],
  2: [
    { id: 201, name: 'Петров Дмитрий Сергеевич', room: '301' },
    { id: 202, name: 'Сидорова Елена Викторовна', room: '302' },
  ],
  3: [
    { id: 301, name: 'Кузнецова Анна Михайловна', room: '401' },
  ],
  4: [
    { id: 401, name: 'Васильев Игорь Николаевич', room: '501' },
  ],
  5: [
    { id: 501, name: 'Николаева Татьяна Владимировна', room: '601' },
  ],
  6: [
    { id: 601, name: 'Кардиолог Иванов И.И.', room: '701' },
  ],
  7: [
    { id: 701, name: 'ЛОР Смирнова А.А.', room: '801' },
  ],
  8: [
    { id: 801, name: 'Маммолог Петрова Е.В.', room: '901' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
  ],
  9: [
    { id: 901, name: 'Невролог Сидоров П.П.', room: '1001' },
  ],
  10: [
    { id: 1001, name: 'Окулист Козлова М.М.', room: '1101' },
  ],
  11: [
    { id: 1101, name: 'Проктолог Волков В.В.', room: '1201' },
  ],
  12: [
    { id: 1201, name: 'Психиатр Морозова Н.Н.', room: '1301' },
  ],
  13: [
    { id: 1301, name: 'Психолог Лебедева О.О.', room: '1401' },
  ],
  14: [
    { id: 1401, name: 'Психотерапевт Романова Л.Л.', room: '1501' },
  ],
  15: [
    { id: 1501, name: 'Стоматолог Орлов А.А.', room: '1601' },
    { id: 1502, name: 'Стоматолог Белова С.С.', room: '1602' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
  ],
  16: [
    { id: 1501, name: 'Стоматолог Орлов А.А.', room: '1601' },
    { id: 1502, name: 'Стоматолог Белова С.С.', room: '1602' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
  ],
  17: [
    { id: 1701, name: 'Травматолог Голубев Д.Д.', room: '1801' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
  ],
  18: [
    { id: 1801, name: 'Уролог Соловьев К.К.', room: '1901' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
  ],
};

const timeSlots = [
  { time: '09:00', is_available: true },
  { time: '09:30', is_available: false },
  { time: '10:00', is_available: true },
  { time: '10:30', is_available: true },
  { time: '11:00', is_available: false },
  { time: '11:30', is_available: true },
  { time: '14:00', is_available: true },
  { time: '14:30', is_available: false },
  { time: '15:00', is_available: true },
  { time: '15:30', is_available: true },
  { time: '16:00', is_available: false },
  { time: '16:30', is_available: true },
];

const translations = {
  ru: {
    welcome: 'Добро пожаловать в центр здоровья XX города XX',
    continue: 'Нажмите на экран для продолжения',
    phoneStep: 'Введите номер телефона',
    specialtyStep: 'Выберите специальность',
    doctorStep: 'Выберите врача',
    recordTypeStep: 'Выберите тип записи',
    timeStep: 'Выберите удобное время',
    ticketStep: 'Получите талон',
    // PhonePage
    phoneTitle: 'Введите номер телефона',
    phoneSubtitle: 'Для продолжения введите ваш номер телефона',
    phonePlaceholder: 'Номер телефона',
    phoneButton: 'Продолжить',
    // SpecialtyPage
    specialtyTitle: 'Выберите специальность',
    specialtySubtitle: 'Выберите нужную вам специальность врача',
    // DoctorPage
    doctorTitle: 'Выберите врача',
    doctorSubtitle: 'Выберите удобного для вас врача',
    doctorRoom: 'Кабинет',
    // RecordTypePage
    recordTypeTitle: 'Выберите тип записи',
    recordTypeSubtitle: 'Выберите подходящий тип записи',
    queueButton: 'Записаться в очередь',
    preRecordButton: 'Предварительная запись',
    // TimePage
    timeTitle: 'Выберите время на сегодня',
    timeSubtitle: 'Выберите удобное для вас время приема',
    // TicketPage
    ticketDoctor: 'Врач',
    ticketRoom: 'Кабинет',
    ticketTime: 'Время',
    ticketDate: 'Дата',
    // Specialties
    specialtyTherapist: 'Терапевт',
    specialtySurgeon: 'Хирург',
    specialtyOphthalmologist: 'Офтальмолог',
    specialtyNeurologist: 'Невролог',
    specialtyCardiologist: 'Кардиолог',
    specialtyLor: 'ЛОР',
    specialtyMammologist: 'Маммолог',
    specialtyPsychiatrist: 'Психиатр',
    specialtyPsychologist: 'Психолог',
    specialtyPsychotherapist: 'Психотерапевт',
    specialtyDentist: 'Стоматолог',
    specialtyTraumatologist: 'Травматолог',
    specialtyUrologist: 'Уролог',
    specialtyProctologist: 'Проктолог',
    specialtyOculist: 'Окулист',
    specialtyDermatologist: 'Дерматолог',
    specialtyEndocrinologist: 'Эндокринолог',
    specialtyGastroenterologist: 'Гастроэнтеролог',
    specialtyGynecologist: 'Гинеколог',
    specialtyOtolaryngologist: 'ЛОР (отоларинголог)',
  },
  tj: {
    welcome: 'Ба маркази саломатии шаҳри XX хуш омадед',
    continue: 'Барои идома додан экранро пахш кунед',
    phoneStep: 'Рақами телефонро ворид кунед',
    specialtyStep: 'Махсусиятро интихоб кунед',
    doctorStep: 'Табибро интихоб кунед',
    recordTypeStep: 'Навъи сабтро интихоб кунед',
    timeStep: 'Вақти мувофиқро интихоб кунед (имруз)',
    ticketStep: 'Талон гиред',
    // PhonePage
    phoneTitle: 'Рақами телефонро ворид кунед',
    phoneSubtitle: 'Барои идома додан рақами телефони худро ворид кунед',
    phonePlaceholder: 'Рақами телефон',
    phoneButton: 'Идома додан',
    // SpecialtyPage
    specialtyTitle: 'Махсусиятро интихоб кунед',
    specialtySubtitle: 'Махсусияти табиби лозимро интихоб кунед',
    // DoctorPage
    doctorTitle: 'Табибро интихоб кунед',
    doctorSubtitle: 'Табиби мувофиқро интихоб кунед',
    doctorRoom: 'Хона',
    // RecordTypePage
    recordTypeTitle: 'Навъи сабтро интихоб кунед',
    recordTypeSubtitle: 'Навъи сабти мувофиқро интихоб кунед',
    queueButton: 'Дар навбат сабт шавед',
    preRecordButton: 'Сабти пешакӣ',
    // TimePage
    timeTitle: 'Вақтро интихоб кунед',
    timeSubtitle: 'Вақти мувофиқи худро интихоб кунед',
    // TicketPage
    ticketDoctor: 'Табиб',
    ticketRoom: 'Хона',
    ticketTime: 'Вақт',
    ticketDate: 'Сана',
    // Specialties
    specialtyTherapist: 'Терапевт',
    specialtySurgeon: 'Ҳирург',
    specialtyOphthalmologist: 'Офтальмолог',
    specialtyNeurologist: 'Невролог',
    specialtyCardiologist: 'Кардиолог',
    specialtyLor: 'ЛОР',
    specialtyMammologist: 'Маммолог',
    specialtyPsychiatrist: 'Психиатр',
    specialtyPsychologist: 'Психолог',
    specialtyPsychotherapist: 'Психотерапевт',
    specialtyDentist: 'Дандонпизишк',
    specialtyTraumatologist: 'Травматолог',
    specialtyUrologist: 'Уролог',
    specialtyProctologist: 'Проктолог',
    specialtyOculist: 'Окулист',
    specialtyDermatologist: 'Дерматолог',
    specialtyEndocrinologist: 'Эндокринолог',
    specialtyGastroenterologist: 'Гастроэнтеролог',
    specialtyGynecologist: 'Гинеколог',
    specialtyOtolaryngologist: 'ЛОР (отоларинголог)',
  }
};

// ==================== Основной компонент ====================
const AppointmentTerminal = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 7) {
      const data = {
        phone,
        specialty: specialties.find(s => s.id === selectedSpecialty)?.name || null,
        doctor: selectedDoctor ? {
          name: selectedDoctor.name,
          room: selectedDoctor.room
        } : null,
        time: selectedTime,
        ticketNumber,
        date: new Date().toLocaleDateString()
      };
      console.log('Данные пациента:', JSON.stringify(data, null, 2));
      const timer = setTimeout(() => {
        resetApp();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [step, phone, selectedSpecialty, selectedDoctor, selectedTime, ticketNumber]);

  const resetApp = () => {
    setStep(1);
    setPhone('');
    setSelectedSpecialty(null);
    setSelectedDoctor(null);
    setSelectedTime(null);
    setTicketNumber(null);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
    setPhone(value);
  };

  const handleSpecialtySelect = (id) => {
    setSelectedSpecialty(id);
    setStep(4);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setStep(5);
  };

  // Для живой очереди — сразу выдаём талон без времени
  const handleQueue = () => {
    setSelectedTime(null);
    setTicketNumber(Math.floor(100000 + Math.random() * 900000));
    setStep(7);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTicketNumber(Math.floor(100000 + Math.random() * 900000));
    setStep(7);
  };

  const handleNextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && phone.length === 9) setStep(3);
    else if (step === 5) setStep(6);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomePage onNext={handleNextStep} logo={logo} title={translations[language].welcome} subtitle={translations[language].continue} />;
      case 2:
        return <PhonePage phone={phone} onPhoneChange={handlePhoneChange} onNext={handleNextStep} language={language} translations={translations} />;
      case 3:
        return <SpecialtyPage onSpecialtySelect={handleSpecialtySelect} language={language} translations={translations} />;
      case 4:
        return <DoctorPage doctors={selectedSpecialty ? doctors[selectedSpecialty] : []} onSelect={handleDoctorSelect} language={language} translations={translations} />;
      case 5:
        return <RecordTypePage onQueue={handleQueue} onPreRecord={handleNextStep} language={language} translations={translations} />;
      case 6:
        return <TimePage timeSlots={timeSlots} onSelect={handleTimeSelect} language={language} translations={translations} />;
      case 7:
        return <TicketPage ticketNumber={ticketNumber} doctor={selectedDoctor} time={selectedTime} date={new Date().toLocaleDateString()} language={language} translations={translations} />;
      default:
        return null;
    }
  };

  return (
    <BodyContainer>
      <SquareContainer>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HomeButton onClick={resetApp} aria-label={language === 'ru' ? 'На главный экран' : 'Ба саҳифаи асосӣ'}>
            <img src={homeIcon} alt={language === 'ru' ? 'На главный экран' : 'Ба саҳифаи асосӣ'} />
          </HomeButton>
          <RuButton 
            $active={language === 'ru'} 
            onClick={() => setLanguage('ru')} 
            aria-label="Русский язык"
          >
            Ru
          </RuButton>
          <TjButton 
            $active={language === 'tj'} 
            onClick={() => setLanguage('tj')} 
            aria-label="Тоҷикӣ забон"
          >
            Tj
          </TjButton>
        </div>
        <div></div> {/* Пустой элемент для центрирования */}
        <TimeText>
          {currentTime.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
          {' | '}
          {currentTime.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          })}
        </TimeText>
      </Header>
        <Main>
          {renderStep()}
        </Main>
        <Footer>
          <MarqueeFooter>
            <MarqueeText>
              <span><span className="step">1</span> {translations[language].phoneStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">2</span> {translations[language].specialtyStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">3</span> {translations[language].doctorStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">4</span> {translations[language].recordTypeStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">5</span> {translations[language].timeStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">6</span> {translations[language].ticketStep}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span><span className="step">1</span> {translations[language].phoneStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">2</span> {translations[language].specialtyStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">3</span> {translations[language].doctorStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">4</span> {translations[language].recordTypeStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">5</span> {translations[language].timeStep}</span>
              <span className="arrow">→</span>
              <span><span className="step">6</span> {translations[language].ticketStep}</span>
            </MarqueeText>
          </MarqueeFooter>
        </Footer>
      </SquareContainer>
    </BodyContainer>
  );
};

export default AppointmentTerminal;