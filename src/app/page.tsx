import bundler from '@lib/data/bundler';
import {
  _888DummyData,
  bwinDummyData,
  spreadexDummyData,
  tipicoDummyData,
} from '@lib/utils/dummy';

const Home = () => {
  const test = bundler(
    _888DummyData,
    bwinDummyData,
    spreadexDummyData,
    tipicoDummyData
  );
  return (
    <div>
      {test.map((item, index) => (
        <pre key={index}>{JSON.stringify(item, undefined, 4)}</pre>
      ))}
    </div>
  );
};

export default Home;
