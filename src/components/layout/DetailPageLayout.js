function DetailPageLayout({ statistics, list, detail }) {
    return (
        <>
            <div className="flex justify-between px-10">
                <div className="flex flex-col flex-1 gap-10 pr-5">
                    {statistics}
                    {list}
                </div>
                {detail}
            </div>
        </>
    );
}