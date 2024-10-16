const BlockTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[40px] flex items-center gap-x-[20px]">
      <div className="w-[20px] h-full bg-danger rounded-[4px]"></div>
      <span className='text-danger text-[16px] font-semibold'>{title}</span>
    </div>
  );
};

export default BlockTitle;
