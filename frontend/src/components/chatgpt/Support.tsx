"use client"

//   "use client"
// import React, { useState } from 'react';
// import SupportForm from './SupportForm';

// const FAQItem = ({ question, children } :{ question: string, children: React.ReactElement}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
//         {question}
//       </h3>
//       {isOpen && <div>{children}</div>}
//     </div>
//   );
// };

// export default function Support() {
//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h1>Battleroya.com Support Page</h1>
      
//       {/* Introduction */}
//       <section>
//         <h2>Welcome to Battleroya Support!</h2>
//         <p>
//           At Battleroya, we are committed to providing top-notch support to our community of gamers.
//           Whether you need help with your account, have questions about tournaments, or want to report an issue,
//           our support team is here to assist you.
//         </p>
//       </section>

//       {/* FAQ Section */}
//       <section>
//         <h2>Common Issues & Solutions (FAQ)</h2>
//         <FAQItem question="How do I reset my password?">
//           <p>You can reset your password by clicking on 'Forgot Password' at the login page and following the instructions.</p>
//         </FAQItem>
//         <FAQItem question="How do I change my email address?">
//           <p>You can change your email address in your account settings under 'Profile Information'.</p>
//         </FAQItem>
//         <FAQItem question="How do I delete my account?">
//           <p>To delete your account, please contact our support team directly at support@battleroya.com.</p>
//         </FAQItem>
//         {/* Add more FAQItems as needed */}
//       </section>

//       {/* Contact Support */}
//       <section>
//         <h2>Contact Support</h2>
//         <p>Email: <a href="mailto:support@battleroya.com">support@battleroya.com</a></p>
//         <p>Live Chat: Available for real-time assistance (Feature to be integrated)</p>
//         <p>Submit a Ticket: Fill out the <a href="#ticket-form">support ticket form</a> below.</p>
//       </section>

//       {/* Community Support */}
//       <section>
//         <h2>Community Support</h2>
//         <p>Join our <a href="https://discord.gg/your-discord-link">Discord Server</a> for live community support and discussions.</p>
//         <p>Visit our <a href="/forums">Forums</a> to ask questions and share experiences.</p>
//       </section>

//       {/* Knowledge Base */}
//       <section>
//         <h2>Knowledge Base</h2>
//         <p>Check out our <a href="/guides">Tutorials & Guides</a> for detailed instructions on various topics.</p>
//         <p>Read the latest <a href="/patch-notes">Patch Notes</a> for updates and improvements.</p>
//       </section>

//       {/* Report a Problem */}
//       <section>
//         <h2>Report a Problem</h2>
//         <p>If you encounter cheating, abuse, or inappropriate behavior, report it <a href="#report-abuse">here</a>.</p>
//         <p>To report bugs or glitches, please use our <a href="#bug-report">Bug Report</a> form.</p>
//       </section>

//       {/* Social Media & Updates */}
//       <section>
//         <h2>Social Media & Updates</h2>
//         <p>Follow us on <a href="https://twitter.com/your-twitter">Twitter</a> and <a href="https://facebook.com/your-facebook">Facebook</a> for updates and announcements.</p>
//         <p>Read our latest <a href="/news">Blog/News</a> for more information.</p>
//       </section>

//       {/* Feedback */}
//       <section>
//         <h2>Feedback</h2>
//         <p>We value your feedback! Please fill out our <a href="#feedback-form">User Feedback Form</a>.</p>
//       </section>


//       {/* Ticket Submission Form */}
//       <section id="ticket-form">
//         <h2>Submit a Ticket</h2>
//         <SupportForm />
//       </section>

//       {/* Footer */}
//       <footer>
//         <p><a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a></p>
//         <p>&copy; 2024 Battleroya.com. All rights reserved.</p>
//       </footer>
//     </div>
//   );




  import React, { useState } from 'react';
import styled from 'styled-components';
import SupportForm from './SupportForm';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: Arial, sans-serif;
  background-color: #16202A;
  color: #dae2eb;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #dae2eb;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  color: #dae2eb;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1em;
  color: #dae2eb;
`;

const FAQItemContainer = styled.div`
  margin-bottom: 1em;
`;

const FAQQuestion = styled.h3`
  cursor: pointer;
  margin: 0;
  color: #dae2eb;

  &:hover {
    color: #b0c4de;
  }
`;

const FAQAnswer = styled.div`
  margin-top: 0.5em;
  color: #dae2eb;
`;

const Link = styled.a`
  color: #b0c4de;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  margin-top: 2em;
  color: #dae2eb;
`;

const FAQItem = ({ question, children } :{question : string,children: React.ReactElement}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FAQItemContainer>
      <FAQQuestion onClick={() => setIsOpen(!isOpen)}>
        {question}
      </FAQQuestion>
      {isOpen && <FAQAnswer>{children}</FAQAnswer>}
    </FAQItemContainer>
  );
};

const Support: React.FC = () => {
  return (
    <Container>
      <Title>Battleroya.com Support Page</Title>

      {/* Introduction */}
      <section>
        <SectionTitle>Welcome to Battleroya Support!</SectionTitle>
        <Paragraph>
          At Battleroya, we are committed to providing top-notch support to our community of gamers.
          Whether you need help with your account, have questions about tournaments, or want to report an issue,
          our support team is here to assist you.
        </Paragraph>
      </section>

      {/* FAQ Section */}
      <section>
        <SectionTitle>Common Issues & Solutions (FAQ)</SectionTitle>
        <FAQItem question="How do I reset my password?">
          <Paragraph>You can reset your password by clicking on 'Forgot Password' at the login page and following the instructions.</Paragraph>
        </FAQItem>
        <FAQItem question="How do I change my email address?">
          <Paragraph>You can change your email address in your account settings under 'Profile Information'.</Paragraph>
        </FAQItem>
        <FAQItem question="How do I delete my account?">
          <Paragraph>To delete your account, please contact our support team directly at support@battleroya.com.</Paragraph>
        </FAQItem>
        {/* Add more FAQItems as needed */}
      </section>

      {/* Contact Support */}
      <section>
        <SectionTitle>Contact Support</SectionTitle>
        <Paragraph>Email: <Link href="mailto:support@battleroya.com">support@battleroya.com</Link></Paragraph>
        <Paragraph>Live Chat: Available for real-time assistance (Feature to be integrated)</Paragraph>
        <Paragraph>Submit a Ticket: Fill out the <Link href="#ticket-form">support ticket form</Link> below.</Paragraph>
      </section>


      {/* Integrating the Support Form */}
      <section>
        <SupportForm />
      </section>

      {/* Community Support */}
      <section>
        <SectionTitle>Community Support</SectionTitle>
        <Paragraph>Join our <Link href="https://discord.gg/your-discord-link">Discord Server</Link> for live community support and discussions.</Paragraph>
        <Paragraph>Visit our <Link href="/forums">Forums</Link> to ask questions and share experiences.</Paragraph>
      </section>

      {/* Knowledge Base */}
      <section>
        <SectionTitle>Knowledge Base</SectionTitle>
        <Paragraph>Check out our <Link href="/guides">Tutorials & Guides</Link> for detailed instructions on various topics.</Paragraph>
        <Paragraph>Read the latest <Link href="/patch-notes">Patch Notes</Link> for updates and improvements.</Paragraph>
      </section>

      {/* Report a Problem */}
      <section>
        <SectionTitle>Report a Problem</SectionTitle>
        <Paragraph>If you encounter cheating, abuse, or inappropriate behavior, report it <Link href="#report-abuse">here</Link>.</Paragraph>
        <Paragraph>To report bugs or glitches, please use our <Link href="#bug-report">Bug Report</Link> form.</Paragraph>
      </section>

      {/* Social Media & Updates */}
      <section>
        <SectionTitle>Social Media & Updates</SectionTitle>
        <Paragraph>Follow us on <Link href="https://twitter.com/your-twitter">Twitter</Link> and <Link href="https://facebook.com/your-facebook">Facebook</Link> for updates and announcements.</Paragraph>
        <Paragraph>Read our latest <Link href="/news">Blog/News</Link> for more information.</Paragraph>
      </section>

      {/* Feedback */}
      <section>
        <SectionTitle>Feedback</SectionTitle>
        <Paragraph>We value your feedback! Please fill out our <Link href="#feedback-form">User Feedback Form</Link>.</Paragraph>
      </section>

      {/* Footer */}
      <Footer>
        <Paragraph><Link href="/terms">Terms of Service</Link> | <Link href="/privacy">Privacy Policy</Link></Paragraph>
        <Paragraph>&copy; 2024 Battleroya.com. All rights reserved.</Paragraph>
      </Footer>
    </Container>
  );
};

export default Support;
