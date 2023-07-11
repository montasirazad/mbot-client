import React from 'react';
import aiPoweredImg from '../../../images/aiPowered.svg';
import allInOneImg from '../../../images/allInOne.svg';
import costEffectiveImg from '../../../images/costEffective.svg';
import customizableImg from '../../../images/customizable.svg';
import easyUseImg from '../../../images/easyMaintenance.svg';
import geniePic from '../../../images/genie2.png';
import timeImg from '../../../images/timeSaving.svg';
import './HowWillHelp.css';



const HowWillHelp = () => {
    return (
        <div className='help-container'>

            <div className='title-div'>
                <img src={geniePic} alt="" className='zoom-in-out-box' />
                <h3>
                    How will Gen Genie boost your creative potential?
                </h3>
                <br />
                <p>
                    Gen Genie is a software powered by AI that automates copywriting for entrepreneurs, bloggers, corporate employees and small business owners. It creates appealing and high-converting text to increase sales. Gen Genie is cost-effective because it combines info articles, social media posts, product descriptions, cold email, ad texts, and video scripts into a single platform. We are adding 10+ new prompt templates each month.
                </p>
            </div>

            <div className='answer-container'>
                <div>

                    <span>
                        <img src={timeImg} alt="" />
                        <h5>
                            Time-saving
                        </h5>
                    </span>

                    <br />
                    <p>
                        Entrepreneurs, YouTube channel owners, and Amazon merchants can now enjoy more free time
                        thanks to Genie's automated authoring process. This efficient tool is guaranteed to
                        significantly reduce the amount of time you spend on writing tasks every day.
                    </p>
                </div>

                <div>
                    <span>
                        <img src={costEffectiveImg} alt="" />
                        <h5>Cost-effective</h5>
                    </span>
                    <br />
                    <p>
                        By using Genie's automated authoring process, businesses can save money on costly agency
                        fees while still producing top-quality, high-converting copy.
                    </p>
                </div>

                <div>
                    <span>
                        <img src={aiPoweredImg} alt="" />
                        <h5>AI-powered</h5>
                    </span>
                    <br />
                    <p>
                        Highlighting the AI-powered capabilities of the tool can be a powerful selling point,
                        as it has the ability to generate personalized copy that
                        caters to the unique needs and preferences of the user's target audience.
                    </p>
                </div>



                <div>
                    <span>
                        <img src={easyUseImg} alt="" />
                        <h5>Ease of use</h5>

                    </span>
                    <br />
                    <p>The tool's user-friendly interface and easy-to-use features can be highlighted as a benefit for users who may not have a lot of experience with copywriting.</p>
                </div>

                <div>
                    <span>
                        <img src={customizableImg} alt="" />

                        <h5>Customizable</h5>

                    </span>
                    <br />

                    <p>
                        With Genie, users can create tailored copy to enhance their communication
                        and messaging strategies. The platform offers various customizable features
                        that are perfect for optimizing content requirements.
                    </p>
                </div>


                <div>
                    <span>
                        <img src={allInOneImg} alt="" />
                        <h5>All-in-one solution</h5>
                    </span>
                    <br />
                    <p>
                        gengenie.io is the all-in-one solution for creating quality content.
                        We cover it all, whether it is a blog, marketing email, sales memo, or business proposal.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default HowWillHelp;