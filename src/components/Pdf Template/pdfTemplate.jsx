import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js'; // Import html2pdf.js
import logo from '../../../public/logo2.png'; // Adjust according to your path
import signature from '../../../public/signature.png'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoiceModal = ({ selectedCar }) => {
    const [error, setError] = useState(null);
    const contentRef = useRef(null);
    const [modal, setModal] = useState(true);

    const handleCloseModal = () => {
        setModal(false);
    };

    const downloadPdf = async () => {
        if (!contentRef.current) {
            console.error("Content reference is null or undefined");
            return;
        }
    
        // Ensure starting from the top
        window.scrollTo(0, 0);
    
        const content = contentRef.current;
        const contentWidth = content.scrollWidth;
        const contentHeight = content.scrollHeight; // Full content height
    
        try {
            // Capture the content with html2canvas
            const canvas = await html2canvas(content, {
                scale: 2, // High resolution
                useCORS: true,
                backgroundColor: "#ffffff",
                windowWidth: contentWidth,
                windowHeight: contentHeight,
                x: 0, // No horizontal scroll issue
                y: 0, // Starting from the top (fixed)
                scrollX: 0,
                scrollY: 0,
                logging: false, // Disable logging for cleaner output
            });
    
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 190; // Adjusted width for A4 paper size
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Auto-scale height based on width
    
            let heightLeft = imgHeight;
            let position = 0;
    
            // First page
            pdf.addImage(imgData, "PNG", 5, position, imgWidth, imgHeight); // Adjusted X position for better centering
            heightLeft -= 297; // A4 height in mm
    
            // Add remaining pages if needed
            while (heightLeft > 0) {
                position -= 297; // Move to next page
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 5, position, imgWidth, imgHeight); // Adjusted X position
                heightLeft -= 297;
            }
    
            // Download the PDF
            pdf.save("full-content.pdf");
        } catch (error) {
            console.error("PDF generation failed:", error);
        }
    };
    
    
    
    




    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 overflow-hidden shadow-xl rounded-lg" id="invoice-content"
        >
            <div id='pdf-content' ref={contentRef} className="p-6 rounded-lg w-full max-w-4xl h-auto max-h-[90vh] overflow-auto border-2 shadow-2xl" style={{ backgroundColor: 'white' }}>
                <div className="flex justify-between items-center mb-4">
                    <img src={logo} className="h-18 object-contain" style={{ width: '180px' }} alt="Logo" />
                    <h1 className="text-4xl " style={{ color: '#991b1b' }}>Global Trading Cars</h1>
                    <button onClick={handleCloseModal} style={{ color: '#6b7280' }}><IoIosCloseCircleOutline size={32} /></button>
                </div>
                <div>
                    <div className="mb-4 ">
                        <h4 className="text-2xl font-semibold">Car Details:</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-collapse">
                                <thead>
                                    <tr style={{ backgroundColor: '#7f1d1d', color: 'white' }}>
                                        <th className="border px-4 py-2">MODEL</th>
                                        <th className="border px-4 py-2">YEAR</th>
                                        <th className="border px-4 py-2">COLOR</th>
                                        <th className="border px-4 py-2">TRANSMISSION</th>
                                        <th className="border px-4 py-2">DRIVE TYPE</th>
                                        <th className="border px-4 py-2">MILEAGE</th>
                                        <th className="border px-4 py-2">STEERING</th>
                                        <th className="border px-4 py-2">ENGINE TYPE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">{selectedCar.modelCode}</td>
                                        <td className="border px-4 py-2">{selectedCar.year}</td>
                                        <td className="border px-4 py-2">{selectedCar.color}</td>
                                        <td className="border px-4 py-2">{selectedCar.transmission}</td>
                                        <td className="border px-4 py-2">{selectedCar.drive}</td>
                                        <td className="border px-4 py-2">{selectedCar.mileage}</td>
                                        <td className="border px-4 py-2">{selectedCar.steering}</td>
                                        <td className="border px-4 py-2">{selectedCar.engineType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-8">
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Customer Name</label>
                            <input type="text" name="customerName" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Customer Address</label>
                            <input type="text" name="customerAddress" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Customer Country</label>
                            <input type="text" name="customerCountry" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Customer Email</label>
                            <input type="email" name="customerEmail" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Customer Contact</label>
                            <input type="number" name="customerContact" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Price</label>
                            <input type="number" name="depositAmount" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Invoice No</label>
                            <input type="number" name="invoiceNo" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Invoice Date</label>
                            <input type="date" name="invoiceDate" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xl font-semibold">Invoice Expiry Date</label>
                            <input type="date" name="invoiceExpiryDate" className="mt-2 p-2 border-b-[5px] w-full rounded focus:outline-none" />
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto pt-8 flex">
                        <div className="w-2xl overflow-x-auto">
                            <h1 className="text-2xl font-semibold">Bank Details</h1>
                            <table className="w-full border-collapse borde shadow-lg mt-3">
                                <tbody>
                                    <tr style={{ backgroundColor: '#fee2e2' }}>
                                        <td className="border px-4 py-2 font-semibold" >Payment Method</td>
                                        <td className="border px-4 py-2" >Telegraphic Transfer</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 font-semibold" >Bank Name</td>
                                        <td className="border px-4 py-2" >SBI SUMISHIN NET BANK, LTD. TOKYO</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#fee2e2' }}>
                                        <td className="border px-4 py-2 font-semibold">Branch Address</td>
                                        <td className="border px-4 py-2">Sumitomo Fudosan Roppongi Grand Tower, 2-1, Roppongi 3-chome, Minato-ku, Tokyo, Japan.</td>
                                    </tr>
                                    <tr>
                                        <td className="border  px-4 py-2 font-semibold">SWIFT / BIC CODE</td>
                                        <td className="border  px-4 py-2">NTSSJPJT</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#fee2e2' }}>
                                        <td className="border  px-4 py-2 font-semibold">Branch Code</td>
                                        <td className="border  px-4 py-2">106</td>
                                    </tr>
                                    <tr>
                                        <td className="border  px-4 py-2 font-semibold">Account (REGULAR)</td>
                                        <td className="border  px-4 py-2">2539709</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#fee2e2' }}>
                                        <td className="border  px-4 py-2 font-semibold">Title</td>
                                        <td className="border  px-4 py-2">GTC LLC</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ml-28 w-1/3">
                            <h1 className="text-2xl font-semibold mb-3">Total Amount</h1>
                            <table className="w-full border-collapse border  shadow-lg">
                                <tbody>
                                    <tr style={{ backgroundColor: '#fee2e2' }}>
                                        <td className="border  px-4 py-2 font-semibold">Price</td>
                                        <td className="border  px-4 py-2">$1000</td>
                                    </tr>
                                    <tr>
                                        <td className="border  px-4 py-2 font-semibold">Date</td>
                                        <td className="border  px-4 py-2">2025-02-04</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#fee2e2' }}>
                                        <td className="border  px-4 py-2 font-semibold">Expiry</td>
                                        <td className="border  px-4 py-2">2025-12-31</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="mt-12">
                                <img src={signature} alt="Stamp" className="w-32 h-32 object-cover" />
                                <div className="w-48 h-24 border-t-2  mr-4 mt-2">
                                    <span className="text-sm" style={{ color: '#4b5563' }}>GLOBAL TRADING CARS PVT LTD.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terms and Conditions Section */}
                    {/* <div className="w-full mt-8 p-4 border  shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
                        <p className="text-sm">
                            * TRANSACTION FEE MUST BE PAID BY THE BUYER OR IMPORTER. Global Trading Cars CO., LTD. <br />
                            * Global Trading Cars owns the above account ONLY, and is NOT responsible for any transaction made to an alternative account. <br />
                            * All Customer payments shall be made through Telegraphic Transfer (TT)/Bank Transfer as per the country's prevailing Regulations. <br />
                            * Customer shall state the Proforma Invoice No. as reference for the payment in the information section of the TT application. <br />
                            * The confirmation of payment shall be messaged or emailed by the customer to the account manager of Global Trading Cars for verification. <br />
                            * The deposit of the payment should be made within 5 working days; if the Customer does not, then the Exporter reserves the right to sell the Vehicle to another Customer. <br />
                            * Bank and other charges are not included in the invoice. <br />
                            * Original Documents (BL & Export Certificate) for clearance will be released and sent to you via DHL and EMS Courier after full payment. <br />
                            * Full Payments must be made within 10 days after shipping. If the full payment is not made within 10 days after releasing the car, the vehicle may be sold to another buyer. <br />
                        </p>
                    </div> */}

                    <button onClick={downloadPdf} className="px-4 py-2 rounded mt-4" style={{ backgroundColor: '#991b1b', color: 'white' }} >
                        Generate Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;