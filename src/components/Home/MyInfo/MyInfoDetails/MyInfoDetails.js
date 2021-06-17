import {motion} from 'framer-motion';

function MyInfoDetails(){
    return (
        <div className="my-info-container">
            <div className="left">
                <div className="container">
                    <div className="left-container">
                        <motion.div animate={{ scale: [3,1] }}
                        transition={{ duration: 1 }}
                        data-aos="fade-up" 
                        className="name">
                            Andrew
                        </motion.div>
                        <motion.div animate={{ scale: [3,1] }}
                        transition={{ duration: 1 }} 
                        data-aos="fade-left" data-aos-delay="1500" className="position">
                            Software Engineer
                        </motion.div>
                        <motion.div animate={{ scale: [3,1] }}
                        transition={{ duration: 1 }}
                        data-aos="fade-right" data-aos-delay="2000" className="experience">
                            3 Years Experience
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <div className="right-container">
                        <motion.div animate={{ scale: [3,1] }}
                        transition={{ duration: 1 }} data-aos="fade-up" className="image-container">
                            <img src="/images/Home/developer-activity.png" alt="Developer Activity" className="img-responsive"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInfoDetails;