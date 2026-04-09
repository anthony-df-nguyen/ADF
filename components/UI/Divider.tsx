interface Props {
  title: string;
}

const Divider = ({ title }: Props) => {
  {
    return (
      <div className="flex items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-300" />
        <div className="relative flex justify-center min-w-max">
          <div className="px-4 w-full text-caption text-semibold">{title}</div>
        </div>
        <div aria-hidden="true" className="w-full border-t border-gray-300" />
      </div>
    );
  }
};

export default Divider;
