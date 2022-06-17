import { div } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState();
  console.log(selected);
  return (
    <div className="navbar">
      <div className="navItemsContainer">
        <Link href="/">
          <div
            onClick={(e) => setSelected(e.target.textContent)}
            style={{
              color: `${selected === "HOME" ? "#F5CAA3" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "#F5CAA3",
              },
            }}
            variant="h6"
          >
            HOME
          </div>
        </Link>
        <Link href="/works">
          <div
            onClick={(e) => setSelected(e.target.textContent)}
            style={{
              color: `${selected === "WORKS" ? "#F5CAA3" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "#F5CAA3",
              },
            }}
            variant="h6"
          >
            WORKS
          </div>
        </Link>
        <Link href="/references">
          <div
            onClick={(e) => setSelected(e.target.textContent)}
            style={{
              color: `${selected === "REFERENCES" ? "#F5CAA3" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "#F5CAA3",
              },
            }}
            variant="h6"
          >
            REFERENCES
          </div>
        </Link>
        <Link href="/contact">
          <div
            onClick={(e) => setSelected(e.target.textContent)}
            style={{
              color: `${selected === "CONTACT" ? "#F5CAA3" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "#F5CAA3",
              },
            }}
            variant="h6"
          >
            CONTACT
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
