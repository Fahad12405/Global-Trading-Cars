import React from 'react';
import FAQ from '../../components/FAQ/FAQ'

export default function TermsOfUse() {
  return (
    <section className="py-24 mt-12">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Terms of Use</h1>
        
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold">1. GENERAL</h2>
          <p>
            GTC CO., LTD. (GTC) operates the website <a href="https://www.globaltradingcars.com" className="text-indigo-600">www.globaltradingcars.com</a> (the site) in accordance with the following Terms of Use (terms). By using the site, you acknowledge you agree to these terms.
          </p>
          
          <h2 className="text-2xl font-semibold">2. COPYRIGHT</h2>
          <p>
            Copyrights to all content on the site belong to GTC. Reproduction or use of content on the site is prohibited.
          </p>
          
          <h2 className="text-2xl font-semibold">3. OTHER AGREEMENTS</h2>
          <p>
            These terms govern use of the site. GTC’s TERMS OF TRADE govern all transactions except where GTC signs a separate written contract with you.
          </p>
          
          <h2 className="text-2xl font-semibold">4. NON-ENGLISH TERMS</h2>
          <p>
            Only the English version of these terms is authoritative. Non-English translations are inoperative and intended for only convenience.
          </p>
          
          <h2 className="text-2xl font-semibold">5. REGISTRATION</h2>
          <p>
            Registering an GTC-customer account is required to make transactions. Registration is free. To register, you must provide GTC accurate, complete, and current information. GTC will not be liable for loss arising from wrong information. After receiving login credentials, you may view prices and make transactions.
          </p>
          
          <h2 className="text-2xl font-semibold">6. TRANSACTIONS</h2>
          <p>
            Transactions are governed by the TERMS OF TRADE issued with the invoice. Units on the site are priced in currencies EUR, GBP, JPY, or USD and, unless otherwise stated in writing, offered on CFR or FOB terms. GTC accepts payment in only the currency stated on the invoice. Bank charges and other transaction costs are not included in the invoice price and payable by you.
          </p>
          
          <h2 className="text-2xl font-semibold">7. SITE CONTENT</h2>
          <p>
            GTC exercises due care in posting information on the site; however, GTC makes no warranty of completeness, accuracy, validity, safety, or up-to-dateness thereof. GTC will not be liable for loss arising from decisions or actions taken by you reliant on information on the site.
          </p>
          
          <h2 className="text-2xl font-semibold">8. WARRANTY AND LIABILITY</h2>
          <p>
            GTC offers the site and content as is. To the maximum extent permitted by law, GTC excludes implied warranties in connection with using, inability to use, or results of using the site and content and liability for consequential, indirect, or punitive damages or lost business, profit, or use.
          </p>
          
          <h2 className="text-2xl font-semibold">9. ABUSE</h2>
          <p>
            Abuse includes, but is not limited to, creating multiple or fraudulent GTC-customer accounts; violating applicable law, these terms, or GTC's written policies; and other fraudulent or bad faith acts. GTC may suspend or cancel abusive GTC-customer accounts without notice. You shall indemnify GTC for loss arising from your breach of these terms, negligence, wrongdoing, or violation of contract or third-party rights or law.
          </p>
          
          <h2 className="text-2xl font-semibold">10. DATA HANDLING</h2>
          <p>
          GTC complies with the Japan Act on the Protection of Personal Information, Act on the Use of Social Security and Tax Number System, and other data-handling applicable law and handles subject data according to GTC’s Privacy Policy accessible at <a href="https://www.globaltradingcars.com/PrivacyPolicy" className="text-red-600">www.gloabltradingcars.com/PrivacyPolicy</a>.
          </p>
          
          <h2 className="text-2xl font-semibold">11. ANTICORRUPTION</h2>
          <p>
            GTC complies with the Japan Unfair Competition Prevention Act, OECD Convention on Combating Bribery of Foreign Public Officials, and other anti-corruption applicable law. Any contravening transaction is prohibited.
          </p>
          
          <h2 className="text-2xl font-semibold">12. ANTI-SOCIAL FORCES</h2>
          <p>
          GTC never deals with organized crime and maintains internal compliance policies to prevent anti-social transactions, including screening business partners for anti-social affiliations and including terms excluding anti-social forces in procurement and sales contracts. Any contravening transaction is prohibited.
          </p>
          
          <h2 className="text-2xl font-semibold">13. SECURITY EXPORT CONTROL</h2>
          <p>
          GTC complies with domestic and international global security and anti-terrorism laws and regulations, including list controls and catch-all-controls prohibiting payments to sanctioned countries, sanctioned individuals, or for embargoed goods, viz. weapons and nuclear materials. Any contravening transaction is prohibited.
          </p>
          
          <h2 className="text-2xl font-semibold">14. MISCELLANEOUS</h2>
          <p>
            A forbearance in exercising or requiring satisfaction of a provision, act, omission, course of dealing, or course performance will not waive a right, remedy, or condition. If part of these terms is held unenforceable, the rest remains effective as written except where held unenforceable. These terms are governed and adjudicable by only the laws and courts of Japan.
          </p>
        </div>
      </div>
      <FAQ/>
    </section>
  );
}
