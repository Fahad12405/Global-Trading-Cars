import React, { useRef, useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import logo from '../../../public/logo2.png';
import signature from '../../../public/signature.png';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoiceModal = ({ selectedCar, handleCloseModal }) => {
    const contentRef = useRef(null);
    const [formData, setFormData] = useState({


        invoiceNo: '',
        invoiceDate: '',
        expiryDate: '',
        salesPerson: '',

        customerName: '',
        customerAddress: '',
        customerEmail: '',
        customerContact: '',

        customerCountry: '',
        portofLanding: '',
        portofDischarge: '',
        paymentTerms: '',


        depositAmount: '',
        FOBPrice: '',
        inspection: '',
        freight: '',
        CIFPrice: '',
        balanceDue: '',
    });

    // Generate Invoice Number based on the previous one
    useEffect(() => {
        // Get the last invoice number from localStorage
        let lastInvoiceNumber = localStorage.getItem('lastInvoiceNumber') || 0;
        let newInvoiceNumber = `INVOICE-${String(Number(lastInvoiceNumber) + 1).padStart(5, '0')}`;

        // Update state with the new invoice number
        setFormData((prevState) => ({
            ...prevState,
            invoiceNo: newInvoiceNumber,
        }));

        // Save the new invoice number back to localStorage for next use
        localStorage.setItem('lastInvoiceNumber', Number(lastInvoiceNumber) + 1);
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        const requiredFields = [
            'customerName',
            'customerAddress',
            'salesPerson',
            'customerEmail',
            'customerCountry',
            'customerContact',
            'portofLanding',
            'portofDischarge',
            'paymentTerms',

            'invoiceNo',
            'depositAmount',
            'invoiceDate',
            'expiryDate',
            'FOBPrice',
            'freight',
            'inspection',
            'balanceDue',
            'CIFPrice'
        ];

        for (const field of requiredFields) {
            if (!formData[field]) {
                alert(`${field.replace(/([A-Z])/g, ' $1').toUpperCase()} is required.`);
                return false;
            }
        }
        return true;
    };

    const downloadPdf = async () => {
        if (!validateForm()) return; // Stop if validation fails

        if (!contentRef.current) {
            console.error("Content reference is null or undefined");
            return;
        }

        document.getElementById("generate-invoice").style.display = 'none';
        document.getElementById("modal-close-btn").style.display = 'none';
        document.getElementById("pdf-content").classList.add('pt-36');

        const content = contentRef.current;
        const width = content.offsetWidth;
        const height = content.scrollHeight;

        try {
            const canvas = await html2canvas(content, {
                scale: 1.3,
                useCORS: true,
                backgroundColor: "#ffffff",
                width: width,
                height: height,
                windowWidth: width,
                windowHeight: height,
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0,
                logging: false,
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            const pageHeight = 297;
            let position = 0;

            pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position -= 297;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF with the generated invoice number
            pdf.save(`${formData.invoiceNo}.pdf`);

            handleCloseModal();
            document.getElementById("generate-invoice").style.display = 'block';
            document.getElementById("modal-close-btn").style.display = 'block';
            document.getElementById("pdf-content").classList.remove('pt-36');
        } catch (error) {
            console.error("PDF generation failed:", error);
        }
    };


    return (
        <div className="max-w-6xl mx-auto fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 overflow-hidden shadow-xl rounded-lg" id="invoice-content">
            <div id='pdf-content' ref={contentRef} className="overflow-auto rounded-lg w-full h-auto max-h-[90vh]" style={{ backgroundColor: 'white' }}>
                <div className='rounded-sm p-8 border-2 shadow-2xl'>
                    <div className="flex justify-between items-center mb-2">
                        <img src={logo} className="h-18 object-contain text-center" style={{ width: '190px' }} alt="Logo" />
                        <h1 className="text-5xl text-center mr-24" style={{ color: '#991b1b' }}>Global Trading Cars</h1>


                        <div>
                            <button id='modal-close-btn' onClick={handleCloseModal} style={{ color: '#6b7280' }}><IoIosCloseCircleOutline size={32} /></button>
                        </div>
                    </div>
                    <div style={{ marginBottom: "18px", border: 'none' }}>
                        <select
                            name="invoiceType"
                            style={{
                                padding: "8px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "24px",
                                color: "red",
                                backgroundColor: "white",
                                border: 'none',
                            }}
                        >
                            <option style={{ backgroundColor: "white", color: "black", fontSize: "18px", border: 'none' }} value="">
                                Select Invoice Type
                            </option>
                            <option style={{ backgroundColor: "#8B0000", color: "white", fontSize: "16px", border: 'none' }} value="Proforma Invoice">
                                PROFORMA INVOICE
                            </option>
                            <option style={{ backgroundColor: "#8B0000", color: "white", fontSize: "16px", border: 'none', }} value="Final Invoice">
                                FINAL INVOICE
                            </option>
                        </select>
                    </div>


                    <div>


                        <div className="grid grid-cols-3 gap-3 pt-4 ">
                            {Object.keys(formData).map((key) => {
                                if (key === 'FOBPrice' || key === 'inspection' || key === 'freight' || key === 'depositAmount' || key === 'balanceDue' || key === 'CIFPrice') {
                                    return null;
                                }


                                if (key === 'invoiceNo') {
                                    return (
                                        <div className="mb-4" key={key}>
                                            <label className="text-md font-semibold">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                                            <input
                                                type="text"
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                                className="my-2 p-2 border-style w-full focus:ring-0 text-2xl"
                                                disabled
                                            />
                                        </div>
                                    );
                                }


                                return (
                                    <div className="mb-1" key={key}>
                                        <label className="text-md font-semibold">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                                        <input
                                            type={key.includes('Email') ? 'email' : key.includes('Date') ? 'date' : 'text'}
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            className="my-2 p-2 border-style w-full focus:ring-0 text-2xl"
                                        />
                                    </div>
                                );
                            })}
                        </div>







                        <div className="mb-4">
                            <h4 className="text-2xl font-semibold mb-4">Car Details:</h4>

                            <div className="mb-6">
                                <h5 className="text-lg font-semibold mb-2">Basic Information</h5>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-collapse">
                                        <thead>
                                            <tr style={{ backgroundColor: '#7f1d1d', color: 'white' }}>
                                                <th className="border px-6 py-4">MODEL</th>
                                                <th className="border px-6 py-4">CHASSIS NO</th>
                                                <th className="border px-6 py-4">YEAR</th>
                                                <th className="border px-6 py-4">COLOR</th>
                                                <th className="border px-6 py-4">TRANSMISSION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-6 py-4">{selectedCar.modelCode}</td>
                                                <td className="border px-6 py-4">{selectedCar.chassisNo}</td>
                                                <td className="border px-6 py-4">{selectedCar.year}</td>
                                                <td className="border px-6 py-4">{selectedCar.color}</td>
                                                <td className="border px-6 py-4">{selectedCar.transmission}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            \                            <div>
                                <h5 className="text-lg font-semibold mb-2">Additional Information</h5>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-collapse">
                                        <thead>
                                            <tr style={{ backgroundColor: '#7f1d1d', color: 'white' }}>
                                                <th className="border px-6 py-4">DRIVE TYPE</th>
                                                <th className="border px-6 py-4">MILEAGE</th>
                                                <th className="border px-6 py-4">STEERING</th>
                                                <th className="border px-6 py-4">ENGINE TYPE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-6 py-4">{selectedCar.drive}</td>
                                                <td className="border px-6 py-4">{selectedCar.mileage}</td>
                                                <td className="border px-6 py-4">{selectedCar.steering}</td>
                                                <td className="border px-6 py-4">{selectedCar.engineType}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="w-full overflow-x-auto pt-0 flex ">
                            <div className="w-3xl overflow-x-auto">
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
                                <h2 className="text-2xl font-semibold mb-2 mt-2">Terms & Conditions</h2>
                                <p className="text-sm mb-4">
                                    * TRANSACTION FEE MUST BE PAID BY THE BUYER OR IMPORTER. Global Trading Cars CO., LTD. <br />
                                    * Global Trading Cars owns the above account ONLY, and is NOT responsible for any transaction made to an alternative account. <br />
                                    * All Customer payments shall be made through Telegraphic Transfer (TT)/Bank Transfer as per the country's prevailing Regulations. <br />
                                    * Customer shall state the Proforma Invoice No. as reference for the payment in the information section of the TT application. <br />
                                    * The confirmation of payment shall be messaged or emailed by the customer to the account manager of Global Trading Cars for verification. <br />
                                    * The deposit of the payment should be made within 5 working days; if the Customer does not, then the Exporter reserves the right to sell the Vehicle to another Customer. <br />
                                    * Bank and other charges are not included in the invoice. <br />
                                    \                                    * Full Payments must be made within 10 days after shipping. If the full payment is not made within 10 days after releasing the car, the vehicle may be sold to another buyer. <br />
                                </p>
                            </div>

                            <div className="ml-20 w-1/3 ">
                                <h1 className="text-2xl font-semibold mb-3 underline ">Total Amount:</h1>
                                <table className="w-full border-collapse border shadow-lg  ">
                                    <tbody className=''>
                                        <tr>
                                            <td className="border px-4 py-2 font-semibold">FOB Price:</td>
                                            <td className="border w-48">
                                                <div className="flex items-center">
                                                    <span className="text-xl ml-2">$</span>
                                                    <input
                                                        type="text"
                                                        name="FOBPrice"
                                                        className="p-2 border-none w-full focus:ring-0 text-lg"
                                                        value={Number(formData.FOBPrice).toLocaleString()} // Convert number to formatted string
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(/,/g, ""); // Remove commas before updating state
                                                            if (!isNaN(rawValue)) {
                                                                handleChange({ target: { name: "FOBPrice", value: rawValue } });
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </td>

                                        </tr>

                                        <tr style={{}}>
                                            <td className="border px-4 py-2 font-semibold">Inspection:</td>
                                            <td className="border">
                                                <div className="flex items-center">
                                                    <span className="text-xl ml-2">$</span>
                                                    <input
                                                        type="text"
                                                        name="inspection"
                                                        className="p-2 border-none w-full focus:ring-0 text-lg"
                                                        value={Number(formData.inspection).toLocaleString()} // Convert number to formatted string
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(/,/g, ""); // Remove commas before updating state
                                                            if (!isNaN(rawValue)) {
                                                                handleChange({ target: { name: "inspection", value: rawValue } });
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{}}>
                                            <td className="border  px-4 py-2 font-semibold">Freight:</td>
                                            <td className="border">
                                                <div className="flex items-center">
                                                    <span className="text-xl ml-2">$</span>
                                                    <input
                                                        type="text"
                                                        name="freight"
                                                        className="p-2 border-none w-full focus:ring-0 text-lg"
                                                        value={Number(formData.freight).toLocaleString()} // Convert to comma-separated format
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(/,/g, ""); // Remove commas before updating state
                                                            if (!isNaN(rawValue)) {
                                                                handleChange({ target: { name: "freight", value: rawValue } });
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#fee2e2' }}>
                                            <td className="border  px-4 py-2 font-semibold">Deposit Amount:</td>
                                            <td className="border">
                                                <div className="flex items-center">
                                                    <span className="text-lg ml-2">$</span>
                                                    <input
                                                        type="text"
                                                        name="depositAmount"
                                                        className=" p-2 border-none w-full focus:ring-0 text-lg bg-red-100"
                                                        value={Number(formData.depositAmount).toLocaleString()} // Convert to comma-separated format
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(/,/g, ""); // Remove commas before updating state
                                                            if (!isNaN(rawValue)) {
                                                                handleChange({ target: { name: "freight", value: rawValue } });
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{ backgroundColor: '#fee2e2' }}>
                                            <td className="border  px-4 py-2 font-semibold">Balance Due:</td>
                                            <td className="border">
                                                <div className="flex items-center">
                                                    <span className="text-xl ml-2">$</span>
                                                    <input
                                                        type="text"
                                                        name="balanceDue"
                                                        className=" p-4 border-none w-full focus:ring-0 bg-[#fee2e2] text-lg"
                                                        value={Number(formData.balanceDue).toLocaleString()} // Convert to comma-separated format
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(/,/g, ""); // Remove commas before updating state
                                                            if (!isNaN(rawValue)) {
                                                                handleChange({ target: { name: "balanceDue", value: rawValue } });
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{}}>
                                            <td className="border  px-4 py-2 font-semibold">CIF Price:</td>
                                            <td className="border">
                                                <div className="flex items-center">
                                                    <span className="text-xl ml-2">$</span>
                                                    <input
                                                        type="text"
                                                        name="CIFPrice"
                                                        className="mt-2 p-4 border-none w-full focus:ring-0 text-2xl"
                                                        value={Number(formData.CIFPrice).toLocaleString()} // Convert to comma-separated format
                                                        onChange={(e) => {
                                                            const rawValue = e.target.value.replace(/,/g, ""); // Remove commas before updating state
                                                            if (!isNaN(rawValue)) {
                                                                handleChange({ target: { name: "CIFPrice", value: rawValue } });
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </td>
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


                        <div className='flex justify-end cursor-pointer '>
                            <button id='generate-invoice' onClick={downloadPdf} className="px-3 py-2 rounded mt-1" style={{ backgroundColor: '#991b1b', color: 'white' }} >
                                Generate Invoice
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
