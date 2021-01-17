import React from 'react';

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#01579b',
        width: '100%',
        height: 80,
        textAlign: 'center',
        color: 'white',
        paddingTop: 5,
        marginTop: 100,
      }}
    >
      <p style={{ marginBottom: 5 }}>プライバシーポリシー</p>
      <p style={{ marginTop: 5, marginBottom: 5 }}>Contact</p>
    </footer>
  );
};

// export const Footer = () => {
//     return (
//       <footer style={{ backgroundColor: 'green', width: '100%' }}>
//         <p>Test</p>
//       </footer>
//     );
//   };
