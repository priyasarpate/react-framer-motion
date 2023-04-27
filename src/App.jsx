
import { motion } from "framer-motion";
import { useState } from "react";
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-container">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        onClick={() => setIsOpen(!isOpen)}
        className="card"
      >
        <motion.h2 layout="position">Stranger Things</motion.h2>
        {isOpen && (
          <motion.div className="expand">
            <p>
              lorem ispum Stranger Things lorem ispum Stranger Thingslorem ispum
              Stranger Things lorem ispum Stranger Things lorem ispum Stranger
            </p>
            <p>
              lorem ispum Stranger Things lorem ispum Stranger Thingslorem ispum
              Stranger Things
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;