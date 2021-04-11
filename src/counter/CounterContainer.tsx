import { useRecoilState, useRecoilValue } from 'recoil';

import { countState, diviserState, dividedCountState } from '../global-state/counter';
import Counter from './Counter';
import CounterDivision from './CounterDivision';

const CounterContainer: React.FC = () => {
  const [count, setCount] = useRecoilState(countState);
  const [diviser, setDiviser] = useRecoilState(diviserState);
  const dividedCount = useRecoilValue(dividedCountState);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <CounterDivision diviser={diviser} setDiviser={setDiviser} dividedCount={dividedCount} />
    </div>
  );
};

export default CounterContainer;
