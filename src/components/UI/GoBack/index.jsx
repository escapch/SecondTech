import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import back from '../../../assets/Icons/back.svg';
const GoBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <Link onClick={handleClick}>
        <img src={back} alt="icon" />
      </Link>
    </div>
  );
};

export default GoBack;
