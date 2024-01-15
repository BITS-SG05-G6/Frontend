import BackToPrev from "../common/BackToPrev";
import SideBar from "../common/SideBar";
function DetailPageLayout({ children }) {
  return (
    <div>
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="flex flex-col gap-5 px-3 py-5 lg:pl-64">
        <BackToPrev className="relative left-10 text-left" />
        <div className="flex justify-between xl:px-10">{children}</div>
      </div>
    </div>
  );
}

export default DetailPageLayout;
