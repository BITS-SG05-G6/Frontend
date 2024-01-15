import Text from "../common/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Section layout for Dashboard content
function SectionLayout({ title, children, className, viewList, href }) {
  return (
    <div className={`w-full xl:py-5 ${className}`}>
      {/* Section title*/}
      <div className="group flex justify-between">
        <Text variant="text-md" weight="bold">
          {title}
        </Text>
        {viewList && (
          <span className="flex cursor-pointer gap-2 hover:text-purple-300">
            <Text variant="text-sm" weight="semibold" href={href}>
              View All
            </Text>
            <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 pt-1" />
          </span>
        )}
      </div>
      {/* Other part of the section */}
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default SectionLayout;
