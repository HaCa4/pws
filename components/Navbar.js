import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState();
  console.log(selected);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: "1",
        width: "100vw",
        height: "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Link href="/">
          <Typography
            onClick={(e) => setSelected(e.target.textContent)}
            sx={{
              color: `${selected === "HOME" ? "black" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "black",
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
              color: `${selected === "WORKS" ? "black" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "black",
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
              color: `${selected === "REFERENCES" ? "black" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "black",
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
              color: `${selected === "CONTACT" ? "black" : "white"}`,
              fontWeight: "800",
              cursor: "pointer",
              "&:hover": {
                color: "black",
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
