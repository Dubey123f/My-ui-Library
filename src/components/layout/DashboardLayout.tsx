// // src/components/Dashboard.tsx
// import React from 'react';
// import Chart from '../dashboard/Chart';
// import StatsGrid from '../dashboard/Stats';

// const Dashboard: React.FC = () => {
//   // Sample data for the chart
//   const chartData = [
//     { month: 'Jan', value: 5000 },
//     { month: 'Feb', value: 7500 },
//     { month: 'Mar', value: 6000 },
//     { month: 'Apr', value: 9000 },
//     { month: 'May', value: 8000 },
//     { month: 'Jun', value: 12000 },
//   ];

//   // Sample data for stats
//   const statsData = [
//     {
//       title: 'Total Users',
//       value: '1,234',
//       icon: '👥',
//       change: 12,
//       color: 'blue' as 'blue',
//     },
//     {
//       title: 'Revenue',
//       value: '$12,345',
//       icon: '💰',
//       change: 8,
//       color: 'green' as 'green',
//     },
//     {
//       title: 'Active Projects',
//       value: '42',
//       icon: '📊',
//       change: -5,
//       color: 'purple' as 'purple',
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
//         <div className="flex space-x-2">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             Export
//           </button>
//           <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
//             Filter
//           </button>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <StatsGrid stats={statsData} />

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Chart
//           data={chartData}
//           title="Monthly Revenue"
//           height="h-80"
//         />
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
//           <div className="space-y-4">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="flex items-center space-x-3">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-600">New user registration</p>
//                   <p className="text-xs text-gray-400">2 minutes ago</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Additional Metrics */}
//       <div className="mt-6 bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">Performance Metrics</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {['Page Views', 'Bounce Rate', 'Average Session', 'Conversion Rate'].map((metric) => (
//             <div key={metric} className="text-center">
//               <p className="text-gray-600 text-sm">{metric}</p>
//               <p className=" text-2xl font-bold text-gray-800">12,345</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// src/components/Dashboard.tsx
import React from 'react';
import { FiUsers, FiDollarSign, FiFolder } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
            <FiUsers className="text-blue-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold">$45,678</h3>
            </div>
            <FiDollarSign className="text-green-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Projects</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
            <FiFolder className="text-purple-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <div className="h-64 flex items-end space-x-2">
            {[60, 45, 75, 50, 80, 65].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-sm mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { text: 'New user registered', time: '2 minutes ago' },
              { text: 'Meeting with clients', time: '1 hour ago' },
              { text: 'Project deadline updated', time: '3 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-600">{activity.text}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Page Views', value: '12,345' },
            { label: 'Bounce Rate', value: '23%' },
            { label: 'Average Time', value: '2m 35s' },
            { label: 'Conversion Rate', value: '3.2%' },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-500 text-sm">{metric.label}</p>
              <p className="text-xl font-bold text-gray-800">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;