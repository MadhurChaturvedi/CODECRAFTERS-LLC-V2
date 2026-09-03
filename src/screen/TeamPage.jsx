import React from 'react';
import Team from '../Components/Team';

function TeamPage({ onOpenConsultation }) {
  return (
    <Team onOpenConsultation={onOpenConsultation} />
  );
}

export default TeamPage;