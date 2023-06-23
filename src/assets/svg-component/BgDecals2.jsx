import React from "react";

const BgDecals2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="202"
      // height="214"
      viewBox="0 0 700 214"
      // small screen
      style={{ position: 'absolute', left: 700, top: -30,}}
    >
      <defs>
        <linearGradient
          id="a"
          x1="13.13%"
          x2="87.817%"
          y1="-40.934%"
          y2="122.503%"
        >
          <stop offset="0%" stopColor="#08F"></stop>
          <stop offset="100%" stopColor="#00C7FA"></stop>
        </linearGradient>
        <linearGradient id="b" x1="50%" x2="50%" y1="96.08%" y2="0%">
          <stop offset="0%" stopColor="#55FBDC" stopOpacity="0.32"></stop>
          <stop offset="100%" stopColor="#55FBDC"></stop>
        </linearGradient>
        <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#08F"></stop>
          <stop offset="100%" stopColor="#00C7FA"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="url(#a)"
          d="M101.017 210.476c-7.179.388-14.483 1.131-21.184 2.302-2.048.29-3.998.685-5.833 1.098 19.628-9.175 40.377-15.927 61.664-19.922 5.684-.933 11.333-1.998 17.035-2.545l4.26-.497 2.127-.246.358-.025c1.472.17 3.724.444 6.612.721l3.26.325c1.159.116 2.386.21 3.68.42l8.45 1.194c.757.105 1.526.212 2.306.322.78.121 1.572.288 2.373.432l4.925.92c1.672.312 3.385.63 5.13.954l4.497 1.054c-34.142-2.342-68.036 2.418-99.66 13.493z"
        ></path>
        <path
          fill="url(#b)"
          d="M110.121 177.781a264.38 264.38 0 00-13.233-52.019 264.084 264.084 0 00-23.555-48.218C54.434 47.103 29.333 20.569 0 0"
        ></path>
        <path
          fill="url(#c)"
          d="M178.843 79.589c1.915 1.664 4.049 3.385 6.186 5.367 5.337 4.837 11.089 10.625 16.742 16.91C175.499 80.098 144.703 63.601 111 54"
        ></path>
      </g>
    </svg>
  );
}

export default BgDecals2;