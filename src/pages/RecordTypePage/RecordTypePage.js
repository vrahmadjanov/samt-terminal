import React from 'react';
import queueIcon from '../../queue.svg';
import timeIcon from '../../time.svg';
import {
  StyledTerminal,
  Header,
  Title,
  Subtitle,
  RecordTypeGrid,
  RecordTypeCard,
  RecordTypeIcon,
  RecordTypeName,
  RecordTypeDesc
} from './RecordTypePage.styles';

const RecordTypePage = ({ onQueue, onPreRecord, language, translations }) => {
  return (
    <StyledTerminal>
      <Header>
        <Title>{translations[language].recordTypeTitle}</Title>
        <Subtitle>{translations[language].recordTypeSubtitle}</Subtitle>
      </Header>
      <RecordTypeGrid>
        <RecordTypeCard onClick={onQueue}>
          <RecordTypeIcon src={queueIcon} alt="Живая очередь" />
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', flex:1}}>
            <RecordTypeName>{translations[language].queueButton}</RecordTypeName>
            <RecordTypeDesc>{language === 'ru' ? 'Встать на ближайший доступный интервал' : 'Ба наздиктарин фосилаи дастрас қадам ниҳодан'}</RecordTypeDesc>
          </div>
        </RecordTypeCard>
        <RecordTypeCard onClick={onPreRecord}>
          <RecordTypeIcon src={timeIcon} alt="Запись по времени" />
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', flex:1}}>
            <RecordTypeName>{translations[language].preRecordButton}</RecordTypeName>
            <RecordTypeDesc>{language === 'ru' ? 'Выбрать удобный свободный слот заранее' : 'Вақти мувофиқи озодро пешакӣ интихоб кардан'}</RecordTypeDesc>
          </div>
        </RecordTypeCard>
      </RecordTypeGrid>
    </StyledTerminal>
  );
};

export default RecordTypePage; 