import React from "react";
import Image, { StaticImageData } from "next/image";

const ProductInformation: React.FC = () => {
  return (
    <div>
      <div>
        <div className="border-b border-gray-400 flex justify-center items-center space-x-6 md:space-x-12 py-4 md:py-10 font-bold text-text-color">
          <span className="cursor-pointer">Description</span>
          <span className="cursor-pointer">Additional Information</span>
          <span className="cursor-pointer">Reviews (0)</span>
        </div>
        <div className="my-10 md:flex justify-between">
          <div className="md:w-5/12 space-y-6 text-text-color">
            <h4 className="font-bold text-title text-2xl capitalize">the quick fox jumps over </h4>
            <p >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              style={{ height: "413px" }}
              src="/kitchen-equipement.png"
              alt=""
              width={239}
              height={280}
              className="w-full mb-6 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
