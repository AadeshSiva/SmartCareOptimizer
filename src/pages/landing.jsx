import "./landing.css"

// icons
import { GoNorthStar } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

// compo
import Auth from "../components/Auth";
import { useState } from "react";
export default function Landing() {
    const [showAuth, setShowAuth] = useState(false)
    return (
        <main className="landing-main">
            {showAuth && <Auth />}
            <p className="landing-logo">Smart Care Optimizer <GoNorthStar className="landing-icon" /></p>
            <p className="landing-head">Advanced <span> network analytics </span><br /> at your fingertips.</p>
            <p className="landing-sub">Find the best insurance agent for trusted advice and the right coverage.</p>
            <p className="landing-register" onClick={() => { setShowAuth(true)}}>Start Analysis  <FiArrowUpRight /></p>
        </main>
    )
}