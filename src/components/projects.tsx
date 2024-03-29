import '../styles/projects.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import Carousel from 'react-material-ui-carousel'
import twitterClonePhoto from '../effects/twitter_clone.png'
import dynamicIpImage from '../effects/bash-script.png'
import { Alert, } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from "framer-motion";
import { GitHub, OpenInBrowser } from '@mui/icons-material';


interface projectItem {
    name: string;
    description: string;
    frameWorksUsed: string;
    image: string;
    githubLink: string;
    deployLink: string;
}

function Item(props: any) {

    const alertVariants = {
        visible: { opacity: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0, transition: { duration: 0.5 }}
    };

    const [showAlert, setShowAlert] = useState(false);
    const control = useAnimation();
    useEffect(() => {
        if (showAlert) {
            control.start("visible");
        }
    }, [control, showAlert]);

    const handleAlertClose = useCallback(() => {
        control.start("hidden");
        setTimeout(() => {
            setShowAlert(false);
        }, 500);
    }, [control]);

    useEffect(() => {
        if (showAlert) {
            control.start("visible");
            const timeout = setTimeout(() => {
                handleAlertClose();
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [control, showAlert, handleAlertClose]);

    function showAlertIfNoLink(item: projectItem, event: any, isGit: boolean) {
        if (isGit) {
            if (item.githubLink === ''){
                event.preventDefault();
                setShowAlert(true);
            }
        }
        else {
            if (item.deployLink === '' ){
                event.preventDefault();
                setShowAlert(true);
            }
        }
    }

    return (
        <div className='project_showcase_item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${props.item.image})`}}>
           <motion.div
                initial="hidden"
                animate={control}
                variants={alertVariants}
            >
                {showAlert && (
                    <Alert onClose={handleAlertClose} severity="error">
                        No link is available.
                    </Alert>
                )}
            </motion.div>

            <div className='icon-row' >
                <motion.a
                whileHover={{ scale: 1.25 }}
                href={props.item.githubLink} className="icons" onClick={(event) => showAlertIfNoLink(props.item, event, true)}>
                    <GitHub></GitHub>
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.25 }}
                    href={props.item.deployLink} className="icons" onClick={(event) => showAlertIfNoLink(props.item, event, false)}>
                    <OpenInBrowser sx={{ scale: '1.2' }}></OpenInBrowser>
                </motion.a>

            </div>

            <div>
                <label style={{fontSize: '45px', fontWeight: 'bold'}}>{props.item.name} </label>
                <p style={{paddingLeft: '15%', paddingRight: '15%' }}>{props.item.description}</p>
                <span style={{color: 'aqua', fontWeight: 'bold'}}>{props.item.frameWorksUsed}</span>
            </div>

        </div>
    )
}

function Projects() {
    const items: projectItem[] = [
        {
            name: "Twitter Clone",
            description: "A functional clone of twitter. Users are able to create edit and remove their own posts. Posts are paginated, and users can gain followers or follow other people. Made using a SQL-lite database. ",
            frameWorksUsed: 'JavaScript, Django, SQL-lite',
            image: twitterClonePhoto,
            githubLink: 'https://github.com/Alexk2309/Networking',
            deployLink: ''
        },
        {
            name: "Dynamic Ip-Changer",
            description: " A shells script that monitor changes in the public IP address of a home server" +
            "When the public IP address changes, it updates the corresponding DNS record on Cloudflare to" +
            "ensure that the domain always points to the correct IP address.",
            frameWorksUsed: 'Shell Scripting',
            image: dynamicIpImage,
            githubLink: 'https://github.com/Alexk2309/clouldflare-dynamic-ip-changer',
            deployLink: ''
        },
    ]

    return (
        <div id='projects_layout'>
            <HeaderSection>
                <span className='header-label' style={{paddingBottom: '30px'}}>/projects </span>
                <div id='project_carousel'>
                    <Carousel animation='slide' duration={700}>
                        {items.map( (item, i) => <Item key={i} item={item} /> )}
                    </Carousel>
                </div>
            </HeaderSection>
        </div>
    );
}

export default Projects;

