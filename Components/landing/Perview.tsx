import { BellIcon, User } from "lucide-react";
function Perview() {
  return (
    <div className="w-full min-h-[600px] bg-gray-100 flex flex-col gap-5 items-center justify-center px-6 py-16">
      <h3 className="text-4xl font-bold font-mono">Dashbaord Perview</h3>
      <div className="w-full max-w-5xl rounded-3xl border bg-white p-6 shadow-xl">
        {/* Header */}
        <header className="flex items-center justify-between border-b pb-5">
          <h4 className="text-2xl font-bold text-gray-900">Dashboard</h4>

          <div className="flex items-center gap-5 text-gray-500">
            <BellIcon />
            <User />
          </div>
        </header>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <p className="text-gray-500">Revenue</p>

            <span className="mt-2 block text-3xl font-bold text-gray-900">
              $12,430
            </span>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <p className="text-gray-500">Orders</p>

            <span className="mt-2 block text-3xl font-bold text-gray-900">
              525
            </span>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <p className="text-gray-500">Products</p>

            <span className="mt-2 block text-3xl font-bold text-gray-900">
              1200
            </span>
          </div>
        </div>

        {/* Chart Preview */}
        <div className="mt-8 h-48 rounded-2xl bg-gray-50 flex items-center justify-center">
          <p className="text-gray-400">Sales Chart Preview</p>
        </div>
      </div>
    </div>
  );
}

export default Perview;
