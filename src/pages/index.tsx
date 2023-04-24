import Image from 'next/image'
import React from 'react';

import playstoreButton from "./../../public/Images/BoutonPlayStore.png"
import applestoreButton from "./../../public/Images/BoutonApple.png"
import mockup from "../../public/Images/iphoneHomePage.png"
import Link from 'next/link'

export default function Home() {
return (
<div className='container'>
    <div className="bar-container">
      <svg width="301" height="39" viewBox="0 0 301 39" fill="none" xmlns="http://www.w3.org/2000/svg"
        className='photostopper-logo'>
        <path
          d="M74.8423 8.0388C73.1533 6.62601 70.8603 5.90869 68.0377 5.90869H58.6797V30.8233H61.9345V22.1727H67.5975C68.8695 22.1811 70.1358 22.003 71.356 21.6441C72.4712 21.3168 73.5223 20.8014 74.4638 20.12C75.3811 19.4408 76.121 18.5502 76.6207 17.524C77.1453 16.4698 77.4155 15.2687 77.4155 13.9562V13.8877C77.4126 11.4317 76.5462 9.46451 74.8423 8.0388ZM61.9345 8.9598H67.8509C69.7932 8.9598 71.3521 9.40291 72.4837 10.2782C73.6153 11.1535 74.1618 12.3706 74.1618 14.0089V14.0764C74.1618 15.6243 73.5935 16.8364 72.4231 17.7833C71.2527 18.7301 69.671 19.209 67.7178 19.209H61.9345V8.9598Z"
          fill="white" />
        <path
          d="M98.0608 19.3875V30.8229H94.8736V20.074C94.8736 18.4576 94.4514 17.1739 93.6188 16.2569C92.7862 15.3399 91.6188 14.8849 90.1325 14.8849C88.6462 14.8849 87.3993 15.3816 86.4366 16.3751C85.4739 17.3687 84.9841 18.6781 84.9841 20.2777V30.8229H81.7969V4.86816H84.9841V14.9027C86.4287 12.9236 88.4157 11.9222 90.8995 11.9222C93.1061 11.9222 94.8736 12.6176 96.1463 13.9758C97.419 15.3339 98.0608 17.1531 98.0608 19.3875Z"
          fill="white" />
        <path
          d="M120.999 17.811C120.533 16.6746 119.856 15.6369 119.004 14.7529C118.13 13.8685 117.089 13.1667 115.942 12.6884C114.731 12.1764 113.43 11.9158 112.116 11.9224C110.373 11.9043 108.659 12.3607 107.157 13.2428C105.703 14.0888 104.503 15.3083 103.68 16.7748C102.855 18.244 102.427 19.9026 102.438 21.5874V21.6549C102.438 24.1716 103.406 26.5918 105.141 28.4149C106.011 29.3008 107.05 30.0029 108.196 30.4794C109.606 31.0679 111.133 31.3244 112.658 31.2289C114.183 31.1335 115.666 30.6887 116.992 29.929C118.45 29.0815 119.656 27.8593 120.483 26.3891C121.31 24.9235 121.741 23.2674 121.733 21.5844V21.5158C121.736 20.2445 121.486 18.9852 120.999 17.811ZM112.026 14.7827C112.886 14.7694 113.739 14.9386 114.529 15.279C115.318 15.6195 116.027 16.1235 116.607 16.7579C117.848 18.0723 118.474 19.6878 118.474 21.5596V21.6271C118.474 23.4761 117.867 25.0657 116.67 26.3533C115.473 27.6409 113.943 28.2837 112.108 28.2837C110.304 28.2837 108.769 27.625 107.543 26.3265C106.317 25.028 105.689 23.4194 105.689 21.5576V21.49C105.679 20.3237 105.951 19.1723 106.484 18.1349C107.002 17.1343 107.781 16.2923 108.738 15.6978C109.724 15.0852 110.865 14.7677 112.026 14.7827Z"
          fill="white" />
        <path
          d="M130.477 15.1572V25.4223C130.477 27.2673 131.387 28.1634 133.259 28.1634C134.132 28.1592 134.992 27.9528 135.772 27.5604L136.129 27.3845V30.2528L135.998 30.3233C134.96 30.868 133.802 31.145 132.629 31.1291C131.029 31.1291 129.727 30.69 128.754 29.8236C127.782 28.9572 127.284 27.5921 127.284 25.7899V15.1592H124.781V12.2939H127.284V6.8623H130.471V12.2939H136.193V15.1572H130.477Z"
          fill="white" />
        <path
          d="M157.638 17.811C157.174 16.6745 156.497 15.6367 155.644 14.753C154.77 13.8685 153.729 13.1667 152.581 12.6884C151.37 12.1749 150.067 11.9133 148.751 11.9195C147.009 11.9015 145.295 12.3579 143.793 13.2398C142.341 14.0867 141.142 15.3061 140.32 16.7718C139.495 18.2409 139.067 19.8996 139.078 21.5844V21.652C139.077 24.1697 140.045 26.5913 141.781 28.4149C142.651 29.3006 143.69 30.0027 144.836 30.4795C146.246 31.068 147.773 31.3244 149.298 31.229C150.824 31.1335 152.306 30.6888 153.632 29.929C155.091 29.0812 156.296 27.8591 157.123 26.3891C157.95 24.9236 158.382 23.2675 158.374 21.5844V21.5159C158.377 20.2444 158.127 18.985 157.638 17.811ZM148.666 14.7828C149.526 14.7692 150.379 14.9382 151.169 15.2787C151.959 15.6191 152.667 16.1233 153.248 16.7579C154.49 18.0723 155.12 19.6878 155.12 21.5586V21.6262C155.12 23.4751 154.513 25.0648 153.316 26.3524C152.118 27.64 150.587 28.2828 148.752 28.2828C146.95 28.2828 145.414 27.6241 144.188 26.3255C142.962 25.027 142.334 23.4185 142.334 21.5566V21.4891C142.323 20.3228 142.596 19.1714 143.129 18.1339C143.646 17.1338 144.424 16.2921 145.38 15.6978C146.366 15.0855 147.506 14.768 148.666 14.7828Z"
          fill="white" />
        <path
          d="M180.615 23.9511V24.0186C180.615 26.1647 179.802 27.9142 178.2 29.2177C176.597 30.5212 174.546 31.1641 172.057 31.1641C168.281 31.1641 164.869 29.8308 161.93 27.2009L161.75 27.0409L163.776 24.6326L163.967 24.8055C165.258 25.9739 166.558 26.8412 167.831 27.3887C169.105 27.9361 170.556 28.2034 172.161 28.2034C173.72 28.2034 174.996 27.8278 175.95 27.0886C176.905 26.3494 177.361 25.4404 177.361 24.2968V24.2283C177.361 23.4861 177.202 22.8642 176.89 22.3793C176.578 21.8945 175.966 21.4335 175.077 21.0132C174.163 20.5811 172.862 20.1866 171.202 19.8399C168.28 19.1981 166.135 18.3277 164.829 17.2567C163.493 16.1569 162.815 14.5742 162.815 12.5524V12.4848C162.815 10.4978 163.61 8.82967 165.178 7.52617C166.745 6.22267 168.722 5.56396 171.086 5.56396C172.838 5.56396 174.423 5.81533 175.796 6.31109C177.249 6.85219 178.602 7.63114 179.799 8.61607L179.985 8.76609L178.105 11.2956L177.907 11.1297C175.807 9.40492 173.49 8.52963 171.021 8.52963C169.53 8.52963 168.316 8.89326 167.412 9.60859C166.508 10.3239 166.076 11.1784 166.076 12.2325V12.3C166.076 13.0531 166.24 13.683 166.563 14.1728C166.886 14.6626 167.519 15.1306 168.443 15.5568C169.392 15.996 170.759 16.4112 172.504 16.7908C175.286 17.3988 177.355 18.2681 178.641 19.3739C179.949 20.5065 180.615 22.0455 180.615 23.9511Z"
          fill="#FCB556" />
        <path
          d="M189.527 15.1572V25.4223C189.527 27.2673 190.437 28.1634 192.309 28.1634C193.182 28.1592 194.042 27.9528 194.821 27.5604L195.18 27.3845V30.2528L195.049 30.3233C194.01 30.8679 192.852 31.1449 191.679 31.1291C190.079 31.1291 188.778 30.69 187.81 29.8236C186.842 28.9573 186.34 27.5921 186.34 25.7899V15.1592H183.836V12.2939H186.34V6.8623H189.527V12.2939H195.248V15.1572H189.527Z"
          fill="#FCB556" />
        <path
          d="M216.689 17.8111C216.224 16.6745 215.548 15.6367 214.695 14.753C213.822 13.8685 212.781 13.1667 211.633 12.6885C210.422 12.1749 209.119 11.9133 207.803 11.9195C206.061 11.9013 204.347 12.3578 202.844 13.2399C201.391 14.0858 200.19 15.3053 199.367 16.7718C198.543 18.2411 198.115 19.8997 198.125 21.5845V21.652C198.127 24.1705 199.097 26.592 200.835 28.4149C201.704 29.3009 202.743 30.003 203.89 30.4795C205.3 31.068 206.826 31.3244 208.352 31.229C209.877 31.1335 211.359 30.6888 212.685 29.929C214.144 29.0816 215.349 27.8594 216.176 26.3891C217.004 24.9235 217.435 23.2675 217.426 21.5845V21.5159C217.429 20.2443 217.178 18.9849 216.689 17.8111ZM207.718 14.7828C208.577 14.7695 209.43 14.9386 210.22 15.2791C211.01 15.6195 211.718 16.1236 212.299 16.7579C213.54 18.0724 214.17 19.6878 214.17 21.5586V21.6262C214.17 23.4751 213.563 25.0648 212.365 26.3524C211.168 27.64 209.638 28.2828 207.803 28.2828C206 28.2828 204.465 27.6241 203.239 26.3255C202.013 25.027 201.385 23.4185 201.385 21.5566V21.4891C201.374 20.3228 201.647 19.1714 202.18 18.1339C202.697 17.134 203.475 16.2923 204.431 15.6978C205.417 15.0856 206.557 14.7681 207.718 14.7828Z"
          fill="#FCB556" />
        <path
          d="M240.258 18.206C239.965 17.2367 239.509 16.3245 238.909 15.5085C238.35 14.7647 237.684 14.1075 236.933 13.5583C236.199 13.0231 235.384 12.6089 234.52 12.3313C233.667 12.0583 232.777 11.9192 231.882 11.9189C229.244 11.9189 227.014 13.0794 225.233 15.3694V12.2895H222.047V36.4073H225.233V27.8312C226.984 30.0766 229.217 31.2141 231.882 31.2141C233.011 31.2138 234.13 30.9872 235.17 30.5475C236.222 30.1062 237.181 29.4709 237.997 28.6747C238.824 27.8709 239.496 26.8426 239.995 25.6196C240.505 24.336 240.76 22.9652 240.746 21.5839V21.5154C240.753 20.3938 240.589 19.2778 240.258 18.206ZM237.491 21.575C237.491 23.6187 236.905 25.26 235.749 26.4532C234.592 27.6464 233.133 28.2485 231.406 28.2485C230.602 28.248 229.806 28.0812 229.069 27.7587C228.323 27.4361 227.642 26.9806 227.058 26.4144C226.451 25.811 225.975 25.0894 225.658 24.2943C225.304 23.4201 225.125 22.4845 225.133 21.5412V21.4727C225.133 19.5552 225.767 17.9427 227.02 16.6819C228.274 15.4211 229.748 14.7823 231.408 14.7823C233.088 14.7823 234.537 15.4062 235.715 16.6362C236.892 17.8662 237.493 19.5085 237.493 21.5045L237.491 21.575Z"
          fill="#FCB556" />
        <path
          d="M263.673 18.206C263.38 17.2365 262.923 16.3243 262.323 15.5085C261.764 14.7644 261.098 14.1071 260.346 13.5583C259.613 13.023 258.798 12.6088 257.934 12.3313C257.081 12.0583 256.191 11.9192 255.296 11.9189C252.659 11.9189 250.428 13.0794 248.648 15.3694V12.2895H245.461V36.4073H248.648V27.8312C250.398 30.0766 252.631 31.2141 255.296 31.2141C256.426 31.2138 257.544 30.9872 258.584 30.5475C259.636 30.106 260.595 29.4707 261.412 28.6747C262.239 27.8709 262.911 26.8426 263.41 25.6196C263.919 24.3357 264.174 22.9651 264.16 21.5839V21.5154C264.167 20.3939 264.003 19.2779 263.673 18.206ZM254.82 14.7823C256.501 14.7823 257.95 15.4062 259.127 16.6362C260.304 17.8662 260.906 19.5085 260.906 21.5045V21.572C260.906 23.6157 260.319 25.257 259.163 26.4502C258.006 27.6434 256.547 28.2455 254.82 28.2455C254.016 28.245 253.221 28.0782 252.484 27.7557C251.738 27.4331 251.056 26.9776 250.472 26.4115C249.865 25.808 249.389 25.0864 249.072 24.2913C248.718 23.4171 248.539 22.4816 248.547 21.5382V21.4697C248.547 19.5522 249.182 17.9397 250.435 16.6789C251.687 15.4181 253.16 14.7823 254.82 14.7823Z"
          fill="#FCB556" />
        <path
          d="M284.328 16.7996C283.685 15.357 282.644 14.1274 281.328 13.2547C279.997 12.3685 278.427 11.9194 276.658 11.9194C275.041 11.9023 273.454 12.3533 272.088 13.2179C270.731 14.0802 269.633 15.293 268.909 16.7281C268.146 18.2324 267.757 19.898 267.774 21.5844C267.774 23.4463 268.191 25.1392 269.015 26.6176C269.792 28.0489 270.95 29.2367 272.361 30.0492C273.774 30.8498 275.372 31.2635 276.996 31.2484C278.638 31.2484 280.085 30.9503 281.295 30.3542C282.557 29.7161 283.682 28.8364 284.606 27.7651L284.769 27.5803L282.737 25.7612L282.571 25.935C281.016 27.5624 279.163 28.388 277.064 28.388C275.553 28.4086 274.091 27.8547 272.973 26.8381C271.88 25.8645 271.218 24.5431 270.993 22.9078H285.262L285.281 22.6793C285.304 22.3892 285.316 22.0673 285.316 21.7235C285.321 19.9103 284.99 18.2551 284.328 16.7996ZM276.579 14.6804C278.186 14.6804 279.478 15.2308 280.418 16.3148C281.32 17.357 281.871 18.6783 282.058 20.2461H270.999C271.22 18.6724 271.833 17.351 272.821 16.3158C273.862 15.2308 275.12 14.6804 276.576 14.6804H276.579Z"
          fill="#FCB556" />
        <path
          d="M300.348 11.9876V15.3785H299.895C297.908 15.3785 296.247 16.0829 294.951 17.4709C293.656 18.8589 292.992 20.8548 292.992 23.3883V30.8228H289.805V12.2937H292.992V16.2111C293.629 15.0715 294.506 14.083 295.56 13.313C296.763 12.4376 298.215 11.9728 299.702 11.9876H300.348Z"
          fill="#FCB556" />
        <path
          d="M18.3589 31.6787C18.3374 31.6361 18.3085 31.5978 18.2734 31.5654C18.3078 31.5975 18.3361 31.6355 18.3569 31.6777L18.7831 32.5361C18.8122 32.5932 18.8263 32.6568 18.8238 32.7209"
          fill="url(#paint0_linear_2009_749)" />
        <path
          d="M21.5175 7.43075C22.341 7.54569 23.1504 7.74546 23.9328 8.02687C23.1509 7.74602 22.3422 7.54626 21.5195 7.43075C21.4802 7.42559 21.442 7.41419 21.4062 7.39697C21.4416 7.41345 21.479 7.42482 21.5175 7.43075Z"
          fill="#EA9E59" />
        <path
          d="M23.9297 8.02979C24.0834 8.08476 24.2357 8.14305 24.3867 8.20465C24.2357 8.14371 24.0834 8.08542 23.9297 8.02979Z"
          fill="#EA9E59" />
        <path
          d="M25.2812 8.61084C25.4263 8.68337 25.5684 8.75987 25.7105 8.83836C25.5667 8.7602 25.4237 8.68436 25.2812 8.61084Z"
          fill="#EA9E59" />
        <path
          d="M26.5333 9.3443C26.4009 9.25489 26.2648 9.16779 26.125 9.08301C26.2621 9.16746 26.3992 9.25389 26.5333 9.3443Z"
          fill="#EA9E59" />
        <path
          d="M29.8828 12.6703C29.7192 12.4279 29.5473 12.1921 29.3672 11.9629C29.547 12.1924 29.7199 12.4279 29.8828 12.6703Z"
          fill="#EA9E59" />
        <path
          d="M31.0572 14.8691C30.7421 14.0979 30.3486 13.3611 29.8828 12.6704C30.349 13.3609 30.7425 14.0977 31.0572 14.8691Z"
          fill="#EA9E59" />
        <path
          d="M31.313 15.5646C31.2335 15.3301 31.1474 15.0983 31.0547 14.8691C31.1481 15.0977 31.2342 15.3295 31.313 15.5646Z"
          fill="#EA9E59" />
        <path
          d="M31.5678 16.4238C31.4923 16.1337 31.4079 15.8466 31.3125 15.5645C31.4092 15.8466 31.4943 16.1331 31.5678 16.4238Z"
          fill="#EA9E59" />
        <path
          d="M31.9537 19.46C31.9545 22.0175 31.1483 24.5101 29.6498 26.5826C28.1513 28.6551 26.037 30.202 23.6081 31.0027C23.4823 31.0429 23.3759 31.1287 23.3101 31.2432L21.5078 34.3618L23.3081 31.2412C23.374 31.1267 23.4803 31.0409 23.6061 31.0008C26.5333 30.0323 28.9839 27.9891 30.4628 25.2837C31.9418 22.5784 32.339 19.4126 31.5742 16.4258C31.8277 17.4172 31.9552 18.4367 31.9537 19.46Z"
          fill="#EA9E59" />
        <path d="M20.7579 6.17773L21.2199 7.21L20.7987 6.36352C20.7703 6.3058 20.7563 6.24205 20.7579 6.17773Z"
          fill="#EA9E59" />
        <path
          d="M39.2309 19.4601C39.2309 30.1901 30.5395 38.8924 19.8175 38.8924H19.8085C19.7157 38.892 19.6246 38.8672 19.5444 38.8205C19.4642 38.7738 19.3977 38.7069 19.3515 38.6264C19.3053 38.5459 19.2811 38.4546 19.2813 38.3618C19.2814 38.269 19.306 38.1779 19.3525 38.0976L21.5054 34.3639L23.3047 31.2452C23.3706 31.1307 23.4769 31.045 23.6028 31.0048C26.531 30.0374 28.9825 27.9939 30.4613 25.2877C31.9402 22.5816 32.3361 19.4148 31.5688 16.4278C31.4953 16.1364 31.4102 15.8499 31.3135 15.5684C31.2353 15.3326 31.1492 15.1008 31.0552 14.873C30.7406 14.1016 30.347 13.3648 29.8808 12.6743C29.7179 12.4319 29.545 12.1964 29.3652 11.9669C29.0653 11.5838 28.7428 11.2189 28.3995 10.874C27.8305 10.3038 27.2061 9.79157 26.5357 9.34501C26.4015 9.2546 26.2644 9.16817 26.1273 9.08372C25.9902 8.99927 25.8491 8.9178 25.708 8.83931C25.567 8.76082 25.4239 8.68432 25.2788 8.61179C24.9887 8.46409 24.6907 8.32864 24.3847 8.20544C24.2337 8.14384 24.0813 8.08556 23.9277 8.03058C23.1453 7.74918 22.3359 7.54941 21.5124 7.43447C21.474 7.42917 21.4365 7.41847 21.4011 7.40268C21.3647 7.38624 21.3312 7.36411 21.3018 7.3371C21.2846 7.32074 21.2687 7.30314 21.2541 7.28445C21.2403 7.26555 21.228 7.24562 21.2173 7.22484V7.21391L20.7553 6.18164C20.7577 6.11776 20.7754 6.05539 20.807 5.99982L23.7876 0.823571C23.8455 0.721017 23.9355 0.640357 24.0437 0.594034C24.152 0.54771 24.2725 0.538295 24.3867 0.567243C28.6204 1.59702 32.3854 4.01938 35.0773 7.44552C37.7693 10.8717 39.2321 15.1029 39.2309 19.4601Z"
          fill="#EA9E59" />
        <path d="M21.2199 7.21L20.7987 6.36352C20.7703 6.3058 20.7563 6.24205 20.7579 6.17773L21.2199 7.21Z"
          fill="#EA9E59" />
        <path
          d="M13.0391 29.5542C13.2378 29.6867 13.4431 29.8148 13.655 29.9387C13.4454 29.8175 13.2407 29.6883 13.0391 29.5542Z"
          fill="url(#paint1_linear_2009_749)" />
        <path
          d="M14.5156 30.396C14.662 30.4655 14.8097 30.5318 14.9587 30.5947C14.8097 30.5324 14.662 30.4662 14.5156 30.396Z"
          fill="url(#paint2_linear_2009_749)" />
        <path
          d="M18.0577 31.4649L18.0895 31.4719H18.0607C16.9932 31.3225 15.9506 31.0305 14.9609 30.6035C15.9501 31.0277 16.9916 31.3174 18.0577 31.4649Z"
          fill="url(#paint3_linear_2009_749)" />
        <path
          d="M18.2464 31.5462C18.2235 31.528 18.1985 31.5126 18.1719 31.5005C18.1987 31.5122 18.2238 31.5276 18.2464 31.5462Z"
          fill="url(#paint4_linear_2009_749)" />
        <path
          d="M10.7721 27.6032C10.6397 27.4601 10.5125 27.3134 10.3906 27.1631C10.5125 27.3134 10.6397 27.4601 10.7721 27.6032Z"
          fill="url(#paint5_linear_2009_749)" />
        <path
          d="M18.0707 4.53613L16.2715 7.65679C16.205 7.77081 16.0989 7.85639 15.9734 7.89722C14.0975 8.51602 12.4006 9.5827 11.0298 11.0049C9.65892 12.4271 8.65533 14.162 8.10591 16.0594C7.55649 17.9568 7.47778 19.9596 7.8766 21.8942C8.27542 23.8289 9.13975 25.6372 10.3948 27.1626C9.13932 25.6372 8.27462 23.8287 7.87555 21.8938C7.47648 19.9589 7.55508 17.9559 8.10453 16.0582C8.65398 14.1605 9.65773 12.4254 11.0289 11.003C12.4 9.58063 14.0971 8.51392 15.9734 7.89523C16.0989 7.8544 16.205 7.76882 16.2715 7.6548L18.0697 4.53613H18.0707Z"
          fill="url(#paint6_linear_2009_749)" />
        <path
          d="M7.62428 19.4382C7.61978 22.2571 8.59945 24.9891 10.3942 27.1628C10.5174 27.3132 10.6446 27.4599 10.7757 27.6029C10.9069 27.746 11.0394 27.8868 11.1731 28.0252C11.7421 28.5955 12.3665 29.1077 13.037 29.5542C13.2357 29.6883 13.4433 29.8175 13.653 29.9387C13.7921 30.0202 13.9341 30.0987 14.0762 30.1742C14.2183 30.2497 14.3663 30.3242 14.5124 30.3947C14.6584 30.4653 14.8104 30.5328 14.9555 30.5934C15.9452 31.0204 16.9878 31.3125 18.0553 31.4618H18.0841C18.1026 31.466 18.1208 31.4713 18.1387 31.4777L18.1665 31.4906C18.1932 31.5027 18.2182 31.5181 18.2411 31.5363L18.2629 31.5552C18.2975 31.5867 18.3258 31.6244 18.3464 31.6664L18.7726 32.5248C18.8015 32.582 18.8155 32.6456 18.8133 32.7096C18.8115 32.7739 18.7938 32.8367 18.7617 32.8925L15.7811 38.0677C15.7235 38.1679 15.6349 38.2467 15.5286 38.2922C15.4224 38.3377 15.3042 38.3475 15.1919 38.3201C10.959 37.292 7.1942 34.8717 4.5016 31.4476C1.80899 28.0235 0.344717 23.7941 0.34375 19.4382C0.34375 8.70614 9.03608 0.00585938 19.7572 0.00585938H19.7671C19.86 0.00613226 19.9511 0.0308561 20.0313 0.0775425C20.1116 0.124229 20.1781 0.191231 20.2243 0.271804C20.2704 0.352378 20.2945 0.443681 20.2941 0.536524C20.2937 0.629368 20.2689 0.720475 20.2221 0.800677L18.0682 4.53434L16.2699 7.653C16.2035 7.76702 16.0974 7.8526 15.9719 7.89344C13.5422 8.69384 11.4271 10.2408 9.92823 12.3138C8.42933 14.3868 7.62303 16.88 7.62428 19.4382Z"
          fill="white" />
        <path
          d="M21.3047 7.32812C21.3627 7.38193 21.4359 7.41661 21.5143 7.42748C24.1216 7.79437 26.5379 9.00201 28.3965 10.8671C26.5373 9.00083 24.1199 7.79244 21.5113 7.42549C21.4342 7.41466 21.3622 7.38071 21.3047 7.32812Z"
          fill="#FCB556" />
        <path
          d="M24.3817 0.562185C24.2693 0.534682 24.151 0.544415 24.0445 0.589922C23.9381 0.63543 23.8493 0.714252 23.7915 0.81454L20.811 5.9898C20.7789 6.0455 20.7611 6.10833 20.7593 6.17261C24.2754 6.41187 27.5759 7.95371 30.0157 10.4968C32.4555 13.0399 33.8593 16.4014 33.9527 19.9244C34.0461 23.4474 32.8224 26.8785 30.5207 29.5473C28.2191 32.2161 25.0049 33.9306 21.5064 34.3559L19.3525 38.0905C19.306 38.1708 19.2815 38.2618 19.2813 38.3545C19.281 38.4473 19.3052 38.5384 19.3512 38.6189C19.3973 38.6994 19.4637 38.7663 19.5438 38.8131C19.6238 38.8598 19.7148 38.8848 19.8075 38.8853H19.8175C30.5386 38.8853 39.2309 30.1851 39.2309 19.452C39.2316 15.0946 37.7681 10.8632 35.0751 7.43751C32.3822 4.01179 28.6161 1.59041 24.3817 0.562185Z"
          fill="#FCB556" />
        <path
          d="M23.6041 30.9979C25.5741 30.3485 27.3451 29.2057 28.7485 27.6783C30.1519 26.1509 31.1411 24.2897 31.6218 22.2719C32.1025 20.2541 32.0588 18.1469 31.4948 16.1508C30.9309 14.1546 29.8654 12.3361 28.3999 10.8682C29.8654 12.3362 30.9308 14.1549 31.4946 16.1511C32.0584 18.1474 32.102 20.2547 31.621 22.2725C31.1401 24.2903 30.1507 26.1515 28.7471 27.6788C27.3435 29.2061 25.5723 30.3487 23.6022 30.9979C23.4767 31.0394 23.3707 31.1253 23.3041 31.2393L21.5078 34.357L23.3061 31.2393C23.3725 31.1251 23.4786 31.0392 23.6041 30.9979Z"
          fill="#FCB556" />
        <path
          d="M21.2229 7.21504C21.2448 7.25762 21.2741 7.29598 21.3094 7.3283C21.2744 7.29652 21.2457 7.25843 21.2249 7.21603L20.7987 6.35862C20.7702 6.30128 20.7562 6.23783 20.758 6.17383"
          fill="#FCB556" />
        <path
          d="M33.9629 20.2988C33.9641 16.7084 32.6008 13.2518 30.149 10.629C27.6972 8.00623 24.3402 6.4133 20.758 6.17285C20.7562 6.23685 20.7702 6.30031 20.7987 6.35765L21.2249 7.21605C21.2457 7.25845 21.2744 7.29654 21.3094 7.32832C21.3666 7.38163 21.4386 7.41628 21.516 7.42767C24.2295 7.81484 26.7323 9.10799 28.6181 11.0971C30.5039 13.0862 31.6618 15.6544 31.9038 18.3846C32.1458 21.1148 31.4577 23.8467 29.9512 26.1365C28.4448 28.4263 26.2084 30.1396 23.6054 30.998C23.4798 31.0392 23.3738 31.1252 23.3073 31.2394L21.5091 34.3561C24.9443 33.9401 28.1082 32.2802 30.4028 29.6901C32.6975 27.1 33.9639 23.7591 33.9629 20.2988Z"
          fill="#EA9E59" />
        <path
          d="M18.2676 31.559C18.2094 31.5054 18.1363 31.4707 18.058 31.4596C15.4489 31.0927 13.0311 29.8839 11.1719 28.0171C13.0305 29.8842 15.4482 31.093 18.057 31.4596C18.1358 31.4703 18.2093 31.505 18.2676 31.559Z"
          fill="url(#paint7_linear_2009_749)" />
        <path
          d="M15.1929 38.3251C15.3054 38.3523 15.4236 38.3424 15.5299 38.2969C15.6363 38.2515 15.7251 38.1728 15.7831 38.0728L18.7637 32.8965C18.7955 32.8411 18.8132 32.7786 18.8153 32.7147C15.299 32.4764 11.998 30.9353 9.55747 28.3927C7.11693 25.8501 5.71231 22.4888 5.61817 18.9657C5.52403 15.4426 6.74713 12.011 9.0484 9.34169C11.3497 6.67238 14.5637 4.95722 18.0622 4.53146L20.2221 0.794818C20.2686 0.714493 20.2932 0.623359 20.2934 0.530548C20.2936 0.437738 20.2693 0.346511 20.2232 0.26601C20.177 0.185509 20.1104 0.11856 20.0302 0.071873C19.95 0.025186 19.8589 0.000400431 19.7661 0L19.7572 0C9.03509 0 0.343751 8.70028 0.343751 19.4323C0.342497 23.7902 1.80585 28.0222 4.49882 31.4485C7.19179 34.8748 10.9581 37.2966 15.1929 38.3251Z"
          fill="url(#paint8_linear_2009_749)" />
        <path
          d="M15.9743 7.88937C14.0045 8.53861 12.2336 9.68115 10.8301 11.2083C9.42665 12.7354 8.43735 14.5962 7.95635 16.6137C7.47535 18.6312 7.51866 20.7383 8.08215 22.7343C8.64564 24.7304 9.71056 26.549 11.1756 28.0171C9.7108 26.5489 8.64613 24.7303 8.08289 22.7343C7.51965 20.7384 7.47658 18.6315 7.95779 16.6141C8.43899 14.5968 9.42845 12.7362 10.832 11.2094C12.2356 9.68253 14.0065 8.5403 15.9763 7.89136C16.1021 7.8512 16.2084 7.76545 16.2743 7.65093L18.0726 4.53027L16.2704 7.64993C16.2048 7.7637 16.0992 7.84903 15.9743 7.88937Z"
          fill="url(#paint9_linear_2009_749)" />
        <path
          d="M5.61719 18.5881C5.61573 22.1791 6.97936 25.6364 9.43181 28.2594C11.8843 30.8825 15.2421 32.4753 18.8251 32.715C18.827 32.651 18.813 32.5875 18.7843 32.5302L18.3581 31.6718C18.3366 31.6298 18.3081 31.5919 18.2737 31.5596C18.2165 31.5062 18.1444 31.4716 18.067 31.4602C15.3535 31.0725 12.8507 29.7789 10.9652 27.7894C9.07959 25.7999 7.92197 23.2314 7.6803 20.501C7.43863 17.7707 8.12711 15.0387 9.63392 12.749C11.1407 10.4592 13.3774 8.74614 15.9806 7.88789C16.1065 7.84773 16.2128 7.76198 16.2787 7.64746L18.0779 4.52979C14.6412 4.94405 11.4754 6.60335 9.17925 9.19386C6.88312 11.7844 5.61588 15.1265 5.61719 18.5881Z"
          fill="url(#paint10_linear_2009_749)" />
        <defs>
          <linearGradient id="paint0_linear_2009_749" x1="18.2734" y1="32.1437" x2="18.8238" y2="32.1437"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint1_linear_2009_749" x1="13.0391" y1="29.7469" x2="13.655" y2="29.7469"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint2_linear_2009_749" x1="14.5156" y1="30.4973" x2="14.9587" y2="30.4973"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint3_linear_2009_749" x1="14.9609" y1="31.0357" x2="18.0895" y2="31.0357"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint4_linear_2009_749" x1="18.1719" y1="31.5233" x2="18.2464" y2="31.5233"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint5_linear_2009_749" x1="10.3906" y1="27.3836" x2="10.7721" y2="27.3836"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint6_linear_2009_749" x1="7.62483" y1="15.8494" x2="18.0707" y2="15.8494"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint7_linear_2009_749" x1="11.1758" y1="29.7895" x2="18.2676" y2="29.7895"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint8_linear_2009_749" x1="10.3187" y1="0.043715" x2="10.3187" y2="38.8447"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#FCFCFC" />
            <stop offset="0.76" stopColor="#F4F4F4" />
            <stop offset="0.99" stopColor="#E6E6E6" />
            <stop offset="1" stopColor="#E5E5E5" />
          </linearGradient>
          <linearGradient id="paint9_linear_2009_749" x1="7.62671" y1="16.2747" x2="18.0726" y2="16.2747"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#436C70" />
            <stop offset="1" stopColor="#385056" />
          </linearGradient>
          <linearGradient id="paint10_linear_2009_749" x1="12.2201" y1="4.53177" x2="12.2201" y2="32.6723"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#CCCCCC" />
            <stop offset="0.47" stopColor="#C9C9C9" />
            <stop offset="0.76" stopColor="#C1C1C1" />
            <stop offset="0.99" stopColor="#B3B3B3" />
            <stop offset="1" stopColor="#B2B2B2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="social-container">
        <a href="https://www.facebook.com/equipe.photostopper">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
            <g clipPath="url(#clip0_2009_1141)">
              <path
                d="M1.68221 -0.00878906H28.2755C29.1769 -0.00878906 29.9889 0.80323 29.9889 1.70467V28.2979C29.9889 29.1994 29.1769 30.0114 28.2755 30.0114H1.68221C0.780769 30.0114 -0.03125 29.1994 -0.03125 28.2979V1.70467C-0.03125 0.80323 0.780769 -0.00878906 1.68221 -0.00878906ZM21.2875 16.8475H25.4341L25.6144 12.8811H21.2875V9.95179C21.2875 8.82535 21.5125 8.19361 22.9548 8.19361H25.4788L25.5697 4.49698C25.5697 4.49698 24.4433 4.31669 22.8207 4.31669C18.8543 4.31669 17.0962 6.79602 17.0962 9.45563V12.8811H14.1668V16.8475H17.0962V27.8451H21.2875V16.8475Z"
                fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_2009_1141">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://instagram.com/photostopper_app">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className='icon' xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.9093 15C8.9093 18.3593 11.6489 21.0907 15 21.0907C18.3511 21.0907 21.0907 18.3593 21.0907 15C21.0907 11.6408 18.3592 8.90934 15 8.90934C11.6407 8.90934 8.9093 11.6408 8.9093 15Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M25.7708 29.2442C27.3771 28.6001 28.6083 27.3689 29.2442 25.7709C30.0625 23.7148 30.0169 19.2173 29.9874 16.3019C29.9825 15.8183 29.978 15.3782 29.978 15C29.978 14.6218 29.9825 14.1818 29.9874 13.6983C30.0169 10.7845 30.0624 6.29223 29.2442 4.22923C28.6001 2.62299 27.3689 1.39175 25.7708 0.755781C23.7083 -0.0580137 19.1889 -0.0146686 16.2744 0.0132853C15.8016 0.0178199 15.371 0.0219493 15 0.0219493C14.6218 0.0219493 14.1818 0.0174924 13.6984 0.0125951C10.7845 -0.016924 6.2922 -0.0624338 4.22918 0.755781C2.62293 1.39991 1.39175 2.63114 0.755772 4.22923C-0.0580194 6.29176 -0.0146694 10.811 0.0132879 13.7256C0.0178232 14.1984 0.0219536 14.629 0.0219536 15C0.0219536 15.3783 0.0174957 15.8183 0.0125975 16.3017C-0.0169254 19.2156 -0.0624399 23.7078 0.755772 25.7709C1.3999 27.3771 2.63108 28.6083 4.22918 29.2442C6.29173 30.058 10.811 30.0147 13.7256 29.9867C14.1984 29.9822 14.629 29.9781 15 29.9781C15.3782 29.9781 15.8182 29.9825 16.3016 29.9874C19.2155 30.0169 23.7078 30.0624 25.7708 29.2442ZM5.63158 15C5.63158 9.8144 9.81434 5.63164 15 5.63164C20.1856 5.63164 24.3684 9.8144 24.3684 15C24.3684 20.1857 20.1856 24.3684 15 24.3684C9.81434 24.3684 5.63158 20.1857 5.63158 15ZM24.7516 7.43357C25.9583 7.43357 26.9368 6.46328 26.9368 5.24841C26.9368 4.04169 25.9583 3.06326 24.7516 3.06326C23.5449 3.06326 22.5665 4.04169 22.5665 5.24841C22.5665 6.45513 23.5367 7.43357 24.7516 7.43357Z"
              fill="white" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/photostopper">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
            < path
              d="M27.8571 0H2.13616C0.957589 0 0 0.970982 0 2.16295V27.8371C0 29.029 0.957589 30 2.13616 30H27.8571C29.0357 30 30 29.029 30 27.8371V2.16295C30 0.970982 29.0357 0 27.8571 0ZM9.06696 25.7143H4.62054V11.3973H9.07366V25.7143H9.06696ZM6.84375 9.44196C5.41741 9.44196 4.26562 8.28348 4.26562 6.86384C4.26562 5.4442 5.41741 4.28571 6.84375 4.28571C8.26339 4.28571 9.42187 5.4442 9.42187 6.86384C9.42187 8.29018 8.27009 9.44196 6.84375 9.44196ZM25.7344 25.7143H21.2879V18.75C21.2879 17.0893 21.2545 14.9531 18.9777 14.9531C16.6607 14.9531 16.3058 16.7612 16.3058 18.6295V25.7143H11.8594V11.3973H16.125V13.3527H16.1853C16.7812 12.2277 18.2344 11.0424 20.3973 11.0424C24.8973 11.0424 25.7344 14.0089 25.7344 17.8661V25.7143Z"
              fill="white" />
          </svg>
        </a>
        <a href="https://www.youtube.com/@photostopper8193">
          <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
            <path
              d="M41.514 4.69398C41.0264 2.84633 39.5896 1.39117 37.7654 0.897344C34.4589 0 21.2 0 21.2 0C21.2 0 7.94122 0 4.6346 0.897344C2.81037 1.39125 1.37362 2.84633 0.885989 4.69398C0 8.04297 0 15.0303 0 15.0303C0 15.0303 0 22.0177 0.885989 25.3666C1.37362 27.2143 2.81037 28.6088 4.6346 29.1027C7.94122 30 21.2 30 21.2 30C21.2 30 34.4588 30 37.7654 29.1027C39.5896 28.6088 41.0264 27.2143 41.514 25.3666C42.4 22.0177 42.4 15.0303 42.4 15.0303C42.4 15.0303 42.4 8.04297 41.514 4.69398ZM16.8636 21.3743V8.68633L27.9454 15.0305L16.8636 21.3743Z"
              fill="white" />
          </svg>

        </a>
      </div>
  </div>
  <div className="info-container">
    <div className="desc-container">
      <div className="text-container">
        <p className="title">(Re)découvrez les patrimoines des Hauts-de-France</p>
        <p className="description">
          PhotoStopper, l’application pour (re)découvrir la richesse du patrimoine culturel, architectural, 
          historique et naturel des Hauts-de-France.
        </p>
        <p className='desc-2'>Laissez-vous dépayser, près de chez vous !</p>
      </div>
      <div className="download-container">
        <a href="https://play.google.com/store/apps/details?id=com.photostopper&hl=fr&gl=FR">
          <Image src={playstoreButton} alt="PlayStore" className="download-button" id="btn-1" width={250} height={70} />
        </a>
        <a href="https://apps.apple.com/fr/app/photostopper/id1585057163">
          <Image src={applestoreButton} alt="AppleStore" className="download-button" id="btn-2" width={250}
            height={70} />
        </a>
      </div>
    </div>
    <Image src="https://imagedelivery.net/hl1WDbLOjbgv1wkNUhhX3w/1af775ac-230f-40e2-1e71-e4be8b65ea00/w=4392,format=webp" width={1000} height={1000} alt="IphoneMockup" className="mockup" id="mock" />
  </div>
  <div className="footer-container">
    <p className="copyright-text">PhotoStopper © 2023 - Tous droits réservés</p>
    <div className="link-container">
      <a href="" className="link">Paramétrage des cookies</a>
      <Link href='/cgu' className='link'>Mentions Légales</Link>
    </div>
  </div>
</div>
)
}