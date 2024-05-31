import { useState } from 'react';

export default function NestedForm() {
  const [members, setMembers] = useState([
    { 
      id: 1, 
      fullName: '', 
      relationshipWithMainPerson: '', 
      mosaal: '', 
      mobileNumber: '', 
      collegeName: '', 
      address1: '', 
      nokari: '', 
      maritalStatus: '', 
      dob: '', // Changed null to empty string for controlled component
      photoUrl: '' 
    }
  ]);

  const handleChange = (e, memberId, field) => {
    const value = e.target ? e.target.value : e;
    const updatedMembers = members.map(member => {
      if (member.id === memberId) {
        return { ...member, [field]: value };
      }
      return member;
    });
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/nestedForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ members }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully:', result);
        // Optional: Reset form or show success message
      } else {
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const addMember = () => {
    const newMemberId = members.length + 1;
    setMembers([...members, { 
      id: newMemberId, 
      fullName: '', 
      relationshipWithMainPerson: '', 
      mosaal: '', 
      mobileNumber: '', 
      collegeName: '', 
      address1: '', 
      nokari: '', 
      maritalStatus: '', 
      dob: '', // Changed null to empty string for controlled component
      photoUrl: '' 
    }]);
  };

  const removeMember = (memberId) => {
    const updatedMembers = members.filter(member => member.id !== memberId);
    setMembers(updatedMembers);
  };

  return (
    <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif', width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      {members.map((member, index) => (
        <div key={member.id} style={{ marginBottom: "20px", padding: "20px", borderRadius: "15px", border: "1px solid #ccc", backgroundColor: "#f9f9f9" }}>
          <h3 style={{ marginBottom: "10px" }}>સભ્ય {index + 1}</h3>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`fullName_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>પૂરું નામ:</label>
            <input
              type="text"
              id={`fullName_${member.id}`}
              name={`fullName_${member.id}`}
              value={member.fullName}
              onChange={(e) => handleChange(e, member.id, "fullName")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`photoUrl_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>ફોટો URL:</label>
            <input
              type="text"
              id={`photoUrl_${member.id}`}
              name={`photoUrl_${member.id}`}
              value={member.photoUrl}
              onChange={(e) => handleChange(e, member.id, "photoUrl")}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`relationshipWithMainPerson_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>મુખ્ય વ્યક્તિ સાથે સંબંધ:</label>
            <input
              type="text"
              id={`relationshipWithMainPerson_${member.id}`}
              name={`relationshipWithMainPerson_${member.id}`}
              value={member.relationshipWithMainPerson}
              onChange={(e) => handleChange(e, member.id, "relationshipWithMainPerson")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`mosaal_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>મોસાળ:</label>
            <input
              type="text"
              id={`mosaal_${member.id}`}
              name={`mosaal_${member.id}`}
              value={member.mosaal}
              onChange={(e) => handleChange(e, member.id, "mosaal")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`mobileNumber_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>મોબાઇલ નંબર:</label>
            <input
              type="tel"
              id={`mobileNumber_${member.id}`}
              name={`mobileNumber_${member.id}`}
              value={member.mobileNumber}
              onChange={(e) => handleChange(e, member.id, "mobileNumber")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`collegeName_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>કોલેજ નામ સાથે શિક્ષણ:</label>
            <input
              type="text"
              id={`collegeName_${member.id}`}
              name={`collegeName_${member.id}`}
              value={member.collegeName}
              onChange={(e) => handleChange(e, member.id, "collegeName")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`address1_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>વર્તમાન સરનામું:</label>
            <input
              type="text"
              id={`address1_${member.id}`}
              name={`address1_${member.id}`}
              value={member.address1}
              onChange={(e) => handleChange(e, member.id, "address1")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`nokari_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>ધંધો/નોકરી અને પદવી:</label>
            <input
              type="text"
              id={`nokari_${member.id}`}
              name={`nokari_${member.id}`}
              value={member.nokari}
              onChange={(e) => handleChange(e, member.id, "nokari")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`maritalStatus_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>વૈવાહિક સ્થિતિ:</label>
            <select
              id={`maritalStatus_${member.id}`}
              name={`maritalStatus_${member.id}`}
              value={member.maritalStatus}
              onChange={(e) => handleChange(e, member.id, "maritalStatus")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            >
              <option value="">પસંદ કરો</option>
              <option value="અવિવાહિત">અવિવાહિત</option>
              <option value="વિવાહિત">વિવાહિત</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor={`dob_${member.id}`} style={{ display: "block", marginBottom: "5px" }}>જન્મ તારીખ:</label>
            <input
              type="date"
              id={`dob_${member.id}`}
              name={`dob_${member.id}`}
              value={member.dob}
              onChange={(e) => handleChange(e, member.id, "dob")}
              required
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <button type="button" onClick={() => removeMember(member.id)} style={{ display: "block", margin: "10px 0", padding: "8px 16px", borderRadius: "5px", border: "none", backgroundColor: "#d9534f", color: "#fff", cursor: "pointer" }}>સભ્ય દૂર કરો</button>
        </div>
      ))}
      <button type="button" onClick={addMember} style={{ margin: "15px 12px" }}>સભ્ય ઉમેરો</button>
      <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">સબમિટ કરો</button>
    </form>
  );
}
