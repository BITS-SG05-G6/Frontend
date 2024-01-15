import Text from "./Text";

function Loading({ isLoading }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isLoading ? "" : "hidden"}`}
    >
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-box flex h-1/4 w-1/4 items-center justify-center gap-5 rounded-lg bg-white p-6 ">
        <span className="loading loading-spinner h-9 w-9 text-secondary"></span>
        <Text className="text-gray-900" variant="text-lg">
          Loading...
        </Text>
      </div>
    </div>
  );
}

export default Loading;
