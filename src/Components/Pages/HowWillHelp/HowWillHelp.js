import React from 'react';
import './HowWillHelp.css';
import geniePic from '../../../images/genie2.png';
import timeImg from '../../../images/timeSaving.svg';
import costEffectiveImg from '../../../images/costEffective.svg';
import aiPoweredImg from '../../../images/aiPowered.svg';
import salesImg from '../../../images/sales.svg';
import easyUseImg from '../../../images/easyMaintenance.svg';
import customizableImg from '../../../images/customizable.svg';
import expertiseImg from '../../../images/expertise.svg';
import allInOneImg from '../../../images/allInOne.svg';



const HowWillHelp = () => {
    return (
        <div className='help-container'>

            <div className='title-div'>
                <img src={geniePic} alt="" className='zoom-in-out-box' />
                <h3>
                    How will Nando unlock your creative potential?
                </h3>
                <br />
                <p>
                    Nando.ai is an AI-based platform that streamlines
                    copywriting for entrepreneurs and boosts sales with
                    compelling, high-converting copy. Nando.ai also integrates
                    product descriptions, ad texts, and video scripts
                    in one place, making it a cost-effective solution.
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
                    <p>Nando.ai can save entrepreneurs, YouTube channel owners and sellers on marketplaces like amazon a lot of time by automating the copywriting process. This can be highlighted as a key benefit in marketing the tool.</p>
                </div>

                <div>
                    <span>
                        <img src={costEffectiveImg} alt="" />
                        <h5>Cost-effective</h5>
                    </span>
                    <br />
                    <p>Nando.ai can be marketed as a cost-effective solution for creating professional, high-converting copy, as it eliminates the need for expensive agency fees.</p>
                </div>

                <div>
                    <span>
                        <img src={aiPoweredImg} alt="" />
                        <h5>AI-powered</h5>
                    </span>
                    <br />
                    <p>The tool's AI-powered capabilities can be highlighted as a unique selling point, as it can generate copy that is tailored to the user's specific needs and audience.</p>
                </div>


                <div>
                    <span>
                        <img src={salesImg} alt="" />
                        <h5>Increase in sales</h5>
                    </span>
                    <br />

                    <p>Nando.ai can be marketed as a tool that can help increase sales by creating compelling and high-converting copy. This can be highlighted through testimonials and case studies from satisfied users.</p>
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

                    <p>Nando.ai can be marketed as a tool that allows users to customize their copy to suit their specific needs and preferences.</p>
                </div>

                <div>
                    <span>
                        <img src={expertiseImg} alt="" />
                        <h5>Expertise</h5>
                    </span>
                    <br />

                    <p>Nando.ai can be marketed as a tool that provides users with access to the expertise of professional copywriters, even if they don’t have any copywriting experience.</p>
                </div>

                <div>
                    <span>
                        <img src={allInOneImg} alt="" />
                        <h5>All-in-one solution</h5>
                    </span>
                    <br />
                    <p>Nando.ai can be marketed as an all-in-one solution for creating product descriptions, ad texts, and video scripts, which can help streamline the marketing process.</p>
                </div>
            </div>


        </div>
    );
};

export default HowWillHelp;