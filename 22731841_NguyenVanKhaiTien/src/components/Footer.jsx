import React from 'react';
import './Footer.css';
const Footer = () => {
  const student = {
    name: 'Nguyen Van Khai Tien',
    class: 'DHKTPM18A',
    studentId: '22731841',
  };

  return (
    <footer className="footer">
      <p>Name: {student.name}</p>
      <p>Class: {student.class}</p>
      <p>Student ID: {student.studentId}</p>
    </footer>
  );
};

export default Footer;
