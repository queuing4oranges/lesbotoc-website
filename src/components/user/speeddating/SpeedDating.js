import React from "react";
import Moment from "react-moment";

export default function SpeedDating({
  date,
  time,
  location,
  showMod,
  setShowMod,
}) {
  return (
    <div className="user-container">
      <div className="speed-container">
        <div className="speed-form">
          <div className="speed-title">
            <h3>Lesbotoč speed dating sign up</h3>
          </div>

          <form action="">
            <div className="speed-data">
              <div className="speed-data__item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.89543 15.1046 0 14 0ZM1 3.85714C1 3.38376 1.44772 3 2 3H14C14.5523 3 15 3.38376 15 3.85714V14.1429C15 14.6162 14.5523 15 14 15H2C1.44772 15 1 14.6162 1 14.1429V3.85714Z"
                    fill="black"
                  />
                  <path
                    d="M6.5 7C7.05228 7 7.5 6.55228 7.5 6C7.5 5.44772 7.05228 5 6.5 5C5.94772 5 5.5 5.44772 5.5 6C5.5 6.55228 5.94772 7 6.5 7Z"
                    fill="black"
                  />
                  <path
                    d="M9.5 7C10.0523 7 10.5 6.55228 10.5 6C10.5 5.44772 10.0523 5 9.5 5C8.94772 5 8.5 5.44772 8.5 6C8.5 6.55228 8.94772 7 9.5 7Z"
                    fill="black"
                  />
                  <path
                    d="M12.5 7C13.0523 7 13.5 6.55228 13.5 6C13.5 5.44772 13.0523 5 12.5 5C11.9477 5 11.5 5.44772 11.5 6C11.5 6.55228 11.9477 7 12.5 7Z"
                    fill="black"
                  />
                  <path
                    d="M3.5 10C4.05228 10 4.5 9.55228 4.5 9C4.5 8.44772 4.05228 8 3.5 8C2.94772 8 2.5 8.44772 2.5 9C2.5 9.55228 2.94772 10 3.5 10Z"
                    fill="black"
                  />
                  <path
                    d="M6.5 10C7.05228 10 7.5 9.55228 7.5 9C7.5 8.44772 7.05228 8 6.5 8C5.94772 8 5.5 8.44772 5.5 9C5.5 9.55228 5.94772 10 6.5 10Z"
                    fill="black"
                  />
                  <path
                    d="M9.5 10C10.0523 10 10.5 9.55228 10.5 9C10.5 8.44772 10.0523 8 9.5 8C8.94772 8 8.5 8.44772 8.5 9C8.5 9.55228 8.94772 10 9.5 10Z"
                    fill="black"
                  />
                  <path
                    d="M12.5 10C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8C11.9477 8 11.5 8.44772 11.5 9C11.5 9.55228 11.9477 10 12.5 10Z"
                    fill="black"
                  />
                  <path
                    d="M3.5 13C4.05228 13 4.5 12.5523 4.5 12C4.5 11.4477 4.05228 11 3.5 11C2.94772 11 2.5 11.4477 2.5 12C2.5 12.5523 2.94772 13 3.5 13Z"
                    fill="black"
                  />
                  <path
                    d="M6.5 13C7.05228 13 7.5 12.5523 7.5 12C7.5 11.4477 7.05228 11 6.5 11C5.94772 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94772 13 6.5 13Z"
                    fill="black"
                  />
                  <path
                    d="M9.5 13C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11C8.94772 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13Z"
                    fill="black"
                  />
                </svg>
                <p>
                  <Moment format="D.MM.YYYY">{date}</Moment>
                </p>
              </div>
              <div className="speed-data__item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V9C7 9.17943 7.09614 9.3451 7.25193 9.43412L10.7519 11.4341C10.9917 11.5711 11.2971 11.4878 11.4341 11.2481C11.5711 11.0083 11.4878 10.7029 11.2481 10.5659L8 8.70984V3.5Z"
                    fill="black"
                  />
                  <path
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                    fill="black"
                  />
                </svg>
                <p>{time}</p>
              </div>
              <div className="speed-data__item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16C8 16 14 10.3137 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 10.3137 8 16 8 16ZM8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6C11 7.65685 9.65685 9 8 9Z"
                    fill="black"
                  />
                </svg>
                <p>{location}</p>
              </div>
            </div>
            <div className="speed-intro">
              <p>
                Vyplněním tohoto dotazníku se přihlašuješ k účasti na Speed
                dating. Další informace Ti budou zaslány emailem.
              </p>
            </div>
            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z"
                    fill="#003243"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 1C4.13401 1 1 4.13401 1 8C1 9.65343 1.57326 11.173 2.53186 12.3707C3.24293 11.2252 4.80464 10 8.00001 10C11.1954 10 12.7571 11.2252 13.4681 12.3707C14.4267 11.173 15 9.65343 15 8C15 4.13401 11.866 1 8 1Z"
                    fill="#003243"
                  />
                </svg>
              </div>
              <div className="speed-form-cont__input">
                <label htmlFor="" className="form-label speed-label">
                  Jméno
                </label>
                <input type="text" className="form-control speed-input" />
              </div>
            </div>
            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.89543 16 2V10C16 11.1046 15.1046 12 14 12H2C0.895431 12 0 11.1046 0 10V2ZM2 1C1.44772 1 1 1.44772 1 2V2.2169L8 6.4169L15 2.2169V2C15 1.44772 14.5523 1 14 1H2ZM15 3.3831L10.2919 6.20794L15 9.10522V3.3831ZM14.9662 10.2586L9.32583 6.7876L8 7.5831L6.67417 6.7876L1.03376 10.2586C1.14774 10.6855 1.53715 11 2 11H14C14.4628 11 14.8523 10.6855 14.9662 10.2586ZM1 9.10522L5.70808 6.20794L1 3.3831V9.10522Z"
                    fill="#003243"
                  />
                </svg>
              </div>
              <div className="speed-form-cont__input">
                <label htmlFor="" className="form-label speed-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control speed-input"
                  placeholder="youremail@address.cz"
                />
              </div>
            </div>
            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_228_166)">
                    <path
                      d="M14.1667 2V2.08333C14.1667 2.31342 14.3532 2.5 14.5833 2.5C14.8135 2.5 15 2.31342 15 2.08333V2C15 1.76992 14.8135 1.58333 14.5833 1.58333C14.3532 1.58333 14.1667 1.76992 14.1667 2ZM0 19.3227V19.3268C0 19.698 0.30204 20 0.673248 20H3.33333C5.87712 20 8.30937 19.2738 10.4167 17.8921V18.3333C10.4167 19.2523 11.1643 20 12.0833 20H16.25C17.169 20 17.9167 19.2523 17.9167 18.3333C17.9167 17.4143 17.169 16.6667 16.25 16.6667H13.75V14.7462C14.7213 13.4355 15.4237 11.9811 15.8415 10.4167H19.1667C19.6262 10.4167 20 10.0428 20 9.58333C20 8.66433 19.2523 7.91667 18.3333 7.91667H16.25V5H17.1917C18.051 5 18.75 4.301 18.75 3.44175C18.75 2.98625 18.5517 2.55504 18.2058 2.25858L16.2858 0.612875C15.8247 0.217667 15.2364 0 14.6291 0C13.2253 0 12.0833 1.142 12.0833 2.54575V4.50575C11.5963 4.03792 10.9353 3.75 10.2083 3.75C9.51908 3.75 8.95833 4.31075 8.95833 5V6.66667H7.91667C6.76792 6.66667 5.83333 7.60125 5.83333 8.75V10.4167H5.41667C4.49767 10.4167 3.75 11.1643 3.75 12.0833V14.1667H2.91667C2.22742 14.1667 1.66667 14.7274 1.66667 15.4167V18.0183C1.24608 18.3322 0.841417 18.556 0.456041 18.6855C0.18325 18.7771 0 19.0332 0 19.3227ZM4.41562 15C3.75712 15.9291 3.11533 16.6995 2.5 17.2991V15.4167C2.5 15.1869 2.68692 15 2.91667 15H4.41562ZM6.70325 11.25C6.12371 12.3289 5.54846 13.3033 4.98287 14.1667H4.58333V12.0833C4.58333 11.6238 4.95717 11.25 5.41667 11.25H6.70325ZM8.95833 8.1195C8.23867 8.69971 7.64442 9.42983 7.22317 10.2561C7.19575 10.3099 7.16842 10.3633 7.141 10.4167H6.66667V8.75C6.66667 8.06075 7.22742 7.5 7.91667 7.5H8.95833V8.1195ZM12.0833 6.74267C11.2778 6.86608 10.4982 7.14017 9.79167 7.54808V5C9.79167 4.77025 9.97858 4.58333 10.2083 4.58333C11.2422 4.58333 12.0833 5.42446 12.0833 6.45833V6.74267ZM1.42075 19.1667C1.71667 19.0057 2.35454 18.5434 2.3765 18.5217C3.49096 17.6292 4.57137 16.2901 5.5535 14.8147C5.55383 14.8142 5.55421 14.8137 5.5545 14.8132C6.4585 13.4549 7.27892 11.9815 7.96558 10.6347C8.36088 9.85938 8.91317 9.20008 9.575 8.68929C9.61063 8.66975 9.64304 8.64517 9.67138 8.61654C10.4951 8.00825 11.4798 7.625 12.5388 7.52579C12.753 7.50575 12.9166 7.326 12.9166 7.11096V2.54575C12.9167 1.60154 13.6849 0.833333 14.6291 0.833333C15.0376 0.833333 15.4334 0.97975 15.7435 1.24558L17.6635 2.89133C17.8244 3.02921 17.9167 3.22983 17.9167 3.44175C17.9167 3.84146 17.5915 4.16667 17.1917 4.16667H15.8333C15.6032 4.16667 15.4167 4.35325 15.4167 4.58333V7.90283C15.4083 8.02742 15.3976 8.15492 15.3839 8.29204C15.3825 8.30575 15.3819 8.31946 15.3819 8.33313C15.3818 8.43608 15.4199 8.53596 15.4897 8.61296C15.5687 8.70025 15.6808 8.75 15.7985 8.75H18.3333C18.7928 8.75 19.1667 9.12383 19.1667 9.58333H15.5173C15.3246 9.58333 15.1571 9.71542 15.1121 9.90275C14.7235 11.5217 14.0132 13.02 13.0012 14.3558C12.9463 14.4282 12.9167 14.5165 12.9167 14.6074V17.0833C12.9167 17.3134 13.1032 17.5 13.3333 17.5H16.25C16.7095 17.5 17.0833 17.8738 17.0833 18.3333C17.0833 18.7928 16.7095 19.1667 16.25 19.1667H12.0833C11.6238 19.1667 11.25 18.7928 11.25 18.3333V17.0916C11.25 16.9339 11.161 16.7897 11.02 16.7191C10.9609 16.6895 10.897 16.6749 10.8333 16.6749C10.745 16.6749 10.6572 16.703 10.5838 16.7578C8.47575 18.3337 5.96854 19.1667 3.33333 19.1667H1.42075Z"
                      fill="#003243"
                    />
                  </g>
                </svg>
              </div>
              <div className="speed-form-cont__input">
                <label htmlFor="" className="form-label speed-label">
                  Věk
                </label>
                <input
                  type="text"
                  className="form-control speed-input"
                  list="user_ages"
                />
                <datalist id="user_ages">
                  <option value="20-25"></option>
                  <option value="26-30"></option>
                  <option value="31-35"></option>
                  <option value="36-40"></option>
                  <option value="41-45"></option>
                  <option value="46-50"></option>
                  <option value="50+"></option>
                </datalist>
              </div>
            </div>

            <div className="speed-form-cont">
              <div className="speed-form-cont__logo">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z"
                    fill="#003243"
                  />
                  <rect
                    x="5.75"
                    y="1.75"
                    width="12.5"
                    height="20.5"
                    rx="1.75"
                    stroke="#003243"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 19.5H15"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="speed-form-cont__input">
                <label
                  htmlFor=""
                  className="form-label speed-label speed-label-telefon"
                >
                  Telefon - bude použit pro předání pouze v případě shody.
                </label>
                <input
                  type="text"
                  className="form-control speed-input"
                  placeholder="+420 777 888 999"
                />
              </div>
            </div>
            <div className="speed-form-cont checkbox-cont">
              <input
                type="checkbox"
                className="form-check-input speed-input checkbox-input"
                id="speedNewsletter"
              />

              <p>Chci dostávat informace o dalších akcích Lesbotoče.</p>
            </div>
            <div className="speed-btn-cont">
              <button
                onClick={() => setShowMod(false)}
                className="button btn sm single-event-button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="button btn sm single-event-button orange-btn"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
