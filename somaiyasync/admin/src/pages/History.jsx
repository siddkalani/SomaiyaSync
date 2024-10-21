import React, { useState } from 'react';
import { Bell, User, ChevronDown, MoreVertical, ChevronRight } from 'lucide-react';

const History = () => {
  const navItems = ['Dashboard', 'Order list', 'History', 'Bills', 'Products management'];
  const [activeTab, setActiveTab] = useState('All');
  const filterOptions = ['All', 'Waiting', 'Completed', 'Ready to Serve', 'Canceled'];
  const orderHistory = [
    { number: 'typing', dateTime: '10:00 AM', status: 'Paid', amount: 123.00 },
    { number: 'typing', dateTime: '09:35 PM', status: 'Paid', amount: 250.00 },
    { number: 'typing', dateTime: '17 May 2022', status: 'Paid', amount: 340.00 },
    { number: 'typing', dateTime: '17 May 2022', status: 'Paid', amount: 89.00 },
    { number: 'typing', dateTime: '17 May 2022', status: 'Paid', amount: 123.00 },
    { number: '#01015', dateTime: '17 May 2022', status: 'Paid', amount: 254.00 },
    { number: '#01015', dateTime: '17 May 2022', status: 'Paid', amount: 143.00 },
  ];
  const orderDetails = {
    orderNumber: '#12345',
    time: '10:34 AM',
    customer: 'Vinicius Bayu',
    table: 'Table 3A',
    dineOption: 'Dine In',
  };
  const orderItems = [
    { name: 'Crispy dory sambal matah', quantity: 1, specs: 'Medium - Not spicy', price: 101.00, image: '/api/placeholder/80/80' },
    { name: 'Spicy tuna nachos', quantity: 3, specs: 'Medium - Not spicy', price: 542.00, image: '/api/placeholder/80/80' },
    { name: 'Butterscotch', quantity: 3, specs: 'Medium - Not spicy', price: 132.00, image: '/api/placeholder/80/80' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen mt-12">

      <main className="flex flex-grow w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Contests</h1>
            <span className="text-sm text-gray-500">Showing 9 contest list</span>
          </div>

          <div className="bg-white w-full rounded-lg shadow flex flex-col flex-grow overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Recents</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">120</span>
            </div>
            <div className="overflow-auto flex-grow">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 sticky top-0 bg-white">Name <ChevronDown className="inline" /></th>
                    <th className="text-left p-4 sticky top-0 bg-white">Date/Time <ChevronDown className="inline" /></th>
                    <th className="text-left p-4 sticky top-0 bg-white">Payment status</th>
                    <th className="text-left p-4 sticky top-0 bg-white">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order, index) => (
                    <tr key={index} className={index === 1 ? 'bg-blue-50' : ''}>
                      <td className="p-4">{order.number}</td>
                      <td className="p-4">{order.dateTime}</td>
                      <td className="p-4 text-blue-500">{order.status}</td>
                      <td className="p-4">${order.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center p-4 border-t mt-auto">
              <span>Page 1 of 40</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${page === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;