

const vehicleData = [
  {
    id: 1,
    rating: 4,
    name: 'Toyota Van 2021',
    price: 100000,
    stockId: 'XQ7055',
    inventoryLocation: 'Yokohama - Japan',
    modelCode: 'CBF-VR2E26',
    year: '2021/10',
    transmission: 'AT (Automatic)',
    color: 'White',
    drive: '2WD',
    doors: 5,
    steering: 'RHD (Right-Hand Drive)',
    seats: '3[6]',
    engineType: 'QR20',
    bodyType: 'Van',
    engineSize: '1,990cc',
    mileage: '73,000 km',
    fuelType: 'Petrol',
    dimensions: '4.69m × 1.69m × 1.99m',
    m3: '15.773',
    vehicleWeight: '1,760 kg',
    grossVehicleWeight: '3,125[3,040] kg',
    maxLoadingCapacity: '1,200[950] kg',
    image: 'https://droom.in/_next/image?url=https%3A%2F%2Fcdn1.acedms.com%2Fhttps%3A%2F%2Fcdn1.acedms.com%2Fphotos%2Flisting%2F2025-01-24%2F5a43d6db5427cd29744efbd991d2ecdd_large.jpg.webp&w=3840&q=75', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Honda SUV 2022',
    price: 200000,
    rating: 3,
    stockId: 'XQ7056',
    inventoryLocation: 'Tokyo - Japan',
    modelCode: 'CBF-VR2E27',
    year: '2022/03',
    transmission: 'MT (Manual)',
    color: 'Black',
    drive: '4WD',
    doors: 5,
    steering: 'LHD (Left-Hand Drive)',
    seats: '4[6]',
    engineType: 'QR25',
    bodyType: 'SUV',
    engineSize: '2,500cc',
    mileage: '45,000 km',
    fuelType: 'Diesel',
    dimensions: '4.80m × 1.75m × 1.80m',
    m3: '16.800',
    vehicleWeight: '1,950 kg',
    grossVehicleWeight: '3,500[3,250] kg',
    maxLoadingCapacity: '1,400[1,200] kg',
    image: 'https://droom.in/_next/image?url=https%3A%2F%2Fcdn1.acedms.com%2Fhttps%3A%2F%2Fcdn1.acedms.com%2Fphotos%2Flisting%2F2025-01-24%2F5a43d6db5427cd29744efbd991d2ecdd_large.jpg.webp&w=3840&q=75',
  },
  {
    id: 3,
    name: 'Nissan Sedan 2020',
    price: 150000,
    rating: 4,
    stockId: 'XQ7057',
    inventoryLocation: 'Osaka - Japan',
    modelCode: 'CBF-VR2E28',
    year: '2020/08',
    transmission: 'AT (Automatic)',
    color: 'Silver',
    drive: '2WD',
    doors: 4,
    steering: 'RHD (Right-Hand Drive)',
    seats: '5[7]',
    engineType: 'SR20',
    bodyType: 'Sedan',
    engineSize: '2,000cc',
    mileage: '60,000 km',
    fuelType: 'Petrol',
    dimensions: '4.50m × 1.80m × 1.50m',
    m3: '12.150',
    vehicleWeight: '1,550 kg',
    grossVehicleWeight: '2,800[2,500] kg',
    maxLoadingCapacity: '1,100[900] kg',
    image: 'https://powervehicles.com/wp-content/uploads/2024/05/2JZ-JZX100-248.jpg',
  },
  {
    id: 4,
    price: 300000,
    rating: 2,
    name: 'Hyundai Crossover 2023',
    stockId: 'XQ7058',
    inventoryLocation: 'Kyoto - Japan',
    modelCode: 'CBF-VR2E29',
    year: '2023/01',
    transmission: 'CVT (Continuously Variable Transmission)',
    color: 'Red',
    drive: 'AWD',
    doors: 5,
    steering: 'LHD (Left-Hand Drive)',
    seats: '5[5]',
    engineType: 'HR16',
    bodyType: 'Crossover',
    engineSize: '1,600cc',
    mileage: '25,000 km',
    fuelType: 'Hybrid',
    dimensions: '4.60m × 1.85m × 1.70m',
    m3: '14.000',
    vehicleWeight: '1,400 kg',
    grossVehicleWeight: '2,650[2,400] kg',
    maxLoadingCapacity: '950[800] kg',
    image: 'https://toprankglobal.jp/picture/vehicle/24442_677.jpg',
  },
  {
    id: 5,
    price: 350000,
    rating: 4,
    name: 'Toyota Land Cruiser 2022',
    stockId: 'XQ7059',
    inventoryLocation: 'Tokyo - Japan',
    modelCode: 'LC200-VR2E31',
    year: '2022/06',
    transmission: 'AT (Automatic)',
    color: 'Black',
    drive: '4WD',
    doors: 5,
    steering: 'RHD (Right-Hand Drive)',
    seats: '7[7]',
    engineType: 'V8',
    bodyType: 'SUV',
    engineSize: '4,500cc',
    mileage: '15,000 km',
    fuelType: 'Diesel',
    dimensions: '4.85m × 1.98m × 1.85m',
    m3: '17.250',
    vehicleWeight: '2,700 kg',
    grossVehicleWeight: '3,400 kg',
    maxLoadingCapacity: '1,500 kg',
    image: 'https://car-images.bauersecure.com/wp-images/182684/omoda_5_uk.jpeg',
  },
  {
    id: 6,
    price: 250000,
    rating: 3,
    name: 'Honda Civic 2022',
    stockId: 'XQ7060',
    inventoryLocation: 'Osaka - Japan',
    modelCode: 'CIVIC-VR2E32',
    year: '2022/03',
    transmission: 'MT (Manual)',
    color: 'Blue',
    drive: 'FWD',
    doors: 4,
    steering: 'LHD (Left-Hand Drive)',
    seats: '5[5]',
    engineType: 'K20',
    bodyType: 'Sedan',
    engineSize: '2,000cc',
    mileage: '30,000 km',
    fuelType: 'Petrol',
    dimensions: '4.65m × 1.79m × 1.42m',
    m3: '13.120',
    vehicleWeight: '1,300 kg',
    grossVehicleWeight: '2,100 kg',
    maxLoadingCapacity: '800 kg',
    image: 'https://philipireland.com/_userfiles/thumbs/_userfiles-pages-images-cars-suzuka_grey_r8/r8_13_website_1498x1000-jpg/35500c283a016563f49fc7057abb1fe5/r8_13_website_1498x1000.jpg',
  },
  {
    id: 7,
    price: 420000,
    rating: 5,
    name: 'BMW X5 2023',
    stockId: 'XQ7061',
    inventoryLocation: 'Nagoya - Japan',
    modelCode: 'X5-VR2E33',
    year: '2023/01',
    transmission: 'AT (Automatic)',
    color: 'White',
    drive: 'AWD',
    doors: 5,
    steering: 'LHD (Left-Hand Drive)',
    seats: '5[5]',
    engineType: 'I6',
    bodyType: 'SUV',
    engineSize: '3,000cc',
    mileage: '10,000 km',
    fuelType: 'Petrol',
    dimensions: '4.92m × 1.95m × 1.74m',
    m3: '16.100',
    vehicleWeight: '2,300 kg',
    grossVehicleWeight: '3,100 kg',
    maxLoadingCapacity: '1,000 kg',
    image: 'https://images.clickdealer.co.uk/vehicles/6338/6338993/full/152379676.jpg',
  },
  {
    id: 8,
    price: 280000,
    rating: 3,
    name: 'Nissan Leaf 2021',
    stockId: 'XQ7062',
    inventoryLocation: 'Sapporo - Japan',
    modelCode: 'LEAF-VR2E34',
    year: '2021/09',
    transmission: 'CVT (Continuously Variable Transmission)',
    color: 'Silver',
    drive: 'FWD',
    doors: 5,
    steering: 'RHD (Right-Hand Drive)',
    seats: '5[5]',
    engineType: 'Electric',
    bodyType: 'Hatchback',
    engineSize: 'N/A (Electric Motor)',
    mileage: '20,000 km',
    fuelType: 'Electric',
    dimensions: '4.49m × 1.79m × 1.54m',
    m3: '12.530',
    vehicleWeight: '1,600 kg',
    grossVehicleWeight: '2,300 kg',
    maxLoadingCapacity: '600 kg',
    image: 'https://images.edealer.ca/18/151289295.jpeg',
  },
];

export default vehicleData;





export const howToBuyData = [
  {
    title: "Step-1: Order",
    steps: [
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/order-1.png?v=1",
        heading: "Find Your Car",
        paragraph: "Browse from a huge stock of used cars."
      },
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/order-2.png?v=1",
        heading: "Inquire & Negotiate",
        paragraph: "Contact us for prices, discounts, and total cost."
      },
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/buy-now-1.png?v=1",
        heading: "Order & Invoice",
        paragraph: "Confirm and receive an invoice from our sales staff."
      }
    ]
  },
  {
    title: "Step-2: Payment",
    steps: [
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/make-payment-bank.png",
        heading: "Make Payment",
        paragraph: "Send payment to our bank account listed on the invoice."
      },
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/custom-clearance-1.png?v=1",
        heading: "Send Proof of Payment",
        paragraph: "Send a copy of your TT receipt for faster order processing."
      },
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/make-payment-paypal.png",
        heading: "Payment Confirmation",
        paragraph: "We will confirm your payment and begin shipping."
      }
    ]
  },
  {
    title: "Step-3: Shipment & Delivery",
    steps: [
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/shipment-1.png?v=1",
        heading: "Shipment Booking",
        paragraph: "We arrange and confirm the shipment for your vehicle."
      },
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/shipment-2.png?v=1",
        heading: "Receive Documents",
        paragraph: "After shipment, necessary documents will be sent via courier."
      },
      {
        image: "https://www.sbtjapan.com/assets/cms-global/img/how-to-buy/custom-clearance-2.png?v=1",
        heading: "Receive Your Car",
        paragraph: "Clear customs, register the vehicle, and drive away!"
      }
    ]
  }
];


export const whyChooseUsData = [
  {
    title: 'You name it, we have it!',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/nameit_haveit_image_image.jpg?v=1'
  },
  {
    title: 'You can get your car if you are on this planet!',
    desc: 'We can ship used cars globally to Africa, Asia, Middle East, Caribbean, Oceania, South America, and Europe with offices in around 30 offices.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/canget_ontheearth_image.jpg?v=1'
  },
  {
    title: 'Always by your side to help you!',
    desc: 'Decent and energetic staffs are always ready for 24/7/365 Customer Support via SBT Livechat, WhatsApp, Social media, phones, and emails.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/always_helpyou_image.jpg?v=1'
  },
  {
    title: 'High quality is our pride!',
    desc: 'Proper and thorough inspections before shipment assure you the best condition that you can expect.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/highquality_ourpride_image.jpg?v=1  '
  },
  {
    title: 'We regard “speed” as a global standard!',
    desc: 'Prompt shipment enables you to get your dream car sooner than you imagine no matter where you are.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/we_speed_image.jpg?v=1'
  },
  {
    title: 'Reliability is always there!',
    desc: 'We have built up excellence in used car industry for over 30 years, and have put the finest focus on reliability.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/we_trusted_image.jpg?v=1'
  },
]
