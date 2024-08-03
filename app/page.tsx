import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{
      width: '60%', // Cover 75% of the screen width
      height: '350px',
      margin: '20px',
      marginTop: '100px',
      padding: '60px',
      borderRadius: '15px', // Rounded edges
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Shadow
      backgroundColor: 'white',
      fontSize: '3em', // Adjust font size using em units
    }}>
      Hellooo 👋<br />
      nama ku Alfian <br />
      Teknik Informatika - Ganesha
    </div>
    <div>
    </div>
    
  </div>
    
  );
}
