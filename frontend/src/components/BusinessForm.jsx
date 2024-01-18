import React, { useState } from 'react';

const BusinessForm = () => {
  const [businessInfo, setBusinessInfo] = useState({
    businessType: '',
    adharCardNo: '',
    gstNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo({
      ...businessInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit business information (e.g., send data to a server).
    console.log('Business Information Submitted:', businessInfo);
    // You can add further logic to handle the submission, such as sending the data to a server.
  };

  return (
    <div>
      <h2>Add Business Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="businessType">Type of Business:</label>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={businessInfo.businessType}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="adharCardNo">Adhar Card No:</label>
          <input
            type="text"
            id="adharCardNo"
            name="adharCardNo"
            value={businessInfo.adharCardNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="gstNo">GST No:</label>
          <input
            type="text"
            id="gstNo"
            name="gstNo"
            value={businessInfo.gstNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessForm;
