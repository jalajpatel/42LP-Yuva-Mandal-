// pages/familydetails/[mobileNumber].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Image from 'next/image';

const FamilyDetailsPage = () => {
  const router = useRouter();
  const { mobileNumber } = router.query;
  const [familyDetails, setFamilyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const placeholderImage = '/path/to/placeholder-image.png'; // Provide the path to your placeholder image

  function convertDriveLinkToDirectLink(shareableLink) {
    const fileIdMatch = shareableLink.match(/[-\w]{25,}/);
    if (!fileIdMatch) {
      return placeholderImage; // Return placeholder image if the link is invalid
    }
    const fileId = fileIdMatch[0];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  useEffect(() => {
    const fetchFamilyDetails = async () => {
      if (!mobileNumber) return;

      try {
        const response = await fetch(`/api/family-details/${mobileNumber}`);
        const data = await response.json();

        if (data.success) {
          setFamilyDetails(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('An error occurred while fetching family details');
      } finally {
        setLoading(false);
      }
    };

    fetchFamilyDetails();
  }, [mobileNumber]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        minHeight: '100vh',
        color: '#000',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Family Details</h1>
        {familyDetails && (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#555' }}>Main Member: {familyDetails.mainMemberName}</h2>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#333', color: 'white' }}>
                  <th style={tableHeaderStyle}>Full Name</th>
                  <th style={tableHeaderStyle}>Relationship</th>
                  <th style={tableHeaderStyle}>Mosaal</th>
                  <th style={tableHeaderStyle}>Mobile Number</th>
                  <th style={tableHeaderStyle}>College Name</th>
                  <th style={tableHeaderStyle}>Address</th>
                  <th style={tableHeaderStyle}>Nokari</th>
                  <th style={tableHeaderStyle}>Marital Status</th>
                  <th style={tableHeaderStyle}>Date of Birth</th>
                  <th style={tableHeaderStyle}>Photo</th>
                </tr>
              </thead>
              <tbody>
                {familyDetails.members.map((member, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'rgba(242, 242, 242, 0.9)' : 'rgba(255, 255, 255, 0.9)' }}>
                    <td style={tableCellStyle}>{member.fullName}</td>
                    <td style={tableCellStyle}>{member.relationshipWithMainPerson}</td>
                    <td style={tableCellStyle}>{member.mosaal}</td>
                    <td style={tableCellStyle}>{member.mobileNumber}</td>
                    <td style={tableCellStyle}>{member.collegeName}</td>
                    <td style={tableCellStyle}>{member.address1}</td>
                    <td style={tableCellStyle}>{member.nokari}</td>
                    <td style={tableCellStyle}>{member.maritalStatus}</td>
                    <td style={tableCellStyle}>{new Date(member.dob).toLocaleDateString()}</td>
                    <td style={tableCellStyle}>
                      <Image
                        src={convertDriveLinkToDirectLink(member.photoUrl)}
                        alt={member.fullName}
                        width="100"
                        height="100"
                        style={{ borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// CSS styles for table headers
const tableHeaderStyle = {
  padding: '14px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd',
  fontWeight: 'bold',
  fontSize: '14px',
};

// CSS styles for table cells
const tableCellStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
  fontSize: '14px',
};

export default FamilyDetailsPage;
