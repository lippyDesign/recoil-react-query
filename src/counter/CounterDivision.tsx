interface CounterDivisionProps {
  diviser: string;
  setDiviser(value: string): void;
  dividedCount: number;
}

const CounterDivision: React.FC<CounterDivisionProps> = ({ diviser, setDiviser, dividedCount }) => {
  return (
    <div>
      <h2>Divide count by:</h2>
      <div>
        <input value={diviser} onChange={(e) => setDiviser(e.target.value)} />
      </div>
      <h2>Total is: {dividedCount}</h2>
    </div>
  );
};

export default CounterDivision;