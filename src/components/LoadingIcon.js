import React from "react";
import "./LoadingIcon.scss";
import Logo from "../res/logo512.png";

class LoadingIcon extends React.Component {
  render() {
    const background = {
      background: "#eff3f7",
      width: "100%",
      height: "100vh",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      zIndex: "999999",
    };

    const loadingContainer = {
      position: "relative",
    };

    const loadingIcon = {
      width: "155px",
      height: "155px",
      position: "absolute",
      left: "50%",
      top: "50%",
      marginLeft: "-77.5px",
      marginTop: "-77.5",
    };

    const LogoIcon = {
      position: "absolute",
      width: "75px",
      height: "75px",
      left: "27%",
      top: "25%",
    };

    return (
      <div id="icon-background" style={background}>
        <div style={loadingIcon}>
          <div style={loadingContainer}>
            <div data-loader="logo-circle"></div>
            {/* <svg
              id="logo-icon"
              style={LogoIcon}
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 80 80"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M8.86592061,32.4309302 L8.89582679,25.1387071 L10.2586939,25.124417 L11.6201368,25.107269 L11.6044717,23.9840694 L11.5873824,22.8594408 L7.65400852,22.8437218 L3.7234828,22.8280027 L3.7234828,23.9683503 L3.7234828,25.107269 L5.05359549,25.124417 L6.38370818,25.1387071 L6.39937332,32.3709119 C6.40649383,36.3478385 6.42643128,39.6374128 6.44209642,39.678854 C6.46345798,39.7374433 6.73973406,39.7517334 7.65258442,39.7388723 L8.83601444,39.7231532 L8.86592061,32.4309302 Z M31.5533138,31.9179166 C31.4977738,31.7721579 31.5746754,30.0873586 31.6487287,29.8429984 C31.8210453,29.2685375 32.1870399,28.9884522 32.7638018,28.9884522 C33.2437247,28.9884522 33.5484828,29.1742231 33.7535537,29.5914931 C33.8831472,29.8558594 33.8959641,29.968751 33.9159015,30.9461918 L33.935839,32.0108021 L32.7609536,32.0108021 C31.7512642,32.0108021 31.58322,31.997941 31.5533138,31.9179166 L31.5533138,31.9179166 Z M33.7464332,39.7745975 C34.8971089,39.4502129 35.6931827,38.661401 35.9936686,37.5482045 C36.0435122,37.3581465 36.1019004,36.8165529 36.1218379,36.3464095 L36.1560164,35.4918633 L35.0480638,35.4918633 L33.9386872,35.4918633 L33.9116292,36.2578111 C33.880299,37.1280764 33.7905804,37.4267389 33.4744294,37.7053953 C33.138341,38.0011997 32.5202801,38.0226348 32.1186829,37.7511235 C31.6401841,37.4267389 31.5219835,36.8794292 31.5461933,35.1017444 L31.5632825,33.8413602 L33.8575133,33.8270701 L36.1517441,33.809922 L36.1218379,31.9350647 C36.0848112,29.8429984 36.0420881,29.5257588 35.6917586,28.7826751 C35.0238541,27.3751032 33.1739436,26.6648867 31.6373359,27.2264864 C30.4781156,27.6509015 29.7931218,28.4154203 29.5182699,29.5986382 C29.4214308,30.0159082 29.410038,30.3903081 29.410038,33.4512412 C29.410038,37.2052428 29.4228549,37.3581465 29.8045147,38.1269523 C30.4866603,39.4945121 32.1941604,40.2090156 33.7464332,39.7745975 L33.7464332,39.7745975 Z M24.6620769,37.6368029 C24.8030631,37.5410594 24.8956298,37.4081618 24.9682591,37.2009558 C25.0608258,36.9280154 25.0693705,36.5807667 25.0565535,33.3612138 C25.0437366,30.0059052 25.0366161,29.8087022 24.9283842,29.5886351 C24.650684,29.0270353 23.9514492,28.9727331 23.3106026,29.4643115 L23.0998353,29.6243603 L23.0998353,33.4512412 L23.0998353,37.2781221 L23.3091785,37.4381709 C23.783405,37.8011387 24.3032028,37.8768761 24.6620769,37.6368029 L24.6620769,37.6368029 Z M26.0505778,39.7974616 C26.3994832,39.6960021 26.8210178,39.280161 27.0104236,38.8557459 C27.3749941,38.0426409 27.3764182,38.0226348 27.3764182,33.4512412 C27.3764182,29.6986687 27.3650253,29.2356704 27.2724586,28.8298324 C26.9719728,27.5308649 26.3168852,26.9635491 25.214629,27.0464315 C24.5979922,27.0950178 24.1123729,27.340807 23.5299146,27.9052648 C23.2764241,28.149625 23.0499917,28.351115 23.0243578,28.351115 C23.0015722,28.351115 22.9802106,27.1078789 22.9802106,25.5902733 L22.9802106,22.8294317 L21.9035883,22.8294317 L20.8269661,22.8294317 L20.8269661,31.2905825 L20.8269661,39.7531624 L21.9035883,39.7531624 L22.9802106,39.7531624 L22.9802106,39.1829886 C22.9802106,38.8043017 23.0029963,38.6128147 23.0471435,38.6128147 C23.0827461,38.6128147 23.3248437,38.8128757 23.5854546,39.058665 C24.4228275,39.8489059 25.1476962,40.0661149 26.0505778,39.7974616 L26.0505778,39.7974616 Z M14.5908168,39.7417303 C15.020896,39.5816815 15.5264528,39.2301458 15.9522597,38.7957277 C16.1473619,38.5956667 16.3424641,38.4327599 16.3851872,38.4327599 C16.4421513,38.4327599 16.4620888,38.5956667 16.4620888,39.0929611 L16.4620888,39.7531624 L17.5387111,39.7531624 L18.6153333,39.7531624 L18.6153333,33.4812504 L18.6153333,27.2107674 L17.5387111,27.2107674 L16.4620888,27.2107674 L16.4620888,32.0479563 L16.4620888,36.8865742 L15.997831,37.3481435 C15.6304123,37.7153983 15.4766092,37.8268609 15.2487526,37.8897372 C14.8642446,37.9969127 14.6192988,37.9226043 14.4612233,37.649664 C14.3415987,37.446745 14.3387504,37.3524305 14.3216612,32.3266127 L14.3059961,27.2107674 L13.2293738,27.2107674 L12.1555997,27.2107674 L12.1555997,32.6424232 C12.1555997,38.5599415 12.1612962,38.6885521 12.4916882,39.2587259 C12.8534105,39.881773 13.699328,40.077547 14.5908168,39.7417303 L14.5908168,39.7417303 Z M15.5050912,44.9747542 C14.1066216,44.9504611 12.4518133,44.9118779 11.8266318,44.8890138 C7.62979876,44.737539 4.74883734,44.5760612 4.17349951,44.4588827 C3.35321589,44.2931178 2.43609322,43.7358051 1.9034785,43.0798908 C1.0518646,42.0295706 0.596151472,40.7548963 0.375415426,38.7928696 C-0.135837738,34.2314791 -0.12444491,28.9112858 0.406745703,24.509944 C0.640298681,22.5807845 1.21990881,21.1875026 2.19257152,20.2157778 C2.74797189,19.659894 3.28201071,19.3512285 3.99263837,19.1683156 C5.53351838,18.7724806 17.5899788,18.4580991 24.9241119,18.6210059 C29.1608199,18.7153203 33.7378886,18.9125233 34.954073,19.051137 C36.5277074,19.2311919 37.6328117,20.0485839 38.3975553,21.5990566 C38.9757413,22.7694134 39.1594507,23.6811199 39.3944278,26.4905478 C39.5781371,28.7140828 39.6237084,30.1002196 39.58953,32.6681453 C39.5510792,35.7405105 39.355977,38.4470499 39.0640358,39.9660844 C38.7564294,41.5722884 38.0301366,42.9412772 37.0888042,43.6829318 C36.3639355,44.2559637 35.5906473,44.5117559 34.3730388,44.5803483 C34.0113165,44.6017834 33.5541792,44.6303635 33.3562289,44.6460826 C32.6555699,44.7003849 28.8987848,44.8518596 26.838107,44.9104489 C23.7762845,44.9961893 18.418807,45.0261985 15.5050912,44.9747542 Z M11.7267838,17.1014904 C11.6755161,17.017179 11.6840607,12.0799596 11.7353285,11.3811751 C11.8022613,10.4851877 11.6513064,9.77925821 11.0104598,7.97585129 C10.8025407,7.3913874 10.4265773,6.25675579 10.1759351,5.45651183 C8.36305132,-0.32953778 8.45846626,0.00913689529 8.63220689,0.00770788823 C9.82702974,-0.00229516124 11.3009769,0.00484987409 11.3180661,0.0219979589 C11.329459,0.0334300154 11.7168151,1.445289 12.1796488,3.16152648 C12.6439065,4.87633497 13.0298386,6.30391303 13.0398073,6.33535118 C13.0483519,6.36393132 13.3203557,5.36505538 13.6436272,4.1146742 C14.3200763,1.49101722 14.700312,0.0434330649 14.714553,0.0305720013 C14.7444592,0.00199185996 15.0805476,-0.00372416831 16.1813797,0.00199185996 L17.3989882,0.00913689529 L17.3719302,0.204910863 C17.3505686,0.363530648 16.5188922,3.1643845 15.6487649,6.00953757 C15.5547741,6.32391912 15.3112524,7.13416613 15.1104538,7.81151548 C14.9096552,8.48743582 14.6675576,9.29053779 14.5707186,9.59634531 L14.3955538,10.1536581 L14.3955538,13.6290032 C14.3955538,16.8885684 14.3884333,17.1072065 14.2915943,17.1329286 C14.0722823,17.1929469 11.7652346,17.1643667 11.7267838,17.1014904 Z M27.4631277,17.3101255 C26.8621561,17.2301011 26.5104025,16.9971729 26.269729,16.5184555 C25.967819,15.9182726 25.967819,15.9211306 25.967819,9.94073601 L25.967819,4.36046341 L27.1811552,4.36046341 L28.3930673,4.36046341 L28.4187012,9.50488885 C28.4457592,15.0923065 28.4386387,14.9622668 28.7718789,15.0465783 C29.0780611,15.1223156 29.4169978,14.9579798 29.8385324,14.5264197 L30.2429778,14.1134366 L30.2586429,9.23623553 L30.272884,4.36046341 L31.4847961,4.34331533 L32.6967082,4.32902526 L32.6967082,10.7152578 L32.6967082,17.1029194 L32.5315122,17.1372156 C32.3335618,17.1786568 30.4964682,17.1757988 30.3483615,17.1329286 C30.2586429,17.1086355 30.2444019,17.025753 30.2444019,16.5256006 L30.2444019,15.9454237 L29.8997689,16.2826694 C29.1079673,17.0557622 28.2535052,17.415872 27.4631277,17.3101255 L27.4631277,17.3101255 Z M21.3565718,14.8708104 C21.7724101,14.5535708 21.7752583,14.5264197 21.7966198,10.9353249 C21.8151332,8.14447413 21.8051645,7.67004378 21.7211423,7.2899279 C21.6072141,6.77548536 21.4078396,6.53255416 21.0176352,6.42537863 C20.5135026,6.29105196 20.052093,6.57971139 19.8897452,7.13273712 C19.7672723,7.55858123 19.7686964,13.8890825 19.8925934,14.3149266 C19.9865843,14.6350242 20.2870701,14.985131 20.5092302,15.0337172 C20.7983233,15.0951645 21.152925,15.0265722 21.3579959,14.8708104 L21.3565718,14.8708104 Z M20.4066948,17.3072674 C19.3215279,17.1757988 18.3246554,16.5356036 17.8447326,15.6610513 C17.3562651,14.7707799 17.3106937,14.3049236 17.3391758,10.3837282 C17.3619615,7.34708818 17.3705061,7.15703024 17.4901308,6.72118309 C17.7763756,5.68515297 18.3303519,4.97922347 19.1890863,4.55195036 C20.368244,3.96748647 21.6399684,4.04322385 22.7521933,4.76630142 C23.4613968,5.22501269 23.8914761,5.89092998 24.1221809,6.88123188 C24.2232922,7.31850804 24.233261,7.6543247 24.233261,10.7209739 C24.233261,14.4506823 24.2161717,14.6664624 23.834512,15.4738514 C23.4685174,16.2526602 22.6396891,16.9385836 21.7752583,17.1800858 C21.3935985,17.2844033 20.7313904,17.3472796 20.4066948,17.3072674 L20.4066948,17.3072674 Z"
                  id="Shape"
                  fill="#E52D27"
                ></path>
              </g>
            </svg> */}
            <img src={Logo} style={LogoIcon} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

/* React.render(<LoadingIcon />, document.getElementById("loading-icon")); */

export default LoadingIcon;
