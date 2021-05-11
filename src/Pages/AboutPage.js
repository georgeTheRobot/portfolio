import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Typescript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'We Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Python'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web design'} text={'wefg erfderfg wdfdgfd dfgtrftrf sdfdg'} />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'wefg erfderfg wdfdgfd dfgtrftrf sdfdg'} />
                <ServicesSection image={gamedev} title={'Game Development'} text={'wefg erfderfg wdfdgfd dfgtrftrf sdfdg'} />
            </div>
        </div>
    );
}

export default AboutPage;
