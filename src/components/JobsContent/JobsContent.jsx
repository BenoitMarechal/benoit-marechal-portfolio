import React from 'react';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { jobs } from '../../assets/jobs';

const JobsContent = () => {
  return (
    <>
      {jobs.map((job, index) => (
        <ExperienceCard {...job} key={'jobs-' + index} />
      ))}
    </>
  );
};

export default JobsContent;
