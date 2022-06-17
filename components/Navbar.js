import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState();
  console.log(selected);
  return (
    <div className="navbar">
      <div className="navItemsContainer">
        <Link href="/">
          <Typography
            onClick={(e) => setSelected(e.target.textContent)}
            sx={{
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
          </Typography>
        </Link>
        <Link href="/works">
          <Typography
            onClick={(e) => setSelected(e.target.textContent)}
            sx={{
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
          </Typography>
        </Link>
        <Link href="/references">
          <Typography
            onClick={(e) => setSelected(e.target.textContent)}
            sx={{
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
          </Typography>
        </Link>
        <Link href="/contact">
          <Typography
            onClick={(e) => setSelected(e.target.textContent)}
            sx={{
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
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
