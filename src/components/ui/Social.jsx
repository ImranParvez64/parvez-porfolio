import Link from 'next/link';
import React from 'react';
import {FaGithub,FaLinkedin,FaFacebook,FaTwitter} from 'react-icons/fa'


const socials = [
    {icon:<FaGithub></FaGithub>, path:"https://github.com/imranparvez64"},
    {icon:<FaLinkedin></FaLinkedin>, path:"https://www.linkedin.com/in/imranparvez964/"},
    {icon:<FaFacebook></FaFacebook>, path:"https://www.facebook.com/ParvezHasan964"},
    {icon:<FaTwitter></FaTwitter>, path:"https://x.com/ImranParve55964"}
]


const Social = ({containerStyles,iconStyles}) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item,index) => {
                    return(
                        <Link key={index} href={item.path} className={iconStyles}>
                            {item.icon}
                        </Link>
                    );
                }
            )}
        </div>
    );
};

export default Social;