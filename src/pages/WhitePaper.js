import React from 'react'
import mission from "../assets/Mission.png"
import Transparent from "../assets/Transparent.png"
import mobile from "../assets/mobile.png";
import contract from "../assets/contract.png"
function WhitePaper() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='gradientText'>WhitePaper</h2>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-10'>
                            <h3 className='Abstract-h3'>Abstract</h3>
                            <p className='JackpotMagickCity-p'>JackpotMagickCity.io is a groundbreaking online gaming platform that redefines the traditional casino model. Leveraging blockchain technology, decentralized gameplay, and innovative tokenomics, JackpotMagickCity.io empowers players to collectively become the house, fostering a transparent, community-driven, and fair gaming environment. This white paper provides a comprehensive overview of the platform, detailing its core features, technology, and the revolutionary Jackpot Kitty launch.</p>
                            <h5 className='gradientText'>Introduction</h5>

                            <div className='row mt-3 mb-3'>
                                <div className='col-md-7'>
                                    <h3 className='Abstract-h3'>Background</h3>
                                    <p className='JackpotMagickCity-p'>JackpotMagickCity.io emerges as a response to the shortcomings of conventional online casinos, introducing a decentralized and community-centric approach to online gaming.</p>
                                    <h3 className='Abstract-h3'>Mission</h3>
                                    <p className='JackpotMagickCity-p'>To create a sustainable and fair gaming ecosystem where players actively participate in the platform's success and enjoy perpetual rewards</p>
                                </div>
                                <div className='col-md-5'>
                                    <img src={mission} className='img-fluid' />
                                </div>
                            </div>

                            <h5 className='gradientText mt-5'>Platform Overview</h5>
                            <h3 className='Abstract-h3 mt-3'>Decentralization</h3>
                            <p className='JackpotMagickCity-p'>JackpotMagickCity.io operates on a fully decentralized model, eliminating the need for central authorities or admin keys. Blockchain technology ensures transparent and secure transactions.</p>

                            <h3 className='Abstract-h3 mt-5'>Player Empowerment</h3>
                            <p className='JackpotMagickCity-p'>Players collectively become the house, influencing the platform's development, and benefiting from its success.</p>

                            <h3 className='Abstract-h3 mt-5'>Tokenomics</h3>
                            <p className='JackpotMagickCity-p'>Innovative tokenomics, including token burns and jackpot payouts, ensure continuous value for participants. The Jackpot Kitty launch allocates 100% of Pulse chain funds for day 1 jackpot payouts</p>

                            <h5 className='gradientText mt-5'>Core Features</h5>
                            <div className='row mt-3 mb-3'>
                                <div className='col-md-7'>
                                    <h3 className='Abstract-h3  mt-3'>Transparent Gameplay</h3>
                                    <p className='JackpotMagickCity-p'>Utilizing provably fair RNG technology, the platform guarantees fairness and transparency in every game.</p>
                                    <h3 className='Abstract-h3 mt-3'>Token Burns</h3>
                                    <p className='JackpotMagickCity-p'>90% of losing wagers contribute to jackpot payouts, enhancing the scarcity and value of tokens through continuous burns.</p>

                                    <h3 className='Abstract-h3 mt-3'>Community-Driven</h3>
                                    <p className='JackpotMagickCity-p'>JackpotMagickCity.io prioritizes community engagement, with features like an interactive players' lounge and decision-making input from users.</p>

                                    <h3 className='Abstract-h3 mt-3'>Lean Operations</h3>
                                    <p className='JackpotMagickCity-p'>Efficient and sustainable operations ensure maximum prize pools for users without the burden of expensive overheads.</p>
                                </div>
                                <div className='col-md-5'>
                                    <img src={Transparent} className='img-fluid' />
                                </div>
                            </div>

                            <h5 className='gradientText mt-5'>The Jackpot Kitty Launch</h5>
                            <h3 className='Abstract-h3 mt-5'>Purpose</h3>
                            <p className='JackpotMagickCity-p'>The Jackpot Kitty launch marks a significant milestone, allocating 100% of Pulse chain funds raised on launch day as liquidity for day 1 jackpot payouts.</p>

                            <h3 className='Abstract-h3 mt-4'>Mechanics</h3>
                            <p className='JackpotMagickCity-p'>Participants in the Jackpot Kitty launch not only secure their tokens in advance but also contribute to the liquidity pool, guaranteeing immediate jackpot payouts when the casino opens.</p>

                            <h5 className='gradientText mt-5'>Technical Architecture</h5>
                            <div className='row mt-3 mb-3'>
                                <div className='col-md-5'>
                                    <img src={mobile} className='img-fluid' />
                                </div>
                                <div className='col-md-7'>
                                    <h3 className='Abstract-h3 mt-5'>Smart Contracts</h3>
                                    <p className='JackpotMagickCity-p'>The platform's robust smart contracts ensure secure and efficient tokenomics, incorporating features such as token burns and jackpot mechanisms.</p>

                                    <h3 className='Abstract-h3 mt-4'>Pulse Chain Integration</h3>
                                    <p className='JackpotMagickCity-p'>Leveraging Pulse chain's low fees, the platform achieves frequent, small, medium, and large jackpots, enhancing user experience.</p>
                                </div>
                            </div>

                            <h5 className='gradientText mt-5'>Security Measures</h5>
                            <div className='row mt-3 mb-3'>

                                <div className='col-md-7'>
                                    <h3 className='Abstract-h3 mt-5'>Immutability</h3>
                                    <p className='JackpotMagickCity-p'>The codebase is immutable, safeguarding the integrity and security of the platform.</p>
                                    <h3 className='Abstract-h3 mt-4'>Verification</h3>
                                    <p className='JackpotMagickCity-p'>Smart contracts undergo thorough verification and testing to mitigate potential risks and vulnerabilities.</p>
                                </div>
                                <div className='col-md-5 mt-5'>
                                    <img src={contract} className='' width="100%" height="200px" />
                                </div>
                            </div>

                            <h5 className='gradientText mt-5'>Marketing and Community Engagement</h5>
                            <h3 className='Abstract-h3 mt-5'>Social Media Campaigns</h3>
                            <p className='JackpotMagickCity-p'>Active engagement on platforms like Twitter and Telegram to create awareness and excitement, with a focus on the Jackpot Kitty launch.</p>
                            <h3 className='Abstract-h3 mt-4'>Influencer Collaborations</h3>
                            <p className='JackpotMagickCity-p'>Partnerships with influencers in the cryptocurrency and gaming space to amplify reach and credibility.</p>

                            <h5 className='gradientText mt-5'>Conclusion</h5>

                            <p className='JackpotMagickCity-p mb-5'>JackpotMagickCity.io represents the future of online gaming, fostering a community-driven, fair, and transparent environment. The Jackpot Kitty launch exemplifies our commitment to immediate jackpot payouts and sustainable growth. Join us on this revolutionary journey, where everyone ultimately wins.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhitePaper