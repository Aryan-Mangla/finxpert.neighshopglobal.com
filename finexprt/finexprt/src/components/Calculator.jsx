import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
    const [totalValue, setTotalValue] = useState(0);
    const [investedAmount, setInvestedAmount] = useState(0);
    const [returnsValue, setReturnsValue] = useState(0);

    useEffect(() => {
        const P = monthlyInvestment;
        const r = expectedReturn / 100 / 12;
        const n = timePeriod * 12;

        const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const totalInvested = P * n;

        setTotalValue(Math.round(futureValue));
        setInvestedAmount(Math.round(totalInvested));
        setReturnsValue(Math.round(futureValue - totalInvested));
    }, [monthlyInvestment, expectedReturn, timePeriod]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <section id="calculator" className="calculator section">
            <div className="container">
                <div className="calculator-wrapper">
                    <div className="calculator-info animate-fade-up">
                        <span className="section-label">PLAN YOUR FUTURE</span>
                        <h2 className="section-heading">SIP <span className="accent">Calculator</span></h2>
                        <p className="section-subtext">Calculate how much your monthly investments can grow over time with the power of compounding.</p>

                        <div className="calculator-stats">
                            <div className="stat-item animate-fade-up delay-1">
                                <span>Invested Amount</span>
                                <strong>{formatCurrency(investedAmount)}</strong>
                            </div>
                            <div className="stat-item animate-fade-up delay-2">
                                <span>Est. Returns</span>
                                <strong>{formatCurrency(returnsValue)}</strong>
                            </div>
                            <div className="stat-item highlight animate-fade-up delay-3">
                                <span>Total Value</span>
                                <strong>{formatCurrency(totalValue)}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="calculator-card animate-fade-up delay-2">
                        <div className="input-group">
                            <div className="label-row">
                                <label>Monthly Investment</label>
                                <span className="value">{formatCurrency(monthlyInvestment)}</span>
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                            />
                        </div>

                        <div className="input-group">
                            <div className="label-row">
                                <label>Expected Return Rate (p.a)</label>
                                <span className="value">{expectedReturn}%</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="0.5"
                                value={expectedReturn}
                                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                            />
                        </div>

                        <div className="input-group">
                            <div className="label-row">
                                <label>Time Period (Years)</label>
                                <span className="value">{timePeriod} Yr</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                step="1"
                                value={timePeriod}
                                onChange={(e) => setTimePeriod(Number(e.target.value))}
                            />
                        </div>

                        <div className="calculator-cta">
                            <button className="btn btn-primary w-full">Start Investing Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
