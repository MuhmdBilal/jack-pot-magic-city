import React, { useState } from 'react'
import staking from "../assets/staking.png";
import game from "../assets/game.png";
import Transparent from "../assets/Transparent.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import pulse from "../assets/pulse.png"
import Button from 'react-bootstrap/Button';
function LandingPage() {
    const [progress, setProgress] = useState(90);
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-5 box-width mt-5'>
                    <h2 className='price-h2'>$000.00</h2>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-11 mt-4'>
                            <div className='minimum-span'>92.04% of minimum goal raised</div>
                            <ProgressBar variant="warning" now={90} />
                            <div className='minimum-span text-end'>$000,000</div>
                        </div>
                        <span className='Participants-div mt-3 '>000 Participants</span>
                        <span className='minimum-span text-center mb-4'>Listing Price = $0.00</span>
                    </div>
                    <div className='row  d-flex pt-4 text-start'>
                        <Form.Label className='USDT-text'>Amount in PULSE you pay</Form.Label>
                        <InputGroup>
                            <Form.Control />
                            <InputGroup.Text><img src={pulse} alt='pulse' width="20px" /></InputGroup.Text>
                        </InputGroup>
                        <Form.Label className='USDT-text'>Amount in $JAM you receive +</Form.Label>
                        <InputGroup>
                            <Form.Control />
                            <InputGroup.Text>JAM</InputGroup.Text>
                        </InputGroup>
                        <div className="d-grid gap-2 mb-4 mt-3">
                            <Button  className='btn connect-button'>
                                Connect Wallet
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <p className='Welcome-h3'>Welcome to the Only fully decentralized, no admin keys, trustless, Immutable, Non-Profit Casino in the World!</p>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <h5 className='ExcitingText mt-5'>Exciting News: Our Casino is Under Construction! </h5>
                            <p className='Participate-p'>But here's the catch – you don't have to wait! We're thrilled to announce our Jackpot Kitty launch, providing you with the opportunity to secure your tokens in advance. Be a part of the pre-launch excitement and be among the first to experience the thrill of JackpotMagickCity.io.</p>

                            <h5 className='ExcitingText mt-5'>Join the Movement at JackpotMagickCity.io</h5>
                            <p className='Participate-p'>Take control of your gaming destiny as we flip the script, creating a player-owned house where you not only play but also prosper. Our platform is disrupting the industry, offering a superior approach where everyone emerges victorious. The odds are stacked in YOUR favor, and the future of online gambling is community-driven, sustainable, and enjoyable for all.</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={Transparent} alt='Transparent' className='img-fluid' width="70%" />
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-md-6 mt-4'>
                            <img src={staking} alt='Transparent' className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h5 className='ExcitingText mt-5'>Play to Win, and Here's Why</h5>
                            <p className='Participate-p'>At JackpotMagickCity.io, we're not just promising jackpot payouts; we're ensuring day 1 jackpot payouts when the casino opens. How? Through our innovative Jackpot Kitty launch! 100% of the Pulse chain raised from Jackpot Kitty on launch day will be used for jackpot payouts, LP, initial Advertising blitz only. This means you not only get your tokens in advance but also enjoy the excitement of winning right from the start. The Jackpot Kitty Sale will only last for 24 hours </p>
                        </div>

                    </div>

                    <div className='row mt-4'>
                        <div className='col-md-6 mt-5'>
                            <h5 className='ExcitingText mt-5'>The House Edge – Recaptured for Mutual Prosperity</h5>
                            <p className='Participate-p'>Participate in the JackpotMagickCity.io movement, and witness your bags balloon to new highs. The house edge is now yours to recapture for mutual prosperity. The casino of the future is here, and it's redefining the gaming experience. Don't miss out on this opportunity to play, win, and thrive in a community-driven, sustainable online gambling environment.</p>

                            <h5 className='ExcitingText mt-5'>Your Future in Gaming Begins at JackpotMagickCity.io – Join Us Today!</h5>
                            <p className='Participate-p'>JackpotMagickCity.io, is revolutionizing slot machine gaming – we're turning the entire casino experience on its head! Say goodbye to the traditional model where the house always wins. At JackpotMagickCity.io, players collectively become the house, reshaping the gambling landscape for your benefit, not the casinos'.</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={game} alt='Transparent' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage