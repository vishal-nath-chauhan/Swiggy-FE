import { flexbox } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import googleAppStoreIcon from "../../images/google-appstore.png"
const Footer = () => {
	return (
		<div className="footer-flex bottom-footer">
            			
			<div style={{color:"#fff"}}>
                <Typography style={{fontWeight:'bold'}}>COMPANY</Typography>
                <Typography>
                    <ul style={{padding:"0",listStyleType:"none"}}>
                        <li style={{paddingBottom:"5px"}}>About</li>
                        <li style={{paddingBottom:"5px"}}>Teams</li>
                        <li style={{paddingBottom:"5px"}}>Careers</li>
                        <li style={{paddingBottom:"5px"}}>Swiggy Blog</li>
                        <li style={{paddingBottom:"5px"}}>Bug Bounty</li>
                        <li style={{paddingBottom:"5px"}}>Swiggy One</li>
                        <li style={{paddingBottom:"5px"}}>Swiggy Corporate</li>
                        <li style={{paddingBottom:"5px"}}>Swiggy Instamart</li>
                    </ul>
                </Typography>
                </div>
            <div style={{color:"#fff"}}>
                <Typography style={{fontWeight:'bold'}}>CONTACT</Typography>
                <Typography>
                    <ul style={{padding:"0",listStyleType:"none"}}>
                        <li style={{paddingBottom:"5px"}}>Help & Support</li>
                        <li style={{paddingBottom:"5px"}}>Partner with us</li>
                        <li style={{paddingBottom:"5px"}}>Ride with us</li>                        
                    </ul>
                </Typography>
                </div>
            <div style={{color:"#fff"}}>
                <Typography style={{fontWeight:'bold'}}>LEGAL</Typography>
                <Typography>
                    <ul style={{padding:"0",listStyleType:"none"}}>
                        <li style={{paddingBottom:"5px"}}>Terms & Conditions</li>
                        <li style={{paddingBottom:"5px"}}>Refund & Cancellation</li>
                        <li style={{paddingBottom:"5px"}}>Privacy Policy</li>
                        <li style={{paddingBottom:"5px"}}>Cookie Policy</li>
                        <li style={{paddingBottom:"5px"}}>Offer Terms</li>
                        <li style={{paddingBottom:"5px"}}>Phishing & Fraud</li>
                        <li style={{paddingBottom:"5px"}}>Corporate – Swiggy Money Codes Terms and <br/>Conditions</li>
                        <li style={{paddingBottom:"5px"}}>Corporate - Swiggy Discount Voucher Terms and<br/> Conditions</li>
                    </ul>
                </Typography>

                </div>
            <div style={{color:"#fff"}}>
                <img className="google-appstore" src={googleAppStoreIcon}/>
            </div>
			 
			
		</div>
	);
};

export default Footer;