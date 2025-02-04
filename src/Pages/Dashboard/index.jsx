import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from '../../../public/logo2.png';
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import InvoiceModal from "../../components/Pdf Template/pdfTemplate";


export default function Dashboard() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const modalContentRef = useRef(null);
  const contentRef = useRef(); // Reference to the content for PDF generation

  const [selectedCar, setSelectedCar] = useState(null);
  const [invoiceData, setInvoiceData] = useState({
    customerName: "",
    customerCountry: "",
    invoiceNo: "INVOICE-201068",
    portOfLoading: "Any Port in Japan",
    invoiceDate: "",
    address: "1010 Lusaka Avondale",
    portOfDischarge: "DAR ES SALAAM",
    invoiceExpiryDate: "",
    paymentTerms: "50%",
    salesPerson: "ZARIK",
    contactNumber: "260961111411",
    emailAddress: "gideonsimbaya@gmail.com",
    fobPrice: "$3,700",
    freight: "$1,700",
    depositAmount: "",
  });

  useEffect(() => {
    const getLsToken = localStorage.getItem('token');
    if (!getLsToken) {
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api-car-export.vercel.app/api/product/get"
        );
        if (response.status === 200) {
          setData(response.data.data.products);
        }
      } catch (error) {
        alert("An error occurred while fetching products.");
      }
    };

    fetchProducts();
  }, []);

  const handleCreateInvoice = (car) => {
    setSelectedCar(car);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };





  return (
    <div className="max-w-7xl mx-auto mt-28">
      <div className="flex justify-end mb-4 mt-4 mr-12">
        <Link
          to="/Protected/AddProduct"
          className="inline-flex items-center px-4 py-2 text-white rounded-full bg-red-900 hover:bg-red-700"
        >
          <FaPlus className="mr-3" />
          Add Product
        </Link>
      </div>

      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto mt-12">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Year
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Engine Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Transmission
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Color
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={item.image?.[0]?.url}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">{item.modelCode}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.year}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {item.engineType}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.transmission}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.color}
              </td>
              <td className="flex px-6 py-4 whitespace-nowrap text-sm font-medium">
                <p
                  className="ml-2 text-red-700 hover:text-red-900 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </p>
                <p
                  className="ml-2 text-blue-600 hover:text-blue-900 cursor-pointer"
                  onClick={() => handleCreateInvoice(item)}
                >
                  Create Invoice
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>





      {modal && selectedCar && (
        <InvoiceModal selectedCar={selectedCar} />
      )}

    </div>
  );
}
