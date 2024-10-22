import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Bell, Search, Settings, ArrowUpRight, DollarSign, ShoppingCart, TrendingUp, XOctagon, Upload } from 'lucide-react';
import axios from 'axios';


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
  <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-full ${Icon === DollarSign ? 'bg-yellow-100' :
          Icon === ShoppingCart ? 'bg-blue-100' :
            Icon === TrendingUp ? 'bg-green-100' :
              'bg-red-100'
        }`}>
        <Icon size={28} className={`${Icon === DollarSign ? 'text-yellow-600' :
            Icon === ShoppingCart ? 'text-blue-600' :
              Icon === TrendingUp ? 'text-green-600' :
                'text-red-600'
          }`} />
      </div>
      <div className="text-right">
        <span className={`text-sm font-medium flex items-center ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'
          }`}>
          {changeType === 'positive' ? (
            <ArrowUpRight size={16} className="mr-1" />
          ) : (
            <XOctagon size={16} className="mr-1" />
          )}
          {change}
        </span>
      </div>
    </div>
    <div>
      <h3 className="text-sm text-gray-500 font-semibold mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">${value.toLocaleString()}</p>
    </div>
  </div>
);


const Dashboard = () => {


  const [title, setTitle] = useState();
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Contest'); // default category
  const [newsFeed, setNewsFeed] = useState([]); // assuming you have a news feed

  const handleAddNews = async (e) => {
    e.preventDefault(); // prevent the form from reloading the page
    try {
      const response = await axios.post('http://localhost:4200/api/news', {
        title,
        content,
        category,
      });
      setNewsFeed([response.data, ...newsFeed]); // update news feed
      setTitle(''); // reset title input
      setContent(''); // reset content input
      setCategory('Contest'); // reset category
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-12">
      <div className="w-full mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-gray-500">Here are some reports on your dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <Settings size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard Icon={DollarSign} title="Students" value={24064} change="27.4%" changeType="positive" />
          <StatCard Icon={ShoppingCart} title="Contest" value={14567} change="13.2%" changeType="positive" />
          <StatCard Icon={TrendingUp} title="New events" value={87654} change="9.8%" changeType="positive" />
          <StatCard Icon={XOctagon} title="Submissions" value={983} change="4.5%" changeType="negative" />
        </div>

      <div className='w-full flex space-x-8'>

        <div className="w-2/3 grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">

          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">User Activity</h2>
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
        </div>

            {/* Right Column */}
            <div className="w-1/3 flex flex-col h-full">
      <div className="bg-white rounded-lg shadow flex-grow flex flex-col h-full">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Add News</h2>
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <form className="space-y-4 flex-grow flex flex-col" onSubmit={handleAddNews}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <div className="relative">
                  <select
                    className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Contest">Contest</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Internship">Internship</option>
                    <option value="Placement">Placement</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">News Title</label>
              <input
                type="text"
                className="block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="News title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                className="block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Here is my first news for Somaiya"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="flex space-x-4 mt-auto">
              <button
                type="reset"
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200"
                onClick={() => {
                  setTitle(''); 
                  setContent(''); 
                  setCategory('Contest');
                }}
              >
                Reset
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
