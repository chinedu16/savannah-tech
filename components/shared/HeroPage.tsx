import Image from "next/image";
import flowerVase from "../../public/flower-vase.png";
import imageLamp from "../../public/image-lamp.png";
import kitchenEquipment from "../../public/kitchen-equipement.png";
import plateFood from "../../public/plate-food.png";

const HeroPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-2/3 space-y-4 lg:space-y-0 lg:space-x-4 py-10 md:py-20">
      {/* First Image */}
      <div className="w-full lg:w-5/12 relative">
        <Image
          src={plateFood}
          alt="Vercel Logo"
          className="w-full h-80 lg:h-full object-cover"
        />
        <div className="absolute top-0 left-0 p-6 text-title text-sm font-bold">
          <div className="space-y-2">
            <div className="text-success">5 Items</div>
            <div className="text-2xl lg:text-5xl">FURNITURE</div>
            <div className="hover:text-text-color cursor-pointer">
              Read More
            </div>
          </div>
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full lg:w-7/12 grid gap-4">
        <div className="relative">
          <Image
            src={flowerVase}
            alt="Vercel Logo"
            className="w-full h-80 lg:h-full object-cover "
          />
          <div className="absolute top-0 left-0 p-4 text-title font-bold">
            <div className="space-y-2">
              <div className="text-success">5 Items</div>
              <div className="text-2xl font-bold">FURNITURE</div>
              <div className="hover:text-text-color cursor-pointer">
                Read More
              </div>
            </div>
          </div>
        </div>

        {/* Third and Fourth Images */}
        <div className="relative h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="relative">
              <Image
                src={imageLamp}
                alt="Vercel Logo"
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute top-0 left-0 p-4 text-title font-bold">
                <div className="space-y-2">
                  <div className="text-success">5 Items</div>
                  <div className="text-2xl font-bold">FURNITURE</div>
                  <div className="hover:text-text-color cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={kitchenEquipment}
                alt="Vercel Logo"
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute top-0 left-0 p-4 text-title font-bold">
                <div className="space-y-2">
                  <div className="text-success">5 Items</div>
                  <div className="text-2xl font-bold">FURNITURE</div>
                  <div className="hover:text-text-color cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
