import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.value);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
      <h3>Greetings To Microverse</h3>
    </div>
  );
};

export default Greeting;