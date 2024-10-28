// import Image from 'next/image'
// import React from 'react'

// const Loading = () => {
//   return (
//     <div style={style}>
//       {/* <Image height={300} width={350} alt='' src="/icons/loading.png" /> */}
//       <img width="70%"  alt='' src="/icons/loading.png" />
//     </div>
//   )
// }
// const style :React.CSSProperties = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   height: "100dvh",
//   width: "100dvw",
//   background: "#000",
//   display: "grid",
//   placeItems: "center",
//   zIndex: 1000
// }


// export default Loading


import React from 'react';

const Loading = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  spinner: {
    border: '8px solid #f3f3f3',
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    animation: 'spin 1.7s linear infinite, grow-shrink 0.27s ease-in-out infinite',
  },
  text: {
    marginTop: '20px',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
  },
};

// Add keyframes directly in a style tag
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes grow-shrink {
      0%, 100% { border-top-width: 8px; }
      50% { border-top-width: 16px; }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Loading;
