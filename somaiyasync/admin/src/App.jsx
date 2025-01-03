import React, { useState } from 'react';
import { Search, Bell, ChevronDown, MoreVertical, ChevronRight, Upload } from 'lucide-react';
import axios from 'axios';

const ProductManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [documentUrl, setDocumentUrl] = useState('');
const [selectedBranch, setSelectedBranch] = useState('');
const [selectedSem, setSelectedSem] = useState('');
const [documentTopic, setDocumentTopic] = useState('');
const [documentList, setDocumentList] = useState([]); // For holding document data if needed

const handleAddDocument = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:4200/api/documents', {
      url: documentUrl,  
      branch: selectedBranch,  
      sem: selectedSem,  
      topic: documentTopic,  
    });
    console.log('Posted data:', response.data);

    setDocumentList([response.data, ...documentList]);

    setDocumentUrl('');
    setSelectedBranch('');
    setSelectedSem('');
    setDocumentTopic('');
  } catch (error) {
    console.error('Error adding document:', error);
  }
};


  const [products, setProducts] = useState([
    { name: 'TAC', code: 'Comps', category: 'Engg', stock: 4, price: 'Ise' },
    // { name: 'Kopag Benedict', code: '#12345', category: 'Food', stock: 120, price: '$123.00' },
    // { name: 'Dory En Oats', code: '#12345', category: 'Food', stock: 120, price: '$123.00' },
    // { name: 'Lemon Butter Dory', code: '#12345', category: 'Food', stock: 120, price: '$123.00' },
    // { name: 'Spicy Tuna Nachos', code: '#12345', category: 'Food', stock: 120, price: '$123.00' },
    // { name: 'Alfredo', code: '#12345', category: 'Food', stock: 120, price: '$123.00' },
    // { name: 'Blackpaper Chicken', code: '#12345', category: 'Food', stock: 120, price: '$123.00' },
  ]);

  return (
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
        <div className="flex space-x-8">
          {/* Left Column */}

          <div className="flex-grow flex flex-col">
            <div className="flex justify-between mb-6">
              <h1 className="text-2xl font-bold">Documents</h1>
              <div className="flex relative space-x-3">
                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md" />
                <Search className="absolute top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">+ Add new doc</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow flex-grow flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold flex items-center">
                  Uploads
                  <span className="text-white text-sm ml-2 bg-blue-500 px-2 py-1 rounded-full">{products.length}</span>
                </h2>
                <MoreVertical size={20} className="text-gray-400 cursor-pointer" />
              </div>
              <div className="p-4 flex-grow overflow-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="py-2 font-medium">Topic</th>
                      <th className="py-2 font-medium">Department</th>
                      <th className="py-2 font-medium">Course</th>
                      <th className="py-2 font-medium">Semester</th>
                      <th className="py-2 font-medium">type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50">
                        <td className="py-3">{product.name}</td>
                        <td className="py-3">{product.code}</td>
                        <td className="py-3">{product.category}</td>
                        <td className="py-3 text-blue-500">{product.stock}</td>
                        <td className="py-3">{product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-500">Page 1 of 40</span>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((page) => (
                      <button
                        key={page}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${page === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/3">
          <form className="w-full flex flex-col" onSubmit={handleAddDocument}>

          <div className="w-full flex flex-col h-full">
            <div className="bg-white rounded-lg shadow flex-grow flex flex-col h-full">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Add Documents</h2>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <form className="space-y-4 flex-grow flex flex-col">
                  <div className=''>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image/Pdf/Word/Excel</label>
                    <input
  type="text"
  className="block w-full sm:text-sm border-gray-300 rounded-md"
  placeholder="Input document URL"
  value={documentUrl}
  onChange={(e) => setDocumentUrl(e.target.value)}
/>
<label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
<select
  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
  value={selectedBranch}
  onChange={(e) => setSelectedBranch(e.target.value)}
>
  <option value="comps">comps</option>
  <option value="it">it</option>
  <option value="extc">extc</option>
  <option value="excp">excp</option>
  <option value="mech">mech</option>
</select>
<label className="block text-sm font-medium text-gray-700 mb-1">Sem</label>
<select
  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
  value={selectedSem}
  onChange={(e) => setSelectedSem(e.target.value)}
>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
<label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
<input
  type="text"
  className="block w-full sm:text-sm border-gray-300 rounded-md"
  placeholder="Input document topic"
  value={documentTopic}
  onChange={(e) => setDocumentTopic(e.target.value)}
/>

                  </div>
             
               
                  <div className="flex space-x-4 mt-auto">
                    <button
                      type="reset"
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200"
                    >
                      Reset
                    </button>
                    <button
                    // onClick={handleAddDocument}
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
          </form>
          </div>
        </div>
      </main>
  );
};

export default ProductManagementDashboard;
