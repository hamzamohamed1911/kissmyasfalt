import dynamic from 'next/dynamic';
import Image from 'next/image'; 
import { successImage } from '../../../public';
const SuccessAnimation = dynamic(() => import('../_components/SuccessAnimation'), { ssr: false });


const SuccessPage = () => {
  return (
    <div className="w-full h-screen bg-[#f0ebe5] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={successImage}
          alt="Comic Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
        />
      </div>

      <SuccessAnimation />
    </div>
  );
};

export default SuccessPage;
