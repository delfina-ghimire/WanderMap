import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>
      <Link to="/pricing">Price</Link>
    </div>
  );
}
