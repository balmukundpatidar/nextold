import React from "react";

const Passwordvisiblebutton = ({
  isPasswordVisible,
  togglePasswordVisibility,
}) => {
  return (
    <>
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pl-2 focus:outline-none"
        onClick={() => togglePasswordVisibility()}
      >
        {" "}
        {!isPasswordVisible ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_163_431)">
              <path
                d="M15.5139 6.27923C14.4799 4.59523 12.1279 1.7699 7.99991 1.7699C3.87191 1.7699 1.51991 4.59523 0.485912 6.27923C0.166264 6.79624 -0.00305176 7.39206 -0.00305176 7.9999C-0.00305176 8.60774 0.166264 9.20356 0.485912 9.72056C1.51991 11.4046 3.87191 14.2299 7.99991 14.2299C12.1279 14.2299 14.4799 11.4046 15.5139 9.72056C15.8336 9.20356 16.0029 8.60774 16.0029 7.9999C16.0029 7.39206 15.8336 6.79624 15.5139 6.27923V6.27923ZM14.3772 9.02256C13.4892 10.4666 11.4792 12.8966 7.99991 12.8966C4.52058 12.8966 2.51058 10.4666 1.62258 9.02256C1.43267 8.71526 1.33208 8.36115 1.33208 7.9999C1.33208 7.63865 1.43267 7.28453 1.62258 6.97723C2.51058 5.53323 4.52058 3.10323 7.99991 3.10323C11.4792 3.10323 13.4892 5.53056 14.3772 6.97723C14.5672 7.28453 14.6677 7.63865 14.6677 7.9999C14.6677 8.36115 14.5672 8.71526 14.3772 9.02256V9.02256Z"
                fill="#A3AED0"
              />
              <path
                d="M7.99984 4.6665C7.34057 4.6665 6.6961 4.862 6.14794 5.22827C5.59977 5.59454 5.17253 6.11514 4.92024 6.72423C4.66795 7.33331 4.60194 8.00354 4.73055 8.65014C4.85917 9.29674 5.17664 9.89069 5.64282 10.3569C6.10899 10.823 6.70293 11.1405 7.34954 11.2691C7.99614 11.3977 8.66636 11.3317 9.27545 11.0794C9.88454 10.8271 10.4051 10.3999 10.7714 9.85174C11.1377 9.30357 11.3332 8.65911 11.3332 7.99984C11.3321 7.11611 10.9806 6.26888 10.3557 5.64398C9.7308 5.01909 8.88357 4.66756 7.99984 4.6665V4.6665ZM7.99984 9.99984C7.60428 9.99984 7.2176 9.88254 6.8887 9.66278C6.5598 9.44301 6.30345 9.13066 6.15208 8.7652C6.0007 8.39975 5.9611 7.99762 6.03827 7.60966C6.11544 7.22169 6.30592 6.86533 6.58562 6.58562C6.86533 6.30592 7.2217 6.11544 7.60966 6.03827C7.99762 5.9611 8.39975 6.0007 8.76521 6.15208C9.13066 6.30345 9.44302 6.5598 9.66278 6.8887C9.88254 7.2176 9.99984 7.60427 9.99984 7.99984C9.99984 8.53027 9.78913 9.03898 9.41405 9.41405C9.03898 9.78912 8.53027 9.99984 7.99984 9.99984Z"
                fill="#A3AED0"
              />
            </g>
            <defs>
              <clipPath id="clip0_163_431">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_163_426)">
              <path
                d="M15.5139 6.27923C14.9121 5.29372 14.1529 4.4134 13.2666 3.67323L15.1332 1.80657C15.2547 1.68083 15.3219 1.51243 15.3204 1.33763C15.3188 1.16283 15.2487 0.995625 15.1251 0.87202C15.0015 0.748415 14.8343 0.678302 14.6595 0.676783C14.4847 0.675264 14.3163 0.74246 14.1906 0.863899L12.1606 2.89657C10.9022 2.14911 9.46353 1.75954 7.99991 1.7699C3.87258 1.7699 1.52058 4.59523 0.485912 6.27923C0.166264 6.79624 -0.00305176 7.39206 -0.00305176 7.9999C-0.00305176 8.60774 0.166264 9.20356 0.485912 9.72056C1.08775 10.7061 1.8469 11.5864 2.73325 12.3266L0.866579 14.1932C0.802905 14.2547 0.752117 14.3283 0.717178 14.4096C0.682239 14.491 0.663848 14.5784 0.663078 14.667C0.662309 14.7555 0.679177 14.8433 0.712698 14.9252C0.746218 15.0071 0.79572 15.0816 0.858315 15.1442C0.920911 15.2068 0.995345 15.2563 1.07728 15.2898C1.15921 15.3233 1.24699 15.3402 1.33551 15.3394C1.42403 15.3386 1.51151 15.3202 1.59285 15.2853C1.67418 15.2504 1.74775 15.1996 1.80925 15.1359L3.84391 13.1012C5.10076 13.8486 6.53769 14.2388 7.99991 14.2299C12.1272 14.2299 14.4792 11.4046 15.5139 9.72056C15.8336 9.20356 16.0029 8.60774 16.0029 7.9999C16.0029 7.39206 15.8336 6.79624 15.5139 6.27923ZM1.62191 9.02256C1.432 8.71526 1.33141 8.36115 1.33141 7.9999C1.33141 7.63865 1.432 7.28453 1.62191 6.97723C2.51125 5.53323 4.52125 3.10323 7.99991 3.10323C9.10676 3.09703 10.1981 3.36379 11.1772 3.8799L9.83525 5.2219C9.1952 4.79697 8.42785 4.60656 7.6634 4.683C6.89895 4.75943 6.18449 5.09799 5.64125 5.64123C5.098 6.18448 4.75944 6.89894 4.68301 7.66339C4.60658 8.42784 4.79698 9.19519 5.22191 9.83523L3.68191 11.3752C2.86531 10.715 2.16847 9.9192 1.62191 9.02256ZM9.99991 7.9999C9.99991 8.53033 9.7892 9.03904 9.41413 9.41411C9.03905 9.78918 8.53035 9.9999 7.99991 9.9999C7.70292 9.99875 7.41004 9.93037 7.14325 9.7999L9.79991 7.14323C9.93039 7.41003 9.99876 7.70291 9.99991 7.9999ZM5.99991 7.9999C5.99991 7.46947 6.21063 6.96076 6.5857 6.58568C6.96077 6.21061 7.46948 5.9999 7.99991 5.9999C8.2969 6.00105 8.58978 6.06942 8.85658 6.1999L6.19991 8.85656C6.06944 8.58977 6.00106 8.29689 5.99991 7.9999ZM14.3779 9.02256C13.4886 10.4666 11.4786 12.8966 7.99991 12.8966C6.89306 12.9028 5.80175 12.636 4.82258 12.1199L6.16458 10.7779C6.80462 11.2028 7.57197 11.3932 8.33642 11.3168C9.10087 11.2404 9.81534 10.9018 10.3586 10.3586C10.9018 9.81532 11.2404 9.10086 11.3168 8.33641C11.3932 7.57196 11.2028 6.80461 10.7779 6.16456L12.3179 4.62457C13.1345 5.28475 13.8314 6.0806 14.3779 6.97723C14.5678 7.28453 14.6684 7.63865 14.6684 7.9999C14.6684 8.36115 14.5678 8.71526 14.3779 9.02256Z"
                fill="#A3AED0"
              />
            </g>
            <defs>
              <clipPath id="clip0_163_426">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
    </>
  );
};

export default Passwordvisiblebutton;