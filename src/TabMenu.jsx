import React, { useState } from "react";
import RsvpForm from "./RsvpForm"
import Donations from "./Donations"
import Photos from "./Photos"
import "./TabMenu.css";
import Questions from "./Questions";


function TabMenu() {
    const TABS = ["RSVP", "Questions", "Photos", "Donations"];
    const [activeTab, setActiveTab] = useState(TABS[0]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tab-menu">
            <div className="tab-headers">
                {TABS.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`tab-header ${activeTab === tab ? "active" : ""}`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="tab-content">
                {activeTab === "RSVP" && <RsvpForm/>}
                {activeTab === "Questions" && <Questions/>}
                {activeTab === "Photos" && <Photos/>}
                {activeTab === "Donations" && <Donations/>}
            </div>
        </div>
    );
};

export default TabMenu;
