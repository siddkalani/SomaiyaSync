import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Bell, Search, Settings, ArrowUpRight, DollarSign, ShoppingCart, TrendingUp, XOctagon } from 'lucide-react';
import './Dashboard.css'; // Link to your vanilla CSS file

const salesData = [
  { name: 'Jan', value: 300 },
  { name: 'Feb', value: 400 },
  { name: 'Mar', value: 350 },
  { name: 'Apr', value: 1000 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 550 },
];

const incomeData = [
  { name: 'Main Course', value: 10000 },
  { name: 'Beverage', value: 4000 },
  { name: 'Others', value: 1490 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const StatCard = ({ Icon, title, value, change, changeType }) => (
  <div className="stat-card">
    <div className="card-header">
      <div className={`icon-wrapper ${Icon === DollarSign ? 'yellow' : Icon === ShoppingCart ? 'blue' : Icon === TrendingUp ? 'green' : 'red'}`}>
        <Icon size={28} className={`icon ${Icon === DollarSign ? 'yellow-text' : Icon === ShoppingCart ? 'blue-text' : Icon === TrendingUp ? 'green-text' : 'red-text'}`} />
      </div>
      <div className="change-wrapper">
        <span className={`change ${changeType === 'positive' ? 'positive' : 'negative'}`}>
          {changeType === 'positive' ? (
            <ArrowUpRight size={16} className="arrow-up" />
          ) : (
            <XOctagon size={16} className="arrow-down" />
          )}
          {change}
        </span>
      </div>
    </div>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-value">${value.toLocaleString()}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <header className="header">
          <div className="welcome-message">
            <h1 className="title">Hello, Rijal 👋</h1>
            <p className="subtitle">Here are some reports on your dashboard</p>
          </div>
          <div className="header-actions">
            <div className="search-wrapper">
              <input type="text" placeholder="Search" className="search-input" />
              <Search className="search-icon" size={20} />
            </div>
            <button className="icon-button">
              <Bell size={20} />
            </button>
            <button className="icon-button">
              <Settings size={20} />
            </button>
          </div>
        </header>

        <div className="stat-cards">
          <StatCard Icon={DollarSign} title="Total sale" value={24064} change="27.4%" changeType="positive" />
          <StatCard Icon={ShoppingCart} title="Total order" value={14567} change="13.2%" changeType="positive" />
          <StatCard Icon={TrendingUp} title="Total revenue" value={87654} change="9.8%" changeType="positive" />
          <StatCard Icon={XOctagon} title="Cancelled order" value={983} change="4.5%" changeType="negative" />
        </div>

        <div className="charts">
          <div className="sales-chart">
            <h2 className="chart-title">Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="income-chart">
            <h2 className="chart-title">Income</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={incomeData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                  {incomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value}`, 'Income']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="income-legend">
              {incomeData.map((item, index) => (
                <div key={item.name} className="legend-item">
                  <div className="color-box" style={{ backgroundColor: COLORS[index] }}></div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="transactions-trending">
          <div className="transactions">
            <h2 className="chart-title">Transactions</h2>
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Name products</th>
                  <th>Date/Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tomato</td>
                  <td>Wed, 04 Jun 2023</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <td>Egg</td>
                  <td>Wed, 04 Jun 2023</td>
                  <td>$30.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="trending-menu">
            <h2 className="chart-title">Trending menu</h2>
            <ul className="trending-list">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="trending-item">
                  <div className="trending-details">
                    <div className="avatar"></div>
                    <div>
                      <h3 className="trending-title">Product Name</h3>
                      <p className="trending-percentage">+16.2%</p>
                    </div>
                  </div>
                  <ArrowUpRight className="trending-arrow" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
