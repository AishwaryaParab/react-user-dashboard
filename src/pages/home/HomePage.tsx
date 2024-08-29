import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./HomePage.css";
import Content from "../../components/content/Content";
import { useNavigate } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";
import { motion } from "framer-motion";

const WelcomeAnimation = ({ name, picture, onAnimationComplete }: { name: string; picture: string; onAnimationComplete: () => void }) => {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      onAnimationComplete={onAnimationComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "var(--main-bg)",
        color: "var(--main-color)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <motion.img
          src={picture}
          alt={name}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            borderRadius: '50%',
            width: 100,
            height: 100,
            marginBottom: 20,
          }}
        />
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome, {name}!
        </motion.h1>
      </div>
    </motion.div>
  );
};


const Home = () => {
  const { authUser } = useAuthUser();
  const [activeContent, setActiveContent] = useState<string>('Dashboard');
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser]);

  const handleAnimationComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="home">
      {showWelcome && authUser && (
        <WelcomeAnimation
          name={authUser.name}
          picture={authUser.picture}
          onAnimationComplete={handleAnimationComplete}
        />
      )}

      {!showWelcome && <>
        <Topbar />

        <div className="container">
          <Sidebar activeContent={activeContent} setActiveContent={setActiveContent} />

          <Content activeContent={activeContent} />
        </div>

        <Footer />
      </>}
    </div>
  )
}

export default Home