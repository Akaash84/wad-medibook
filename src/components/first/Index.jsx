// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import "./indices.css";
// import { FaPills, FaRegCalendarCheck } from "react-icons/fa";

// const Index = () => {
//   const { user } = useContext(UserContext);
//   const { username } = useParams();

//   // Determine the display name (either actual user or URL param or Guest)
//   const displayName = user?.username || username || "Guest";

//   const handleNavigate = () => {
//     if (user) {
//       window.location.href = `/catalog/${user.username}`;
//     } else {
//       window.location.href = "/login";
//     }
//   };

//   return (
//     <div className="homepage">
//       <header className="text-center mt-3">
//         <h2 className="text-light">Welcome, {displayName}!</h2>
//       </header>

//       <section className="hero">
//         <div className="hero-text text-center mt-4">
//           <h2 className="text-info">Your Health, Our Priority</h2>
//           <p className="text-light container">
//             We offer a seamless platform to order genuine prescription and over-the-counter medicines, including top-quality antibiotics, wellness supplements, ayurvedic remedies, chronic care drugs, and personal care essentials—delivered right to your doorstep.
//           </p>
//           <button className="cta-button" onClick={handleNavigate}>
//             Explore Now
//           </button>
//         </div>
//       </section>

//       <main className="d-flex mb-4 justify-content-around">
//   <section
//     className="promo-block d-flex flex-column align-items-center pb-5 hii"
//     onClick={handleNavigate}
//     style={{ cursor: "pointer" }}
//   >
//     {/* <h2 className="text-light mt-5">Wide Medicine Range</h2> */}
//     <h2 className="text-light mt-5">
//   <FaPills className="me-2" />
//   Wide Medicine Range
// </h2>
//     <p className="text-light fw-4">
//       Discover a variety of trusted medicines for all health <br /> needs at the best prices.
//     </p>
//   </section>

//   <section
//     className="info-block hiii d-flex align-items-center pb-3"
//     onClick={handleNavigate}
//     style={{ cursor: "pointer" }}
//   >
//     <div className="ms-5">
//       {/* <h3 className="text-light">Book Medicines Instantly</h3> */}
      
// <h3 className="text-light">
//   <FaRegCalendarCheck className="me-2" />
//   Book Medicines Instantly
// </h3>
//       <p className="text-light">
//         Pre-book your essential prescriptions & <br /> never run out of stock again.
//       </p>
//     </div>
//   </section>
// </main>

//     </div>
//   );
// };

// export default Index;
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./indices.css";
import { FaPills, FaRegCalendarCheck, FaAmbulance, FaUsers } from "react-icons/fa";

const Index = () => {
  const { user } = useContext(UserContext);
  const { username } = useParams();

  const displayName = user?.username || username || "Guest";

  const handleNavigate = () => {
    if (user) {
      window.location.href = `/catalog/${user.username}`;
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="homepage">
      <header className="text-center mt-3">
        <h2 className="text-light">Welcome, {displayName}!</h2>
      </header>

      <section className="hero">
        <div className="hero-text text-center mt-4">
          <h2 className="text-info">Your Health, Our Priority</h2>
          <p className="text-light container">
            We offer a seamless platform to order genuine prescription and over-the-counter medicines, including top-quality antibiotics, wellness supplements, ayurvedic remedies, chronic care drugs, and personal care essentials—delivered right to your doorstep.
          </p>
          <button className="cta-button" onClick={handleNavigate}>
            Explore Now
          </button>
        </div>
      </section>
      <main className="card-grid mb-5 mt-4 px-3">
  <section className="info-card" onClick={handleNavigate}>
    <FaPills className="card-icon hiiii" />
    <h3 className="text-light mt-2"> Wide Medicine Range</h3>
    <p className="text-light text-center">
      Discover trusted medicines for all health needs at the best prices.
    </p>
  </section>

  <section className="info-card" onClick={handleNavigate}>
    <FaRegCalendarCheck className="card-icon hiiii" />
    <h3 className="text-light mt-2">Book Medicines Instantly</h3>
    <p className="text-light text-center">
      Pre-book your essentials & never run out of your daily prescriptions.
    </p>
  </section>

  <section className="info-card" onClick={handleNavigate}>
    <FaAmbulance className="card-icon" />
    <h3 className="text-light mt-2 ">  Instant Delivery  </h3>
    <p></p>
    <p></p>
    <p className="text-light text-center">
      Fast and reliable doorstep delivery for all orders within hours.
    </p>
  </section>

  <section className="info-card" onClick={handleNavigate}>
    <FaUsers className="card-icon" />
    <h3 className="text-light mt-2">Trusted by Families</h3>
    <p></p>
    <p></p>
    <p className="text-light text-center">
      50,000+ families trust MediBook for their healthcare needs.
    </p>
  </section>
</main>

{/* 
      <main className="d-flex flex-wrap justify-content-center mb-5 gap-4 px-3">

        
        <section className="info-card hii" onClick={handleNavigate}>
          <FaPills className="card-icon" />
          <h3 className="text-light mt-2">Wide Medicine Range</h3>
          <p className="text-light text-center">
            Discover trusted medicines for all health needs at the best prices.
          </p>
        </section>

        
        <section className="info-card hiii" onClick={handleNavigate}>
          <FaRegCalendarCheck className="card-icon" />
          <h3 className="text-light mt-2">Book Medicines Instantly</h3>
          <p className="text-light text-center">
            Pre-book your essentials & never run out of your daily prescriptions.
          </p>
        </section>

        <section className="info-card hii" onClick={handleNavigate}>
          <FaAmbulance className="card-icon" />
          <h3 className="text-light mt-2">Instant Delivery</h3>
          <p className="text-light text-center">
            Fast and reliable doorstep delivery for all orders within hours.
          </p>
        </section>

       
        <section className="info-card hiii" onClick={handleNavigate}>
          <FaUsers className="card-icon" />
          <h3 className="text-light mt-2">Trusted by Families</h3>
          <p className="text-light text-center">
            50,000+ families trust MediBook for their healthcare needs.
          </p>
        </section>

      </main> */}
    </div>
  );
};

export default Index;
