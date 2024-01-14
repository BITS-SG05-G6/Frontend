import BackToPrev from "../common/BackToPrev";
import SideBar from "../common/SideBar";
function DetailPageLayout({ children }) {
    return (
        <div>
            <SideBar />
            <div className="pl-64 flex flex-col gap-5 px-3 py-5">
                <BackToPrev className='text-left relative left-10'/>
                <div className="flex justify-between px-10">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default DetailPageLayout;