import { AiOutlineCar, AiOutlineDollarCircle, AiOutlineSafety, AiOutlineStop, AiOutlineUser } from "react-icons/ai";
import { applicationImg1, applicationImg2, applicationImg3, applicationImg4, applicationImg5, applicationImg6, applicationImg7, applicationImg8, applicationImg9, badaAssfalt, BigAsfalt, BrokeAsfalt, ClassicAsflat, exoticrides, FancyAsfalt, firstClass, HairyAsfalt, Image1, Image2, Image3, Image4, Image5, nakedAsfalt, smartasphalt, specialityrides, standaredrides } from "../../../public";

export const TripsItemArr = [
  {
    title: "standard",
    coverImage: standaredrides,
    subTrips: [
      {
        type: "broke asphalt",
        description: "A way to save money and meetup with new friends, you could share the ride with some other rider heading in the same direction.",
        price:20 ,
        subTripImage: BrokeAsfalt 
      },
      {
        type: "smart asphalt",
        description: "Straightforward ride, average value for a decent experience. Enjoy the music or chit chat or even the silence.",
        price:27.5,
        subTripImage: smartasphalt 
      },
      {
        type: "fancy asphalt",
        description: "Qualified cars, more legroom, premium rides for still an affordable price. Comfort and quality granted with every journey.",
        price:35,
        subTripImage: FancyAsfalt 
      }
    ]
  },
  {
    title: "specialty",
    coverImage: specialityrides,
    subTrips: [
      {
        type: "Hairy asfalt",
        description: "don’t leave your furry friend behind, it surely wants to join your fun time.. don’t you want the same? just take them to poop before the trip.",
        price:35,
        subTripImage: HairyAsfalt 
      },
      {
        type: "classic asfalt",
        description: "driver will take more than the extra mile to ensure our precious seniors to have nothing less than exceptional service and assistance as needed.",
        price:35,
        subTripImage: ClassicAsflat 
      },
      {
        type: "Big Asfalt",
        description: "Premium, specialized rides with attention to detail and maximum comfort.",
        price:45,
        subTripImage: BigAsfalt 
      }
    ]
  },
  {
    title: "exotic",
    coverImage: exoticrides,
    subTrips: [
      {
        type: "naked asfalt",
        description: "wanna go around in a convertible, were literally sky is the limit.. why not.",
        price:200,
        subTripImage: nakedAsfalt 
      },
      {
        type: "Bad asfalt",
        description: "sports cars for one rider, why take a comfortable ride whn you can squeeze into a seat that will take your breath away.",
        price:210,
        subTripImage: badaAssfalt 
      },
      {
        type: "First Class Asfalt",
        description: "Luxury at its finest. The most exclusive and premium exotic rides available.",
        price:220,
        subTripImage: firstClass 
      }
    ]
  }
  ];
export const links = [
    { href: '/', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#constitution', text: 'Constitution' },
    { href: '#trips', text: 'All Trips' },
    { href: '#contact-us', text: 'Contact' },

  ];
 export const cards = [
    {
      title: "Transparency and Fair Compensation",
      description:
        "Your voice matters. You are not just users; you are the driving force behind our innovation. We are committed to listening to your needs and incorporating your ideas into the future of our platform. Here, you are the research and development team, ensuring that the features we build serve your best interests.",
      icon: <AiOutlineDollarCircle size={45} className="text-[#d71515]" />,
    },
    {
      title: "Empowerment of Users",
      description:
      "We believe in full transparency in every transaction. You have the right to know exactly what you’re paying for, and drivers have the right to know exactly what they’re earning. That’s why we ensure that drivers receive no less than 90% of the service charge paid by riders. This isn’t just fair—it’s essential for a healthy, thriving community.",
      icon: <AiOutlineUser size={40} className="text-[#d71515]" />,
    },
    {
      title: "Autonomy of Choice",
      description:
      "Freedom is at the core of our service. Drivers have complete freedom to choose their destinations and areas of operation, while riders can select their preferred drivers. This mutual respect for choice enhances both safety and satisfaction, ensuring that your experience is always in your hands.",
      icon: <AiOutlineCar size={40} className="text-[#d71515]" />,
    },
    {
      title: "User-Led Justice",
      description:
      "We trust you, our community, to help maintain fairness. In the event of a conflict, you will act as the jury, while we enforce the decisions made. No account will ever be suspended without clear, documented reasoning. Your rights are protected, and your trust is our priority.",
      icon: <AiOutlineSafety size={40} className="text-[#d71515]" />,
    },
    {
      title: "Abolition of Surge Pricing",
      description:
      "We stand against surge pricing. You deserve consistent, fair pricing every time you use our service. We promise stable costs, regardless of demand. These amendments are our daily commitment to you. Together, we're redefining rideshare with integrity, fairness, and a focus on putting riders and drivers first.",
      icon: <AiOutlineStop size={40} className="text-[#d71515]" />,
    },
  ];
 export const amendments = [
    {
      title: "Amendment I: Empowerment of Users",
      description:
        "The rights of riders and drivers to direct the future of the platform shall not be infringed. Users shall serve as the architects of innovation, contributing to the development of features that align with their needs and preferences.",
         coverImage: Image1, 

    },
    {
      title: "Amendment II: Transparency and Fair Compensation",
      description:
        "In all transactions, there shall be full transparency. Riders and drivers shall have the right to know the exact cost of the service, as well as the precise earnings of the service provider. Drivers shall be paid no less than 90% of the service charge paid by the rider, ensuring fairness and equitable compensation in every ride.",
        coverImage: Image2, 

    },
    {
      title: "Amendment III: Autonomy of Choice",
      description:
        "Drivers shall have the unalienable right to select their destinations and areas of operation without restriction. Riders shall have the right to choose their preferred drivers, thereby enhancing safety and satisfaction for all parties involved.",
        coverImage: Image3, 

    },
    {
      title: "Amendment IV: Accountability in Support",
      description:
        "All conflicts shall be judged by the users themselves, acting as the jury. The company shall serve as the enforcer of the law, ensuring that no account is suspended without clear, documented reasoning. Every action taken will be transparent and justified, protecting the rights of all users and maintaining trust within the community.",
        coverImage: Image4, 

    },
    {
      title: "Amendment V: Freedom from Exploitation",
      description:
        "Surge pricing shall never be implemented. All users, regardless of time or demand, shall have access to fair and consistent pricing. The platform commits to maintaining a stable cost structure, ensuring that no rider is ever overcharged due to fluctuating demand.",
        coverImage: Image5, 
    },
  ];
  export const mobileScreenshots = [
    { Imgsrc: applicationImg1, alt: 'Open Dispute' },
    { Imgsrc: applicationImg2, alt: 'Trip Preferences for Rider' },
    { Imgsrc: applicationImg3, alt: 'Disputes' },
    { Imgsrc: applicationImg4, alt: 'Scheduled Trips for Driver' },
    { Imgsrc: applicationImg5, alt: 'My Disputes' },
    { Imgsrc: applicationImg6, alt: 'Rewards for Drivers' },
    { Imgsrc: applicationImg7, alt: 'Rewards for Winner Driver' },
    { Imgsrc: applicationImg8, alt: 'Trip Preferences for Rider' },
    { Imgsrc: applicationImg9, alt: 'Open Dispute 2' },
  ];