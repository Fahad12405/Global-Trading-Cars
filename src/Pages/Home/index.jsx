import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { ProductCard } from '../../components/Cards/ProductCard';
import ContactSection from '../../components/Contact/contact';
import FAQSection from '../../components/FAQ/FAQ';
import axios from 'axios';

export default function Home() {
    const [data, setData] = useState()
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-car-export.vercel.app/api/product/get');

                if (response.status === 200) {
                    setData(response.data.data.slice(0, 9));
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
            <Banner />
            <ProductCard data={data} />
            <FAQSection />
            <ContactSection />
        </>
    );
}
