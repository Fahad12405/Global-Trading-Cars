import React from 'react';
import ContactSection from '../../components/Contact/contact';
import Footer from '../../components/Footer/Footer';

export default function Contactpage() {
    return (
        <div>
            <h1 className="text-5xl font-extrabold text-red-800 text-center py-12 mt-24 bg-red-200">
                Get in Touch with Us
            </h1>
            <ContactSection />
            <Footer />
        </div>
    );
}
