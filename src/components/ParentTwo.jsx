import { Child3 } from "./Child3";
import { Child4 } from "./Child4";

export const ParentTwo = () => {
  return (
    <div className="m-4 p-6 rounded bg-white border border-gray-200">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Parent Two</h2>
        <p className="text-sm text-gray-600">Another simple container for related content.</p>
      </div>

      <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
        <Child3 />
        <Child4 />
      </div>
    </div>
  );
};
