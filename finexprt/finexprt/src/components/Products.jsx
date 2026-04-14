import React, { useState } from 'react';
import Modal from './Modal';
import LeadForm from './LeadForm';
import './Products.css';

const products = [
    {
        id: 'insurance',
        title: 'Insurance',
        icon: '🛡️',
        subTypes: [
            { name: 'Health Insurance', icon: '🏥', desc: 'Complete medical & hospitalization cover.' },
            { name: 'Life Insurance', icon: '👨‍👩-👧‍👦', desc: 'Secure your family\'s future.' },
            { name: 'Motor Insurance', icon: '🚗', desc: 'Accident & theft protection for vehicles.' },
            { name: 'Term Insurance', icon: '⏳', desc: 'Pure cover at affordable premiums.' },
            { name: 'Travel Insurance', icon: '✈️', desc: 'Protection against trip disruptions.' },
            { name: 'Home Insurance', icon: '🏠', desc: 'Safeguard your property & assets.' }
        ]
    },
    {
        id: 'mutual-funds',
        title: 'Mutual Funds',
        icon: '📈',
        subTypes: [
            { name: 'Equity Funds', icon: '📊', desc: 'Invest in stocks for high growth potential.' },
            { name: 'Debt Funds', icon: '🏢', desc: 'Stable returns with fixed income.' },
            { name: 'Hybrid Funds', icon: '⚖️', desc: 'Balanced risk and return profile.' },
            { name: 'Index Funds', icon: '📉', desc: 'Low-cost passive market growth.' },
            { name: 'ELSS (Tax Saving)', icon: '📜', desc: 'Save tax up to ₹46,800 annually.' },
            { name: 'Liquid Funds', icon: '💧', desc: 'Short-term savings with high liquidity.' }
        ]
    },
    {
        id: 'investment',
        title: 'Investment',
        icon: '💰',
        subTypes: [
            { name: 'Fixed Deposits', icon: '🏦', desc: 'Guaranteed returns from top banks.' },
            { name: 'PPF', icon: '🛡️', desc: 'Government-backed secure savings.' },
            { name: 'NPS', icon: '👴', desc: 'Low-cost pension for retirement.' },
            { name: 'Stock Market', icon: '🏛️', desc: 'Direct equity growth participation.' },
            { name: 'Digital Gold', icon: '🟡', desc: 'Buy pure gold digitally from ₹1.' },
            { name: 'REITs', icon: '🏢', desc: 'Hassle-free real estate investment.' }
        ]
    },
    {
        id: 'loans',
        title: 'Loans',
        icon: '💸',
        subTypes: [
            { name: 'Home Loans', icon: '🏡', desc: 'Dream home with easy bank EMIs.' },
            { name: 'Personal Loans', icon: '💳', desc: 'Instant funds for all personal needs.' },
            { name: 'Education Loans', icon: '🎓', desc: 'Support higher studies in India/Abroad.' },
            { name: 'Car Loans', icon: '🚙', desc: 'Get your dream car with fast approval.' },
            { name: 'Business Loans', icon: '💼', desc: 'Capital to scale your business operations.' },
            { name: 'Gold Loans', icon: '⛓️', desc: 'Instant cash against your jewelry.' }
        ]
    }
];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(products[0]);
    const [selectedSubType, setSelectedSubType] = useState(null);

    const openLeadModal = (subType) => setSelectedSubType(subType);
    const closeLeadModal = () => setSelectedSubType(null);

    return (
        <section id="products" className="products section">
            <div className="container">
                <div className="products-header center animate-fade-up">
                    <span className="section-label">EXPLORE SOLUTIONS</span>
                    <h2 className="section-heading">Financial <span className="accent">Products Catalog</span></h2>
                    <p className="section-subtext">Browse through our wide range of tailored financial solutions. Click any product to get expert assistance.</p>
                </div>

                {/* Tab Switcher */}
                <div className="tabs-container animate-fade-up delay-1">
                    {products.map((category) => (
                        <button
                            key={category.id}
                            className={`tab-btn ${activeCategory.id === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            <span className="tab-icon">{category.icon}</span>
                            <span className="tab-label">{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* Sub-types Grid */}
                <div className="sub-types-grid" key={activeCategory.id}>
                    {activeCategory.subTypes.map((type, index) => (
                        <div
                            key={index}
                            className={`sub-type-card animate-fade-up delay-${(index % 3) + 1}`}
                            onClick={() => openLeadModal(type)}
                        >
                            <div className="sub-type-icon">{type.icon}</div>
                            <h3>{type.name}</h3>
                            <p>{type.desc}</p>
                            <div className="sub-type-footer">
                                <span className="get-quote">Get Expert Call <i>→</i></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedSubType}
                onClose={closeLeadModal}
                title={`Assistance for ${selectedSubType?.name}`}
            >
                <div className="modal-lead-form">
                    <LeadForm isModal={true} initialService={activeCategory.id} />
                </div>
            </Modal>
        </section>
    );
};

export default Products;
