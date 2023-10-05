import React from 'react'
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import About from "../components/About";
import {
    Stack
  } from "@mui/material";

export default function Homepage() {
  return (
    <div>
      <Stack>
          <Hero />
          <Gallery />
          <Projects />
          <About />
      </Stack>
    </div>
  )
}
