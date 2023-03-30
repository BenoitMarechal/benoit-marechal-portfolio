import React from 'react';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { jobs } from '../../assets/jobs';

const JobsContent = () => {
  return (
    <div className='section__content cv__studies__section__content '>
      {jobs.map((job, index) => (
        <ExperienceCard {...job} key={'jobs-' + index} />
      ))}
    </div>
  );
};

export default JobsContent;
