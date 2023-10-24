const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-2 w-[170px] h-[64px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}} rounded-[10px] mt-[20px]`}
    >
      Get started
    </button>
  );
};

export default Button;
