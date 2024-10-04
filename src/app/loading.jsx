import Image from "next/image";
import { LodaerIcon } from "../../public";

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#f0ebe5] flex items-center justify-center z-50'>
      <Image src={LodaerIcon} className=" w-24"  />
    </div>
  );
}

export default Loading;
