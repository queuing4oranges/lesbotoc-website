import React from "react";

export default function LogoPart1({
  width = 18,
  height = 18,
  color = "black",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 191 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.36629 154.98C7.64132 154.98 6.04903 154.316 4.58944 152.99C3.26254 151.795 2.59909 150.336 2.59909 148.611C2.59909 147.417 2.86447 145.957 3.39523 144.232C3.7933 142.374 3.99234 140.981 3.99234 140.052C3.99234 128.243 3.32889 105.553 2.00199 71.9822C0.675084 43.3212 0.0116333 20.6975 0.0116333 4.11121C0.0116333 2.917 0.476049 1.98817 1.40488 1.32472C2.33371 0.528581 3.46158 0.130512 4.78848 0.130512C6.38076 0.130512 7.77401 0.727618 8.96822 1.92183C10.1624 2.98334 10.7595 4.31024 10.7595 5.90253C10.7595 13.8639 11.1576 25.8061 11.9537 41.7289C12.6172 59.3767 12.9489 71.3188 12.9489 77.5552L13.148 79.9436V82.3321V83.7253V84.7205C13.546 96.2645 13.7451 113.514 13.7451 136.47V141.645H29.0708C31.8573 143.635 33.2505 145.625 33.2505 147.616C33.2505 149.075 32.7198 150.402 31.6582 151.596C30.7294 152.658 29.6015 153.189 28.2746 153.189C27.8766 153.189 27.1468 153.056 26.0852 152.791L25.2891 152.591C24.493 152.724 23.2324 152.791 21.5074 152.791H18.1238C17.195 152.658 16.1335 152.591 14.9393 152.591C13.6124 154.184 11.7547 154.98 9.36629 154.98ZM59.3241 155.378C57.5992 155.378 56.0069 154.781 54.5473 153.587C53.2204 152.392 52.4906 150.933 52.3579 149.208V144.033V140.052C52.2252 138.858 52.1589 137.465 52.1589 135.873C52.1589 133.086 51.9598 128.84 51.5618 123.134L51.1637 110.396C51.1637 103.894 51.3627 94.2078 51.7608 81.3369C52.2916 69.7928 52.5569 60.1065 52.5569 52.2777C52.5569 50.4201 52.3579 47.6336 51.9598 43.9183C51.5618 40.0702 51.3627 37.2837 51.3627 35.5588C51.3627 26.1378 54.1492 21.4273 59.7222 21.4273C64.101 21.4273 69.1432 22.2898 74.8489 24.0147C80.6872 25.7397 83.6064 27.7964 83.6064 30.1848C83.6064 31.5117 83.0093 32.7723 81.8151 33.9665C80.7536 35.028 79.4267 35.8905 77.8344 36.554C72.2614 34.5636 67.2192 33.2367 62.7077 32.5732C62.8404 34.5636 62.9068 37.4164 62.9068 41.1318C62.9068 46.4394 62.8404 51.2162 62.7077 55.4623C62.3097 61.8314 62.1106 66.6083 62.1106 69.7928L62.7077 72.9774L65.8923 72.7784C66.9538 72.6457 68.2807 72.5793 69.873 72.5793C76.2421 72.5793 79.4267 74.437 79.4267 78.1523C79.4267 79.6119 78.8296 80.8725 77.6354 81.934C76.4412 82.8628 74.9152 83.3272 73.0576 83.3272C70.6691 83.3272 68.8115 83.1945 67.4846 82.9292H62.5087C62.7741 86.3791 62.9068 91.4213 62.9068 98.0558C62.9068 104.69 62.8404 110.661 62.7077 115.969C62.3097 124.063 62.1106 130.101 62.1106 134.081C62.1106 141.512 62.2433 145.227 62.5087 145.227L69.0769 145.028C71.3326 144.895 74.0527 144.829 77.2373 144.829C82.2795 144.829 84.8006 146.421 84.8006 149.606C84.8006 151.464 83.9382 152.857 82.2132 153.786C80.6209 154.847 78.6305 155.378 76.2421 155.378H59.3241ZM110.313 155.577C107.924 155.179 105.868 154.316 104.143 152.99C102.551 151.663 101.622 149.938 101.356 147.815L103.546 144.431C104.342 144.431 105.602 144.696 107.327 145.227C109.318 145.625 110.844 145.824 111.905 145.824C114.294 145.824 116.417 144.763 118.274 142.64C120.265 140.517 121.724 137.73 122.653 134.28C124.378 127.911 125.241 122.205 125.241 117.163C125.241 108.406 122.454 99.1837 116.881 89.4973L114.692 85.7157C112.171 81.3369 110.048 77.4225 108.323 73.9726C106.598 70.5226 105.138 66.8073 103.944 62.8266C102.352 57.6517 101.555 52.4768 101.555 47.3019C101.555 41.4635 102.882 35.3597 105.536 28.9906C106.863 25.9387 108.721 23.484 111.109 21.6263C113.63 19.636 116.417 18.6408 119.469 18.6408C121.857 18.6408 124.046 19.4369 126.037 21.0292C128.16 22.4888 129.221 24.2801 129.221 26.4032C129.221 27.5974 128.757 28.5262 127.828 29.1896C126.899 29.8531 125.771 30.1848 124.444 30.1848C122.985 30.1848 121.592 29.7868 120.265 28.9906C117.345 29.1233 115.023 31.7108 113.298 36.753C111.839 41.3971 111.109 45.2452 111.109 48.297C111.109 52.145 111.706 56.0594 112.9 60.0401C114.095 63.8881 115.621 67.4044 117.478 70.589L121.857 78.5504L128.823 91.6867C130.681 95.402 132.14 99.7145 133.202 104.624C134.396 109.534 134.993 114.509 134.993 119.552C134.993 127.646 133.136 135.342 129.42 142.64C127.563 146.355 124.909 149.341 121.459 151.596C118.142 153.852 114.426 154.98 110.313 154.98V155.577ZM161.678 154.781C158.759 154.781 156.967 153.52 156.304 150.999C155.773 149.407 155.508 147.151 155.508 144.232C155.508 138.526 155.773 131.494 156.304 123.134C156.967 115.173 157.299 108.074 157.299 101.838C157.299 94.8049 157.498 84.2561 157.896 70.1909L158.294 38.7433C158.294 37.5491 158.095 35.7578 157.697 33.3694L157.1 28.3935V27.3983C157.1 24.3465 157.565 22.0907 158.493 20.6311C159.422 19.1715 161.147 18.4418 163.668 18.4418C167.118 18.4418 170.9 19.4369 175.013 21.4273C179.127 23.4176 182.112 25.9387 183.97 28.9906C187.818 35.3597 189.742 43.3212 189.742 52.8748C189.742 60.0401 189.145 66.0775 187.951 70.9871C186.756 75.7639 184.7 80.209 181.781 84.3224C185.363 87.7724 187.752 92.2175 188.946 97.6578C190.273 102.965 190.936 109.666 190.936 117.76C190.936 125.854 189.543 132.887 186.756 138.858C183.572 145.625 178.928 150.269 172.824 152.791C169.109 154.117 165.393 154.781 161.678 154.781ZM168.047 78.5504C174.947 78.4177 178.397 70.3899 178.397 54.4671C178.397 37.3501 175.677 28.3935 170.237 27.5974C168.777 30.6492 168.047 37.8145 168.047 49.0932V78.5504ZM166.853 144.63C171.099 143.701 174.416 141.18 176.805 137.067C179.193 132.953 180.387 128.243 180.387 122.935C180.387 117.362 180.056 112.453 179.392 108.207C178.861 104.889 178.132 102.169 177.203 100.046C176.407 97.7905 175.279 95.7338 173.819 93.8761C172.227 91.8857 170.369 90.6915 168.246 90.2935C167.715 97.8568 167.45 107.875 167.45 120.348C167.45 121.144 167.317 123.665 167.052 127.911L166.654 134.678C166.654 134.944 166.72 135.143 166.853 135.275V135.673V144.63Z"
        fill={color}
      />
    </svg>
  );
}
