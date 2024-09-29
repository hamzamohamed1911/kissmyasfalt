import { TbLoader3 } from "react-icons/tb";

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#f0ebe5] flex items-center justify-center z-50'>
      <TbLoader3 size={50} className="animate-spin text-[#d71515]" />
    </div>
  );
}

export default Loading;
