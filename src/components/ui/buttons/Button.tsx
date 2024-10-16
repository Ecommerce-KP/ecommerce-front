import classNames from 'classnames';

type ButtonType = {
  label: string;
  className?: string;
  classNameLabel?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  onSubmit?: () => void;
};

export default function Button({
  label,
  className,
  classNameLabel,
  buttonType,
  onSubmit,
}: ButtonType) {
  return (
    <button
      className={classNames(
        'w-[159px] h-[56px] flex items-center justify-center text-white text-[16px] font-medium rounded-[4px] bg-danger',
        className,
      )}
      onSubmit={onSubmit}
      type={buttonType || 'button'}
    >
      <span className={classNameLabel}>{label}</span>
    </button>
  );
}
