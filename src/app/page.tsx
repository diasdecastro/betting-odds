'use client'; //TODO: Andere Lösung suchen
import { useEffect, useState } from 'react';
import bundler from '@lib/data/bundler';
import arbitrageCalculator from '@lib/data/arbitrageCalculator';
import {
  _888DummyData,
  bwinDummyData,
  spreadexDummyData,
  tipicoDummyData,
} from '@lib/utils/dummy';

const Home = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const test = arbitrageCalculator(
      bundler(_888DummyData, bwinDummyData, spreadexDummyData, tipicoDummyData)
    );
    setState(test);
  }, []);

  return (
    <div>
      {state.map((item, index) => (
        <pre key={index}>{JSON.stringify(item, undefined, 4)}</pre>
      ))}
    </div>
  );
};

export default Home;
