const Team = () => {
    return (
        <div className="team" id="teamLink">
            <h2 className="banner__title team2">Meet the Team</h2>
            <div className="me-info">
                <h3>Jf</h3>
                <div className="me-pic">
                    <img alt="JF" src={"https://avatars.githubusercontent.com/u/26530455?s=400&u=01d3edc0c8185a965bf13155d63f524f877a9f03&v=4"} />
                </div>
                <div className="centerContent">
                </div>
                <p className="banner__text text text--small text--regular text--muted team-underText me-roles">
                    CEO | Lead Dev | Community Manager | Marketing
                </p>
                <p className="banner__text text text--small text--regular text--muted team-underText2">
                    Accomplished DevOps & Software Engineer with great knowledge on cyber security and computer systems.
                </p>
            </div>

            <div className="join-team">
                <h3>Join the Team</h3>
                <h4>Hiring:</h4>
                <div className="roles">
                    <ul>
                        <li>Solidity Dev</li>
                        <li>Frontend Dev</li>
                        <li>Community Manager</li>
                        <li>Marketing</li>
                        <li>Designer</li>
                    </ul>
                </div>
                <p className="banner__text text text--small text--regular text--muted">
                    If you are interested in joining the team, please send a DM to <a href="https://twitter.com/thetobymiller">@thetobymiller</a>
                </p>
            </div>
        </div>
    );
}

export default Team