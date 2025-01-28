import Banner from '../../components/Banner/Banner'
import { CardDefault } from '../../components/Cards/Card'
import ContactSection from '../../components/Contact/contact'
import CostumerReview from '../../components/Costumer Review/costumerReview'
import FAQSection from '../../components/FAQ/FAQ'

export default function Home () {
    return (
        <>
            <Banner />
            <CardDefault />
            <FAQSection />
            <CostumerReview />
            <ContactSection />
        </>
    )
}