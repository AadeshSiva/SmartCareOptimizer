import { useState } from "react";
import { GoNorthStar } from "react-icons/go";
import { TbTopologyStar3 } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

import "./home.css";

export default function Home() {
    const doctors = [
        { id: 'P1234', specialty: "Cardiology", location: "New York",miles: 10 ,time:'30 min'},
        { id: 'P5234', specialty: "Neurology", location: "Haston", miles: 7, time: '30 min' },
        { id: 'P6634', specialty: "Orthopedics", location: "Washington", miles: 4, time: '40 min' },
    ];

    const [currentana, setCurrentana] = useState(0);
    const [geopeople, setGeopeople] = useState([]);

    // input states
    const [memberId, setMemberId] = useState("");
    const [primary, setPrimary] = useState("");
    const [secondary, setSecondary] = useState("");
    const [location, setLocation] = useState("");

    const handleNext = () => {
        if (memberId && primary && secondary && location) {
            setCurrentana(1);
        } else {
            alert("Please fill all fields before proceeding.");
        }
    };

    const toggleSelect = (id) => {
        let updated;
        if (geopeople.includes(id)) {
            updated = geopeople.filter((pid) => pid !== id);
        } else {
            updated = [...geopeople, id];
        }
        setGeopeople(updated);
        console.log("Selected doctors:", updated);
    };

    return (
        <main className="home-main">
            <div className="home-head">
                <p onClick={() => { window.history.back() }} className="home-back"><IoReturnUpBackSharp size={27} /></p>
                <p className="head-p">
                    Smart Care Optimizer <GoNorthStar className="landing-icon" />
                </p>
               <p className="head-icon"><FaRegCircleUser strokeWidth={1} size={25} /></p>
            </div>

            <div className="home-bottom">
                <div className="home-input-con">
                    <p className="home-title">Geo Location</p>

                    <label className="home-label">Member Id</label>
                    <input type="text" className="home-input" placeholder="PXXXXXX XXX"
                        value={memberId} onChange={(e) => setMemberId(e.target.value)} />

                    <label className="home-label">Primary Specialty</label>
                    <input type="text" className="home-input" placeholder="Ex: Neurology..."
                        value={primary} onChange={(e) => setPrimary(e.target.value)} />

                    <label className="home-label">Secondary Specialty</label>
                    <input type="text" className="home-input" placeholder="Ex: Pediatric Neurology..."
                        value={secondary} onChange={(e) => setSecondary(e.target.value)} />

                    <label className="home-label">Location</label>
                    <input type="text" className="home-input" placeholder="Ex: New York"
                        value={location} onChange={(e) => setLocation(e.target.value)} />

                    <p className="home-next" onClick={handleNext}>Next</p>
                </div>

                <div className="home-show">
                    {currentana === 0 ? (
                        <div className="home-nothing">
                            <FaMapLocationDot size={100} />
                        </div>
                    ) : (
                        doctors.map((d) => (
                            <div className="show-card" key={d.id}>
                                <TbTopologyStar3 className="card-decor" size={50} />
                                <p className="card-time"><IoMdTime />{ d.time}</p>
                                <p className="card-name">{d.id}</p>
                                <p className="card-txt">{d.specialty}</p>
                                <p className="card-txt card-des"><MdOutlineLocationOn />{d.location} , {d.miles} mil</p>
                                <p
                                    className={`card-btn ${geopeople.includes(d.id) ? "selected" : ""}`}
                                    onClick={() => toggleSelect(d.id)}
                                >
                                    {geopeople.includes(d.id) ? (
                                        <span style={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: "5px" }}>
                                            <SiTicktick /> Selected
                                        </span>
                                    ) : (
                                        "Select"
                                    )}
                                </p>
                            </div>
                        ))
                    )}

                    {/* Proceed button shows only if something is selected */}
                    {geopeople.length > 0 && <p className="home-proceed">Proceed</p>}
                </div>
            </div>
        </main>
    );
}
