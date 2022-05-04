// React imports
import React, { useEffect, useState } from 'react'

// Additional imports
import LazyLoad from 'react-lazyload'
import TypeWriter from 'typewriter-effect'
import Navigation from '../Navigation/Navigation.js'
import { events } from './data.js'
import { 
    headshotsRowOne, 
    headshotsRowTwo, 
    headshotsRowThree,
} from './data.js'

// Assets
import landingPageLogo from '../../assets/landing_page_world.png'
import puppy from '../../assets/puppy.png'
import icon_github from '../../assets/icon_github.jpg'
import icon_discord from '../../assets/icon_discord.jpg'
import icon_gmail from '../../assets/icon_gmail.jpg'
import icon_zoom from '../../assets/icon_zoom.jpg'
import icon_groupme from '../../assets/icon_groupme.jpg'
import icon_instagram from '../../assets/icon_instagram.jpg'
import icon_twitter from '../../assets/icon_twitter.jpg'

// Aos and CSS
import './LandingPage.css'
import 'aos/dist/aos.css'
import Aos from 'aos'

const LandingPage = () => {

    // Conditional rendering
    const [shakeGmail, setShakeGmail] = useState(0);
    const [shakeZoom, setShakeZoom] = useState(0);
    const [shakeDiscord, setShakeDiscord] = useState(0);
    const [showCopy, setShowCopy] = useState(false);

    useEffect(() => {
        Aos.init( { duration: 1750 })
    }, [])

    return (
        <main>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=K2D:wght@100;200;300&display=swap" rel="stylesheet"></link>
            <Navigation></Navigation>
            <div className="master">
                <div className='heroContainer'>
                    <LazyLoad height={300}>
                        <img className='landingPageLogoWrapper' src={landingPageLogo} alt="logo"></img>
                    </LazyLoad>
                    <div className='heroText'>

                        <TypeWriter
                            options= {{
                                strings: "Welcome to the Society For Cyber Security!",
                                autoStart: true,
                                cursor: "_",
                                loop: false,
                            }}/>
                    </div>
                </div>
                <div data-aos='fade-up' className='aboutUs'>
                    <div className='aboutUsTextWrapper'>
                        <div className='aboutUsHeaderText'>
                            About Us
                        </div>
                        <div className='aboutUsParagraphText'>
                            The Society for Cyber Security (SCS) is a student managed organization at the University of Georgia 
                            that provides students with exposure to the cybersecurity industry. 
                        </div>
                        <div className='aboutUsParagraphText'>
                            The goal of the society is to provide a solid base of cyber security knowledge to our members. 
                            Students can benefit from unique opportunities, develop technical knowledge, engage in market 
                            events, develop security skills, and network with professionals. SCS also aids recruiters by 
                            providing a well-developed student base with cybersecurity experience.
                        </div>
                        <div className='aboutUsParagraphText'>
                            Want to stay up to date with the club? Fill out our <a 
                                target='_blank' 
                                href="https://forms.gle/UxuhLCCogArytQxv7" 
                                className='formLink'>General Interest Form
                            </a> to get on our email list or check out our <a
                                target='_blank'
                                href="https://forms.gle/bVpxLsn8SKYWPCUUA"
                                className='formLink'>
                            Cyber Team Application Form
                            </a> if you are interested in learning more about the technical side of cyber security!
                        </div>
                    </div>
                    <img className='puppyWrapper' src={puppy} alt="puppy"></img>
                </div>
                <div data-aos='fade-up' className='eventCalendar'>
                    <div className='sectionHeaderText'>
                        Event Calendar
                    </div>
                    <div className='eventCalendarCards'>
                        {events.map((card) => {
                            return (
                                <div className='eventCard' id={card.id}>
                                    <img className='eventCardImage' src={card.src} alt="eventCard"></img>
                                    <div className='cardTitleText'>
                                        {card.title}
                                    </div>
                                    <div className='cardDateText'>
                                        {card.date}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cardTitleText'>
                        View Our Past Events
                    </div>
                </div>
                <div data-aos='fade-up' className='headshots'>
                    <div className='sectionHeaderText'>
                        Executive Board
                    </div>
                    <div className='headshotsContainer'>
                        <div className='headshotsRow'>
                            {headshotsRowOne.map((member) => {
                                return (
                                    <div id={member.id} className='headshot'>
                                        <img className='headshotImage' src={member.src} alt='headshot'></img>
                                        <div className="headshotNameText">
                                            {member.name}
                                        </div>
                                        <div className="headshotTitleText">
                                            {member.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='headshotsRow'>
                            {headshotsRowTwo.map((member) => {
                                return (
                                    <div id={member.id} className='headshot'>
                                        <img className='headshotImage' src={member.src} alt='headshot'></img>
                                        <div className="headshotNameText">
                                            {member.name}
                                        </div>
                                        <div className="headshotTitleText">
                                            {member.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='headshotsRow'>
                            {headshotsRowThree.map((member) => {
                                return (
                                    <div id={member.id} className='headshot'>
                                        <img className='headshotImage' src={member.src} alt='headshot'></img>
                                        <div className="headshotNameText">
                                            {member.name}
                                        </div>
                                        <div className="headshotTitleText">
                                            {member.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='headshotsRow'>
                            <div className='headshotWrapper'></div>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-up' className='resources'>
                    <div className='sectionHeaderText'>
                        Resources
                    </div>
                    <div className='linksContainer'>
                        <div className='linkWrapper'>
                            <img className='linkImageWrapper' src={icon_github} alt='github logo'></img>
                            <div className='linkText'>
                                <a 
                                    className='githubLinkText' 
                                    target='_blank' 
                                    href='https://github.com/UGA-Society-for-Cyber-Security/Cyber-Team'>
                                        GitHub
                                </a>
                            </div>
                        </div>
                        <div 
                            className='linkWrapperGmail' 
                            onClick={() => {
                                setShakeGmail(1)
                                setShowCopy(true)
                                setTimeout(() => setShowCopy(false), 1000);
                                setTimeout(() => setShakeGmail(0), 1000);
                                navigator.clipboard.writeText('ugascs@gmail.com')
                            }}
                            shakeGmail={shakeGmail}
                        >
                            <img className='gmailImageWrapper' src={icon_gmail} clat='gmail logo'></img>
                                <div className='linkText'>
                                    Gmail
                            </div>
                        </div>
                        <div 
                            className='linkWrapperZoom'
                            onClick={() => {
                                setShakeZoom(1)
                                setShowCopy(true)
                                setTimeout(() => setShowCopy(false), 1000)
                                setTimeout(() => setShakeZoom(0), 1000);
                                navigator.clipboard.writeText('https://uga.zoom.us/j/99149149748?pwd=V2VFSjVmM1VJa3BtS1d6cURyQjdKdz09#success')
                            }}
                            shakeZoom={shakeZoom}
                        >
                            <img className='zoomImageWrapper' src={icon_zoom} alt='zoom logo'></img>
                                <div className='linkText'>
                                    Zoom
                            </div>
                        </div>
                        <div 
                            className='linkWrapperDiscord'
                            onClick={() => {
                                setShakeDiscord(1)
                                setShowCopy(true)
                                setTimeout(() => setShowCopy(false), 1000)
                                setTimeout(() => setShakeDiscord(0), 1000);
                                navigator.clipboard.writeText('https://discord.com/invite/r6AKpx7')
                            }}
                            shakeDiscord={shakeDiscord}
                        >
                            <img className='discordImageWrapper' src={icon_discord} alt='discord logo'></img>
                                <div className='linkText'>
                                    Discord
                            </div>
                        </div>
                    </div>
                    <div className='linksContainer'>
                        <div className='linkWrapper'>
                            <img className='zoomImageWrapper' src={icon_groupme} alt='groupme logo'></img>
                            <div className='linkText'>
                                <a 
                                    className='githubLinkText' 
                                    target='_blank' 
                                    href='https://web.groupme.com/join_group/84888832/I8vsRDQg'>
                                        GroupMe
                                </a>
                            </div>
                        </div>
                        <div className='linkWrapper'>
                            <img className='zoomImageWrapper' src={icon_instagram} alt='instagram logo'></img>
                            <div className='linkText'>
                                <a 
                                    className='githubLinkText' 
                                    target='_blank' 
                                    href='https://www.instagram.com/uga.scs/?hl=en'>
                                        Instagram
                                </a>
                            </div>
                        </div>
                        <div className='linkWrapper'>
                            <img className='zoomImageWrapper' src={icon_twitter} alt='twitter logo'></img>
                            <div className='linkText'>
                                <a 
                                    className='githubLinkText' 
                                    target='_blank' 
                                    href='https://twitter.com/ugascs'>
                                        Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    {showCopy ? <div className='copyTextAlert'>copied!</div> : <div></div>}
                </div>
            </div>
        </main>
    )
}

export default LandingPage;
