import React from 'react';
import NavBar from '../components/general/Navbar';
import Footer from '../components/general/Footer';
import Farming from '../images/Farming.png';
import Livestock from '../images/Livestock.png';
import Agro_tourism from '../images/Agro_tourism.png';
import '../assets/css/pages/servicesPage/services.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';


const ServicesPage = () => {
    return (
        <>
            <NavBar />
            <div className='Services'>
                <h1>OUR SERVICES</h1>
                <div className='farming'>
                    <img src={Farming} alt='' />
                    <div className='farming-text'>
                        <h3 className='title'>FARMING</h3>
                        <p>Farming services encompass a range of activities vital to agricultural productivity and sustainability. Farmers benefit from extension services that provide crucial knowledge on modern
                            farming techniques, crop management, and pest control. These services are often facilitated by agricultural cooperatives and government initiatives aimed at improving yields and incomes for small-scale farmers. Access to agricultural inputs such as seeds, fertilizers, and tools is also facilitated, ensuring farmers have the resources needed to cultivate their land effectively.</p>
                        <div className="button">
                            <div className='jobs'>
                                <Link to=''>Jobs in Farming</Link>
                                <FaAngleRight size={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='livestock'>
                    <div className='livestock-text'>
                        <h3 className='title'>LIVESTOCK</h3>
                        <p>Livestock farming in Rwanda is integral to the country's agricultural sector, providing livelihoods for rural communities and contributing to food security. Small-scale farmers predominantly rear cattle, goats, sheep, and poultry, with an emphasis on 
                            sustainable practices and improved breeds. Livestock farming plays a crucial role in the economy by supplying milk, meat, and other animal products to local markets and supporting household incomes.</p>
                        <div className="button">
                            <div className='jobs'>
                                <Link to=''>Jobs in Livestock</Link>
                                <FaAngleRight size={30} />
                            </div>
                        </div>
                    </div>
                    <img src={Livestock} alt='' />
                </div>
                <div className='tourism'>
                    <img src={Agro_tourism} alt='' />
                    <div className='tourism-text'>
                        <h3 className='title'>AGRO-TOURISM</h3>
                        <p>Agro-tourism in Rwanda offers visitors a unique opportunity to explore the country's rich agricultural heritage while supporting local communities. Tourists can engage in 
                            activities such as farm visits, where they learn about traditional and modern farming techniques firsthand from local farmers. This immersive experience includes participating in activities like harvesting, coffee roasting, or banana beer brewing, depending 
                            on the region. Agro-tourism not only promotes cultural exchange but also contributes to the local economy by generating income for farmers and fostering sustainable development in rural areas.</p>
                        <div className="button">
                            <div className='jobs'>
                                <Link to=''>Jobs in Agro-Tourism</Link>
                                <FaAngleRight size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServicesPage;