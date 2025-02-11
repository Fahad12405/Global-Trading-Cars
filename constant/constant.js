

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
    title: 'A Wide Selection of Global Cars at Your Fingertips!',
    desc: 'We offer a vast range of high-quality cars from Japan, giving you access to a global marketplace with top-notch vehicles at competitive prices.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/nameit_haveit_image_image.jpg?v=1'
  },
  {
    title: 'We Deliver Worldwide, Wherever You Are!',
    desc: 'No matter where you are in the world, we provide reliable international shipping to countries across Africa, Asia, the Middle East, Europe, and beyond.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/canget_ontheearth_image.jpg?v=1'
  },
  {
    title: 'Customer Support That Never Sleeps!',
    desc: 'Our dedicated team is available 24/7/365 to support you through SBT Livechat, WhatsApp, social media, phone, and email, ensuring your experience is seamless.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/always_helpyou_image.jpg?v=1'
  },
  {
    title: 'Quality You Can Trust, Every Time!',
    desc: 'We perform thorough inspections on all cars before shipment, ensuring you receive only the best quality vehicles that meet your expectations.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/highquality_ourpride_image.jpg?v=1'
  },
  {
    title: 'Fast Delivery, Global Standard!',
    desc: 'We understand the excitement of getting your car quickly, so we ensure fast and efficient delivery no matter where you’re located.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/we_speed_image.jpg?v=1'
  },
  {
    title: 'Over 30 Years of Reliability in Global Car Trade!',
    desc: 'With over three decades of experience in the used car industry, we’ve built a reputation for delivering reliable and trustworthy service worldwide.',
    imageSrc: 'https://www.sbtjapan.com/img/about_us/why-choose-sbt/we_trusted_image.jpg?v=1'
  }
];



export const blogData = [
  {
    date: "Jan 3, 2025",
    CardTitle: "Should You Buy A Used Car With Accident History?",
    CardDescription:
      "When searching for a used vehicle, it’s common to come across cars with an accident history. This article dives into the pros and cons of buying a car with an accident history, helping you make a more informed decision.",
    image:
      "https://media.licdn.com/dms/image/D4E12AQF-JqVGeau4cA/article-cover_image-shrink_720_1280/0/1668071140800?e=2147483647&v=beta&t=IHaSxhglFTkTGGSHBgPlMtIocBUoGGr8rl1CEgp_PA0"
  },
  {
    date: "Jan 5, 2025",
    CardTitle: "How To Finance A Used Car: A Comprehensive Guide",
    CardDescription:
      "Learn about the different ways to finance a used car, including loans, leasing, and other options that can make your car purchase easier on your wallet.",
    image:
      "https://media.istockphoto.com/id/1414949812/photo/ar-business-concept.jpg?s=612x612&w=0&k=20&c=7_0trpMd8EE8Bydss3c9fVflKoY2abZR1yA9T0yKP98="
  },
  {
    date: "Jan 7, 2025",
    CardTitle: "The Best Time of the Year to Buy a Used Car",
    CardDescription:
      "Timing is everything when it comes to buying a used car. Find out which months offer the best deals and how to take advantage of seasonal discounts.",
    image:
      "https://www.exchangemycar.co.uk/blog/wp-content/uploads/2025/01/how-exchange-my-car-makes-car-selling-hassle-free.jpg"
  },
  {
    date: "Jan 9, 2025",
    CardTitle: "Understanding Mileage: How Much Is Too Much For A Used Car?",
    CardDescription:
      "Mileage is one of the first things buyers consider when shopping for used cars. This article helps you understand how much mileage is acceptable and when it could be a red flag.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu93Q8BCn5IlXjX5eY0iU4wudfHVvk8EMS7g&sg"
  },
  {
    date: "Jan 12, 2025",
    CardTitle: "How to Check the History of a Used Car Before Buying",
    CardDescription:
      "Buying a used car requires careful inspection. Learn how to check the car's history, including accidents, ownership, and service records, to avoid hidden issues.",
    image:
      "https://cdn.ihsmarkit.com/www/images/0723/rr-blog-image.jpg"
  },
  {
    date: "Jan 15, 2025",
    CardTitle: "Is It Better To Buy A Used Car From a Dealership Or a Private Seller?",
    CardDescription:
      "Should you purchase from a dealership or a private seller? This guide compares both options, helping you decide which is better for your used car purchase.",
    image:
      "https://cdn.create.vista.com/api/media/small/13432892/stock-photo-sellingg"
  },
  {
    date: "Jan 18, 2025",
    CardTitle: "Top Features to Consider When Buying a Used Car",
    CardDescription:
      "When buying a used car, it’s crucial to know what features matter most. This article highlights the key features to look for in a pre-owned vehicle to get the best value.",
    image:
      "https://di-uploads-pod27.dealerinspire.com/cbsqualitycars/uploads/2020/06/Used-Cars-For-Sale-Durham-NC-Couple-with-Kays.jpg"
  },
  {
    date: "Jan 20, 2025",
    CardTitle: "Certified Pre-Owned Vs. Used Cars: What’s The Difference?",
    CardDescription:
      "Explore the differences between certified pre-owned and regular used cars to make an informed decision when purchasing your next vehicle.",
    image:
      "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/t6fBOIj1ysbvuLferymrGQt59WR99t1A4W4qRtqS.jpg"
  },
  {
    date: "Jan 22, 2025",
    CardTitle: "How to Negotiate the Best Price on a Used Car",
    CardDescription:
      "Negotiating the price of a used car can be tricky. Here are some expert tips on how to negotiate the best price, whether you're buying from a dealership or a private seller.",
    image:
      "https://images.saymedia-content.com/.image/t_share/MjAwMzE5OTI5MjQzNjczNzA4/training-a-rookie-car-salesman.jpg"
  },
  {
    date: "Jan 22, 2025",
    CardTitle: "Top Negotiation Strategies When Buying a Used Car",
    CardDescription:
      "Buying a used car doesn’t have to be intimidating. Learn the top negotiation strategies that can help you secure the best price on your next vehicle, from understanding the market to timing your offer right.",
    image:
      "https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2019/10/Suzuki-Alto-Pakistan-September-2019.jpg?fit=600%2C400&ssl=1"
  },
  {
    date: "Jan 22, 2025",
    CardTitle: "How to Use Vehicle History Reports in Negotiations",
    CardDescription:
      "A vehicle history report can be a powerful tool in price negotiations. Learn how to use the report to uncover any potential issues and reduce the price, ensuring you make a fair deal.",
    image:
      "https://bestsellingcarsblog.com/wp-content/uploads/2019/11/Suzuki-Alto-Pakistan-October-2019.jpg"
  },
  {
    date: "Jan 22, 2025",
    CardTitle: "Understanding Market Value: How to Avoid Overpaying for a Used Car",
    CardDescription:
      "Knowing the market value of a used car can give you leverage during negotiations. This guide explains how to research pricing and avoid paying more than necessary.",
    image:
      "https://allaboutcars.pk/wp-content/uploads/2021/11/Pak-Suzuki-Alto.jpg"
  }
];
