import React, { useState } from 'react';
import './StrategyBuilder.css';

const StrategyBuilder = () => {
  const [strategy, setStrategy] = useState({
    name: 'My Strategy',
    tokenA: 'SOL',
    tokenB: 'USDC',
    range: [-10, 10],
  });
  const [backtestResult, setBacktestResult] = useState(null);

  const handleSimulate = () => {
    // In a real application, you would perform a more complex backtesting.
    // For now, we'll just generate some random data.
    const newBacktestResult = {
      pnl: Math.random() * 1000,
      apy: Math.random() * 100,
      sharpeRatio: Math.random() * 2,
    };
    setBacktestResult(newBacktestResult);
  };

  return (
    <div className="strategy-builder">
      <h2>Meteora LP Strategy Builder</h2>
      <div className="strategy-form">
        <input
          type="text"
          placeholder="Strategy Name"
          value={strategy.name}
          onChange={(e) => setStrategy({ ...strategy, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Token A"
          value={strategy.tokenA}
          onChange={(e) => setStrategy({ ...strategy, tokenA: e.target.value })}
        />
        <input
          type="text"
          placeholder="Token B"
          value={strategy.tokenB}
          onChange={(e) => setStrategy({ ...strategy, tokenB: e.target.value })}
        />
        <button onClick={handleSimulate}>Backtest Strategy</button>
      </div>
      {backtestResult && (
        <div className="backtest-results">
          <h3>Backtest Results</h3>
          <p>PNL: ${backtestResult.pnl.toFixed(2)}</p>
          <p>APY: {backtestResult.apy.toFixed(2)}%</p>
          <p>Sharpe Ratio: {backtestResult.sharpeRatio.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default StrategyBuilder;
