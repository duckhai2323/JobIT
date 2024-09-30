import React from 'react';
import { useSelector } from 'react-redux';
function HomePageCandidate() {
  const authState = useSelector((state) => state.auth);
  return <div>{authState.data.data.name}</div>;
}

export default HomePageCandidate;
