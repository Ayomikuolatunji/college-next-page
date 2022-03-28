import ScrollToTop from "react-scroll-to-top";
import {FaArrowCircleUp} from "react-icons/fa";


export default function ScrollToUp() {
  return (
    <div>
         <ScrollToTop smooth component={<p style={{ color: "red",background:"none", boxShadow:"none" }}><FaArrowCircleUp className="text-5xl"/></p>} />
    </div>
  );
}