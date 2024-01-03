import Text from "../common/Text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SectionLayout({ title, children, className, viewList, href }) {

    return (
        <div className={`w-full py-5 ${className}`}>
            {/* Section title*/}
            <div className="flex justify-between group">
                <Text variant='text-md' weight='bold'>{title}</Text>
                {viewList && (
                    <div className="flex gap-2 group-hover:text-purple-300 cursor-pointer">
                        <Text variant='text-sm' weight='semibold' href={href}>View All</Text>
                        <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 pt-1"></FontAwesomeIcon>
                    </div>

                )}
            </div>
            {/* Other part of the section */}
            <div className="mt-5">
                {children}
            </div>

        </div>
    );
}

export default SectionLayout;