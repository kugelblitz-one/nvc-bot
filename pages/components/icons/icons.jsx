import React from "react";

/**
 *
 * @param {'site' | 'linkedin'} type
 * @return {JSX.Element}
 * @constructor
 */
const AppIcons = ({type}) => {

    return    (<div style={{width: "22px", height: "22px", display: "inline-flex"}}>

            {type === 'site' ?
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="2 2.002 20 20" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 32 32" height="24" width="24" data-type="ugc" role="presentation" aria-hidden="true">
                <g>
                    <path fill="#ffffff" d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                          data-color="1"></path>
                    <path fill="#000000"
                          d="M15.99 6C10.47 6 6 10.48 6 16s4.47 10 9.99 10C21.52 26 26 21.52 26 16S21.52 6 15.99 6Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 22.92 12ZM16 8.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM8.26 18C8.1 17.36 8 16.69 8 16s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H8.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 9.08 20Zm2.95-8H9.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 12.03 12ZM16 23.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM18.34 18h-4.68c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM20.36 18c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z"
                          data-color="2"></path>
                </g> </svg>:    <svg preserveAspectRatio="xMidYMid meet" data-bbox="2 2.002 20 20" xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 24 24" height="24" width="24" data-type="ugc" role="presentation" aria-hidden="true"> <g>
                    <path fill="#ffffff" d="M19.07 4.93a10 10 0 1 1-14.14 0c3.905-3.904 10.235-3.904 14.14 0"
                          clip-rule="evenodd"
                          fill-rule="evenodd"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#ffffff"
                          d="M19.07 4.93a10 10 0 1 1-14.14 0c3.905-3.904 10.235-3.904 14.14 0" fill="none"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000"
                          d="M8.65 10.57v4.91"
                          fill="none"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000"
                          d="M11.92 15.48v-2.86a2.05 2.05 0 0 1 2.05-2v0a2 2 0 0 1 2 2v2.86" fill="none"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000"
                          d="M8.65 7.61a.2.2 0 0 0-.21.2.21.21 0 0 0 .21.19.2.2 0 0 0 .2-.21.2.2 0 0 0-.2-.2"
                          fill="none"></path>
                </g> </svg>}

    </div>
)}

export default AppIcons



