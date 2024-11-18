import Link from "next/link"

const Header = () => {
    const contractAddress = "0xBCb3b42D9A8Ec2EA47982418a3506231A6B67Af9";
    return (
        <>
            <div className="header_top">
                <div className="logo">
                    <embed src={"/images/logo.png"}  alt="ECAT brand logo" style={{ width: '100px', height: '100px' }} />
                    <span className="logo-topleft">CapiCoin</span>
                </div>
                <nav className="header-nav">
                    <ul className="list list--inline">
                        <Link href="teamLink"  ><li className="list__item text text--small text--regular">
                            Team
                        </li></Link>
                        <Link href="features" ><li className="list__item text text--small text--regular">
                            Features
                        </li></Link>
                    </ul>
                    <a href="https://twitter.com/ElonCatMoon" target="_blank" rel="noopener noreferrer">
                        <form>
                            <button className="btn btn--link text text--small text--medium" formAction="https://twitter.com/ElonCatMoon">
                                <img className="discord" alt="Twitter" src={"/images/twitter.svg"}></img>
                            </button></form></a>
                    <a href="https://t.me/ElonCatMoon" target="_blank" rel="noopener noreferrer">
                        <form>
                            <button className="btn btn--link text text--small text--medium" formAction="https://t.me/ElonCatMoon">
                                <img className="discord" alt="Telegram" src={"/images/telegram.svg"}></img>
                            </button>
                        </form></a>
                    <Link href="dApp"><button className="btn btn--accent2 text--small text--medium btn-top-app">
                        App
                    </button></Link>
                    <span className="vertical-line" />
                    <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn--accent text--small text--medium btn-top-right">
                            Swap <embed src={"/images/swap-white.svg"} className="swap" alt="swap icon"></embed>
                        </button>
                    </a>
                    <form>
                        <button className="btn btn--link text text--small text--medium" formAction="https://twitter.com/ElonCatMoon">
                            <img className="discord2" alt="Twitter" src={"/images/twitter.svg"}></img>
                        </button>
                    </form>
                    <form>
                        <button className="btn btn--link text text--small text--medium" formAction="https://t.me/ElonCatMoon">
                            <img className="discord2" alt="Telegram" src={"/images/telegram.svg"}></img>
                        </button>
                    </form>
                </nav>
            </div>
            <div className="header_body">
                <div className="grid_choose grid-gap--small">
                    <div className="value-proposition">
                        <embed src={"/images/capicoin.png"} className="token_logo" />
                        <h1 className="value-proposition__title">
                            The New Meme Coin on the Block
                        </h1>

                        <div className="badge-container-add">
                            <span className="badge-add badge--dark-add text--small">Contract Address:</span>
                            <span className="text text--small text--regular text--white badge-add2">

                                {contractAddress}
                            </span>
                        </div>
                        <div className="badge-container-hold">
                            <span className="badge-hold badge--dark-hold text--small">Holders:</span>
                            <span className="text text--small text--regular text--white badge-hold2">
                                6+
                            </span>
                        </div>
                        <div className="badge-container-price">
                            <span className="badge-hold badge--dark-hold text--small">Price:</span>
                            <span className="text text--small text--regular text--white badge-hold2">
                                $0.0000000000...
                            </span>
                        </div>
                        <Link href="buyLink" >
                            <button className="value-proposition__button btn btn--flex btn--accent btn-buy" >
                                <span className="text--standart text--medium text-bold">Buy ECAT</span>
                                <div className="chiron-icon-container">
                                    <img src={"/images/chevron-right.svg"} alt="Right Icon" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header