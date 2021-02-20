import React from "react";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "../components/print/FormToPrint";
function ReactUploadImage() {
  const componentRef = React.useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
      {/* <button onClick={handlePrint}>Print this out!</button> */}
    </div>
  );
}

export default ReactUploadImage;
