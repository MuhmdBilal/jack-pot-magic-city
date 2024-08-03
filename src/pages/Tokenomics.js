import React from 'react'
import { FaMinus } from "react-icons/fa";
import card from "../assets/card.png";
import download from "../assets/download.png"
import spin from "../assets/spin.png"
import wallet from "../assets/wallet.png"
function Tokenomics() {
    return (
        <div className='container' >
            <div className='row d-flex justify-content-center'>
                <div className='col-md-12'>
                    <h2 className='gradientText'>Tokenomics</h2>

                    <div className='row d-flex justify-content-center justify-content-md-between'>
                        <div className='col-md-4 box-card p-4 mt-4 mb-3'>
                            <img src={card} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Token Supply</h3>
                            <span className='Initial-p'>Initial Total Supply: 130,000,000,000 JAM</span>
                            <span className='Initial-p'>Circulating Supply: To be determined by the Jackpot Kitty launch</span>
                        </div>

                        <div className='col-md-4 box-card p-4 mt-4 mb-3'>
                        <img src={download} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Token Utility</h3>
                            <span className='Initial-p'>JAM tokens are the core utility within the JackpotMagickCity.io ecosystem, facilitating participation in games, staking, voting, and earning rewards.</span>
                        </div>

                        <div className='col-md-4 box-card p-4 mt-4 mb-3'>
                        <img src={spin} width="120px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Jackpot Payouts and Token Burns</h3>
                            <span className='Initial-p'>100% of Losing Wagers for LP Jackpot Payouts</span>
                            <br/>
                            <span className='Initial-p'>All losing wagers contribute 100% of their value to the liquidity pool, ensuring substantial jackpot payouts and fostering active engagement.</span>
                        </div>

                        <div className='col-md-4 box-card p-4 mt-4 mb-3'>
                        <img src={wallet} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Token Burns</h3>
                            <span className='Initial-p'>Each bet, whether a win or loss, triggers a token burn, enhancing scarcity and positively influencing the value of JAM tokens over time.</span>
                            <br/>
                            <span className='Initial-p'>The burning mechanism is a key deflationary element, supporting the long-term value proposition.</span>
                        </div>

                        <div className='col-md-4 box-card p-4 mt-4 mb-3'>
                        <img src={card} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Jackpot Kitty Launch</h3>
                            <span className='Initial-p'>The Jackpot Kitty launch marks a pivotal event, securing JAM tokens in advance for participants and channeling 100% of Pulse chain funds raised on launch day to the liquidity pool for immediate jackpot distributions.</span>
                        </div>
                        
                        <div className='col-md-4 box-card p-4 mt-4 mb-3'>
                        <img src={download} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Community-Driven Incentives</h3>
                            <span className='Initial-p'>Tokenomics are designed to align with the community's interests, ensuring transparency and active community involvement.</span>
                        </div>

                        <div className='col-md-4 box-card p-4 mt-4 mb-5'>
                        <img src={spin} width="120px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Innovation and Development</h3>
                            <span className='Initial-p'>A portion of the token supply is allocated for ongoing development, introducing new features and maintaining a dynamic gaming experience.</span>
                        </div>

                        <div className='col-md-4 box-card p-4 mt-4 mb-5'>
                        <img src={wallet} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Exchanges and Liquidity</h3>
                            <span className='Initial-p'>A portion of the token supply is reserved for providing liquidity on decentralized exchanges.</span>
                        </div>


                        <div className='col-md-4 box-card p-4 mt-4 mb-5'>
                        <img src={card} width="100px" className='mb-3'/>
                            <h3 className='Token-h3 mb-3'>Market Expansion</h3>
                            <span className='Initial-p'>A portion of the token supply is allocated for ongoing development, introducing new features and maintaining a dynamic gaming experience.</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics