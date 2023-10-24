import { stats } from '../constant';
import styles from '../style';

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:md-20 mb-6`}
    >
      {stats.map((el) => (
        <div
          key={el.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading[43px] ">
            {el.value}
          </h4>
          <p className=" font-poppins font-semibold xs:text-[20px] text-[30px] xs:leading-[26px] leading[21px] text-gradient uppercase ml-3">
            {el.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
