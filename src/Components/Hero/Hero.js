import React, { useState } from 'react'
import './Hero.css';
import { BsBookmarkPlusFill } from "react-icons/bs";
import Modal from '../Modal/Modal';


const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="hero-container">
                <div className="draft-container">
                    <div className="draft-title">Draft</div>
                </div>
                <div className="right-container">
                    <BsBookmarkPlusFill onClick={() => setIsModalOpen(true)} className='hero-icon' />
                </div>

            </div >
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
        </>
    )
}

export default Hero