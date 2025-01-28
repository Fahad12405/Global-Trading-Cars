import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-red-50 py-16 mt-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Privacy Policy - Global Trading Cars
                </h1>

                {/* Policy Content */}
                <div className="text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                        <p>
                            We and our group companies (collectively, the “Group”) believe it is vital to protect privacy/personal information of our customers (including representatives of companies we do business with) and users of the Group’s website (collectively, “you”). This Privacy Policy outlines how we collect, use, and protect your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Compliance with Laws and Regulations</h2>
                        <p>
                            The Group handles personal information about you in accordance with the Personal Information Protection Act, the EU General Data Protection Regulation (GDPR), and other applicable laws and regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Items of Personal Information We Obtain</h2>
                        <p>
                            The Group obtains your personal information as described below, and will not obtain your personal information without your consent.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name, address, telephone number, and email address</li>
                            <li>Browsing history, IP address, cookie information, and device information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Purpose of Use</h2>
                        <p>
                            The Group uses your personal information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Performance of contract (shipment of products, provision of services, issuance of invoices)</li>
                            <li>Marketing activities, such as communicating with you and conducting questionnaires</li>
                            <li>Provision of customer services</li>
                            <li>Product sales analysis, surveys, and development of new services</li>
                            <li>Services incidental to the aforementioned purposes and response to inquiries</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Security Management Measures</h2>
                        <p>
                            We take necessary and appropriate security management measures to prevent personal information from being leaked, accessed by unauthorized users, lost, damaged, or tampered with.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Supervision over a Trustee</h2>
                        <p>
                            The Group may entrust the handling of personal information to third parties in accordance with its Information Security Management Rules. We ensure the personal information is handled securely by our Trustees.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Provision to Third Parties</h2>
                        <p>
                            We will not disclose your personal information to third parties without your prior consent, except where allowed by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Sharing of Personal Information</h2>
                        <p>
                            We may share your personal information with our group companies for the purposes specified in the section "Purpose of Use."
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Request for Disclosure, etc. of Personal Information</h2>
                        <p>
                            You can request access to, correction of, or deletion of your personal information held by the Group, in accordance with the Personal Information Protection Act.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. GDPR Special Provisions</h2>
                        <p>
                            If you are in the European Economic Area (EEA) or the United Kingdom, the GDPR applies to you. The Group processes your personal data under specific legal bases and will retain your personal data only for the necessary period to achieve the purposes specified.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Handling of Cookies</h2>
                        <p>
                            Our website uses cookies to improve your experience. You can disable cookies in your browser settings, but doing so may impact certain website functionalities.
                        </p>
                        <p>
                            We also use Google Analytics for tracking website usage. For more information on how Google handles data, you can visit: 
                            <a href="https://policies.google.com/privacy?hl=en-US" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                Google Analytics Privacy Policy
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact</h2>
                        <p>
                            For any inquiries, requests, or complaints about your personal information, please contact:
                        </p>
                        <p>
                            <strong>SBT Co., Ltd.</strong><br />
                            Email: <a href="mailto:personalinfo@sbtjapan.com" className="text-blue-500">personalinfo@sbtjapan.com</a><br />
                            Phone: +81-45-290-9480<br />
                            Office Hours: 9:00 a.m. to 5:00 p.m. Japan Time (JST)
                        </p>
                    </section>

                   
                </div>
            </div>
        </div>
    );
}
