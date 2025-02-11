import React from 'react';
import ContactUs from '../../components/Contact/contact'


export default function PaymentDetails() {
    return (
        <>
        <div className="w-full flex flex-col items-center px-4 md:px-12 lg:px-32 py-6 mt-22">
            {/* Payment Details Header */}
            <h2 className="text-3xl font-bold text-center text-red-700 mb-6 uppercase tracking-wide">
                Payment Details
            </h2>

            {/* Payment Details Table */}
            <div className="w-full overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-red-700 shadow-lg">
                    <tbody>
                        <tr className="bg-red-100">
                            <td className="border border-red-700 px-4 py-2 font-semibold">Payment Method</td>
                            <td className="border border-red-700 px-4 py-2">Telegraphic Transfer</td>
                        </tr>
                        <tr>
                            <td className="border border-red-700 px-4 py-2 font-semibold">Bank Name</td>
                            <td className="border border-red-700 px-4 py-2">SBI SUMISHIN NET BANK, LTD. TOKYO</td>
                        </tr>
                        <tr className="bg-red-100">
                            <td className="border border-red-700 px-4 py-2 font-semibold">Branch Address</td>
                            <td className="border border-red-700 px-4 py-2">
                                Sumitomo Fudosan Roppongi Grand Tower, 2-1, Roppongi 3-chome, Minato-ku, Tokyo, Japan.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-red-700 px-4 py-2 font-semibold">SWIFT / BIC CODE</td>
                            <td className="border border-red-700 px-4 py-2">NTSSJPJT</td>
                        </tr>
                        <tr className="bg-red-100">
                            <td className="border border-red-700 px-4 py-2 font-semibold">Branch Code</td>
                            <td className="border border-red-700 px-4 py-2">106</td>
                        </tr>
                        <tr>
                            <td className="border border-red-700 px-4 py-2 font-semibold">Account (REGULAR)</td>
                            <td className="border border-red-700 px-4 py-2">2539709</td>
                        </tr>
                        <tr className="bg-red-100">
                            <td className="border border-red-700 px-4 py-2 font-semibold">Title</td>
                            <td className="border border-red-700 px-4 py-2">GTC LLC</td>
                        </tr>
                        <tr>
                            <td className="border border-red-700 px-4 py-2 font-semibold">Intermediary Bank</td>
                            <td className="border border-red-700 px-4 py-2">
                                DEUTSCHE BANK TRUST COMPANY AMERICAS (SWIFT BIC: BKTRUS33) <br />
                                OR <br />
                                JPMORGAN CHASE BANK, TOKYO (SWIFT BIC: CHASJPJT)
                            </td>
                        </tr>
                        <tr className="bg-red-100">
                            <td className="border border-red-700 px-4 py-2 font-semibold">Contact</td>
                            <td className="border border-red-700 px-4 py-2">080 4107 4210</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Payment Instructions Section */}
            <div className="w-full bg-red-50 p-6 mb-12 shadow-lg">
                <h3 className="text-2xl font-semibold text-red-700 mb-4">Payment Instructions</h3>
                <p className="text-gray-700">
                    Please follow the steps below to complete your payment via telegraphic transfer:
                </p>
                <ol className="list-decimal pl-6 mt-2">
                    <li>Log in to your online banking portal or visit your bank branch.</li>
                    <li>Initiate a telegraphic transfer (wire transfer) to the provided bank account.</li>
                    <li>Ensure that all the details (Bank Name, SWIFT/BIC, etc.) are entered accurately.</li>
                    <li>For intermediary bank instructions, you may choose either Deutsche Bank or JPMorgan Chase.</li>
                    <li>Confirm the transaction and retain the reference number for future tracking.</li>
                </ol>
            </div>

            {/* FAQs Section */}
            <div className="w-full p-6 mb-12 bg-red-50 shadow-lg">
                <h3 className="text-2xl font-semibold text-red-700 mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-6">
                    <li className="text-gray-700">
                        <strong>What is a telegraphic transfer?</strong>
                        <p>A telegraphic transfer (wire transfer) is a secure and fast method of transferring funds electronically between banks, often used for international transactions.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>Can I use a different payment method?</strong>
                        <p>Currently, we only accept telegraphic transfers for international payments. We may consider additional payment methods in the future.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>What if I have issues with my payment?</strong>
                        <p>If you experience any issues with your payment, please contact our support team at 080 4107 4210. Our team will assist you in resolving any concerns.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>Do I need to include a payment reference?</strong>
                        <p>Yes, it is crucial to include a payment reference or your invoice number when making the telegraphic transfer. This helps us track and confirm your payment.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>What should I do if I made a mistake with the payment details?</strong>
                        <p>If you realize you made an error, please immediately contact your bank to correct the transfer or reach out to our customer service for further assistance.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>How long does it take for the payment to be processed?</strong>
                        <p>Telegraphic transfers usually take 1-3 business days to be processed. However, this may vary depending on the bank and country involved.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>Will I receive a confirmation once my payment is successful?</strong>
                        <p>Yes, once we receive and confirm your payment, we will send you an email or notification as confirmation of receipt.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>Are there any fees associated with the telegraphic transfer?</strong>
                        <p>Yes, there may be fees charged by your bank for processing the transfer. These fees are typically separate from the payment amount you are transferring.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>Can I pay in a currency other than JPY?</strong>
                        <p>We only accept payments in Japanese Yen (JPY) at the moment. If you are sending payment in a different currency, please ensure it is converted to JPY by your bank.</p>
                    </li>
                    <li className="text-gray-700">
                        <strong>What happens if my payment does not go through?</strong>
                        <p>If your payment does not go through, please contact your bank first to check the status of the transfer. If the issue persists, our customer service team is available to help resolve the problem.</p>
                    </li>
                </ul>
            </div>

            {/* Contact Section */}
          
            
        </div>
          <ContactUs/>
          </>
    );
}
