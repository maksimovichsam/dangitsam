import './App.css'
import TabMenu from './TabMenu';

function App() {
    return (
        <div className="my-page-container">
            <div className='chandle-container'>
                <img className='chandle' src='chandle.png'/>
            </div>

            {/* <div className="my-header-title">our wedding day</div> */}
            <div className="my-header-title">
                <img className='sparkle-left' src="/sparkles-left.png" />
                <svg width="600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 50">
                    <path id="curve"
                        d="M50,50 A400,100 0 0,1 450,50"
                        fill="transparent"
                        stroke="transparent"
                    />
                    <text fill="#3759a9">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            our wedding day
                        </textPath>
                    </text>
                </svg>
                <img className='sparkle-right' src="/sparkles-right.png" />
            </div>
            <div className="rings">
                <img src="/rings.png" height="100%" />
            </div>
            <div className="my-name">Rachel & Sam</div>
            <div className="my-date">Saturday, May 10, 2025</div>
            <div className="my-date">Ceremony at 4:00 pm</div>
            <div className="my-date">Grace Vineyards</div>
            <div className="my-date">28001 Nichols Rd, Galt, CA 95632</div>

            <TabMenu />

            <div className='table-container'>
                <img className='my-table' src='table.png'/>
            </div>
        </div>
    )
}

export default App
