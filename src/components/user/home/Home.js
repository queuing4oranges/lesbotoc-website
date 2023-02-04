import React from "react";
import { Link } from "react-router-dom";
import Footer from "../includes/Footer";
import books from "../../../assets/book-club.jpg";
import bowling from "../../../assets/bowling.jpg";
import camp from "../../../assets/camp.jpg";
import deskovky from "../../../assets/deskovky.jpg";
import music from "../../../assets/music-quiz.jpg";
import dating from "../../../assets/speed-dating.jpg";
import svarak from "../../../assets/svarak.jpg";

export default function Home() {
  const resetTitle = () => {
    document.getElementById("dynamic-home-title").innerHTML = "";
  };

  return (
    <div className="user-container">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="38%" y1="1%" x2="62%" y2="99%">
            <stop offset="5%" stopColor="#f5e2d3"></stop>
            <stop offset="95%" stopColor="#7ab6cb"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 180.66666666666663,184.13333333333333 361.33333333333326,168.26666666666665 533,163 C 704.6666666666667,157.73333333333335 867.3333333333335,163.0666666666667 1017,171 C 1166.6666666666665,178.9333333333333 1303.3333333333333,189.46666666666664 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <div className="home-container">
        <div className="logo-cont">
          <div className="logo-cont-logo">
            <svg
              width="307"
              height="173"
              viewBox="0 0 615 346"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M418.602 20.7738C461.379 20.7738 500.043 38.3558 527.779 66.6792L505.366 91.4786L493.578 74.9779H488.877L502.879 99.281H507.58L532.337 71.5408C556.627 98.5969 571.409 134.358 571.409 173.58C571.409 257.977 502.994 326.387 418.602 326.387C334.21 326.387 265.795 257.977 265.795 173.58C265.795 89.184 334.21 20.7738 418.602 20.7738Z"
                fill="#7AB7CC"
              />
              <path
                d="M81.3665 247.98C79.6415 247.98 78.0492 247.316 76.5896 245.989C75.2627 244.795 74.5993 243.336 74.5993 241.611C74.5993 240.416 74.8647 238.957 75.3954 237.232C75.7935 235.374 75.9925 233.981 75.9925 233.052C75.9925 221.243 75.3291 198.553 74.0022 164.982C72.6753 136.321 72.0118 113.697 72.0118 97.1111C72.0118 95.9169 72.4762 94.988 73.4051 94.3246C74.3339 93.5285 75.4618 93.1304 76.7887 93.1304C78.3809 93.1304 79.7742 93.7275 80.9684 94.9217C82.1626 95.9832 82.7597 97.3101 82.7597 98.9024C82.7597 106.864 83.1578 118.806 83.9539 134.729C84.6174 152.377 84.9491 164.319 84.9491 170.555L85.1481 172.944V175.332V176.725V177.72C85.5462 189.264 85.7452 206.514 85.7452 229.47V234.644H101.071C103.857 236.635 105.251 238.625 105.251 240.615C105.251 242.075 104.72 243.402 103.658 244.596C102.73 245.658 101.602 246.188 100.275 246.188C99.8767 246.188 99.147 246.056 98.0854 245.79L97.2893 245.591C96.4931 245.724 95.2326 245.79 93.5076 245.79H90.124C89.1952 245.658 88.1337 245.591 86.9395 245.591C85.6126 247.184 83.7549 247.98 81.3665 247.98ZM131.324 248.378C129.599 248.378 128.007 247.781 126.547 246.587C125.221 245.392 124.491 243.933 124.358 242.208V237.033V233.052C124.225 231.858 124.159 230.465 124.159 228.872C124.159 226.086 123.96 221.84 123.562 216.134L123.164 203.396C123.164 196.894 123.363 187.208 123.761 174.337C124.292 162.793 124.557 153.106 124.557 145.278C124.557 143.42 124.358 140.633 123.96 136.918C123.562 133.07 123.363 130.284 123.363 128.559C123.363 119.138 126.149 114.427 131.722 114.427C136.101 114.427 141.143 115.29 146.849 117.015C152.687 118.74 155.607 120.796 155.607 123.185C155.607 124.512 155.01 125.772 153.815 126.966C152.754 128.028 151.427 128.89 149.835 129.554C144.262 127.563 139.219 126.237 134.708 125.573C134.841 127.563 134.907 130.416 134.907 134.132C134.907 139.439 134.841 144.216 134.708 148.462C134.31 154.831 134.111 159.608 134.111 162.793L134.708 165.977L137.892 165.778C138.954 165.646 140.281 165.579 141.873 165.579C148.242 165.579 151.427 167.437 151.427 171.152C151.427 172.612 150.83 173.872 149.636 174.934C148.441 175.863 146.915 176.327 145.058 176.327C142.669 176.327 140.812 176.194 139.485 175.929H134.509C134.774 179.379 134.907 184.421 134.907 191.056C134.907 197.69 134.841 203.661 134.708 208.969C134.31 217.063 134.111 223.1 134.111 227.081C134.111 234.512 134.243 238.227 134.509 238.227L141.077 238.028C143.333 237.895 146.053 237.829 149.237 237.829C154.28 237.829 156.801 239.421 156.801 242.606C156.801 244.464 155.938 245.857 154.213 246.786C152.621 247.847 150.631 248.378 148.242 248.378H131.324ZM182.313 248.577C179.925 248.179 177.868 247.316 176.143 245.989C174.551 244.663 173.622 242.938 173.357 240.815L175.546 237.431C176.342 237.431 177.603 237.696 179.328 238.227C181.318 238.625 182.844 238.824 183.905 238.824C186.294 238.824 188.417 237.763 190.275 235.64C192.265 233.517 193.724 230.73 194.653 227.28C196.378 220.911 197.241 215.205 197.241 210.163C197.241 201.406 194.454 192.184 188.881 182.497L186.692 178.716C184.171 174.337 182.048 170.422 180.323 166.972C178.598 163.523 177.138 159.807 175.944 155.826C174.352 150.652 173.556 145.477 173.556 140.302C173.556 134.463 174.882 128.36 177.536 121.99C178.863 118.939 180.721 116.484 183.109 114.626C185.63 112.636 188.417 111.641 191.469 111.641C193.857 111.641 196.047 112.437 198.037 114.029C200.16 115.489 201.221 117.28 201.221 119.403C201.221 120.597 200.757 121.526 199.828 122.19C198.899 122.853 197.771 123.185 196.445 123.185C194.985 123.185 193.592 122.787 192.265 121.99C189.346 122.123 187.024 124.711 185.299 129.753C183.839 134.397 183.109 138.245 183.109 141.297C183.109 145.145 183.706 149.059 184.901 153.04C186.095 156.888 187.621 160.404 189.478 163.589L193.857 171.55L200.823 184.687C202.681 188.402 204.141 192.714 205.202 197.624C206.396 202.533 206.993 207.509 206.993 212.552C206.993 220.646 205.136 228.342 201.42 235.64C199.563 239.355 196.909 242.34 193.459 244.596C190.142 246.852 186.426 247.98 182.313 247.98V248.577ZM233.678 247.781C230.759 247.781 228.968 246.52 228.304 243.999C227.773 242.407 227.508 240.151 227.508 237.232C227.508 231.526 227.773 224.494 228.304 216.134C228.968 208.173 229.299 201.074 229.299 194.837C229.299 187.805 229.498 177.256 229.897 163.191L230.295 131.743C230.295 130.549 230.096 128.758 229.697 126.369L229.1 121.393V120.398C229.1 117.346 229.565 115.091 230.494 113.631C231.422 112.171 233.147 111.442 235.669 111.442C239.118 111.442 242.9 112.437 247.014 114.427C251.127 116.418 254.112 118.939 255.97 121.99C259.818 128.36 261.742 136.321 261.742 145.875C261.742 153.04 261.145 159.077 259.951 163.987C258.757 168.764 256.7 173.209 253.781 177.322C257.363 180.772 259.752 185.217 260.946 190.658C262.273 195.965 262.936 202.666 262.936 210.76C262.936 218.854 261.543 225.887 258.757 231.858C255.572 238.625 250.928 243.269 244.824 245.79C241.109 247.117 237.393 247.781 233.678 247.781ZM240.047 171.55C246.947 171.418 250.397 163.39 250.397 147.467C250.397 130.35 247.677 121.393 242.237 120.597C240.777 123.649 240.047 130.814 240.047 142.093V171.55ZM238.853 237.63C243.099 236.701 246.416 234.18 248.805 230.067C251.193 225.953 252.387 221.243 252.387 215.935C252.387 210.362 252.056 205.453 251.392 201.207C250.862 197.889 250.132 195.169 249.203 193.046C248.407 190.79 247.279 188.734 245.819 186.876C244.227 184.886 242.369 183.691 240.246 183.293C239.716 190.857 239.45 200.875 239.45 213.348C239.45 214.144 239.318 216.665 239.052 220.911L238.654 227.678C238.654 227.944 238.72 228.143 238.853 228.275V228.673V237.63Z"
                fill="#2B2A29"
              />
              <path
                d="M307.869 249.572C304.419 249.572 301.234 248.444 298.315 246.188C295.396 244.065 293.007 241.146 291.15 237.431C287.302 229.337 284.913 220.513 283.984 210.959C282.79 201.936 282.193 193.245 282.193 184.886C282.193 183.293 282.26 181.966 282.392 180.905V177.322C282.392 176.659 282.326 176.327 282.193 176.327V172.744L282.392 158.812C282.525 154.566 283.056 147.799 283.984 138.51C284.648 132.141 286.174 125.971 288.562 120C289.491 117.346 290.685 115.356 292.145 114.029C293.605 112.569 295.263 111.84 297.121 111.84C302.428 111.84 307.205 112.835 311.451 114.825C315.697 116.683 319.28 119.337 322.199 122.787C324.853 126.104 327.109 130.217 328.966 135.127C330.824 139.904 332.151 145.012 332.947 150.453C333.743 156.026 334.141 161.93 334.141 168.167V169.759C334.141 173.872 334.208 177.588 334.34 180.905L334.539 192.25C334.539 230.465 325.649 249.572 307.869 249.572ZM307.073 241.213C309.461 241.213 311.65 240.284 313.641 238.426C315.631 236.436 317.157 233.782 318.219 230.465C320.74 223.697 322.266 216.4 322.796 208.571C323.46 201.804 323.792 195.965 323.792 191.056C323.792 185.085 323.327 177.256 322.398 167.57C321.602 157.352 321.204 149.723 321.204 144.681V141.098C320.939 136.056 319.214 131.677 316.029 127.962C312.977 124.246 309.196 122.389 304.684 122.389C300.173 122.389 297.187 124.976 295.728 130.151C294.401 134.264 293.737 139.572 293.737 146.074C293.737 148.595 293.804 150.718 293.936 152.443V157.817L293.538 166.972C293.273 169.759 293.14 172.811 293.14 176.128C293.14 183.293 293.339 190.392 293.737 197.425C294.268 207.377 295.595 217.063 297.718 226.484C299.841 236.303 302.959 241.213 307.073 241.213ZM367.45 242.606L367.251 234.843C367.118 232.588 367.052 230.067 367.052 227.28L367.251 220.513C366.853 219.053 365.858 204.524 364.266 176.924C362.673 149.325 361.745 131.611 361.479 123.782C353.783 123.516 348.874 122.72 346.751 121.393C345.291 120.332 344.561 119.138 344.561 117.811C344.561 116.749 345.225 115.82 346.552 115.024C348.011 114.095 349.471 113.631 350.93 113.631C354.646 113.631 359.157 113.896 364.465 114.427C369.507 115.091 374.018 115.422 377.999 115.422H379.591H381.184C385.297 115.422 387.354 117.015 387.354 120.199C387.354 121.791 386.69 123.118 385.363 124.18C384.036 125.109 382.511 125.573 380.786 125.573C379.591 125.573 377.866 125.374 375.611 124.976L371.63 124.18L371.431 125.175L371.232 126.17C371.232 137.98 372.36 156.822 374.615 182.696C376.739 206.979 377.8 225.821 377.8 239.222C377.8 240.815 377.07 242.208 375.611 243.402C374.284 244.596 372.758 245.193 371.033 245.193L367.45 242.606ZM430.516 249.572C427.066 249.572 423.882 248.444 420.963 246.188C418.044 244.065 415.655 241.146 413.797 237.431C409.949 229.337 407.561 220.513 406.632 210.959C405.438 201.936 404.841 193.245 404.841 184.886C404.841 183.293 404.907 181.966 405.04 180.905V177.322C405.04 176.659 404.974 176.327 404.841 176.327V172.744L405.04 158.812C405.173 154.566 405.703 147.799 406.632 138.51C407.296 132.141 408.822 125.971 411.21 120C412.139 117.346 413.333 115.356 414.793 114.029C416.252 112.569 417.911 111.84 419.768 111.84C425.076 111.84 429.853 112.835 434.099 114.825C438.345 116.683 441.928 119.337 444.847 122.787C447.501 126.104 449.756 130.217 451.614 135.127C453.472 139.904 454.799 145.012 455.595 150.453C456.391 156.026 456.789 161.93 456.789 168.167V169.759C456.789 173.872 456.855 177.588 456.988 180.905L457.187 192.25C457.187 230.465 448.297 249.572 430.516 249.572ZM429.72 241.213C432.109 241.213 434.298 240.284 436.288 238.426C438.279 236.436 439.805 233.782 440.866 230.465C443.387 223.697 444.913 216.4 445.444 208.571C446.107 201.804 446.439 195.965 446.439 191.056C446.439 185.085 445.975 177.256 445.046 167.57C444.25 157.352 443.852 149.723 443.852 144.681V141.098C443.586 136.056 441.861 131.677 438.677 127.962C435.625 124.246 431.843 122.389 427.332 122.389C422.82 122.389 419.835 124.976 418.375 130.151C417.048 134.264 416.385 139.572 416.385 146.074C416.385 148.595 416.451 150.718 416.584 152.443V157.817L416.186 166.972C415.92 169.759 415.788 172.811 415.788 176.128C415.788 183.293 415.987 190.392 416.385 197.425C416.916 207.377 418.243 217.063 420.366 226.484C422.489 236.303 425.607 241.213 429.72 241.213ZM505.623 248.577C502.703 248.577 499.585 248.112 496.268 247.184C493.083 246.388 490.629 245.459 488.904 244.397C480.013 238.691 475.568 223.1 475.568 197.624V192.25V186.08V181.303C475.568 175.995 475.635 171.285 475.767 167.171C475.9 162.925 476.165 158.348 476.563 153.438C476.962 148.263 477.559 144.083 478.355 140.899C479.151 137.582 480.478 133.866 482.336 129.753C483.928 125.905 485.852 122.919 488.108 120.796C490.496 118.673 493.548 116.882 497.263 115.422C500.58 113.963 504.694 113.233 509.603 113.233C511.594 113.233 513.12 113.697 514.181 114.626C515.243 115.555 515.773 116.749 515.773 118.209C515.773 119.536 515.309 120.73 514.38 121.791C513.584 122.853 512.589 123.45 511.395 123.583H502.04C499.386 123.583 497.064 125.241 495.074 128.559C493.083 131.876 491.69 136.188 490.894 141.496C489.169 151.315 488.307 159.276 488.307 165.38V166.375L487.908 185.483C487.643 191.188 487.51 197.624 487.51 204.789C487.51 209.831 487.709 213.945 488.108 217.129C488.771 221.906 489.899 225.887 491.491 229.071C493.083 232.654 495.804 235.242 499.652 236.834C501.642 237.63 503.831 238.028 506.22 238.028C507.679 238.028 509.139 237.497 510.599 236.436C512.323 236.436 513.717 236.834 514.778 237.63C515.972 238.293 516.57 239.355 516.57 240.815C516.57 245.989 512.921 248.577 505.623 248.577Z"
                fill="#2B2A29"
              />
            </svg>
          </div>
          <div className="logo-cont-text">
            <p>seznámení podle vašich představ</p>
          </div>
        </div>
        <div className="home-cont">
          <div
            style={{ backgroundImage: `url(${books})` }}
            className="home-card knizni-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Knižní Klub")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            style={{ backgroundImage: `url(${deskovky})` }}
            className="home-card deskovky-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Deskovky")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            style={{ backgroundImage: `url(${bowling})` }}
            className="home-card bowling-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Bowling")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            style={{ backgroundImage: `url(${music})` }}
            className="home-card music-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Music Kvíz")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            style={{ backgroundImage: `url(${camp})` }}
            className="home-card camp-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Lesbotoč Camp")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            style={{ backgroundImage: `url(${svarak})` }}
            className="home-card svarak-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Tour de Svařáček")
            }
            onMouseLeave={() => resetTitle()}
          ></div>
          <div
            style={{ backgroundImage: `url(${dating})` }}
            className="home-card speed-card"
            onMouseEnter={() =>
              (document.getElementById("dynamic-home-title").innerHTML =
                "Speed Dating")
            }
            onMouseLeave={() => resetTitle()}
          ></div>

          <Link to={"/kalendar"}>
            <div className="home-card more-card">ENTER</div>
          </Link>
        </div>{" "}
      </div>
      <div className="dynamic-title-cont">
        <p className="dynamic-home-title" id="dynamic-home-title"></p>
      </div>
      <Footer />
    </div>
  );
}