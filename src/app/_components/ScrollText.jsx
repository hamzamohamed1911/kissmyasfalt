'use client';

const ScrollText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-gray-100">
      <div className="scrolling-text text-4xl font-bold text-black">
        {Array(20).fill("Kiss My Asfalt ").map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
