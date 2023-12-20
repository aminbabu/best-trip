import { MinusIcon, PlusIcon } from "@/components/icons/svgr";

const Counter = ({ title, description, count, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-base text-t-700">{title}</span>
        <span className="text-xs text-t-600">{description}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          onClick={onDecrement}
          className="flex items-center justify-center p-1 w-7 h-7 border border-border rounded-full text-t-700 bg-white"
        >
          <MinusIcon width="16" height="16" viewBox="0 0 24 24" />
        </button>
        <span className="w-5 text-center text-base text-t-700 font-medium">
          {count}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className="flex items-center justify-center p-1 w-7 h-7 border border-border rounded-full text-t-700 bg-white"
        >
          <PlusIcon width="16" height="16" viewBox="0 0 24 24" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
