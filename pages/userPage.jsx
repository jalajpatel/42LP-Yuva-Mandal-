import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

const UserPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selectedVillage, setSelectedVillage] = useState('');

  useEffect(() => {
    const fetchMainMembers = async () => {
      try {
        const response = await fetch('/api/main-members');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching main members:', error);
      }
    };

    fetchMainMembers();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on search query or village filter change
  }, [searchQuery, selectedVillage]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterUsers(query, selectedVillage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page on rows per page change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleVillageChange = (event) => {
    const village = event.target.value;
    setSelectedVillage(village);
    filterUsers(searchQuery, village);
  };

  const filterUsers = (query, village) => {
    const filtered = users.filter(user => {
      const matchesQuery = user.name.toLowerCase().includes(query) ||
        user.village.toLowerCase().includes(query) ||
        user.shakh.toLowerCase().includes(query) ||
        user.currentAddress.toLowerCase().includes(query) ||
        user.mobileNumber.toLowerCase().includes(query) ||
        (user.family && user.family.toLowerCase().includes(query));
      const matchesVillage = village ? user.village === village : true;
      return matchesQuery && matchesVillage;
    });
    setFilteredUsers(filtered);
  };

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', marginBottom: '5rem', }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', backdropFilter: 'blur(8px)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>User Management</h1>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <SearchIcon style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={handleSearch}
              style={{
                width: '100%',
                paddingLeft: '36px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
            />
          </div>
          <select onChange={handleVillageChange} value={selectedVillage} style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #D1D5DB', outline: 'none' }}>
            <option value="">All</option>
            <option value="dabhadi">dabhadi</option>
            <option value="abc">abc</option>
            <option value="Village 3">Village 3</option>
          </select>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#FFA500' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#FFFFFF' }}>Name</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#FFFFFF' }}>Village</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#FFFFFF' }}>Shakh</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#FFFFFF' }}>Address</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#FFFFFF' }}>Mobile</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '500', color: '#FFFFFF' }}>Family Details</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFD700' }}>
                  <td style={{ padding: '12px 16px' }}>{user.name}</td>
                  <td style={{ padding: '12px 16px' }}>{user.village}</td>
                  <td style={{ padding: '12px 16px' }}>{user.shakh}</td>
                  <td style={{ padding: '12px 16px' }}>{user.currentAddress}</td>
                  <td style={{ padding: '12px 16px' }}>{user.mobileNumber}</td>
                  <td style={{ padding: '12px 16px', color: '#3B82F6', fontWeight: 'bold' }}>
                    <Link href={`/familydetails/${user.mobileNumber}`}>See full family details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Rows per page:</span>
            <select onChange={handleRowsPerPageChange} value={rowsPerPage} style={{ padding: '8px', borderRadius: '8px', border: '1px solid #D1D5DB', outline: 'none', marginBottom: '16px'
}}>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredUsers.length / rowsPerPage)} onPageChange={handlePageChange} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #D1D5DB',
          backgroundColor: 'transparent',
          color: '#3B82F6',
          cursor: 'pointer',
          outline: 'none',
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        Previous
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            backgroundColor: currentPage === page ? '#3B82F6' : 'transparent',
            color: currentPage === page ? '#FFF' : '#3B82F6',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: '1px solid #D1D5DB',
          backgroundColor: 'transparent',
          color: '#3B82F6',
          cursor: 'pointer',
          outline: 'none',
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
      >
        Next
      </button>
    </div>
  );
};

export default UserPage;
