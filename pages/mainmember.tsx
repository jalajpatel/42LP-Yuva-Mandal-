import React, { useState } from 'react';

interface MainMemberFormData {
  name: string;
  mobileNumber: string;
  village: string;
  shakh: string;
  currentAddress: string;
}

const MainMemberForm: React.FC = () => {
  const [formData, setFormData] = useState<MainMemberFormData>({
    name: '',
    mobileNumber: '',
    village: '',
    shakh: '',
    currentAddress: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/mainMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }
      const result = await response.json();
      console.log('Submitted:', result);
      setSuccessMessage('Main member added successfully');
      setFormData({
        name: '',
        mobileNumber: '',
        village: '',
        shakh: '',
        currentAddress: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="mobileNumber" style={labelStyle}>Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="village" style={labelStyle}>Village Name:</label>
        <input
          type="text"
          id="village"
          name="village"
          value={formData.village}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="shakh" style={labelStyle}>Shakh:</label>
        <input
          type="text"
          id="shakh"
          name="shakh"
          value={formData.shakh}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="currentAddress" style={labelStyle}>Current Address:</label>
        <textarea
          id="currentAddress"
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          required
          style={textAreaStyle}
        ></textarea>
      </div>
      <button type="submit" style={buttonStyle} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
};

// Inline CSS
const formStyle: React.CSSProperties = {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9'
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: '20px'
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 'bold',
  marginBottom: '5px'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const textAreaStyle: React.CSSProperties = {
  width: '100%',
  height: '100px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default MainMemberForm;
