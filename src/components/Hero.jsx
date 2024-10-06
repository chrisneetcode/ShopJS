import { video1, video2, video3, video4 } from "../assets";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  videoiu1,
} from "../assets/scroll";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="wrapper">
        <div className="itemLeft item1">
          <img
            className="rounded-lg border border-green-300 shadow-sm shadow-teal-400 w-full h-full object-cover"
            src={image2}
            alt="Logo"
          />
        </div>
        <div className="itemLeft item2">
          <img
            className="rounded-lg border border-green-300 shadow-sm shadow-teal-400 w-full h-full object-cover"
            src={image8}
            alt="Logo"
          />
        </div>
        <div className="itemLeft item3">
          <img
            className="rounded-lg border border-green-300 shadow-sm shadow-teal-400 w-full h-full object-cover"
            src={image6}
            alt="Logo"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="itemRight item1">
          <img
            className="rounded-lg border border-green-300 shadow-sm shadow-teal-400 w-full h-full object-cover"
            src={image10}
            alt="Logo"
          />
        </div>
        <div className="itemRight item2">
          <img
            className="rounded-lg border border-green-300 shadow-sm shadow-teal-400 w-full h-full object-cover"
            src={image5}
            alt="Logo"
          />
        </div>
        <div className="itemRight item3">
          <img
            className="rounded-lg border border-green-300 shadow-sm shadow-teal-400 w-full h-full object-cover"
            src={image11}
            alt="Logo"
          />
        </div>
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Context
        <span className="bg-gradient-to-r from-green-300 to-violet-600 text-transparent bg-clip-text ">
          {" "}
          Next Generation
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        itaque veniam quis ipsum veritatis. Magnam recusandae rerum cum,
        dignissimos rem omnis dolorem, obcaecati laudantium qui nam molestiae
        veritatis, perferendis iure.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-300 to-teal-400 py-3 px-4 mx-3 rounded-md"
        >
          Check Out
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          About Usss
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-300 shadow-sm shadow-teal-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-300 shadow-sm shadow-teal-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-300 shadow-sm shadow-teal-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-300 shadow-sm shadow-teal-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
