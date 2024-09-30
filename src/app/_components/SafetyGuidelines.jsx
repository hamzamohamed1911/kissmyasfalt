import {
  FaCheckCircle,
  FaShieldAlt,
  FaFingerprint,
  FaUserCheck,
  FaBell,
  FaLock,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Accordion from "./Accordion";

const SafetyGuidelines = () => {
  return (
    <section className="w-full h-auto  py-12 px-4 text-[#d71515] ">
      <div className="container mx-auto ">
        <h1 className="md:text-5xl text-3xl font-bold text-center mb-8 font-urban">
          Safety Guidelines
        </h1>

        <Accordion
          title="Comprehensive Background Checks"
          icon={<FaCheckCircle className="mr-2 w-8 " />}
        >
          <p className="mb-4 text-primary">
            All users, both riders and drivers, must undergo a thorough
            background check before gaining access to the application. This
            ensures that every participant in our community meets our strict
            safety standards.
          </p>
          <p className="text-primary">
            An annual background check will be conducted at the beginning of
            each year to review and update criminal history records, reinforcing
            our commitment to providing a safe environment.
          </p>
        </Accordion>

        <Accordion
          title="Advanced Safety Features"
          icon={<FaShieldAlt className="mr-2 w-8 text-[#d71515] " />}
        >
          <p className="mb-4 text-primary">
            Our platform includes several built-in features designed to enhance
            user safety:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaLock className=" mr-2 w-8 text-[#d71515]" />
              <div className="text-primary">
                <span className="font-bold ">Black Box:</span> A secure,
                tamper-proof system that records all trip data, accessible only
                in emergencies.
              </div>
            </li>
            <li className="flex items-start">
              <FaLocationDot className="mr-2 w-8 text-[#d71515]" />
              <div className="text-primary">
                <span className="font-bold">Live Trip Tracking:</span> Riders
                and drivers can share their live trip status with an emergency
                contact, allowing real-time monitoring for added security.
              </div>
            </li>
            <li className="flex items-start">
              <FaUserCheck className="mr-2 w-8 text-[#d71515]" />
              <div className="text-primary">
                <span className="font-bold">Random Identity Confirmation:</span>
                To prevent fraud and ensure that only authorized users are
                accessing the service, we may randomly request confirmation of
                identity through:
                <ul className="list-disc pl-8 mt-2">
                  <li>A photo</li>
                  <li>
                    The last four digits of the Social Security Number (SSN)
                  </li>
                  <li>Birthdate verification</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <FaFingerprint className=" mr-2 w-8 text-[#d71515]" />
              <div className="text-primary"> 
                <span className="font-bold">
                  Biometric or PIN-Linked Ride Access:
                </span>
                Starting a ride will require biometric authentication (e.g.,
                fingerprint or facial recognition) or a secure PIN, ensuring
                that only the intended user can initiate the trip.
              </div>
            </li>
            <li className="flex items-start">
              <FaShieldAlt className=" mr-2 w-8 text-[#d71515]" />
              <div className="text-primary">
                <span className="font-bold">
                  Emergency Access to Black Box:
                </span>
                In the event of an emergency, the black box data can be accessed
                promptly to aid in resolution and investigation.
              </div>
            </li>
            <li className="flex items-start ">
              <FaBell className=" mr-2 w-8 text-[#d71515]" />
              <div className="text-primary">
                <span className="font-bold">Emergency Contact:</span> A direct
                feature to alert emergency services or a designated contact in
                case of any immediate threat or danger.
              </div>
            </li>
          </ul>
        </Accordion>

        <p className="text-center text-xl text-[#d71515]">
          These guidelines are designed to protect our community, ensuring that
          every ride is as safe as possible. We take your safety seriously and
          are constantly innovating to provide the best possible experience.
        </p>
      </div>
    </section>
  );
};

export default SafetyGuidelines;
