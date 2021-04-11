interface CounterProps {
  count: number;
  setCount(value: number): void;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  return (
    <div>
      <h2>Count is: {count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;