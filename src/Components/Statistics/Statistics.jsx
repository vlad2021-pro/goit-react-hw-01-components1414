import React from 'react'
import PropTypes from 'prop-types';
import {  StatContainer, StatTitle, StatList, StatItem, StatItemLabel, StatItemPercentage, } from '../Statistics/Statistics.styled'
 


const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatItemLabel className="label">{label}</StatItemLabel>
            <StatItemPercentage>{percentage}%</StatItemPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatContainer>
  );
};
      
    
 
export default Statistics
 
Statistics.proTotype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired
  }),


}