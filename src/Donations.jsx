import "./Donations.css"

function Donations() {
    return (
        <div>
            <div className="bold">Your presence is the most precious gift of all!</div>
            <div className="italic">However if you would like to contribute to your new journey together, we graciously accept</div>
            <div className="bullet-points">
                <div>Venmo</div>
                <div>Zelle</div>
                <div>Cash</div>
            </div>
            <div className="links-container">
                <img height="200" src="/zelle.png"></img>
                <img height="200" src="/venmo.png"></img>
            </div>
        </div>
    );
}

export default Donations;
