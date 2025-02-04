import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { ProductCard } from '../../components/Cards/ProductCard';
import ContactSection from '../../components/Contact/contact';
import FAQSection from '../../components/FAQ/FAQ';
import CostumerReview from '../../components/Costumer Review/costumerReview'
import axios from 'axios';
import WhyChooseUs from '../../components/WhyChooseUs/index';
import Banner from '../../components/Banner/index'

export default function Home() {
    const [data, setData] = useState()
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-car-export.vercel.app/api/product/get');

                if (response.status === 200) {
                    setData(response.data.data.products.slice(0, 9));
                }
            } catch (error) {
                // console.error('Error fetching products:', error);
                alert("An error occurred while fetching products.");
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <HeroSection />
            <ProductCard data={data} />
            <WhyChooseUs/>
             <FAQSection />       
             {/* <Banner/> */}
            <CostumerReview/>
            <ContactSection />
        </>
    );
}
