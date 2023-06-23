import React from 'react';

const BgLeaves = (props) => {
  return (
    <svg className='bg-leaves'
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox='0 0 1440 600'
      style={{ position: 'absolute', zIndex: -10 }}
    >
      <defs>
        <linearGradient id="b" x1="49.078%" x2="10.814%" y1="100%" y2="20.556%">
          <stop offset="0" stopColor="#08f"></stop>
          <stop offset="1" stopColor="#3525d3"></stop>
        </linearGradient>
        <path
          id="a"
          d="M558.865 465.867c-.208.326-.419.651-.639.97.216-.321.423-.648.64-.97zM10.3 299.5c-26.698 21.55 5.727 66.946 16.25 97.516.115.34.241.675.357 1.015.54 1.55 1.076 3.103 1.641 4.642a297.11 297.11 0 009.105 22.345c8.066 17.72 91.763-158.776 29.738 51.347-62.025 210.123 90.867-78.269 104.792-65.265 13.942 12.988-37.04 133.874-20.63 144.166 17.057 10.642 33.83 18.564 49.647 24.663 1.976.761 3.907 1.574 5.856 2.269l5.813 1.972c3.834 1.282 7.537 2.654 11.255 3.64l6.146 1.777c2.048.567 4.061 1.241 6.126 1.678l12.233 2.886c16.352 3.385 32.46 5.312 48.044 6.141l11.601.348c1.834.099 3.626-.019 5.386-.03l5.197-.098c6.841.025 13.325-.632 20.216-1.02 1.698-.07 3.381-.327 5.074-.506l5.086-.584c3.395-.395 6.812-.723 10.193-1.358l10.202-1.698c3.396-.64 6.765-1.453 10.16-2.179l5.041-1.114c1.682-.415 3.357-.908 5.047-1.364 3.373-.94 6.776-1.854 10.134-2.833l9.833-3.291c1.604-.562 3.221-1.034 4.758-1.657l4.553-1.798c23.782-9.349 40.373-19.145 52.658-26.92l4.341-2.78c1.408-.891 2.773-1.756 4.036-2.683l7.206-5.068 3.252-2.288c1.012-.782 1.988-1.534 2.93-2.26 1.881-1.45-164.004-100.647-162.399-101.883 13.062-10.306 193.65 75.722 205.843 62.065l4.537-5.175c.748-.879 1.546-1.719 2.256-2.635l2.16-2.727 3.83-4.844c1.256-1.614 2.567-3.17 3.707-4.838l6.821-9.541c2.162-3.192 4.17-6.422 6.214-9.559 7.895-12.724 14.651-25.122 19.844-37.123l2-4.424c.69-1.448 1.198-2.955 1.796-4.407l3.374-8.589c.27-.702.562-1.392.805-2.095l.707-2.105 1.388-4.14c.903-2.732 1.823-5.386 2.643-8 1.453-5.278 2.921-10.258 4.126-14.998l3.01-13.434c1.437-8.442 2.785-15.635 3.305-21.573l.864-7.848c.211-2.272.25-4.206.335-5.764.136-3.122.15-4.776.036-4.854-.114-.079-.35 1.42-.7 4.376l-.618 5.512-1.15 7.573-.672 4.541-.359 2.455c-.139.836-.324 1.686-.49 2.558-.68 3.487-1.42 7.29-2.222 11.397-.893 4.086-2.038 8.433-3.147 13.085-.515 2.337-1.267 4.688-1.98 7.122l-2.22 7.502c-.189.643-.38 1.29-.57 1.941-.223.641-.445 1.287-.67 1.936l-1.376 3.941c-.93 2.658-1.88 5.379-2.855 8.163l-3.4 8.378-1.756 4.321c-.578 1.46-1.306 2.874-1.963 4.335l-4.124 8.888c-1.462 2.987-3.096 5.959-4.676 9.021l-2.42 4.619a8890.14 8890.14 0 00-2.679 4.576c-.9 1.537-1.81 3.086-2.726 4.648-.932 1.551-1.79 3.164-2.83 4.683l-2.379 3.647C592.238 413.479 609.3 358.484 609.3 299.5 609.3 134.091 475.21 0 309.8 0S236.395 117 10.3 299.5z"
        ></path>
        <linearGradient
          id="c"
          x1="-3.347%"
          x2="92.677%"
          y1="83.377%"
          y2="33.711%"
        >
          <stop offset="0" stopColor="#00c7fa"></stop>
          <stop offset="1" stopColor="#00c7fa" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="e"
          x1="85.963%"
          x2="4.415%"
          y1="16.533%"
          y2="90.668%"
        >
          <stop offset="0" stopColor="#00c7fa"></stop>
          <stop offset="1" stopColor="#00c7fa" stopOpacity="0.48"></stop>
        </linearGradient>
        <linearGradient
          id="f"
          x1="8.386%"
          x2="94.928%"
          y1="30.071%"
          y2="73.201%"
        >
          <stop offset="0" stopColor="#55fbdc"></stop>
          <stop offset="1" stopColor="#00c7fa" stopOpacity="0.8"></stop>
        </linearGradient>
        <linearGradient id="g" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0" stopColor="#08f"></stop>
          <stop offset="1" stopColor="#00c7fa"></stop>
        </linearGradient>
        <linearGradient id="h" x1="50%" x2="50%" y1="96.08%" y2="0%">
          <stop offset="0" stopColor="#55fbdc" stopOpacity="0.32"></stop>
          <stop offset="1" stopColor="#55fbdc"></stop>
        </linearGradient>
        <linearGradient id="i" x1="50%" x2="50%" y1="0%" y2="99.011%">
          <stop offset="0" stopColor="#00c7fa"></stop>
          <stop offset="1" stopColor="#00c7fa" stopOpacity="0.24"></stop>
        </linearGradient>
        <linearGradient id="j" x1="50%" x2="66.362%" y1="0%" y2="96.878%">
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#55fbdc" stopOpacity="0.32"></stop>
        </linearGradient>
        <linearGradient id="k" x1="50%" x2="66.362%" y1="0%" y2="96.878%">
          <stop offset="0" stopColor="#00c7fa"></stop>
          <stop offset="1" stopColor="#55fbdc" stopOpacity="0.32"></stop>
        </linearGradient>
        <mask id="d" fill="#fff">
          <use fillRule="evenodd" xlinkHref="#a"></use>
        </mask>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(987 -100)">
          <use fill="url(#b)" xlinkHref="#a"></use>
          <path
            fill="url(#c)"
            d="M92.13 502.145c.007-.387.002-.774.008-1.161-.01.387-.01.775-.007 1.161zm362.012-105.044c59.24 91.223 33.299 213.208-57.943 272.461-91.242 59.254-213.233 33.337-272.474-57.886-21.125-32.53-31.41-68.971-31.773-105.085l-.006 2.863c-.03 1.21.075 2.407.116 3.597l.16 3.54c.055 1.17.11 2.332.162 3.483l.32 3.414c.225 2.255.388 4.48.65 6.65l.91 6.38c.16 1.04.265 2.081.47 3.093.194 1.015.388 2.019.579 3.012l1.124 5.839 1.349 5.524.652 2.667.325 1.307.38 1.275 1.463 4.932c.477 1.599.905 3.165 1.458 4.638 1.054 2.963 1.98 5.77 2.95 8.344l2.856 7.081c.22.54.423 1.075.646 1.586l.681 1.483 1.256 2.745 2.078 4.588 1.633 3.262c.866 1.755 1.272 2.666 1.181 2.664-.09-.002-.675-.92-1.718-2.69-.511-.89-1.183-1.97-1.88-3.299l-2.334-4.638c-1.84-3.46-3.673-7.91-5.903-13.081l-3.151-8.487c-1.033-3.046-2.007-6.318-3.096-9.75-.484-1.735-.927-3.528-1.407-5.358l-.717-2.78-.364-1.415c-.118-.475-.204-.96-.307-1.444-.396-1.94-.8-3.922-1.215-5.945-.19-1.015-.45-2.028-.587-3.074-.16-1.042-.319-2.094-.481-3.156-1.434-8.48-2.148-17.737-2.35-27.582.005-2.463-.045-4.963.004-7.498l.346-7.705c.031-1.329.197-2.656.313-3.997l.377-4.043.215-2.278c.063-.76.203-1.508.3-2.261.219-1.502.435-2.998.65-4.48 1.835-11.9 132.26-29.145 135.774-39.508.443-1.257-126.59 3.46-126.07 1.986l.806-2.295.974-2.427c.674-1.675 1.392-3.465 2.16-5.377.365-.963.808-1.93 1.266-2.925l1.399-3.088c3.991-8.689 9.635-20.035 19.405-33.71l1.868-2.623c.624-.894 1.347-1.733 2.03-2.618l4.246-5.337c1.502-1.743 3.052-3.466 4.575-5.193.77-.857 1.517-1.729 2.296-2.56l2.382-2.42c1.612-1.617 3.18-3.272 4.824-4.841l5.02-4.591c1.637-1.562 3.404-2.967 5.135-4.4l2.597-2.145c.87-.705 1.706-1.45 2.617-2.096 3.663-2.683 7.004-5.368 10.786-7.805l2.832-1.915c.967-.637 1.913-1.344 2.96-1.946l6.524-3.964c8.894-5.126 18.47-9.833 28.701-13.824l7.782-2.79c1.295-.5 2.647-.849 3.98-1.27l4.027-1.221c2.404-.788 4.938-1.358 7.512-2.024l3.913-.995c1.324-.315 2.68-.558 4.042-.847 10.91-2.302 23-3.941 36.22-4.183 12.738-.202 27.91 84.73 40.253 86.898 12.338 2.183-6.612-211.634 34.43-73.532 41.041 138.101 23.998 10.782 34.793 17.665 4.45 2.83 8.793 5.859 13.026 9.061.863.647 1.714 1.311 2.567 1.973.186.146.376.285.56.431 16.754 13.09 31.662 29.13 43.89 47.96z"
            mask="url(#d)"
          ></path>
          <path
            fill="url(#e)"
            d="M262.13 110.145c.007-.387.002-.774.008-1.161-.01.387-.01.775-.007 1.161zM624.143 5.101c59.24 91.223 33.299 213.208-57.943 272.461-91.242 59.254-171.27-180.903-272.474-57.886-25.032 30.426-31.41-68.971-31.773-105.085l-.006 2.863c-.03 1.21.075 2.407.116 3.597l.16 3.54c.055 1.17.11 2.332.162 3.483l.32 3.414c.225 2.255.388 4.48.65 6.65l.91 6.38c.16 1.04.265 2.081.47 3.093.194 1.015.388 2.019.579 3.012l1.124 5.839 1.349 5.524.652 2.667.325 1.307.38 1.275 1.463 4.932c.477 1.599.905 3.165 1.458 4.638 1.054 2.963 1.98 5.77 2.95 8.344l2.856 7.081c.22.54.423 1.075.646 1.586l.681 1.483 1.256 2.745 2.078 4.588 1.633 3.262c.866 1.755 1.272 2.666 1.181 2.664-.09-.002-.675-.92-1.718-2.69-.511-.89-1.183-1.97-1.88-3.299l-2.334-4.638c-1.84-3.46-3.673-7.91-5.903-13.081l-3.151-8.487c-1.033-3.046-2.007-6.318-3.096-9.75-.484-1.735-.927-3.528-1.407-5.358l-.717-2.78-.364-1.415c-.118-.475-.204-.96-.307-1.444-.396-1.94-.8-3.922-1.215-5.945-.19-1.015-.45-2.028-.587-3.074-.16-1.042-.319-2.094-.481-3.156-1.434-8.48-2.148-17.737-2.35-27.582.005-2.463-.045-4.963.004-7.498l.346-7.705c.031-1.329.197-2.656.313-3.997l.377-4.043.215-2.278c.063-.76.203-1.508.3-2.261.219-1.502.435-2.998.65-4.48 1.835-11.9 132.26-29.145 135.774-39.508.443-1.257-126.59 3.46-126.07 1.986l.806-2.295.974-2.427c.674-1.675 1.392-3.465 2.16-5.377.365-.963.808-1.93 1.266-2.925l1.399-3.088c3.991-8.689 9.635-20.035 19.405-33.71l1.868-2.623c.624-.894 1.347-1.733 2.03-2.618l4.246-5.337c1.502-1.743 3.052-3.466 4.575-5.193.77-.857 1.517-1.729 2.296-2.56l2.382-2.42c1.612-1.617 3.18-3.272 4.824-4.841l5.02-4.591c1.637-1.562 3.404-2.967 5.135-4.4l2.597-2.145c.87-.705 1.706-1.45 2.617-2.096 3.663-2.683 7.004-5.368 10.786-7.805l2.832-1.915c.967-.637 1.913-1.344 2.96-1.946l6.524-3.964c8.894-5.126 18.47-9.833 28.701-13.824l7.782-2.79c1.295-.5 2.647-.849 3.98-1.27l4.027-1.221c2.404-.788 4.938-1.358 7.512-2.024l3.913-.995c1.324-.315 2.68-.558 4.042-.847 10.91-2.302 23-3.941 36.22-4.183 12.738-.202 27.91 84.73 40.253 86.898 12.338 2.183-6.612-211.634 34.43-73.532 41.041 138.101 23.998 10.782 34.793 17.665 4.45 2.83 8.793 5.859 13.026 9.061.863.647 1.714 1.311 2.567 1.973.186.146.376.285.56.431 16.754 13.09 31.662 29.13 43.89 47.96z"
            mask="url(#d)"
          ></path>
        </g>
        <path
          fill="url(#f)"
          d="M188.877 440.97l6.597 3.559c3.442 1.852 2.752 2.495-.498.802l-3.753-1.954c-1.241-.667-2.524-1.262-3.723-2.004l-7.291-4.27c-2.38-1.502-4.717-3.073-7.078-4.607l-1.764-1.162-1.705-1.245-3.414-2.49a195.8 195.8 0 01-25.35-22.461c-15.684-16.585-28.229-36.534-37.27-57.516-9.123-21.006-14.455-43.565-15.86-66.533-.694-11.477-.533-22.95.617-34.36 1.217-11.4 3.412-22.724 6.7-33.833 1.344-4.897 3.183-9.65 4.92-14.442 2.005-4.685 3.882-9.438 6.227-13.972l1.683-3.435c.287-.57.546-1.152.857-1.709l.925-1.673 3.694-6.688c1.302-2.185 2.66-4.336 3.979-6.505l.994-1.623c.327-.544.659-1.084 1.025-1.602l2.132-3.146 2.126-3.152c.357-.522.698-1.056 1.068-1.57l1.135-1.522 4.53-6.093c1.579-1.975 3.2-3.916 4.799-5.876 1.564-1.992 3.299-3.833 4.993-5.713 3.323-3.822 6.988-7.32 10.586-10.888l5.658-5.082 1.421-1.267 1.48-1.197 2.968-2.39c15.864-12.724 33.723-22.968 52.688-30.343 9.516-3.61 19.306-6.455 29.24-8.597 9.957-2.065 20.051-3.342 30.182-4.036l7.607-.378 7.618-.02 1.904-.002c.636.001 1.27.05 1.903.074l3.805.176 3.805.178c1.268.07 2.529.227 3.794.337l3.792.363c1.262.135 2.531.207 3.785.419l7.538 1.103c1.26.156 2.498.45 3.746.684l3.736.74c1.244.257 2.495.477 3.731.764l3.694.928 3.695.928 1.848.462 1.824.55 7.304 2.198c2.413.8 4.8 1.686 7.203 2.525 1.193.441 2.413.814 3.585 1.312l3.531 1.452 3.531 1.454 1.763.733 1.727.814 6.9 3.27c2.271 1.144 4.488 2.394 6.73 3.592 1.113.614 2.244 1.194 3.339 1.838l3.25 1.99 3.239 1.996 1.614 1.001c.536.337 1.046.715 1.569 1.07l6.217 4.345.773.545.747.582 1.493 1.166 2.979 2.333c.985.785 1.993 1.542 2.96 2.35l2.852 2.481 2.85 2.48 1.423 1.24 1.367 1.304 5.455 5.228c1.772 1.79 3.482 3.645 5.234 5.46l1.308 1.368.653.685.622.714 2.495 2.855c3.408 3.737 6.48 7.765 9.624 11.73l4.449 6.155c.366.516.752 1.02 1.101 1.547l3.113 4.772 2.069 3.185 1.919 3.278 1.916 3.279.957 1.639.879 1.683 3.5 6.734 3.167 6.891a210.407 210.407 0 0110.259 29.105 214.535 214.535 0 015.596 30.32l.729 7.69.389 7.731c.028.645.074 1.29.09 1.935l.007 1.938.016 3.876c0 1.292.02 2.586.006 3.878l-.171 3.875-.173 3.875c-.033.645-.048 1.292-.097 1.936l-.181 1.93-.743 7.715-1.13 7.655-.288 1.91-.381 1.893-.769 3.78c-2.13 10.037-4.914 19.949-8.656 29.489-.46 1.195-.86 2.412-1.367 3.588l-1.516 3.528-1.516 3.524-.764 1.76-.846 1.721-3.383 6.88c-1.193 2.26-2.47 4.474-3.7 6.71-5.086 8.813-10.655 17.155-17.023 24.834-.788.966-1.524 1.971-2.354 2.902l-2.47 2.805-2.472 2.805c-.415.465-.816.942-1.243 1.397l-1.304 1.343-5.222 5.387-5.487 5.173c-1.746 1.722-3.663 3.265-5.517 4.88l-2.799 2.407-.7.601-.727.569-1.458 1.136c-1.95 1.507-3.87 3.056-5.845 4.532l-6.043 4.27c-75.493-36.928-16.692 10.506-25.479 14.72-8.855 4.167-18.024 7.805-27.404 10.8a198.224 198.224 0 01-16.165 4.258c-43.415 10.031-90.463 5.433-133.273-16.38-96.643-49.241-135.069-167.505-85.827-264.148 8.997-17.658 20.307-33.362 33.36-46.953.384-.416.76-.841 1.159-1.245l1.344-1.322.537-.527c.757-.754 1.517-1.503 2.285-2.243l2.564-2.514 2.82-2.506 2.818-2.508 1.41-1.255c.48-.405.977-.792 1.465-1.19l5.875-4.737 6.093-4.458c8.232-5.79 33.488 57.07 42.502 52.566 9.045-4.435 1.828-76.232 11.445-79.241l7.257-2.11c.65-.166 1.301-.32 1.952-.48a196.908 196.908 0 0142.092-6.367c2.717-.143 5.437-.241 8.16-.21 10.053-.046 20.137.568 30.08 2.192l1.869.272c.623.086 1.246.18 1.862.314l3.706.733c2.467.507 4.953.926 7.384 1.599 2.44.623 4.887 1.225 7.321 1.87l7.222 2.227 1.805.556c.596.204 1.184.429 1.777.64l3.549 1.294 3.549 1.291c1.182.433 2.326.963 3.49 1.439.392.168.786.332 1.18.497.386.16.772.323 1.158.486 1.544.643 3.087 1.284 4.608 1.974l2.505 1.197c.936.439 1.87.885 2.802 1.34l1.502.718 1.69.806 1.649.888 3.3 1.77 3.301 1.766c1.107.58 2.15 1.268 3.229 1.895 2.134 1.292 4.296 2.543 6.413 3.867l6.228 4.159 1.558 1.04 1.505 1.115 3.007 2.235 3.007 2.238c.996.754 1.935 1.58 2.906 2.367l2.887 2.391 1.444 1.197.72.6.691.635 5.516 5.087c7.181 6.973 13.798 14.527 19.832 22.514 5.934 8.067 11.283 16.537 16.097 25.287l3.492 6.627c1.104 2.239 2.142 4.51 3.222 6.76 1.12 2.235 2.019 4.566 3 6.862l1.453 3.454c.485 1.151.873 2.34 1.315 3.507l1.288 3.52c.42 1.177.888 2.339 1.234 3.54l2.226 7.164c.695 2.402 1.264 4.839 1.895 7.26.666 2.416 1.116 4.88 1.606 7.335l.725 3.685.18.922.135.93.27 1.858.453 3.165a186.4 186.4 0 00-4.467-23.665 203.963 203.963 0 00-9.937-28.419l-3.17-6.845c-.503-1.153-1.132-2.244-1.7-3.365l-1.744-3.342c-.595-1.107-1.13-2.245-1.773-3.324l-1.896-3.255c-1.273-2.163-2.478-4.367-3.883-6.445-5.269-8.54-11.305-16.564-17.792-24.191l-2.459-2.843-1.23-1.422-1.294-1.363-5.201-5.434c-1.794-1.753-3.64-3.454-5.464-5.18-1.794-1.762-3.746-3.347-5.662-4.976-3.776-3.33-7.872-6.275-11.888-9.317l-6.256-4.249-1.565-1.06c-.525-.35-1.074-.66-1.61-.992l-3.234-1.962-3.233-1.96a23.257 23.257 0 00-1.642-.936l-1.664-.898c-2.221-1.191-4.43-2.406-6.658-3.578-4.557-2.151-9.048-4.436-13.73-6.284-4.6-2.051-9.388-3.631-14.121-5.344l-7.229-2.194-1.808-.548c-.605-.173-1.22-.31-1.83-.467l-3.665-.913-3.666-.912c-1.222-.301-2.467-.502-3.7-.758l-3.706-.73-1.853-.364-.926-.18-.934-.137-7.473-1.093c-1.241-.21-2.499-.29-3.75-.422l-3.757-.366c-1.253-.112-2.504-.267-3.76-.34l-3.773-.175-3.773-.17c-.629-.02-1.257-.07-1.887-.068l-1.888.01-7.553.053-7.54.417a218.728 218.728 0 00-29.847 4.321 211.437 211.437 0 00-28.813 8.734l-6.978 2.837c-2.296 1.014-4.56 2.1-6.843 3.147-2.3 1.008-4.494 2.237-6.727 3.386l-3.337 1.747c-1.114.58-2.176 1.254-3.267 1.877l-3.256 1.9c-1.08.643-2.192 1.233-3.234 1.938l-6.352 4.073c-.537.33-1.056.686-1.565 1.055l-1.54 1.09-3.086 2.177-1.544 1.089c-.518.358-1.029.726-1.519 1.122l-2.98 2.323c-4.037 3.022-7.787 6.397-11.582 9.714l-5.448 5.243c-.45.441-.912.87-1.35 1.322l-1.29 1.382-2.57 2.77c-6.784 7.441-12.974 15.399-18.335 23.876-.683 1.051-1.386 2.088-2.051 3.149l-1.904 3.242-1.905 3.24c-.638 1.077-1.284 2.15-1.844 3.272-1.17 2.215-2.338 4.432-3.508 6.649-.613 1.094-1.107 2.248-1.651 3.378l-1.61 3.4-1.62 3.398-1.457 3.473-1.46 3.474c-.479 1.16-1.007 2.303-1.411 3.494l-2.592 7.085c-.46 1.173-.797 2.385-1.18 3.584l-1.12 3.604c-2.879 9.636-5.212 19.476-6.427 29.456-.41 2.48-.587 4.988-.826 7.487-.228 2.5-.499 4.997-.554 7.509-.092 2.508-.246 5.015-.284 7.523l.052 7.528c.291 10.03-29.485 138.072-27.798 147.965 1.792 9.875 160.07-235.21 163.256-225.706l-122.451 143.85 2.85 6.956.714 1.738c.248.575.526 1.138.787 1.706l3.182 6.81c.56 1.12 1.16 2.221 1.739 3.332l1.752 3.324c.58 1.11 1.16 2.22 1.818 3.286l3.83 6.459c2.74 4.185 5.42 8.413 8.46 12.388l2.22 3.021c.726 1.018 1.559 1.955 2.333 2.935l2.363 2.911 1.18 1.456c.389.49.789.97 1.214 1.428l5 5.591c.811.951 1.715 1.818 2.587 2.715l2.63 2.675c.882.886 1.74 1.797 2.641 2.663l2.759 2.542 2.76 2.54 1.38 1.27 1.44 1.199 5.766 4.796c1.977 1.53 3.993 3.008 5.986 4.514 1.969 1.543 4.068 2.903 6.137 4.303 2.083 1.38 4.108 2.85 6.278 4.093l6.416 3.876z"
          transform="translate(732.54 -245.556)"
        ></path>
        <path
          fill="#00c7fa"
          d="M1216.802 163.535c.63-.426 1.296-.805 2.013-1.116.722-.29 1.497-.49 2.287-.529.103-.006.106.342.01.355-.754.075-1.499.19-2.219.415-.71.243-1.396.576-1.959 1.066-.878.767-1.364 1.8-1.714 2.795a6.988 6.988 0 015.962-3.344 7 7 0 11-3.338 13.154c.412.372.89.688 1.42.882 1.325.485 2.797.58 4.27.328 1.494-.281 2.793-1.16 3.994-2.182.604-.526 1.052-1.215 1.397-1.946.33-.743.547-1.525.754-2.326.023-.092.295-.065.277.036-.149.832-.279 1.666-.525 2.498-.262.818-.63 1.631-1.195 2.298-1.117 1.308-2.504 2.526-4.233 2.996a9.058 9.058 0 01-5.132-.162c-1.63-.527-3.05-1.536-4.12-2.798-1.074-1.24-1.854-2.78-2.072-4.42-.24-1.646.234-3.275.876-4.715.672-1.483 2.013-2.454 3.247-3.285zm13.097 5.157c-.179-.625-.117-1.302-.115-2.048-.008-.731-.099-1.524-.52-2.12-.356-.501-.955-.847-1.506-1.158-.559-.316-1.063-.603-1.376-1.162-.108-.177.774-1.2.934-1.036a14.821 14.821 0 012.397 3.424c.652 1.276.647 2.689.897 3.959.005.028-.704.165-.71.14zm6.324-2.702c.849 3.11.486 6.356-.64 9.27-1.093 2.904-2.881 5.653-5.513 7.367-2.626 1.72-5.838 2.226-8.748 2.082a15.305 15.305 0 01-4.305-.842 14.243 14.243 0 01-3.8-2.082c-2.26-1.774-3.68-4.283-4.566-6.833-.467-1.281-.653-2.653-.65-3.983-.011-1.332.193-2.646.508-3.932.31-1.305.689-2.62 1.28-3.871.585-1.247 1.374-2.451 2.452-3.357 2.134-1.838 4.864-2.893 7.64-3.258.078-.008.126.434.052.44-2.001.238-4.258.436-6.012 1.69-1.744 1.247-2.815 3.11-3.72 4.864-.934 1.804-.92 3.879-.973 5.705-.101 2.457.463 4.988 1.742 7.104.629 1.058 1.239 2.157 2.054 3.174.804 1.012 1.8 1.96 3.017 2.548 1.215.582 2.543.92 3.88 1.068 1.337.13 2.677.073 4.033-.105 1.356-.188 2.656-.731 3.832-1.43 1.187-.696 2.233-1.575 3.25-2.496 1.01-.915 2.007-1.923 2.804-3.131.795-1.196 1.43-2.58 1.63-4.05.429-2.915-.21-5.961-1.557-8.612a13.938 13.938 0 00-5.642-5.811c-1.04-.568-2.286-.798-3.474-.915-1.195-.145-2.321-.176-3.43-.57-.362-.126-.145-1.108.255-1.018 1.518.325 3.019.665 4.5 1.13 1.479.46 2.933 1.102 4.19 2.004 1.335.95 2.574 2.053 3.61 3.367 1.028 1.313 1.848 2.836 2.3 4.483z"
        ></path>
        <path
          fill="#fff"
          d="M1288.656 397.044c.4-.27.822-.511 1.276-.709.458-.184.95-.31 1.451-.335.065-.004.067.217.006.225-.478.048-.95.121-1.407.263-.45.155-.886.366-1.243.678-.557.487-.865 1.143-1.087 1.775a4.432 4.432 0 013.782-2.124c2.452 0 4.44 1.99 4.44 4.446a4.443 4.443 0 01-6.558 3.908c.262.237.564.437.901.56.84.309 1.774.369 2.709.209.947-.179 1.771-.736 2.533-1.386.383-.333.668-.771.886-1.235.21-.472.347-.969.479-1.478.014-.059.187-.042.175.023-.094.528-.177 1.058-.333 1.586-.166.52-.4 1.037-.758 1.46-.708.831-1.588 1.605-2.685 1.903a5.739 5.739 0 01-3.255-.103 5.79 5.79 0 01-2.613-1.777c-.682-.788-1.177-1.766-1.315-2.808-.152-1.045.149-2.08.556-2.994.426-.942 1.277-1.559 2.06-2.087zm8.84 2.954c-.126-.414-.082-.863-.08-1.357-.007-.485-.07-1.01-.37-1.405-.251-.332-.675-.561-1.065-.768-.396-.209-.753-.4-.975-.77-.076-.117.548-.795.662-.686a9.863 9.863 0 011.697 2.269c.462.846.458 1.782.635 2.624.004.018-.498.109-.503.093zm4.194-1.605c.563 2.092.322 4.275-.423 6.236-.724 1.953-1.908 3.802-3.651 4.955-1.74 1.158-3.867 1.497-5.794 1.4a9.998 9.998 0 01-2.85-.566 9.39 9.39 0 01-2.517-1.4c-1.496-1.194-2.437-2.882-3.024-4.597-.31-.862-.433-1.785-.43-2.68-.008-.895.127-1.78.336-2.644.206-.878.456-1.762.847-2.604.388-.839.91-1.649 1.624-2.258 1.413-1.237 3.221-1.946 5.06-2.192.051-.005.083.292.034.297-1.325.16-2.82.292-3.981 1.136-1.155.839-1.864 2.093-2.463 3.272-.62 1.213-.61 2.61-.645 3.837-.067 1.653.306 3.356 1.154 4.78.416.71.82 1.45 1.36 2.134.532.681 1.192 1.319 1.998 1.714.804.392 1.684.62 2.57.719.885.088 1.772.049 2.67-.071.898-.126 1.76-.492 2.538-.961.786-.47 1.479-1.06 2.153-1.68.669-.615 1.328-1.293 1.856-2.106.527-.805.948-1.736 1.08-2.724.284-1.961-.139-4.01-1.031-5.793a9.31 9.31 0 00-3.737-3.91c-.689-.381-1.514-.536-2.3-.615-.792-.097-1.538-.118-2.272-.383-.24-.085-.096-.746.169-.685 1.005.219 2 .447 2.98.76.98.31 1.942.741 2.775 1.348.884.64 1.704 1.381 2.391 2.265.68.883 1.223 1.908 1.523 3.016z"
        ></path>
        <path
          fill="#08f"
          d="M923.583 262.724c.135.689.217 1.391.223 2.112-.014.718-.123 1.449-.376 2.133-.03.09-.328-.033-.304-.119.208-.667.378-1.342.447-2.034.05-.691.013-1.394-.2-2.049-.336-1.023-1.04-1.809-1.76-2.465a6.446 6.446 0 01.695 6.271 6.462 6.462 0 01-8.476 3.418 6.463 6.463 0 01-1.507-11.001 4.052 4.052 0 00-1.262.888c-.89.95-1.501 2.166-1.818 3.508-.3 1.37-.021 2.79.416 4.18.228.702.653 1.331 1.15 1.888.513.548 1.1 1.015 1.706 1.48.071.053-.05.274-.13.223-.653-.427-1.316-.839-1.934-1.348-.602-.518-1.161-1.124-1.525-1.845-.71-1.42-1.245-3.038-1.021-4.676a8.347 8.347 0 011.988-4.3c1.036-1.194 2.406-2.037 3.865-2.49 1.442-.464 3.033-.57 4.506-.164 1.486.39 2.7 1.381 3.694 2.446 1.018 1.106 1.36 2.596 1.623 3.944zm-9.322 9.633c.6.07 1.156.37 1.792.642.627.258 1.338.467 2.003.316.559-.127 1.075-.522 1.544-.888.476-.371.907-.705 1.5-.775.19-.03.74 1.108.54 1.188a13.78 13.78 0 01-3.808.841c-1.33.104-2.536-.412-3.712-.655-.026-.006.118-.672.141-.67zm.496 6.091c-3.008-.409-5.688-1.918-7.802-3.965-2.114-2.016-3.84-4.576-4.357-7.487-.527-2.908.217-5.876 1.411-8.344a14.395 14.395 0 012.313-3.42 13.401 13.401 0 013.203-2.526c2.368-1.304 5.066-1.612 7.602-1.44 1.282.066 2.54.41 3.692.902 1.158.48 2.223 1.14 3.222 1.887 1.016.75 2.017 1.56 2.885 2.533.865.966 1.619 2.092 2.008 3.36.809 2.524.72 5.277.015 7.817-.022.07-.423-.051-.401-.118.53-1.82 1.188-3.848.746-5.83-.44-1.969-1.662-3.583-2.849-5.01-1.22-1.475-3.024-2.225-4.587-2.944-2.093-.991-4.495-1.434-6.8-1.105-1.148.156-2.325.28-3.506.612-1.173.324-2.361.839-3.318 1.676-.951.838-1.734 1.864-2.353 2.968-.605 1.11-1.047 2.292-1.392 3.532-.335 1.244-.343 2.57-.17 3.846.168 1.284.545 2.514.97 3.735.421 1.211.929 2.445 1.683 3.58.744 1.129 1.71 2.189 2.91 2.902 2.37 1.445 5.245 2.013 8.04 1.82a13.122 13.122 0 007.111-2.749c.875-.692 1.533-1.687 2.071-2.673.565-.981 1.006-1.945 1.755-2.762.243-.266 1.014.283.79.596-.84 1.196-1.688 2.37-2.635 3.483-.944 1.111-2.034 2.135-3.279 2.893-1.314.806-2.725 1.473-4.246 1.888-1.516.407-3.137.557-4.732.343z"
        ></path>
        <path
          fill="#55fbdc"
          d="M1373.11 547.256c.09.506.142 1.023.14 1.554a4.99 4.99 0 01-.29 1.575c-.024.066-.236-.021-.218-.085.156-.494.284-.992.34-1.503.042-.51.023-1.027-.124-1.507-.231-.75-.73-1.323-1.24-1.8a4.814 4.814 0 01.439 4.614c-1.032 2.432-3.772 3.596-6.121 2.599s-3.415-3.777-2.383-6.21a4.9 4.9 0 011.405-1.881 3.02 3.02 0 00-.915.666c-.648.709-1.099 1.61-1.34 2.602-.227 1.012-.041 2.056.26 3.075.157.515.456.975.808 1.38.364.399.78.738 1.212 1.074.05.039-.04.203-.096.166-.465-.309-.937-.605-1.377-.975-.427-.376-.823-.817-1.077-1.344-.496-1.04-.866-2.227-.69-3.436a6.402 6.402 0 011.47-3.186 6.251 6.251 0 012.8-1.87c1.04-.357 2.183-.45 3.238-.165 1.064.274 1.927.992 2.63 1.767.721.805.953 1.9 1.128 2.89zm-6.788 7.185c.43.047.826.262 1.28.456.449.184.958.331 1.436.214.403-.099.778-.395 1.118-.67.346-.277.658-.527 1.085-.584.137-.024.52.81.377.87a9.855 9.855 0 01-2.744.656c-.957.09-1.817-.28-2.66-.448-.019-.004.091-.496.108-.494zm.298 4.483c-2.157-.273-4.068-1.359-5.566-2.847-1.5-1.465-2.715-3.335-3.06-5.474-.35-2.138.212-4.332 1.094-6.161a11.011 11.011 0 011.694-2.541 10.042 10.042 0 012.324-1.891c1.714-.984 3.655-1.236 5.475-1.134.92.037 1.82.278 2.643.63.828.342 1.586.819 2.297 1.359.723.542 1.434 1.13 2.048 1.839.613.703 1.143 1.526 1.41 2.455.558 1.853.467 3.882-.063 5.76-.016.051-.303-.034-.287-.083.398-1.347.89-2.847.592-4.302-.298-1.447-1.16-2.624-2-3.665-.862-1.074-2.15-1.61-3.266-2.124-1.494-.711-3.215-1.014-4.874-.75-.826.126-1.673.228-2.525.484-.845.25-1.704.64-2.4 1.266-.69.627-1.262 1.39-1.717 2.21a12.74 12.74 0 00-1.034 2.615c-.253.92-.27 1.896-.159 2.834.109.945.368 1.848.661 2.743.291.888.644 1.793 1.175 2.621.524.825 1.208 1.597 2.063 2.11 1.69 1.042 3.749 1.434 5.758 1.265 1.853-.161 3.65-.896 5.135-2.093.635-.518 1.116-1.257 1.512-1.989.416-.728.742-1.443 1.287-2.051.177-.199.726.198.562.431-.615.89-1.235 1.763-1.926 2.591-.688.828-1.481 1.593-2.382 2.163-.952.606-1.972 1.111-3.068 1.431-1.093.314-2.26.44-3.403.298z"
        ></path>
        <path
          fill="#55fbdc"
          d="M1289.173 166.854a6.431 6.431 0 011.044-.58c.375-.15.777-.254 1.187-.274.054-.004.055.177.006.184-.392.039-.778.1-1.152.216-.369.126-.725.299-1.017.554-.455.398-.708.936-.89 1.452a3.626 3.626 0 013.095-1.738 3.635 3.635 0 013.633 3.638 3.635 3.635 0 01-5.366 3.198c.214.193.462.357.737.458.688.252 1.452.302 2.217.17.775-.145 1.45-.602 2.072-1.133.314-.273.546-.631.725-1.01.171-.387.284-.793.392-1.21.012-.048.153-.034.144.019-.078.432-.145.865-.273 1.298-.136.425-.327.848-.62 1.194-.58.68-1.3 1.313-2.197 1.557-.89.232-1.82.197-2.663-.084a4.737 4.737 0 01-2.139-1.454c-.557-.645-.962-1.445-1.075-2.297-.125-.856.121-1.702.455-2.45.348-.771 1.044-1.276 1.685-1.708zm6.491 2.145c-.084-.332-.055-.69-.054-1.086-.004-.388-.047-.808-.246-1.124-.167-.266-.45-.45-.71-.614-.264-.168-.502-.32-.65-.616-.05-.094.366-.637.441-.55a7.95 7.95 0 011.132 1.816c.307.676.305 1.425.423 2.099.002.015-.332.087-.336.075zm4.092-1.085c.443 1.674.254 3.42-.335 4.99-.572 1.561-1.506 3.04-2.882 3.963-1.373.926-3.053 1.198-4.574 1.12a7.802 7.802 0 01-2.25-.453 7.386 7.386 0 01-1.988-1.12c-1.18-.955-1.924-2.305-2.387-3.677-.244-.69-.341-1.428-.34-2.144-.006-.716.101-1.423.266-2.116.162-.702.36-1.409.669-2.083.306-.67.718-1.319 1.282-1.806 1.116-.99 2.543-1.557 3.994-1.753.041-.005.066.233.028.237-1.047.127-2.227.234-3.144.909-.911.67-1.471 1.674-1.944 2.617-.489.971-.481 2.088-.51 3.07-.052 1.323.243 2.685.912 3.823.328.57.647 1.161 1.073 1.708.42.545.942 1.055 1.578 1.372.635.313 1.33.495 2.028.574.7.07 1.4.04 2.109-.056.709-.101 1.389-.394 2.003-.77.621-.374 1.168-.847 1.7-1.343.528-.492 1.049-1.035 1.466-1.685.415-.643.748-1.388.852-2.179.224-1.569-.11-3.208-.814-4.635a7.407 7.407 0 00-2.95-3.127c-.544-.306-1.195-.43-1.816-.492-.625-.078-1.214-.095-1.794-.307-.189-.068-.075-.596.134-.548.793.175 1.578.358 2.352.608.774.248 1.534.593 2.192 1.079a9.216 9.216 0 011.887 1.812 7.01 7.01 0 011.203 2.412z"
          opacity="0.803"
        ></path>
        <path
          fill="url(#g)"
          d="M176.608 104.622c-7.179.388-14.483 1.131-21.184 2.302-2.048.291-3.998.685-5.833 1.098 19.628-9.175 40.377-15.926 61.665-19.922 5.684-.933 11.332-1.998 17.034-2.545l4.26-.496 2.127-.247.358-.025c1.472.17 3.724.444 6.612.721l3.26.325c1.159.116 2.386.21 3.68.42l8.45 1.194 2.307.322c.78.121 1.571.288 2.372.432l4.925.92c1.672.312 3.385.63 5.13.954l4.497 1.054c-34.142-2.342-68.035 2.419-99.66 13.493z"
          transform="rotate(-101 712.438 -52.512)"
        ></path>
        <path
          fill="url(#h)"
          d="M172.881 160.242a264.38 264.38 0 00-13.233-52.019 264.084 264.084 0 00-23.555-48.218c-18.899-30.44-44-56.975-73.333-77.544"
          transform="rotate(-101 617.33 -77.565)"
        ></path>
        <path
          fill="url(#g)"
          d="M55.308 90.604c1.915 1.664 4.05 3.385 6.186 5.367 5.337 4.837 11.09 10.625 16.742 16.91-26.272-21.768-57.068-38.265-90.77-47.866"
          transform="rotate(-101 532.36 -59.968)"
        ></path>
        <path
          fill="url(#i)"
          d="M539.557 245.996c-6.125-4.186-13.676-8.517-22.038-11.924a249.247 249.247 0 00-4.085-1.654c27.777 4.741 54.75 14.068 79.519 27.457.73.64 1.612 1.376 2.64 2.24.998.81 3.317 2.595 6.522 5.07.399.31.813.63 1.241.96l1.279 1.087 2.765 2.353c1.915 1.664 4.049 3.386 6.185 5.367 5.338 4.837 11.09 10.625 16.743 16.91-26.272-21.768-57.068-38.265-90.771-47.866"
          transform="rotate(-101 1071.39 114.224)"
        ></path>
        <path
          fill="url(#j)"
          d="M198.374 13.735c-6.072-2.863-12.292-5.35-18.628-7.356-1.585-.495-3.19-.916-4.78-1.376-.799-.221-1.591-.459-2.39-.665l-2.414-.556-2.408-.554c-.804-.177-1.6-.39-2.412-.517l-4.84-.864-1.24-.22-1.25-.16-2.499-.32c-1.666-.214-3.33-.452-5.007-.55l-5.023-.393-5.036-.148c-.839-.017-1.679-.066-2.518-.054l-2.518.053-2.519.053c-.84.025-1.68.017-2.517.095l-5.027.36-1.257.094-1.252.152-2.501.305-2.503.307c-.837.086-1.659.271-2.489.402l-4.968.867c-3.275.759-6.58 1.407-9.802 2.384-3.261.837-6.43 1.974-9.625 3.033-1.575.593-3.137 1.219-4.705 1.828-1.58.583-3.107 1.293-4.641 1.984-3.1 1.319-6.068 2.908-9.068 4.431-2.915 1.676-5.879 3.274-8.676 5.142-2.872 1.754-5.57 3.764-8.317 5.7-2.638 2.08-5.331 4.095-7.83 6.344-1.272 1.098-2.559 2.179-3.755 3.36-1.213 1.16-2.444 2.304-3.642 3.48l-3.483 3.64-.871.91-.828.95-1.654 1.9-1.653 1.9c-.547.638-1.048 1.312-1.575 1.966-1.031 1.325-2.103 2.62-3.1 3.97l-2.932 4.099c-.502.674-.956 1.38-1.409 2.088l-1.367 2.117-1.346 2.087c-.428.708-.833 1.43-1.251 2.146-.818 1.44-1.684 2.854-2.46 4.319l-2.271 4.422c-.187.37-.385.735-.56 1.11l-.515 1.132-1.026 2.266-1.024 2.267c-.335.758-.617 1.539-.928 2.307-.601 1.546-1.233 3.08-1.805 4.636l-1.593 4.714L6.27 96.5c-.129.393-.231.796-.347 1.194l-.678 2.393c-.975 3.173-1.624 6.428-2.387 9.653l-.881 4.893c-.137.817-.31 1.628-.416 2.45l-.315 2.464-.314 2.464c-.103.82-.223 1.64-.27 2.467l-.383 4.949-.092 1.237-.034 1.24-.069 2.479c-.037 1.652-.127 3.304-.057 4.956l.104 4.952c.069 1.648.218 3.293.322 4.939l.173 2.467.289 2.456c.203 1.636.373 3.277.604 4.908.567 3.246 1.036 6.512 1.817 9.716.645 3.235 1.579 6.398 2.444 9.58.472 1.58 1.015 3.138 1.52 4.708.262.783.507 1.571.782 2.349l.886 2.31.89 2.312c.299.77.579 1.548.929 2.297l2.006 4.533c.321.763.705 1.496 1.076 2.235l1.116 2.218 1.12 2.216c.393.729.813 1.444 1.218 2.166.829 1.434 1.616 2.896 2.485 4.309l2.676 4.2a143.644 143.644 0 0013.03 16.719 145.467 145.467 0 0015.54 14.499l4.205 3.263 4.351 3.063 1.09.762 1.123.714 2.246 1.425 2.247 1.423 2.31 1.316 2.311 1.316 1.156.657 1.183.604 4.739 2.407c3.23 1.453 6.432 2.962 9.751 4.192 6.58 2.562 13.365 4.686 20.306 6.148.866.189 1.725.41 2.596.573l2.62.461 2.62.46 1.31.226 1.32.165 5.28.656c1.767.16 3.537.27 5.303.406.886.05 1.768.16 2.654.163l2.657.063 2.657.063c.442.007.885.027 1.327.024l1.328-.034 5.308-.138c1.766-.097 3.529-.256 5.293-.381.88-.078 1.765-.108 2.64-.226l2.63-.328 2.63-.329c.437-.058.876-.101 1.312-.171l1.304-.228 5.21-.91 5.156-1.149a52.12 52.12 0 001.803-.431 51.027 51.027 0 001.427-.454c.823-.277 1.378-.497 1.603-.626.45-.258-.416-.153-3.09.578l-4.917 1.099c-.823.17-1.636.39-2.467.521l-2.489.427-2.49.428-1.245.214-1.255.156a11513 11513 0 00-5.024.613c-.836.121-1.682.144-2.524.216l-2.527.183-2.528.182-2.536.063c-1.69.03-3.381.096-5.073.096l-5.076-.138c-6.758-.331-13.526-.965-20.168-2.298-6.642-1.283-13.22-2.942-19.564-5.225-6.343-2.236-12.566-4.845-18.491-8.02-5.936-3.144-11.707-6.622-17.096-10.626-10.861-7.886-20.515-17.387-28.602-28.04-7.868-10.394-14.324-21.906-18.96-34.115-.293-.761-.605-1.516-.881-2.284l-.779-2.32-.778-2.32c-.257-.775-.533-1.543-.738-2.334l-1.322-4.71a32.56 32.56 0 01-.593-2.372l-.542-2.384-.54-2.383c-.189-.792-.295-1.602-.445-2.402l-.838-4.81-.593-4.843c-.09-.808-.215-1.612-.275-2.422l-.172-2.43c-.563-6.474-.455-12.969-.083-19.421l.41-4.833c.053-.807.17-1.607.282-2.408l.327-2.401.328-2.4c.095-.803.284-1.59.421-2.386l.898-4.761 1.127-4.712c.197-.782.362-1.573.584-2.35l.684-2.323.683-2.324c.229-.774.443-1.553.724-2.311l1.594-4.577c.25-.768.557-1.516.863-2.264l.908-2.249.906-2.249c.306-.748.669-1.472 1-2.21.682-1.467 1.342-2.945 2.043-4.404l2.241-4.313c.732-1.49 1.622-2.896 2.44-4.34l1.251-2.156c.403-.728.888-1.405 1.327-2.11.907-1.393 1.789-2.804 2.713-4.186l2.897-4.066.724-1.017.77-.982 1.543-1.964 1.543-1.966c.521-.65 1.083-1.265 1.622-1.9 1.1-1.251 2.157-2.54 3.29-3.763l3.445-3.625c4.708-4.721 9.694-9.176 15.014-13.202 5.349-3.984 10.944-7.632 16.786-10.83 5.875-3.13 11.94-5.897 18.18-8.207 6.27-2.226 12.667-4.094 19.182-5.45 1.626-.35 3.273-.593 4.909-.895l2.457-.431 2.475-.31c1.652-.192 3.298-.44 4.954-.587l4.977-.368c6.64-.323 13.313-.373 19.946.266 6.883.607 13.76 1.644 20.483 3.375.842.21 1.694.38 2.527.624l2.5.728c1.66.505 3.347.926 4.977 1.534l4.922 1.713 4.837 1.953c6.396 2.728 12.614 5.888 18.56 9.52a150.823 150.823 0 0116.931 12.232l3.957 3.435c1.285 1.182 2.533 2.402 3.803 3.6 1.291 1.175 2.456 2.477 3.674 3.726l1.81 1.888c.593.638 1.151 1.308 1.73 1.96l1.718 1.969c.576.654 1.154 1.306 1.683 1.998l3.249 4.09c2.044 2.815 4.127 5.605 5.968 8.554 3.76 5.838 7.161 11.913 9.937 18.253.757 1.557 1.374 3.173 2.022 4.775.64 1.604 1.317 3.194 1.846 4.837.556 1.633 1.142 3.255 1.671 4.895l1.437 4.96c.381 1.225.625 2.358.895 3.346.262.99.505 1.848.722 2.565.22.718.413 1.294.576 1.723.146.432.263.715.356.838.175.25.27-.144.16-1.232-.132-1.084-.452-2.867-1.005-5.413a132.4 132.4 0 00-14.678-36.518c-.803-1.476-1.742-2.872-2.642-4.296-.911-1.416-1.788-2.857-2.792-4.215-.98-1.374-1.947-2.76-2.94-4.127l-3.134-3.992-.784-.999-.828-.962-1.662-1.92-1.663-1.92c-.56-.634-1.162-1.232-1.741-1.85-1.178-1.216-2.315-2.472-3.527-3.652l-3.672-3.501c-4.993-4.534-10.271-8.77-15.85-12.569-5.61-3.749-11.448-7.136-17.485-10.079"
          transform="translate(715 -54)"
        ></path>
        <path
          fill="url(#k)"
          d="M150.24 297.754l-.344-4.71c-.155-1.564-.5-3.109-.759-4.657-.148-.772-.266-1.549-.446-2.312l-.636-2.27-.65-2.262-.329-1.128-.42-1.099-1.723-4.37c-1.382-2.804-2.7-5.644-4.439-8.242-3.306-5.295-7.037-10.407-11.647-14.749-.572-.544-1.098-1.145-1.716-1.638l-1.834-1.509c-1.237-.992-2.447-2.032-3.812-2.849-1.34-.852-2.672-1.729-4.065-2.492-1.428-.7-2.873-1.37-4.33-2-.76-.329-.683-.13.086.237 1.274.61 2.532 1.246 3.773 1.901 1.241.656 2.373 1.501 3.54 2.266l1.722 1.19c.575.39 1.083.876 1.623 1.313l3.151 2.712c.981.977 1.93 1.983 2.885 2.973.472.5.96.983 1.415 1.496l1.303 1.6c.854 1.075 1.762 2.1 2.577 3.2l2.384 3.351c3.03 4.496 5.725 9.287 7.523 14.448 1.053 2.526 1.636 5.203 2.34 7.84.313 1.326.464 2.685.688 4.03.204 1.346.437 2.69.454 4.053l.178 4.213c.017 1.403-.13 2.806-.2 4.206l-.144 2.1c-.037.7-.2 1.39-.298 2.083l-.705 4.15c-.324 1.363-.717 2.712-1.082 4.065l-.57 2.023-.742 1.966c-.512 1.304-.966 2.632-1.539 3.907l-1.856 3.765c-2.675 4.891-5.699 9.671-9.556 13.767-.469.522-.919 1.064-1.407 1.568l-1.529 1.451c-1.038.946-2.016 1.966-3.125 2.831l-3.356 2.558c-.552.44-1.144.817-1.75 1.175l-1.805 1.092c-2.36 1.535-4.993 2.575-7.532 3.751-1.32.474-2.653.917-3.98 1.361-.668.211-1.322.462-2 .633l-2.045.473c-5.423 1.411-11.029 1.733-16.563 1.727l-4.157-.226-1.039-.059c-.345-.036-.688-.097-1.033-.145l-2.062-.308c-2.77-.315-5.455-1.077-8.155-1.763-1.345-.363-2.635-.902-3.952-1.355l-1.963-.718c-.647-.26-1.265-.582-1.898-.873-1.255-.604-2.52-1.19-3.756-1.83l-3.567-2.17c-4.625-3.07-9.005-6.586-12.64-10.806l-1.404-1.542-1.267-1.659c-.827-1.118-1.708-2.2-2.475-3.36-1.46-2.37-2.987-4.708-4.112-7.268-1.307-2.473-2.14-5.152-3.059-7.784-.399-1.336-.68-2.707-1.012-4.059l-.47-2.035-.287-2.068c-.178-1.379-.376-2.756-.524-4.134l-.15-4.15c-.016-.692-.07-1.383-.05-2.073l.108-2.07c.086-1.379.115-2.762.244-4.136a66.948 66.948 0 014.416-17.83l1.905-4.217c.71-1.366 1.51-2.689 2.276-4.03.73-1.37 1.686-2.588 2.577-3.854l1.366-1.88c.46-.623 1.004-1.178 1.507-1.768.882-.992 1.764-1.994 2.68-2.966l2.954-2.718c.504-.44.976-.92 1.508-1.329l1.6-1.22c1.078-.796 2.111-1.658 3.226-2.396 2.27-1.418 4.461-2.96 6.841-4.144 1.177-.61 2.304-1.328 3.506-1.87l3.574-1.679c.816-.393.198-.685-.64-.3-1.17.535-2.346 1.051-3.53 1.552-1.16.55-2.295 1.168-3.455 1.732-2.358 1.065-4.529 2.486-6.8 3.763-4.352 2.822-8.644 5.953-12.116 9.877-1.92 1.94-3.477 4.194-5.078 6.401-.789 1.112-1.422 2.331-2.125 3.5-.684 1.181-1.384 2.351-1.912 3.614l-1.68 3.728c-.51 1.261-.91 2.567-1.362 3.848l-.654 1.93c-.217.641-.34 1.312-.512 1.967l-.962 3.946c-.279 1.385-.45 2.79-.675 4.184l-.315 2.094c-.08.7-.097 1.405-.148 2.108l-.24 4.221c.012 1.408.086 2.817.135 4.227l.09 2.116c.065.702.178 1.401.267 2.103l.6 4.207 1.004 4.137c.181.687.33 1.384.545 2.06l.712 2.011c1.771 5.416 4.606 10.43 7.852 15.068l2.58 3.385c.908 1.088 1.898 2.107 2.85 3.156l1.45 1.552 1.57 1.43c1.06.938 2.073 1.93 3.18 2.811 2.261 1.71 4.484 3.478 6.958 4.881 2.368 1.573 4.97 2.731 7.52 3.982 1.298.57 2.647 1.03 3.973 1.538l2.002.74c.68.2 1.37.377 2.055.564 1.375.362 2.75.744 4.133 1.07l4.213.685c.704.098 1.404.248 2.112.3l2.125.14c1.417.076 2.834.205 4.252.222l4.261-.143c.71-.042 1.424-.022 2.13-.12l2.12-.278c5.681-.595 11.225-2.27 16.52-4.455l3.873-1.813c1.285-.618 2.478-1.406 3.72-2.113l1.84-1.097c.607-.375 1.166-.82 1.751-1.229 1.157-.84 2.318-1.676 3.457-2.54 2.127-1.905 4.377-3.7 6.26-5.87l1.46-1.577c.492-.522.974-1.053 1.396-1.634l2.612-3.422c.451-.56.82-1.177 1.198-1.788l1.125-1.84 1.105-1.854c.375-.613.642-1.286.964-1.929l1.812-3.917c.496-1.349.96-2.71 1.425-4.07.223-.683.477-1.355.667-2.046l.502-2.094c.314-1.399.688-2.784.927-4.192.358-2.836.876-5.65.881-8.497l.083-2.366.033-1.182c0-.393-.04-.787-.06-1.18"
          transform="translate(715 -54)"
        ></path>
      </g>
    </svg>
  );
}

export default BgLeaves;