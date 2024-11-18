import Link from "next/link"

const WhyCrypto = () => {
    return (
        <div className="why-crypto">
            <div className="media-container">
                <div className="media">
                    <div className="icon-container">
                        <div className="media-icon">
                            <img alt="Rocket" src={"/images/rocket3.svg"} />
                        </div>
                    </div>
                    <div>
                        <h2>TO THE MOON</h2>
                        <div className="media-text-small">
                            <p className="text text--muted text-media">
                                Join one of the fastest growing Crypto communities! Get your ticket for this rocket ship.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="icon-container">
                        <div className="media-icon">
                            <img alt="Coins" src={"/images/coins.svg"} />
                        </div>
                    </div>
                    <div>
                        <h2>HOLD</h2>
                        <div className="media-text-small">
                            <p className="text text--muted text-media">
                                Snapshots will be frequent and holders will get airdrops of NFTs, Future Tokens, etc.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="icon-container">
                        <div className="media-icon">
                            <img alt="Vote" src={"/images/vote.svg"} />
                        </div>
                    </div>
                    <div>
                        <h2>Vote on Governance</h2>
                        <div className="media-text-small">
                            <p className="text text--muted text-media">
                                ECAT will transition into a DAO where all governance and changes will be voted on through the community using the
                                token.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid_choose">
                <div className="card_why">
                    <div className="banner_grid">
                        <h2 className="banner__title">Why you should buy ECAT Token</h2>

                        <p className="banner__text text text--small text--regular text--muted why-text">
                            Experience the next generation cryptocurrency Token. A community project that will transition into a Decentralized Autonomous Organization (DAO) using the ECAT Token for governance. No other Token rewards so aggressively for holding the Token. ECAT is a Fair Launch token with no future minting allowed. Join us to the Moon!

                        </p>

                        <ul className="whyList">
                            <li className="nav__list__item_2 text text--small text--regular">Strong Dev Team with history in Start Ups</li>
                            <li className="nav__list__item_2 text text--small text--regular">Holding certain amounts of ECAT during a Snapshot guarantees you airdrops of NFTs, Future Tokens, etc.</li>
                            <li className="nav__list__item_2 text text--small text--regular">Set Supply with no Future Minting</li>
                            <li className="nav__list__item_2 text text--small text--regular">Strong Community with Tokens Granting Voting Powers</li>
                        </ul>
                        <Link href="features" ><button className="btn btn--accent">
                            <span className="text--standart text--medium text-bold">Learn More</span>
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyCrypto