'use client'; //TODO: Andere Lösung suchen
import { useEffect, useState } from 'react';
import bundler from '@lib/data/bundler';
import arbitrageFinder from '@lib/data/arbitrageFinder';
import {
  _888sport,
  admiralbet,
  betAtHome,
  betano,
  bwin,
  hpyBet,
  merkurSports,
  neobet,
  oddset,
  sportingbet,
  spreadex,
  tipico,
  tipwin,
  winamax,
} from '@lib/utils/dummy';

const Home = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const test = arbitrageFinder(
      bundler(
        _888sport,
        // admiralbet,
        betAtHome,
        betano,
        bwin,
        hpyBet,
        merkurSports,
        neobet,
        oddset,
        sportingbet,
        spreadex,
        tipico,
        tipwin
        // winamax
      )
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
