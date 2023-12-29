import './foot.css'
import logo from '../../assets/logo_nobg.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer=()=>{

    return(
    <div className='footer'>
        <div className='innerfooter'>
           <div className='f1' style={{display:'flex', flexDirection:'column'}}>
                <div className='f11' style={{flex:'1.5'}}>
                    <img src={logo} alt="" height="100px" width="170px" style={{filter:'contrast(200%)'}}/>
                </div>
                <div className='f11' style={{flex:'2'}}>
                    <h3>A best-in-class digital transformation services provider, we work with Global 2000 clients to amplify new horizons of potential and push the boundaries of what’s possible for exponential success.</h3>
                </div>
                <div className='f11' style={{flex:'1', display:'flex'}}>
                    <div className='socialM'><LinkedInIcon/></div>
                    <div className='socialM'><YouTubeIcon/></div>
                    <div className='socialM'><FacebookIcon/></div>
                    <div className='socialM'><InstagramIcon/></div>
                    <div className='socialM'><TwitterIcon/></div>
                </div>
                <div className='f11' style={{flex:'3'}}></div>
           </div>
           <div className='f2' style={{display:'flex', flexDirection:'column'}}>
               <div className='f22' style={{display:'flex', flexDirection:'column'}}>
                   <div style={{display:'flex', flexDirection:'column', paddingBottom:'40px'}}>
                        <div style={{flex:'1.5',display:'flex', alignItems:'center', borderBottom:'1px solid gray', paddingBottom:'20px'}}>
                            <h3 style={{fontSize:'22px', color:'#ffffff'}}>Services</h3>
                        </div>
                        <div style={{flex:'4', paddingTop:'20px'}}>
                            <h4>Data & AI</h4>
                            <h4>Cloud And Devops</h4>
                            <h4>Digital Product Engineeing</h4>
                            <h4>Customer Experience & Design</h4>
                        </div>
                    </div>
               </div>
               <div className='f22'>
               <div style={{display:'flex', flexDirection:'column'}}>
                        <div style={{flex:'1.5',display:'flex', alignItems:'center', borderBottom:'1px solid gray', paddingBottom:'20px'}}>
                            <h3 style={{fontSize:'22px', color:'#ffffff'}}>Industries</h3>
                        </div>
                        <div style={{flex:'4', paddingTop:'20px'}}>
                            <h4>Staffing</h4>
                            <h4>Technology</h4>
                            <h4>Telecom & Media</h4>
                            <h4>Healthcare</h4>
                        </div>
                    </div>
               </div>
               <div className='f22'></div>
           </div>
           <div className='f3' style={{display:'flex', flexDirection:'column'}}>
           <div className='f33' style={{display:'flex', flexDirection:'column'}}>
                   <div style={{display:'flex', flexDirection:'column', paddingBottom:'40px'}}>
                        <div style={{flex:'1.5',display:'flex', alignItems:'center', borderBottom:'1px solid gray', paddingBottom:'20px'}}>
                            <h3 style={{fontSize:'22px', color:'#ffffff'}}>Company</h3>
                        </div>
                        <div style={{flex:'4', paddingTop:'20px'}}>
                            <h4>About Us</h4>
                            <h4>Leadership</h4>
                            <h4>Newsroom</h4>
                            <h4>Our Thinking</h4>
                            <h4>Our Work</h4>
                        </div>
                    </div>
               </div>
               <div className='f33' style={{display:'flex', flexDirection:'column'}}>
                   <div style={{display:'flex', flexDirection:'column', paddingBottom:'40px'}}>
                        <div style={{flex:'1.5',display:'flex', alignItems:'center', borderBottom:'1px solid gray', paddingBottom:'20px'}}>
                            <h3 style={{fontSize:'22px', color:'#ffffff'}}>Careers</h3>
                        </div>
                        <div style={{flex:'4', paddingTop:'20px'}}>
                            <h4>Available Positions</h4>
                        </div>
                    </div>
               </div>
               <div className='f33'>
               <div style={{display:'flex', flexDirection:'column', paddingBottom:'40px'}}>
                        <div style={{flex:'1.5',display:'flex', alignItems:'center', borderBottom:'1px solid gray', paddingBottom:'20px'}}>
                            <h3 style={{fontSize:'22px', color:'#ffffff'}}>Products</h3>
                        </div>
                        <div style={{flex:'4', paddingTop:'20px'}}>
                            <h4>EduThrill</h4>
                        </div>
                    </div>
               </div>
           </div>
        </div>
        <div className='footdown'>
           <div className='fd1'>
           <h4>Copyright © 2023 Gispath Inc</h4>
               
           </div>
        </div>
    </div>)
}

export default Footer