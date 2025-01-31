import Banner from '../../components/Banner/Banner'
import { ProductCard } from '../../components/Cards/ProductCard'
import ContactSection from '../../components/Contact/contact'
import CostumerReview from '../../components/Costumer Review/costumerReview'
import FAQSection from '../../components/FAQ/FAQ'

export default function Home () {
    return (
        <>
            <Banner />
            <ProductCard />
            <FAQSection />
            {/* <CostumerReview /> */}
            <ContactSection />
        </>
    )
}