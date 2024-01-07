import Header from '../common/Header';
import SideBar from '../common/SideBar'

function PageLayout({header, children}) {
    return (
        <div>
            <SideBar />
            <div className="pl-64 flex flex-col gap-5">
                <Header title={header} username="Tom Vo" />
                {children}
            </div>
        </div>
    );

}

export default PageLayout;