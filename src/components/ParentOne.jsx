import { Child1 } from "./Child1";
import { Child2 } from "./Child2";

export const ParentOne = () => {
  return (
    <div className="m-4 p-6 rounded bg-white border border-gray-200">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Parent One</h2>
        <p className="text-sm text-gray-600">Simple container for related items.</p>
      </div>

      <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
        <Child1 />
        <Child2 />
      </div>
    </div>
  );
};
