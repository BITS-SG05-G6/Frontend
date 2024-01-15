import { useNavigate } from "react-router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackToPrev({className}) {
    const navigate = useNavigate();
    function handleGoBack() {
        navigate(-1);

    }
    return (
        <div onClick={handleGoBack} className={`w-10 h-10 cursor-pointer ${className} text-[#F472B6]`}>
            <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
        </div>
    )

}

export default BackToPrev;