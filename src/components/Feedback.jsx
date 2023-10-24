import { quotes } from '../assets';

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[12] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="" className="w-[42px] h-[27px onj]" />
      <p className="text-white font-poppins font-normal text-[18px] leading-[]32px] my-10 ">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt="" className="w-[48px] h-[48px] rounded-2xl" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
