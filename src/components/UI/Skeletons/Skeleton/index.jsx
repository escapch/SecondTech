import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="card__skeleton"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="142" cy="136" r="125" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="250" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="68" />
    <rect x="0" y="425" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="416" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
