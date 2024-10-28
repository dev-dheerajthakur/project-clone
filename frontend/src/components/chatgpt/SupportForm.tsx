// "use client"
// import React, { useState } from 'react';

// const SupportForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     issueType: '',
//     description: '',
//     attachment: null,
//   });

//   const handleChange = (e :any) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e :any) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., send data to server or API)
//     alert('Your support request has been submitted!');
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Issue Type:</label>
//         <select name="issueType" value={formData.issueType} onChange={handleChange} required>
//           <option value="">Select...</option>
//           <option value="account">Account</option>
//           <option value="payment">Payment</option>
//           <option value="technical">Technical</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea name="description" value={formData.description} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Attachment:</label>
//         <input type="file" name="attachment" onChange={handleChange} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SupportForm;

"use client"
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #1f2a38;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FormTitle = styled.h2`
  color: #dae2eb;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  color: #dae2eb;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dae2eb;
  background-color: #16202A;
  color: #dae2eb;

  &:focus {
    outline: none;
    border-color: #b0c4de;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dae2eb;
  background-color: #16202A;
  color: #dae2eb;
  height: 120px;

  &:focus {
    outline: none;
    border-color: #b0c4de;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #b0c4de;
  border: none;
  border-radius: 4px;
  color: #16202A;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dae2eb;
  }
`;

const SupportForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    alert('Form submitted');
  };

  return (
    <FormContainer>
      <FormTitle>Submit a Support Ticket</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Your Name" required />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Your Email" required />
        </FormField>
        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" placeholder="Subject" required />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" placeholder="Describe your issue" required></TextArea>
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default SupportForm;
