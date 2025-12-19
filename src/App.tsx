import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  BarChart3,
  ArrowRight,
  Clock,
  TrendingUp,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import BlogPage from './components/HowItWorks';

/* === Embedded Attendance KPI Report (single-file HTML) === */
const attendanceReportHTML = `
  <html xmlns:w="urn:schemas-microsoft-com:office:word">
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Segoe UI', Roboto, Arial, sans-serif;
          background: #ffffff;
          color: #0f172a;
          margin: 0;
          padding: 0;
        }

        .report-container h1,
        .report-container h2,
        .report-container h3 {
          color: #1e40af;
          font-weight: 700;
          margin-top: 18px;
          margin-bottom: 10px;
        }

        .report-container h2 {
          border-left: 5px solid #0f766e;
          padding-left: 8px;
        }
/* === Vulnerable Cohort Colours === */
.kpi-card .sen {
  color: #9b5fc0;   /* SEN purple */
  font-weight: 700;
}

.kpi-card .pp {
  color: #20c997;   /* PP green */
  font-weight: 700;
}

.kpi-card .eal {
  color: #f08c2e;   /* EAL orange */
  font-weight: 700;
}

      </style>
    </head>

    <body>
      <div class="report-container">
        
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
/* Reset */
.report-container * {
  box-sizing: border-box;
}

/* Wrapper */
.report-container {
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  background: #f4f7ff;
  color: #0f172a;
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  max-width: 950px;
}

/* Headings */
.report-container h1,
.report-container h2,
.report-container h3,
.report-container h4 {
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  color: #1e40af;
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 700;
}

.report-container h2 {
  border-left: 4px solid #0f766e;
  padding-left: 8px;
  font-size: 19px;
}

.report-container h3 {
  border-left: 4px solid #0f766e;
  padding-left: 6px;
  font-size: 17px;
  margin-top: 24px;
}

/* Tables */
.report-container table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
}

.report-container th,
.report-container td {
  border: 1px solid #ddd;
  padding: 6px 8px;
  text-align: center;
  vertical-align: middle;
}

/* Images */
.report-container img.chart {
  width: 100%;
  max-width: 450px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 12px 0 20px;
}
</style>
</head>

<body>
  <div class="report-container">
  
    <div style="margin-top:24px; margin-bottom:20px; border-left:5px solid #0f766e; padding-left:10px;">
      <h1 style="font-size:22px; margin:0;">
        Week (15) Attendance KPI Report – 08/12/2025 - 12/12/2025
      </h1>
    </div>

    

<style>
  :root {
    --green:#1e40af;
    --gold:#0f766e;
    --soft:#f4f7ff;
    --text:#0f172a;
    --card:#fff;
  }

  body {
    font-family:"Segoe UI", Roboto, Arial, sans-serif;
    color:var(--text);
    background:var(--soft);
    margin:0;
    padding:0;
  }

  .container {
    max-width:900px;
    margin:0 auto;
    padding:24px 20px;
  }

  /* === School Header === */
  .school-header {
    display:flex;
    align-items:center;
    border-bottom:3px solid var(--gold);
    padding-bottom:12px;
    margin-bottom:24px;
  }
  .school-header img {
    height:80px;
    width:auto;
    margin-right:18px;
  }

/* === Inline SVG Logo sizing (single-file compatible) === */
.school-header .logo-svg {
  height: 80px;
  width: auto;
  margin-right: 18px;
  display: flex;
  align-items: center;
}
.school-header .logo-svg svg {
  height: 80px;
  width: auto;
  display: block;
}


  .school-name {
    font-size:26px;
    font-weight:800;
    color:var(--green);
    line-height:1.1;
  }
  .school-motto {
    font-size:13px;
    color:var(--gold);
    letter-spacing:1px;
  }

  /* === KPI Table === */
  .ou-section {
    background:var(--card);
    border:1px solid #374151;
    border-left:6px solid var(--green);
    border-radius:12px;
    padding:16px 18px;
    box-shadow:0 1px 3px rgba(0,0,0,0.05);
  }
  .ou-year-title {
    font-size:18px;
    color:var(--green);
    font-weight:700;
    margin:0 0 10px;
  }
  .ou-table {
    width:100%;
    border-collapse:collapse;
    font-size:13px;
    margin-top:8px;
  }
  .ou-table th {
    background:var(--green);
    color:#fff;
    padding:6px;
    text-align:left;
    font-weight:600;
  }
  .ou-table td {
    padding:6px 8px;
    border:1px solid #ddd;
    vertical-align:middle;
  }
  .ou-table tr:nth-child(even) td { background:var(--soft); }

  .trend-up { color:green;font-weight:600; }
  .trend-down { color:red;font-weight:600; }
  .trend-flat { color:#0077cc;font-weight:600; }
</style>

<div class="container">

  <!-- ✅ School logo + name + motto -->
  <div class="school-header">
    <div class="logo-svg" aria-label="Academic Automations Logo"><svg
  
  
   viewBox="0 0 362.07315 264.33719"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:export-filename="bitmap12.svg"
   inkscape:export-xdpi="96"
   inkscape:export-ydpi="96"
   sodipodi:docname="AcademicAutomations.com_Logo6.svg"
   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="0.4691385"
     inkscape:cx="645.86471"
     inkscape:cy="487.06299"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g66"
     showgrid="false"><inkscape:grid
       id="grid1"
       units="mm"
       originx="0"
       originy="0"
       spacingx="1"
       spacingy="0.99999999"
       empcolor="#0099e5"
       empopacity="0.30196078"
       color="#0099e5"
       opacity="0.14901961"
       empspacing="5"
       dotted="false"
       gridanglex="30"
       gridanglez="30"
       visible="false" /></sodipodi:namedview><defs
     id="defs1" /><g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(75.157545,-3.595894)"><image
       width="383.95349"
       height="276.4465"
       preserveAspectRatio="none"
       style="image-rendering:optimizeQuality"
       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAooAAAHUCAYAAAC9GAmWAAAACXBIWXMAAAadAAAGnQHoL67mAAAg&#10;AElEQVR4nOy9W5RlR3km+P2xz8nMyqrKukgqkICU2+4ZmwQkhI3AeGy3bWQMveZplt1rWkoJIXMx&#10;YElentdZS2veexrTXC2uSsnuZa+et3Ebm+XGgw00xqCSUOJud7dRIoRQ6VK3rMrMc3b88xD/LU6m&#10;VFVSVWVWVXygynPZO3bs2Gf/+4vvvwTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ&#10;0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ&#10;0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQsLMxv7S8+6y2e+Cx4YXuS8Plh8F2d6ChoaGhoaHh&#10;3DC/tHxwZXHhOXn77PzS8vRZ7HYUwAEAmH9geXrl9oX1C9bBhssGtN0daGhoaGhoaDg3zC8tHwew&#10;92U08eTK4sKr5peWZ1cWF06dr341XH5oRLHhjLjuVz/ET/7Vx7f8rey94TY+8ciD7XfU0NDQcAHx&#10;mgeWhz+4fWE0v7R8DMDceWz6hyuLC68+j+01XGZoD/iGF8Sht72Pj66PMZidAk0NQYMEMAACMgPE&#10;QB6vA6fWsX56HdcfnMM/feVT7TfV0NDQcAEwv7TMF6rtlcUFml9anltZXDh+oY7RcGmiPdQbtsTw&#10;zXfx8KpdyLkDckYCADAYqTBENVcMgBjcJUwRsPbsCWz83efpJ9/++/w/vvxv2u+roaGh4WVifmn5&#10;GQBXXejjrCwuNJvdsAntR9GwCXtvuZf7xMg9g8AgEl7IBAKXXw0DnAjIGUQEygA6IBOBQNh46nmM&#10;Dz/Qfl8NDQ0NLwPzS8unAcxcxEM+ubK48KqLeLyGHY72IG/A/l/4AJ88cRLd/jmk2SnwuAdR+WkQ&#10;c/UrKVSR5a+i+KMzMsAEgNARAeMeo6MnMEOE49/+QvutNTQ0NJwD5peWVwHMbsOhn1hZXHjNNhy3&#10;YQeiPbyvYFx38x387KADz8yiG3RFKOwzQARKMPcyg0FciGHhj0VlzPK9kkYCgcUtrbszEWjM6FfX&#10;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&#10;"
       id="image1"
       x="-59.002583"
       y="-430.83948" /><g
       id="g71"><path
         style="fill:#23a3d4"
         d="m 562.80771,-149.70547 c -0.72206,-0.50575 -1.31283,-1.31461 -1.31283,-1.79747 0,-0.48285 2.02414,-5.45179 4.49808,-11.04208 2.47395,-5.59029 5.62969,-12.55649 7.01277,-15.48044 1.38307,-2.92395 2.98584,-6.37953 3.5617,-7.67907 0.57585,-1.29953 2.36037,-5.11095 3.96559,-8.46981 1.60521,-3.35887 3.53528,-7.7448 4.28904,-9.74652 0.75375,-2.00171 2.59175,-6.39822 4.08443,-9.77 1.49268,-3.37179 2.71397,-6.39293 2.71397,-6.71365 0,-0.32072 4.90257,-12.31466 10.8946,-26.6532 5.99202,-14.33854 11.99617,-28.4624 13.34255,-31.38635 1.34638,-2.92395 3.25161,-7.04407 4.23384,-9.15582 0.98223,-2.11174 2.9525,-6.30289 4.37837,-9.31367 1.42588,-3.01077 2.5925,-5.68752 2.5925,-5.94832 0,-0.26081 0.92428,-1.554 2.05395,-2.87377 1.12967,-1.31977 3.05683,-2.79454 4.28256,-3.27727 1.44907,-0.57069 4.6408,-0.91343 9.12475,-0.97987 6.89614,-0.10217 6.89614,-0.10217 8.46003,1.85779 0.86014,1.07798 4.74945,8.59815 8.64291,16.71149 3.89346,8.11334 7.43489,15.54897 7.86985,16.52362 0.43496,0.97466 1.78446,4.29733 2.9989,7.38373 1.21444,3.08639 4.73213,11.72534 7.81708,19.19767 3.08496,7.47232 7.04754,17.17453 8.80573,21.56046 1.7582,4.38593 3.95571,9.70221 4.88337,11.81396 0.92766,2.11174 2.39703,5.70023 3.26527,7.97441 0.86824,2.27419 2.225,5.53768 3.01502,7.2522 0.79002,1.71452 1.4364,3.23929 1.4364,3.38839 0,0.14909 1.60963,4.19548 3.57696,8.99199 1.96732,4.7965 5.1885,12.70812 7.15816,17.58138 1.96966,4.87325 3.92319,9.6579 4.34117,10.63255 0.41799,0.97466 1.18402,2.80136 1.70231,4.05935 0.51828,1.25799 0.94233,2.76744 0.94233,3.35432 0,0.58689 -0.41771,1.48477 -0.92824,1.9953 -0.79172,0.79172 -2.98538,0.92792 -14.91512,0.92604 -12.53486,-0.002 -14.17084,-0.11488 -15.75897,-1.08751 -1.41829,-0.86861 -2.16954,-2.19492 -3.76282,-6.64314 -1.09489,-3.05681 -2.33841,-6.35529 -2.76337,-7.32994 -0.42496,-0.97465 -1.29223,-2.96825 -1.92726,-4.43023 -0.63503,-1.46198 -1.86762,-4.65174 -2.73909,-7.08837 -0.87146,-2.43663 -2.16523,-5.62532 -2.87504,-7.08598 -0.70981,-1.46066 -1.95509,-2.98517 -2.7673,-3.3878 -1.11221,-0.55135 -8.50544,-0.73421 -29.95012,-0.74077 -19.55563,-0.006 -28.9223,0.19584 -29.90678,0.6444 -1.07424,0.48946 -2.11086,2.30259 -4.13705,7.23605 -1.487,3.62061 -4.58978,11.10177 -6.89507,16.6248 -3.13732,7.51639 -4.66086,10.45039 -6.05797,11.66628 -1.86653,1.62441 -1.86653,1.62441 -14.90043,1.62441 -10.84068,0 -13.25481,-0.15473 -14.34673,-0.91954 z m 97.43484,-63.8534 c 0.61121,-0.55313 1.08024,-1.78589 1.08024,-2.8392 0,-1.10963 -1.67026,-5.26077 -4.13489,-10.27656 -2.27418,-4.62822 -4.13488,-8.51613 -4.13488,-8.63979 0,-0.12366 -2.26254,-4.96086 -5.02787,-10.74933 -2.76533,-5.78848 -5.36721,-11.18903 -5.78196,-12.00124 -0.41474,-0.81221 -1.14052,-1.47675 -1.61285,-1.47675 -0.47232,0 -1.72134,1.72779 -2.77559,3.83954 -1.05426,2.11174 -2.29357,4.76988 -2.75403,5.90697 -0.46046,1.1371 -3.42012,7.38373 -6.57702,13.8814 -3.15691,6.49767 -6.37206,13.24255 -7.14479,14.98862 -0.77273,1.74606 -1.40496,3.92004 -1.40496,4.83106 0,0.91102 0.41771,2.07411 0.92824,2.58464 0.80469,0.80469 3.41274,0.92824 19.59418,0.92824 16.53992,0 18.78899,-0.11135 19.74618,-0.9776 z m -158.70348,-13.61069 c 1.95393,1.14478 6.07584,3.3804 9.03587,5.20146 2.35693,1.45002 6.14375,3.75778 6.9407,4.55474 0.79695,0.79695 1.44901,1.90853 1.44901,2.47019 0,0.56165 -0.58259,1.78802 -1.29463,2.72526 -0.71204,0.93724 -2.31362,2.83511 -3.55906,4.21748 -1.24543,1.38237 -3.05518,3.76028 -4.02165,5.28425 -1.1587,1.82708 -1.75722,3.5392 -1.75722,5.02667 0,1.72251 0.45386,2.74992 1.91976,4.34581 1.22816,1.33705 2.77099,2.28117 4.28256,2.62067 1.52179,0.3418 3.27067,0.30212 4.91346,-0.11147 1.61188,-0.4058 3.67727,-1.65551 5.61163,-3.39542 1.68353,-1.51429 3.8278,-3.33888 4.76504,-4.05463 0.93724,-0.71576 2.21238,-1.30137 2.83364,-1.30137 0.62125,0 3.04419,1.07997 5.38429,2.39993 2.3401,1.31997 5.49293,3.11421 7.00627,3.98721 1.51335,0.873 3.33481,2.11827 4.04769,2.76727 0.71288,0.64901 1.66765,1.89842 2.12171,2.77648 0.45407,0.87807 0.82558,2.34798 0.82558,3.26648 0,0.91849 -0.41486,2.26228 -0.92191,2.98619 -0.50705,0.72391 -1.70321,1.72023 -2.65814,2.21405 -1.52419,0.78819 -1.73623,1.21695 -1.73623,3.51075 0,2.28727 -0.25523,2.80758 -2.04792,4.17493 -1.72826,1.31821 -2.41375,1.50022 -4.39159,1.16607 -2.17144,-0.36687 -2.41002,-0.26766 -3.24652,1.34994 -0.49656,0.96025 -1.33313,1.91102 -1.85904,2.11283 -0.52592,0.20182 -1.66546,0.36672 -2.53231,0.36647 -0.86686,-2.6e-4 -3.27842,-0.80579 -5.35902,-1.79007 -2.08059,-0.98428 -5.48246,-2.97767 -7.55969,-4.42977 -2.07724,-1.45209 -3.88862,-2.64016 -4.0253,-2.64016 -0.13668,0 -1.8846,-1.12278 -3.88428,-2.49506 -1.99968,-1.37228 -3.99563,-3.04426 -4.43545,-3.71551 -0.43982,-0.67125 -0.76235,-2.21331 -0.71673,-3.42679 0.0639,-1.69921 -0.31255,-2.61973 -1.63774,-4.00493 -0.94638,-0.98923 -2.65104,-2.34885 -3.78813,-3.02136 -1.13709,-0.67252 -2.99779,-1.81576 -4.13488,-2.54054 -1.1371,-0.72478 -6.05466,-3.65149 -10.92791,-6.5038 -4.87326,-2.8523 -10.51529,-6.20928 -12.53785,-7.45994 -2.02256,-1.25066 -3.77438,-2.27393 -3.89293,-2.27393 -0.11854,0 -2.45093,-1.33075 -5.18308,-2.95721 -2.73214,-1.62647 -5.99002,-3.55362 -7.23972,-4.28256 -1.24971,-0.72894 -3.8388,-2.59549 -5.75353,-4.14789 -3.40783,-2.76294 -3.64461,-3.15589 -11.21245,-18.60698 -4.25211,-8.68143 -8.12409,-16.44896 -8.60439,-17.26117 -0.4803,-0.81221 -1.42527,-2.73936 -2.09993,-4.28256 -0.67466,-1.5432 -1.45039,-2.80581 -1.72383,-2.80581 -0.27345,0 -1.03545,1.18157 -1.69334,2.62573 -0.65789,1.44415 -1.19616,2.90902 -1.19616,3.25527 0,0.34625 -0.48762,1.75636 -1.08359,3.13357 -0.59597,1.37722 -1.42689,3.43438 -1.84649,4.57147 -0.4196,1.13709 -1.63947,4.59268 -2.71084,7.67907 -1.07136,3.0864 -2.47517,6.9407 -3.11957,8.56512 -0.6444,1.62442 -1.50051,3.88383 -1.90246,5.02093 -0.40195,1.13709 -1.20307,3.31495 -1.78026,4.83967 -0.95532,2.52358 -0.9655,2.84148 -0.11347,3.54419 0.72768,0.60015 3.98337,0.72595 14.62859,0.56525 13.06048,-0.19716 13.79911,-0.14865 15.99988,1.05063 1.269,0.69153 3.40371,2.11362 4.7438,3.16019 1.34008,1.04657 4.13113,2.91313 6.20232,4.14791 2.0712,1.23478 5.89232,3.50797 8.49139,5.05152 2.59907,1.54356 5.1243,2.98644 5.61163,3.20639 0.48733,0.21996 1.87055,1.00364 3.07384,1.7415 1.20328,0.73787 5.3234,3.18776 9.15581,5.4442 3.83241,2.25644 7.65264,4.59802 8.4894,5.20351 0.83676,0.60549 2.3458,2.74652 3.35342,4.75785 1.00762,2.01132 3.31341,6.77828 5.12397,10.59325 1.81056,3.81496 3.29193,7.27785 3.29193,7.69531 0,0.41746 0.3602,1.28333 0.80044,1.92417 0.44024,0.64083 1.6773,3.37628 2.74904,6.07877 1.94861,4.91361 1.94861,4.91361 0.66105,6.20232 -1.23506,1.23617 -1.83487,1.29668 -14.71067,1.484 -11.75021,0.17095 -13.65731,0.0701 -15.30224,-0.8095 -1.32207,-0.70693 -2.41651,-2.12979 -3.69186,-4.79972 -0.99701,-2.08721 -1.81273,-4.06259 -1.81273,-4.38975 0,-0.32715 -0.49678,-1.57783 -1.10395,-2.77929 -0.60716,-1.20146 -1.63611,-3.38063 -2.28654,-4.84261 -0.65044,-1.46197 -2.01436,-4.41855 -3.03095,-6.57016 -1.01658,-2.15161 -1.84833,-4.1749 -1.84833,-4.4962 0,-0.3213 -0.79236,-2.33169 -1.7608,-4.46753 -1.73646,-3.8297 -1.79972,-3.88976 -4.5779,-4.34675 -1.54942,-0.25486 -14.01206,-0.43328 -27.69477,-0.39647 -16.57219,0.0446 -25.27595,0.28008 -26.07068,0.70541 -0.65617,0.35117 -1.75512,1.71688 -2.44212,3.03491 -0.68699,1.31804 -1.24908,2.78108 -1.24908,3.2512 0,0.47012 -0.63519,2.25618 -1.41153,3.96902 -0.77635,1.71284 -1.8396,4.12007 -2.36279,5.3494 -0.5232,1.22934 -0.95972,2.69132 -0.97005,3.24884 -0.0103,0.55753 -0.40905,1.52966 -0.88605,2.1603 -0.47699,0.63064 -0.86726,1.62156 -0.86726,2.20203 0,0.58048 -0.64005,2.45682 -1.42233,4.16966 -0.78228,1.71284 -1.89417,4.26228 -2.47086,5.66543 -0.63362,1.54166 -1.69539,2.88569 -2.68322,3.39651 -1.27935,0.66158 -4.5943,0.84533 -15.25007,0.84533 -12.82778,0 -13.68372,-0.0683 -14.79677,-1.18139 -0.64977,-0.64977 -1.17976,-1.51367 -1.17776,-1.91977 0.002,-0.4061 0.4277,-1.53581 0.946,-2.51047 0.51829,-0.97465 1.33783,-3.07995 1.82119,-4.67845 0.48337,-1.5985 1.38674,-3.85398 2.0075,-5.01218 0.62076,-1.1582 1.12964,-2.50848 1.13086,-3.00062 10e-4,-0.49213 0.53284,-1.76511 1.18139,-2.82884 0.64856,-1.06372 1.18764,-2.39279 1.19798,-2.95348 0.0103,-0.5607 0.40905,-1.53543 0.88604,-2.16607 0.477,-0.63064 0.86726,-1.53187 0.86726,-2.00274 0,-0.47087 0.4976,-1.94849 1.10578,-3.28361 0.60818,-1.33512 1.44336,-3.49075 1.85596,-4.79028 0.4126,-1.29954 1.37697,-3.74128 2.14306,-5.42611 0.76608,-1.68482 1.39288,-3.23661 1.39288,-3.44842 0,-0.21181 1.22299,-3.48506 2.71777,-7.2739 1.49477,-3.78883 3.19401,-7.95204 3.77608,-9.25157 0.58207,-1.29954 1.5025,-3.68452 2.0454,-5.29995 0.54289,-1.61544 1.73346,-4.80521 2.6457,-7.08838 0.91224,-2.28316 2.60095,-6.54353 3.75271,-9.46749 1.15175,-2.92395 3.07427,-7.84151 4.27227,-10.9279 1.19799,-3.0864 2.78749,-7.07361 3.53221,-8.86047 0.74472,-1.78686 2.47573,-6.17279 3.84669,-9.74651 1.37095,-3.57372 3.41896,-8.75709 4.55113,-11.5186 1.13216,-2.76151 2.4062,-5.95128 2.8312,-7.08837 0.42499,-1.1371 1.7875,-4.72559 3.02779,-7.97442 1.24029,-3.24884 2.8792,-7.0316 3.64201,-8.40613 0.76281,-1.37453 2.54748,-3.52071 3.96593,-4.76928 1.41846,-1.24858 3.59154,-2.56346 4.82908,-2.92198 1.23754,-0.35851 4.79224,-0.58572 7.89932,-0.5049 5.21029,0.13553 6.00499,0.32273 10.22745,2.40908 2.70728,1.3377 5.13116,3.01024 5.93133,4.09279 0.74422,1.00686 2.88471,5.02042 4.75665,8.91902 1.87194,3.89861 5.19482,10.80977 7.3842,15.35814 2.18937,4.54837 6.66366,13.71895 9.94287,20.37907 4.3403,8.81522 6.57293,12.68402 8.20731,14.222 1.23482,1.16198 4.10583,3.19006 6.38001,4.50683 2.27419,1.31678 7.32927,4.24644 11.22326,6.52786 m 22.88953,39.13583 c -1.55968,-0.95096 -1.91977,-1.54704 -1.91977,-3.17798 0,-1.64333 0.84224,-3.01109 4.64299,-7.54008 2.55365,-3.04293 6.75141,-7.54264 9.32835,-9.99935 3.76365,-3.58805 5.26148,-4.61556 7.61398,-5.2232 1.61075,-0.41605 5.71968,-1.55249 9.13096,-2.52543 3.41128,-0.97295 7.06666,-2.03239 8.12306,-2.35433 1.05641,-0.32194 12.1839,-8.80481 24.72775,-18.85084 12.54386,-10.04602 23.15807,-18.2655 23.58713,-18.2655 0.42907,0 0.94563,0.52145 1.1479,1.15877 0.2087,0.65754 -0.24105,2.63769 -1.03977,4.5779 -0.77415,1.88053 -4.93305,11.56704 -9.24201,21.52557 -7.83446,18.10643 -7.83446,18.10643 -14.33668,23.27823 -3.57622,2.84449 -9.33357,7.73913 -12.7941,10.87698 -3.46054,3.13785 -7.19662,6.1527 -8.3024,6.69968 -1.10579,0.54697 -2.39012,0.9945 -2.85408,0.9945 -0.46395,0 -1.95154,-0.89559 -3.30576,-1.99021 -1.35421,-1.09461 -4.70127,-3.48694 -7.43791,-5.31628 -3.90919,-2.61315 -5.46648,-3.32607 -7.26538,-3.32607 -1.25932,0 -3.10553,0.4219 -4.10269,0.93755 -0.99716,0.51565 -3.47758,2.48608 -5.51203,4.37873 -2.03446,1.89265 -4.51488,3.86308 -5.51204,4.37873 -0.99716,0.51565 -2.02558,0.93656 -2.28537,0.93534 -0.2598,-0.001 -1.33626,-0.52893 -2.39213,-1.17271 z m -96.49969,-122.94129 c -1.09953,-0.20079 -3.32821,-0.69541 -4.95263,-1.09916 -1.62442,-0.40376 -4.09031,-1.23629 -5.47976,-1.85006 -1.38944,-0.61378 -2.82889,-1.11596 -3.19878,-1.11596 -0.36988,0 -2.45387,-1.35426 -4.63109,-3.00947 -2.17721,-1.65521 -4.9371,-4.29259 -6.13307,-5.86086 -1.19598,-1.56826 -2.96655,-4.48649 -3.93462,-6.48493 -1.7242,-3.55942 -1.75676,-3.79835 -1.59605,-11.7124 0.15643,-7.70281 0.21906,-8.07012 1.34546,-7.89121 0.64977,0.10321 5.0357,2.05625 9.74651,4.3401 4.71082,2.28385 12.38619,6.035 17.05638,8.33589 6.68259,3.29235 9.07681,4.19229 11.2403,4.22502 1.51197,0.0229 3.93753,-0.45895 5.39013,-1.07072 1.45261,-0.61176 9.38719,-4.44308 17.63241,-8.51403 11.67333,-5.76353 15.20324,-7.26795 15.94884,-6.79725 0.78972,0.49854 0.93296,1.57652 0.81737,6.15124 -0.0771,3.05072 -0.26391,6.61697 -0.41517,7.92501 -0.15126,1.30804 -0.96177,3.8783 -1.80112,5.71169 -1.0089,2.20373 -2.77439,4.50067 -5.2094,6.77757 -2.02582,1.89426 -5.35787,4.44092 -7.40455,5.65923 -2.04669,1.21832 -3.93423,2.21512 -4.19453,2.21512 -0.2603,0 -1.71481,0.54919 -3.23225,1.22043 -1.51744,0.67123 -4.27582,1.62503 -6.12974,2.11954 -2.07421,0.55328 -6.35076,0.93588 -11.11813,0.99469 -4.26105,0.0526 -8.64698,-0.0687 -9.74651,-0.26948 z m 39.88521,-19.57099 c 0.8181,-0.73099 1.65873,-2.05828 1.86808,-2.94952 0.31286,-1.33194 0.0118,-1.98925 -1.69079,-3.69186 -1.13927,-1.13928 -2.6562,-2.07142 -3.37094,-2.07142 -0.71475,0 -2.23167,0.93214 -3.37095,2.07142 -1.70262,1.70261 -2.00365,2.35992 -1.69079,3.69186 0.20935,0.89124 1.04998,2.21853 1.86808,2.94952 0.81809,0.73098 2.25524,1.32906 3.19366,1.32906 0.93841,0 2.37556,-0.59808 3.19365,-1.32906 z m 147.88591,19.25459 c -0.88869,-0.46832 -2.28293,-1.72614 -3.09832,-2.79517 -0.81539,-1.06903 -1.74962,-3.35209 -2.07607,-5.07346 -0.32645,-1.72138 -0.59355,-9.14451 -0.59355,-16.49586 0,-11.82302 0.13422,-13.7333 1.16264,-16.54693 0.63945,-1.74946 2.03497,-4.62944 3.10116,-6.39996 1.06619,-1.77052 3.22696,-4.24905 4.80172,-5.50785 1.57475,-1.25881 4.35921,-2.99647 6.18768,-3.86148 2.82495,-1.33641 4.16989,-1.58287 8.95056,-1.64017 5.62607,-0.0674 5.62607,-0.0674 6.41851,2.43606 0.52061,1.6447 1.58316,3.12975 3.09745,4.32909 1.26775,1.00408 3.27863,2.09443 4.46861,2.423 1.18999,0.32857 3.29632,0.42754 4.68074,0.21993 1.38443,-0.20761 3.60748,-1.1673 4.94011,-2.13266 1.43939,-1.04268 2.96513,-2.88933 3.75851,-4.54902 1.33554,-2.79383 1.33554,-2.79383 7.22462,-2.73365 5.15094,0.0526 6.33332,0.26858 9.43327,1.72283 1.9493,0.91445 4.37982,2.34935 5.40115,3.18865 1.02132,0.83931 2.94847,2.91371 4.28255,4.6098 1.33408,1.69608 2.4256,3.36818 2.4256,3.71577 0,0.3476 0.54647,1.37113 1.21437,2.27452 1.17192,1.58511 1.20805,2.26039 1.03372,19.32143 -0.17599,17.22361 -0.21536,17.73474 -1.52878,19.84693 -0.74148,1.19241 -2.28511,2.72084 -3.43028,3.39651 -2.0474,1.208 -2.65064,1.22744 -36.16116,1.16583 -28.44827,-0.0523 -34.346,-0.20335 -35.69481,-0.91414 z m 12.56302,-19.41227 c 0.95302,-0.49282 2.13598,-1.67579 2.62881,-2.6288 0.49282,-0.95302 0.89604,-2.56999 0.89604,-3.59326 0,-1.32826 -0.57453,-2.43503 -2.00837,-3.86887 -1.53034,-1.53034 -2.50791,-2.00837 -4.10709,-2.00837 -1.15429,0 -2.79569,0.31756 -3.64755,0.7057 -0.85186,0.38813 -1.92763,1.43819 -2.39059,2.33345 -0.46296,0.89527 -0.84174,2.45588 -0.84174,3.46802 0,1.01215 0.28277,2.36864 0.62839,3.01443 0.34562,0.6458 1.47533,1.69058 2.51047,2.32175 1.03513,0.63117 2.49335,1.14857 3.24047,1.14979 0.74712,10e-4 2.13815,-0.40101 3.09116,-0.89384 z m -135.60072,-0.43302 c -0.151,-0.40611 -0.34202,-7.91535 -0.42449,-16.68721 -0.14993,-15.94884 -0.14993,-15.94884 -1.67724,-16.12638 -0.84991,-0.0988 -1.86444,0.22869 -2.28744,0.73838 -0.41808,0.50375 -1.22337,0.91591 -1.78955,0.91591 -0.56617,0 -1.66333,0.48228 -2.43813,1.07174 -0.77481,0.58946 -2.87071,1.68198 -4.65757,2.42781 -1.78686,0.74583 -3.66849,1.72552 -4.1814,2.17709 -0.51291,0.45157 -1.19813,0.82103 -1.52272,0.82103 -0.32458,0 -6.55028,3.01399 -13.83488,6.69776 -7.2846,3.68376 -15.18068,7.43176 -17.54686,8.32889 -2.89983,1.09945 -4.82524,1.50573 -5.90698,1.24642 -0.88266,-0.21159 -4.92751,-1.98237 -8.98856,-3.93507 -4.06104,-1.95271 -7.84889,-3.7998 -8.41744,-4.10465 -0.56855,-0.30485 -1.4989,-0.79655 -2.06744,-1.09267 -0.56855,-0.29611 -8.07779,-4.017 -16.68721,-8.26864 -8.60942,-4.25164 -16.45093,-8.16951 -17.42558,-8.70638 -0.97465,-0.53687 -2.17082,-1.2036 -2.65814,-1.48163 -0.48733,-0.27802 -1.28477,-0.65381 -1.7721,-0.83508 -0.48732,-0.18128 -2.0383,-0.91057 -3.44662,-1.62066 -1.40832,-0.7101 -2.78529,-1.70412 -3.05995,-2.20895 -0.27465,-0.50484 -0.26946,-1.28987 0.0115,-1.74454 0.281,-0.45466 2.58833,-1.96962 5.12739,-3.36657 2.53907,-1.39695 5.01521,-2.69162 5.50254,-2.87704 0.48732,-0.18542 1.55058,-0.70674 2.36279,-1.15849 0.81221,-0.45175 6.66011,-3.37651 12.99535,-6.49946 6.33523,-3.12296 12.05023,-5.96902 12.7,-6.32458 0.64976,-0.35557 2.51046,-1.2925 4.13488,-2.08208 1.62442,-0.78957 3.48512,-1.72235 4.13488,-2.07284 0.64977,-0.35048 3.42405,-1.78542 6.16506,-3.18875 2.74101,-1.40332 5.22521,-2.5515 5.52044,-2.5515 0.29523,0 1.24235,-0.4942 2.10471,-1.09822 1.15775,-0.81092 2.41785,-1.05747 4.81677,-0.94247 2.93245,0.14057 6.18257,1.63025 33.37442,15.29698 16.56907,8.32768 30.75381,15.7656 31.52164,16.5287 1.08469,1.07801 1.26391,1.62361 0.80355,2.44623 -0.32588,0.58231 -1.61864,1.6331 -2.8728,2.33508 -2.2803,1.27633 -2.2803,1.27633 -2.43678,19.18999 -0.10495,12.01454 -0.37192,18.17324 -0.8107,18.70193 -0.35982,0.43356 -1.42745,0.78829 -2.37252,0.78829 -0.94507,0 -1.84185,-0.33227 -1.99285,-0.73837 z m 154.75221,-35.56269 c -1.39117,-1.39116 -1.44989,-1.76193 -1.44989,-9.15392 0,-7.70403 0,-7.70403 -2.89845,-10.51173 -2.04804,-1.98394 -3.10535,-3.58428 -3.60367,-5.45453 -0.38787,-1.45576 -0.57058,-3.65072 -0.40601,-4.87768 0.16457,-1.22697 0.8131,-3.22567 1.44117,-4.44155 0.62807,-1.21588 2.27087,-3.00813 3.65068,-3.98278 2.23017,-1.57532 2.98424,-1.7721 6.79092,-1.7721 3.71458,0 4.59443,0.21639 6.63793,1.63254 1.29567,0.8979 2.90538,2.62569 3.57714,3.83954 0.67176,1.21384 1.40689,3.08262 1.63361,4.15284 0.22788,1.07562 0.0848,3.3109 -0.32001,4.99818 -0.57011,2.37648 -1.36654,3.67016 -3.59685,5.84255 -2.8646,2.79021 -2.8646,2.79021 -2.8646,10.53448 0,7.43471 -0.058,7.80222 -1.4499,9.19416 -1.00103,1.00104 -2.10655,1.4499 -3.57103,1.4499 -1.46448,0 -2.57,-0.44886 -3.57104,-1.4499 z"
         id="path72"
         sodipodi:nodetypes="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscsssssssssssssssssssssssssssssscsssssssssssssssssssssscssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" /><path
         style="fill:#09446c"
         d="m -45.816662,-164.84609 c -0.707396,-0.1377 -1.591065,-0.61774 -1.963711,-1.06675 -0.515636,-0.6213 -0.461076,-1.2833 0.228327,-2.77035 0.498226,-1.07468 1.603997,-3.81467 2.457268,-6.08885 0.853272,-2.27419 1.936126,-5.19814 2.406342,-6.49768 0.470216,-1.29953 1.229332,-3.16023 1.686923,-4.13488 0.457591,-0.97465 1.793998,-4.29733 2.969793,-7.38372 1.175795,-3.0864 2.828336,-7.33942 3.672314,-9.45116 0.843978,-2.11175 2.124874,-5.43442 2.846437,-7.38373 0.721562,-1.9493 2.681869,-6.99976 4.356239,-11.22325 1.674369,-4.22349 3.271579,-8.2107 3.549355,-8.86047 0.277777,-0.64976 1.42581,-3.57372 2.551186,-6.49767 1.125376,-2.92395 2.786364,-7.17698 3.691085,-9.45116 0.904721,-2.27419 2.160069,-5.46396 2.789664,-7.08837 0.629594,-1.62442 1.757247,-4.54838 2.505896,-6.49768 0.748648,-1.9493 2.6186335,-6.73395 4.1555226,-10.63256 1.5368891,-3.8986 3.7157327,-9.48069 4.8418746,-12.40465 1.1261419,-2.92395 2.55900004,-6.40865 3.18412913,-7.74377 0.6251291,-1.33512 1.13659837,-2.73425 1.13659837,-3.10917 0,-0.37493 0.2635886,-1.14326 0.5857524,-1.7074 0.3221638,-0.56414 1.7629166,-4.08256 3.2016727,-7.81873 1.4387562,-3.73616 3.292145,-7.98918 4.1186419,-9.45116 0.8264969,-1.46198 2.4312263,-3.39138 3.5660653,-4.28756 1.134839,-0.89619 2.80571,-1.93368 3.713047,-2.30555 0.907338,-0.37186 3.776216,-0.75306 6.375286,-0.84709 2.945134,-0.10656 5.949639,0.16975 7.974419,0.73337 1.78686,0.49739 4.179186,1.45477 5.316279,2.12751 1.137093,0.67274 2.734381,1.83376 3.549529,2.58005 0.815148,0.74628 3.194926,4.89054 5.288396,9.20947 2.093469,4.31893 5.642986,11.70689 7.887816,16.41771 2.244829,4.71081 4.361669,9.09674 4.704089,9.74651 0.34242,0.64977 1.362232,2.64337 2.266249,4.43023 0.904018,1.78686 3.264606,6.57151 5.245752,10.63256 2.067727,4.23852 4.521976,8.32728 5.761636,9.59884 1.187753,1.21831 2.381965,2.21511 2.653805,2.21511 0.27184,0 3.474115,1.7715 7.116166,3.93667 3.642051,2.16517 8.748423,5.19188 11.347492,6.72602 2.59907,1.53415 5.788838,3.35956 7.088373,4.05648 1.299533,0.69692 3.691863,2.08937 5.316283,3.09434 1.62441,1.00496 3.75093,2.27547 4.72558,2.82335 0.97465,0.54788 2.77576,1.60821 4.00247,2.3563 1.22671,0.74808 2.48932,1.84399 2.80581,2.43536 0.31649,0.59137 0.57544,1.32908 0.57544,1.63936 0,0.31029 -2.02975,2.91945 -4.51055,5.79814 -2.4808,2.87869 -5.01711,6.36061 -5.63624,7.7376 -0.93493,2.07935 -1.02003,2.89603 -0.50214,4.81929 0.36994,1.37388 1.4509,3.04211 2.65782,4.10181 1.32724,1.16533 2.97542,1.92725 4.74213,2.19218 1.90724,0.28601 3.44277,0.12373 5.19353,-0.54887 1.36712,-0.52521 4.47929,-2.69494 6.91591,-4.82163 3.51761,-3.07016 4.73444,-3.80976 5.90698,-3.59031 0.81221,0.15201 3.98673,1.6918 7.05448,3.42177 3.06776,1.72997 6.85561,4.37004 8.41745,5.86682 2.12296,2.03454 2.8397,3.15684 2.8397,4.44648 0,0.94877 -0.41486,2.31733 -0.92191,3.04124 -0.50704,0.72392 -1.70321,1.72024 -2.65814,2.21405 -1.52075,0.78641 -1.73623,1.21934 -1.73623,3.4883 0,2.18302 -0.29399,2.83784 -1.86913,4.16323 -1.31045,1.10267 -2.23739,1.45601 -3.10117,1.18211 -0.67761,-0.21487 -1.75027,-0.43381 -2.38368,-0.48654 -0.65065,-0.0542 -1.43161,0.45491 -1.79516,1.17019 -0.35392,0.69634 -0.99793,1.69315 -1.43113,2.21512 -0.43321,0.52198 -1.56012,0.94905 -2.50425,0.94905 -0.94414,0 -3.37037,-0.82659 -5.39163,-1.83687 -2.02126,-1.01028 -7.01825,-4.05106 -11.10443,-6.7573 -4.08618,-2.70623 -7.79383,-5.35951 -8.23922,-5.89618 -0.4454,-0.53667 -0.84971,-2.15748 -0.89848,-3.6018 -0.068,-2.0148 -0.48405,-3.03873 -1.7873,-4.39903 -0.93425,-0.97514 -5.426929,-3.93847 -9.983736,-6.58518 -4.556807,-2.64671 -10.012895,-5.91843 -12.124639,-7.27049 -2.111744,-1.35207 -4.566145,-2.83127 -5.454224,-3.28712 -0.888079,-0.45585 -5.006431,-2.82243 -9.151894,-5.25906 -4.145463,-2.43662 -7.976944,-4.61096 -8.514402,-4.83186 -0.537458,-0.22089 -1.155338,-0.68986 -1.373067,-1.04216 -0.217729,-0.35229 -1.405986,-1.15585 -2.640569,-1.78569 -1.234584,-0.62984 -3.741781,-2.51341 -5.57155,-4.18572 -1.829769,-1.6723 -3.326852,-3.281 -3.326852,-3.57487 0,-0.29388 -0.632197,-1.79564 -1.404883,-3.33724 -0.772685,-1.54161 -3.125104,-6.2585 -5.227597,-10.48199 -2.102493,-4.22349 -5.639508,-11.40046 -7.860035,-15.94884 -2.220526,-4.54837 -4.307799,-8.45158 -4.638385,-8.67381 -0.330587,-0.22223 -0.817145,-0.2705 -1.081243,-0.10728 -0.264097,0.16322 -0.901257,1.27539 -1.415911,2.47149 -0.514654,1.19609 -1.151071,2.83926 -1.41426,3.65146 -0.26319,0.81221 -1.182188,3.33745 -2.042218,5.61163 -0.86003,2.27419 -2.45707,6.66012 -3.548977,9.74651 -1.091908,3.0864 -2.557849,7.07361 -3.257647,8.86047 -0.699798,1.78686 -1.812254,4.84372 -2.472123,6.79302 -0.65987,1.9493 -1.4373585,3.99011 -1.7277522,4.53512 -0.2903938,0.54501 -0.381412,1.3729 -0.2022628,1.83975 0.1791492,0.46686 1.006664,1.15909 1.838922,1.53829 1.094565,0.49872 5.130187,0.58073 14.587272,0.29646 12.91367,-0.38818 13.103065,-0.37633 15.436867,0.96551 1.299535,0.74717 3.027326,1.93409 3.839535,2.63758 0.812209,0.70349 3.337442,2.48124 5.611628,3.95055 2.274186,1.46931 5.278557,3.25438 6.67638,3.96683 1.397823,0.71244 5.783754,3.22816 9.746512,5.59049 3.962758,2.36232 8.754625,5.20729 10.648593,6.32216 1.893968,1.11486 4.168748,2.42575 5.055067,2.91307 0.886319,0.48733 2.526477,1.60261 3.644794,2.47841 1.118318,0.8758 2.613198,2.7365 3.321955,4.13489 0.708757,1.39838 1.863342,3.87159 2.565745,5.49601 0.702402,1.62441 2.315475,5.06822 3.584606,7.6529 1.269131,2.58467 2.307511,5.1232 2.307511,5.64116 0,0.51796 0.249337,1.19427 0.554083,1.50291 0.304746,0.30864 1.499467,2.77431 2.654927,5.47926 1.55761,3.64638 1.95476,5.19105 1.5359,5.9737 -0.31641,0.59122 -1.54937,1.2183 -2.8026,1.42541 -1.230714,0.20339 -7.367778,0.37272 -13.637923,0.37629 -9.078223,0.005 -11.755599,-0.17725 -13.14481,-0.89563 -1.197997,-0.61951 -2.275724,-2.05373 -3.440029,-4.57791 -0.932516,-2.02167 -2.28835,-5.13775 -3.012966,-6.92461 -0.724616,-1.78686 -1.810219,-4.31209 -2.41245,-5.61162 -0.602231,-1.29954 -1.903732,-4.12859 -2.892224,-6.28678 -0.988491,-2.15819 -1.80557,-4.1518 -1.81573,-4.43023 -0.01016,-0.27844 -0.672264,-1.83532 -1.471343,-3.45974 -0.799079,-1.62442 -1.455301,-3.29233 -1.458272,-3.70648 -0.003,-0.41414 -0.736389,-1.07034 -1.629819,-1.45822 -1.18026,-0.5124 -8.973226,-0.70508 -28.501163,-0.7047 -20.7190235,4.1e-4 -27.18772534,0.17357 -28.2340896,0.75577 -0.7465398,0.41538 -1.6434507,1.47006 -1.9931354,2.34373 -0.3496847,0.87368 -1.1644032,2.91758 -1.8104856,4.542 -0.6460823,1.62441 -1.8271696,4.68127 -2.6246382,6.79302 -0.7974687,2.11174 -1.6779044,4.50407 -1.9565237,5.31628 -0.2786195,0.81221 -1.0351085,2.80581 -1.6810865,4.43023 -0.645978,1.62442 -2.020264,5.11532 -3.053968,7.75755 -1.367866,3.49638 -2.273697,4.98368 -3.327771,5.46395 -0.940813,0.42866 -5.836982,0.63171 -13.972841,0.57945 -6.888492,-0.0442 -13.103309,-0.19311 -13.810704,-0.33081 z M 15.6788,-328.12835 c -1.647449,-0.20109 -3.557125,-0.66627 -4.243725,-1.03373 -0.686599,-0.36745 -1.8237466,-0.6681 -2.526994,-0.6681 -0.7032473,0 -2.2491525,-0.43396 -3.4353449,-0.96435 -1.1861925,-0.5304 -3.2790902,-1.48091 -4.65088382,-2.11225 -1.37179366,-0.63134 -4.34746848,-2.9829 -6.61261078,-5.22569 -3.0202726,-2.99047 -4.6784465,-5.2579 -6.2186205,-8.5035 -2.059185,-4.33932 -2.10018,-4.57017 -2.10018,-11.82624 0,-6.10457 0.151483,-7.40053 0.86504,-7.40053 0.475771,0 3.4661785,1.29132 6.6453486,2.8696 3.17917,1.57827 10.5649604,5.22085 16.4128674,8.09462 5.847907,2.87377 11.695814,5.51076 12.995349,5.85998 1.729137,0.46467 2.996445,0.45003 4.725581,-0.0546 1.299535,-0.37924 3.824768,-1.33998 5.611628,-2.13497 1.786861,-0.79499 9.310791,-4.47139 16.719846,-8.16977 9.422666,-4.70351 13.601457,-6.51325 13.905082,-6.02198 0.238741,0.38629 0.360124,3.03636 0.269739,5.88903 -0.09038,2.85268 -0.415201,6.51576 -0.721815,8.14018 -0.306615,1.62442 -1.113877,4.08414 -1.793916,5.46604 -0.68004,1.38191 -2.73439,3.98677 -4.565223,5.78858 -1.830833,1.80182 -5.126773,4.32611 -7.324311,5.60954 -2.197538,1.28343 -4.21496,2.33515 -4.48316,2.33715 -0.2682,0.002 -1.239023,0.39554 -2.157383,0.87453 -0.91836,0.47899 -3.550898,1.43113 -5.850083,2.11585 -3.11949,0.92903 -5.993596,1.26923 -11.325603,1.34059 -3.929896,0.0526 -8.493179,-0.0689 -10.140628,-0.26999 z m 39.355989,-17.66818 c 0.625046,-0.33451 1.53792,-1.38457 2.028608,-2.33345 0.490689,-0.94889 0.892161,-2.29666 0.892161,-2.99505 0,-0.69839 -0.903768,-2.17357 -2.008372,-3.27817 -1.44721,-1.44721 -2.536526,-2.00837 -3.898605,-2.00837 -1.362079,0 -2.451395,0.56116 -3.898605,2.00837 -1.104604,1.1046 -2.008372,2.57978 -2.008372,3.27817 0,0.69839 0.398715,2.04083 0.886034,2.9832 0.487318,0.94237 1.351214,1.98434 1.919767,2.31549 0.568554,0.33116 1.915105,0.61018 2.992335,0.62006 1.07723,0.01 2.470002,-0.25573 3.095049,-0.59025 z m 25.367281,-17.61768 c 0,-8.76587 -0.161346,-16.35841 -0.358547,-16.87231 -0.197201,-0.51389 -0.956984,-0.93435 -1.688407,-0.93435 -0.731423,0 -6.218624,2.40452 -12.193779,5.34339 -5.975155,2.93887 -11.329093,5.59701 -11.89764,5.90698 -0.568546,0.30997 -1.565348,0.82939 -2.215116,1.15428 -0.649767,0.32488 -1.779477,0.9025 -2.510465,1.28361 -0.730988,0.3811 -4.38593,2.20647 -8.122093,4.05637 -3.736163,1.84991 -7.723372,3.78676 -8.860465,4.30412 -1.137093,0.51736 -3.327229,1.35971 -4.866969,1.87189 -2.72562,0.90665 -2.904954,0.88946 -6.793023,-0.65133 -2.196423,-0.87041 -4.699066,-2.07615 -5.561427,-2.67943 -0.862362,-0.60327 -1.763344,-1.09686 -2.002182,-1.09686 -0.238838,0 -4.8495487,-2.16198 -10.2460232,-4.8044 -5.3964745,-2.64242 -14.4635158,-7.1435 -20.1489808,-10.00241 -5.685466,-2.8589 -13.093156,-6.60479 -16.461534,-8.3242 -3.368379,-1.71941 -6.255617,-3.46834 -6.416085,-3.88651 -0.160468,-0.41818 -0.0095,-1.10041 0.335468,-1.51608 0.344976,-0.41567 8.814307,-4.83738 18.820736,-9.82602 10.006429,-4.98865 18.5922287,-9.28218 19.0795543,-9.54118 0.4873256,-0.259 6.0473256,-3.05704 12.3555557,-6.21786 9.78366,-4.90224 11.872189,-5.73957 14.209105,-5.69674 2.34005,0.0429 6.740756,2.04394 30.174677,13.72084 15.089295,7.51885 28.764151,14.36018 30.38857,15.20296 1.624419,0.84278 3.285756,1.79118 3.69186,2.10755 0.406105,0.31637 0.738373,1.0782 0.738373,1.69297 0,0.62717 -0.842574,1.63141 -1.919768,2.28812 -1.055872,0.6437 -2.185581,1.25981 -2.510465,1.36913 -0.368535,0.12401 -0.701779,7.17856 -0.886047,18.757 -0.295348,18.55822 -0.295348,18.55822 -2.215116,18.74332 -1.919767,0.1851 -1.919767,0.1851 -1.919767,-15.75285 z"
         id="path71" /></g><g
       id="g66"
       transform="translate(10.228783,-14.977859)"><path
         style="fill:#23a3d4"
         d="m 122.05546,281.99141 c -0.72206,-0.50575 -1.31283,-1.31461 -1.31283,-1.79747 0,-0.48286 2.02414,-5.45179 4.49808,-11.04208 2.47395,-5.59029 5.62969,-12.55649 7.01277,-15.48044 1.38307,-2.92395 2.98584,-6.37954 3.5617,-7.67907 0.57585,-1.29953 2.36037,-5.11095 3.96559,-8.46982 1.60521,-3.35886 3.53528,-7.74479 4.28904,-9.74651 0.75375,-2.00171 2.59175,-6.39822 4.08443,-9.77 1.49268,-3.37179 2.71397,-6.39293 2.71397,-6.71365 0,-0.32072 4.90257,-12.31466 10.8946,-26.6532 5.99202,-14.33854 11.71418,-26.20649 13.06056,-29.13044 1.34638,-2.92396 3.25161,-7.04407 4.23384,-9.15582 0.98223,-2.11174 2.9525,-6.30289 4.37837,-9.31367 1.4773,-2.22664 2.98106,-4.43507 4.71695,-6.49568 1.12968,-1.31977 3.05683,-2.79454 4.28256,-3.27727 1.44907,-0.57069 4.6408,-0.91344 9.12475,-0.97987 6.89614,-0.10217 8.42124,1.26109 10.59707,2.50729 2.93376,1.68031 7.11685,9.95401 9.39625,15.7095 2.83584,7.16051 5.02292,12.35788 8.18986,19.67751 1.21444,3.0864 4.73213,11.72535 7.81708,19.19768 3.08496,7.47232 7.04754,17.17453 8.80573,21.56046 1.7582,4.38593 3.95571,9.70221 4.88337,11.81396 0.92766,2.11174 2.39703,5.70023 3.26527,7.97441 0.86824,2.27419 2.225,5.53768 3.01502,7.2522 0.79002,1.71452 1.4364,3.23929 1.4364,3.38838 0,0.1491 1.60963,4.19549 3.57696,8.992 1.96732,4.7965 5.1885,12.70812 7.15816,17.58138 1.96966,4.87325 3.92319,9.6579 4.34117,10.63255 0.41799,0.97466 1.18402,2.80136 1.70231,4.05935 0.51828,1.25799 0.94233,2.76744 0.94233,3.35432 0,0.58689 -0.41771,1.48477 -0.92824,1.9953 -0.79172,0.79172 -2.98538,0.92792 -14.91512,0.92604 -12.53486,-0.002 -14.17084,-0.11488 -15.75897,-1.08751 -1.41829,-0.86861 -2.16954,-2.19492 -3.76282,-6.64314 -1.09489,-3.05681 -2.33841,-6.35529 -2.76337,-7.32994 -0.42496,-0.97465 -1.29223,-2.96825 -1.92726,-4.43023 -0.63503,-1.46198 -1.86762,-4.65174 -2.73908,-7.08837 -0.87147,-2.43663 -2.16524,-5.62532 -2.87505,-7.08598 -0.70981,-1.46066 -1.95509,-2.98517 -2.7673,-3.3878 -1.11221,-0.55135 -8.50544,-0.73421 -29.95012,-0.74077 -19.55563,-0.006 -28.9223,0.19584 -29.90678,0.6444 -1.07424,0.48946 -2.11086,2.30259 -4.13705,7.23605 -1.487,3.62061 -4.58978,11.10177 -6.89507,16.6248 -3.13732,7.51639 -4.66086,10.45039 -6.05797,11.66627 -1.86653,1.62442 -1.86653,1.62442 -14.90043,1.62442 -10.84067,0 -13.25481,-0.15473 -14.34673,-0.91954 z m 97.43484,-63.8534 c 0.61121,-0.55313 1.08024,-1.78589 1.08024,-2.83921 0,-1.10962 -1.67026,-5.26076 -4.13489,-10.27655 -2.27418,-4.62822 -4.13488,-8.51613 -4.13488,-8.63979 0,-0.12366 -2.26254,-4.96086 -5.02787,-10.74934 -2.76533,-5.78847 -5.36721,-11.18902 -5.78195,-12.00123 -0.41475,-0.81221 -1.14053,-1.47675 -1.61285,-1.47675 -0.47233,0 -1.72135,1.72779 -2.7756,3.83954 -1.05426,2.11174 -2.29357,4.76988 -2.75403,5.90697 -0.46046,1.1371 -3.42012,7.38373 -6.57702,13.8814 -3.15691,6.49767 -6.37206,13.24255 -7.14479,14.98862 -0.77273,1.74606 -1.40496,3.92004 -1.40496,4.83106 0,0.91102 0.41771,2.07411 0.92824,2.58464 0.80469,0.80468 3.41274,0.92824 19.59418,0.92824 16.53992,0 18.78899,-0.11135 19.74618,-0.9776 z M 75.211581,242.63287 c -0.497501,-0.33997 -1.126674,-0.82444 -1.126674,-2.45538 0,-1.64333 0.842237,-3.01109 4.642991,-7.54008 2.553646,-3.04293 6.751401,-7.54264 9.328345,-9.99935 3.763646,-3.58805 5.261476,-4.61556 7.613985,-5.2232 1.610748,-0.41605 4.051938,-0.0157 7.463212,-0.98867 3.41128,-0.97295 6.54899,-3.63965 8.38086,-4.87805 0.91492,-0.61852 12.1839,-8.80481 24.72775,-18.85084 12.54386,-10.04602 22.16109,-18.0661 22.59015,-18.0661 0.42907,0 0.64654,0.62115 0.84881,1.25847 0.2087,0.65754 -0.24105,2.63769 -1.03977,4.5779 -0.77415,1.88053 -4.63396,11.46734 -8.94292,21.42587 -7.83446,18.10643 -5.05,14.61285 -14.04467,20.68193 -3.78789,2.55585 -10.60252,7.31615 -14.06305,10.454 -3.46053,3.13784 -6.68248,7.32121 -7.98766,8.19221 -1.02616,0.6848 -1.73195,0.71699 -2.79392,0.70396 -0.88795,-0.0109 -2.0117,-0.60505 -3.36592,-1.69967 -1.35421,-1.09461 -3.04209,-2.15959 -5.77873,-3.98893 -3.909194,-2.61315 -5.466483,-3.32607 -7.265378,-3.32607 -1.25932,0 -3.105532,0.4219 -4.102693,0.93755 -0.997162,0.51565 -3.477576,2.48608 -5.512033,4.37873 -2.034456,1.89265 -4.061072,4.17184 -5.053801,4.69597 -1.816982,0.95931 -3.74276,0.24012 -4.518884,-0.29024 z M 164.31522,117.57284 c -0.88869,-0.46832 -2.28293,-1.72614 -3.09832,-2.79517 -0.81539,-1.06904 -1.74962,-3.35209 -2.07607,-5.07346 -0.32645,-1.72138 -0.59355,-9.14451 -0.59355,-16.495861 0,-11.82302 0.13422,-13.733303 1.16264,-16.546928 0.63945,-1.749462 2.03497,-4.629445 3.10116,-6.399962 1.06619,-1.770518 3.22696,-4.249053 4.80172,-5.507857 1.57475,-1.258804 4.35921,-2.996467 6.18768,-3.861474 2.82495,-1.336413 4.16989,-1.582872 8.95056,-1.640172 5.62607,-0.06743 5.62607,-0.06743 6.41851,2.436062 0.52061,1.644694 1.58316,3.129751 3.09745,4.329091 1.26775,1.004077 3.27863,2.094425 4.46861,2.422996 1.18999,0.328571 3.29632,0.427541 4.68074,0.219934 1.38443,-0.207608 3.60748,-1.167305 4.94011,-2.132662 1.43939,-1.042683 2.96513,-2.889332 3.75851,-4.549024 1.33554,-2.793831 1.33554,-2.793831 7.22462,-2.733648 5.15095,0.05264 6.33332,0.268579 9.43327,1.722829 1.9493,0.914455 4.37982,2.34935 5.40115,3.188654 1.02132,0.839305 2.99088,2.957367 4.28255,4.609794 0.91093,1.165349 1.7583,2.395723 2.4256,3.715779 0.59719,1.181352 1.12394,2.423128 1.39061,3.719703 1.20182,5.843285 1.10231,4.868788 0.85748,17.876238 -0.32414,17.221468 -0.21536,17.734748 -1.52878,19.846938 -0.74148,1.19241 -2.28511,2.72084 -3.43028,3.39651 -2.0474,1.208 -2.65064,1.22744 -36.16116,1.16583 -28.44827,-0.0523 -34.346,-0.20335 -35.69481,-0.91414 z m 12.56302,-19.412271 c 0.95302,-0.492825 2.13598,-1.675788 2.62881,-2.628806 0.49282,-0.953018 0.89604,-2.569984 0.89604,-3.593257 0,-1.328262 -0.57453,-2.435034 -2.00837,-3.868869 -1.53034,-1.530338 -2.50791,-2.008372 -4.10709,-2.008372 -1.15429,0 -2.79569,0.317564 -3.64755,0.705698 -0.85186,0.388134 -1.92763,1.438189 -2.39059,2.333457 -0.46296,0.895267 -0.84174,2.455876 -0.84174,3.468019 0,1.012143 0.28277,2.368637 0.62839,3.014431 0.34562,0.645794 1.47533,1.690581 2.51047,2.321749 1.03514,0.631168 2.49335,1.148572 3.24047,1.149787 0.74712,0.0012 2.13815,-0.401013 3.09116,-0.893837 z M 196.02973,62.16486 c -1.39117,-1.391168 -1.44989,-1.761934 -1.44989,-9.153925 0,-7.704031 0,-7.704031 -2.89845,-10.511733 -2.04804,-1.983931 -3.10535,-3.584274 -3.60367,-5.45453 -0.38787,-1.455756 -0.57058,-3.650711 -0.40601,-4.87768 0.16457,-1.226968 0.8131,-3.225663 1.44117,-4.441544 0.62807,-1.215881 2.27087,-3.008134 3.65068,-3.982785 2.23017,-1.575318 4.38001,-1.772093 6.79092,-1.772093 2.6179,0 4.59443,0.216391 6.63793,1.632537 1.29567,0.897896 2.90538,2.625686 3.57714,3.839535 0.67176,1.213848 1.40689,3.082627 1.63361,4.15284 0.22788,1.075626 0.0848,3.310908 -0.32001,4.998184 -0.57011,2.37648 -1.36654,3.670161 -3.59685,5.842551 -2.8646,2.790209 -2.8646,2.790209 -2.8646,10.534479 0,7.434714 -0.058,7.802225 -1.44989,9.194164 -1.00104,1.001037 -2.10656,1.449894 -3.57104,1.449894 -1.46448,0 -2.57,-0.448857 -3.57104,-1.449894 z"
         id="path67"
         sodipodi:nodetypes="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaasssssssssssssssssssssssssssscssssss" /><path
         style="display:inline;fill:#09446c"
         d="m -83.078652,282.11822 c -0.707395,-0.1377 -1.591065,-0.61774 -1.963711,-1.06675 -0.515636,-0.6213 -0.461075,-1.2833 0.228328,-2.77035 0.498226,-1.07469 1.603996,-3.81467 2.457268,-6.08885 0.853271,-2.27419 1.936125,-5.19814 2.406341,-6.49768 0.470217,-1.29953 1.229332,-3.16023 1.686923,-4.13488 0.457592,-0.97465 1.793999,-4.29733 2.969794,-7.38372 1.175795,-3.0864 2.828336,-7.33942 3.672314,-9.45117 0.843977,-2.11174 2.124874,-5.43441 2.846436,-7.38372 0.721562,-1.9493 2.68187,-6.99976 4.356239,-11.22325 1.674369,-4.22349 3.271579,-8.2107 3.549356,-8.86047 0.277776,-0.64976 1.42581,-3.57372 2.551185,-6.49767 1.125376,-2.92395 2.786364,-7.17698 3.691085,-9.45116 0.904721,-2.27419 2.16007,-5.46396 2.789664,-7.08837 0.629594,-1.62442 1.757248,-4.54838 2.505896,-6.49768 0.748649,-1.9493 2.618634,-6.73395 4.155523,-10.63256 1.536889,-3.8986 3.715733,-9.48069 4.841875,-12.40465 1.126142,-2.92395 2.418006,-6.05616 3.184129,-7.74377 1.867263,-4.11318 3.282229,-8.39672 4.924023,-12.6353 1.438756,-3.73616 3.292145,-7.98918 4.118642,-9.45116 0.826497,-1.46198 2.431226,-3.39138 3.566065,-4.28756 1.134839,-0.89619 2.80571,-1.93368 3.713048,-2.30555 0.907337,-0.37187 3.776216,-0.75306 6.375285,-0.8471 2.945134,-0.10655 5.9496396,0.16976 7.974419,0.73338 1.7868605,0.49739 4.1791861,1.45477 5.3162791,2.12751 1.13709307,0.67274 2.7343814,1.83376 3.5495296,2.58005 0.8151482,0.74628 3.1949262,4.89054 5.2883955,9.20947 2.0934694,4.31892 5.6429868,11.70689 7.8878158,16.41771 2.244829,4.71081 4.36167,9.09674 4.70409,9.74651 0.342419,0.64977 1.362232,2.64337 2.266249,4.43023 0.904017,1.78686 3.264605,6.57151 5.245752,10.63256 2.067726,4.23852 4.521975,8.32728 5.761635,9.59884 1.187753,1.21831 2.414465,2.08622 2.653806,2.21511 0.589077,0.31724 3.474114,1.7715 7.116165,3.93667 3.642051,2.16517 8.748423,5.19188 11.347493,6.72602 2.59907,1.53415 5.788837,3.35956 7.088372,4.05648 1.299535,0.69692 3.69186,2.08937 5.316279,3.09434 1.624419,1.00496 3.75093,2.27547 4.725581,2.82335 0.974652,0.54788 2.775764,1.60821 4.002472,2.3563 1.226709,0.74808 2.659117,2.09311 3.1583,2.54111 1.444444,1.29633 1.807363,2.50083 1.807363,2.81111 0,0.31029 -2.029746,2.91945 -4.510548,5.79814 -2.480802,2.87869 -5.366815,6.145 -5.810711,7.58805 -1.100663,3.5781 -1.01532,5.94706 1.133474,7.89889 1.3074,1.18755 2.587688,1.82151 4.354391,2.08644 1.907239,0.28601 3.44277,0.12373 5.19353,-0.54887 1.367126,-0.52521 4.479288,-2.69494 6.915916,-4.82163 3.51761,-3.07016 5.298417,-4.09175 6.470953,-3.8723 0.81221,0.15201 3.42275,1.97379 6.490503,3.70376 3.06776,1.72997 2.30865,1.447 4.10551,2.65156 1.81605,1.21741 2.80664,2.06692 3.22021,3.54889 0.36287,1.30029 -0.25549,2.16806 -0.76129,2.89272 -0.81308,1.16487 -1.89395,1.70022 -2.88442,1.66479 -1.99759,-0.0661 -3.30306,-2.44037 -4.0907,-1.57869 -0.29864,0.32671 -0.10057,0.5667 1.20816,1.58537 1.37466,1.06999 2.17249,2.52465 0.66784,4.39685 -1.07287,1.33494 -2.04206,1.95406 -3.245059,1.49616 -3.199487,-1.21783 -3.291907,-2.73688 -4.158136,-1.77396 -0.573423,0.63743 2.047797,1.76464 2.667851,2.97781 0.561333,1.09828 -0.846018,3.32116 -2.890316,3.65748 -1.880092,0.30931 -4.408609,-2.77206 -4.935616,-2.21812 -0.539515,0.56708 -0.103228,0.6031 0.671157,1.33222 1.197713,1.12771 0.778203,2.20536 -0.932421,3.46847 -1.009405,0.74534 -2.359279,1.1062 -5.469209,-0.74624 -1.797117,-1.07046 -2.374603,-1.45152 -6.460782,-4.15776 -4.086179,-2.70623 -8.146315,-4.90129 -8.591708,-5.43795 -0.445394,-0.53667 -2.400646,-2.72146 -2.449416,-4.16578 -0.06803,-2.0148 -0.484049,-3.03873 -1.787302,-4.39903 -0.934246,-0.97514 -3.875989,-3.37449 -8.432796,-6.0212 -4.556807,-2.64671 -10.012894,-5.91843 -12.124639,-7.27049 -2.111744,-1.35207 -4.566145,-2.83127 -5.454223,-3.28712 -0.888079,-0.45585 -5.006432,-2.82243 -9.151895,-5.25906 -4.145463,-2.43662 -7.314481,-4.51433 -8.265156,-5.13095 -1.250181,-0.8109 -1.082822,-0.90641 -4.262882,-2.52876 -1.234584,-0.62984 -3.904939,-2.56763 -5.57155,-4.18572 -1.126464,-1.09367 -2.065398,-2.37614 -2.9391178,-3.68062 -0.6854903,-1.02344 -1.2188337,-2.14149 -1.7926166,-3.23149 -1.818705,-3.45496 -3.125104,-6.2585 -5.227597,-10.48199 -2.10249301,-4.22349 -5.6395087,-11.40046 -7.8600348,-15.94884 -2.2205261,-4.54837 -4.3077998,-8.45158 -4.6383858,-8.67381 -0.330586,-0.22223 -0.817145,-0.2705 -1.081242,-0.10728 -0.264097,0.16322 -0.901257,1.27539 -1.415911,2.47149 -0.514654,1.19609 -1.151071,2.83925 -1.414261,3.65146 -0.263189,0.81221 -1.182187,3.33745 -2.042217,5.61163 -0.860031,2.27419 -2.45707,6.66012 -3.548978,9.74651 -1.091907,3.0864 -2.557848,7.07361 -3.257647,8.86047 -0.699798,1.78686 -1.812253,4.84372 -2.472123,6.79302 -0.65987,1.9493 -1.437358,3.99011 -1.727752,4.53512 -0.290394,0.54501 -0.381412,1.3729 -0.202263,1.83975 0.17915,0.46686 1.006664,1.15909 1.838922,1.53829 1.094565,0.49872 5.130187,0.58073 14.587272,0.29646 12.9136703,-0.38818 13.1030659,-0.37633 15.4368674,0.96551 1.2995349,0.74717 3.0273256,1.93408 3.8395349,2.63758 0.8122093,0.70349 3.3374417,2.48124 5.6116277,3.95055 2.274186,1.46931 5.278558,3.25438 6.676381,3.96683 1.397823,0.71244 5.783753,3.22816 9.746511,5.59048 3.962759,2.36233 8.754626,5.2073 10.648594,6.32217 1.893967,1.11486 4.168748,2.42575 5.055067,2.91307 0.886319,0.48733 2.526476,1.60261 3.644794,2.47841 1.118318,0.8758 2.613197,2.7365 3.321954,4.13489 0.708757,1.39838 1.863342,3.87159 2.565745,5.49601 0.702403,1.62441 2.428272,5.08424 3.584607,7.6529 0.744292,1.65336 1.440326,3.32802 2.157963,4.99312 0.301717,0.70006 0.597812,1.40256 0.903027,2.1011 0.807414,1.84793 1.792906,3.62447 2.45553,5.52911 0.675563,1.94184 1.95476,5.19105 1.535896,5.9737 -0.316408,0.59122 -1.549363,1.2183 -2.8026,1.42541 -1.23071,0.20339 -7.367773,0.37272 -13.637919,0.37629 -9.078222,0.005 -11.755599,-0.17725 -13.14481,-0.89564 -1.197997,-0.6195 -2.275724,-2.05372 -3.440029,-4.5779 -0.932515,-2.02167 -2.28835,-5.13775 -3.012966,-6.92461 -0.724616,-1.78686 -1.810218,-4.31209 -2.41245,-5.61162 -0.602231,-1.29954 -1.903731,-4.12859 -2.892223,-6.28678 -0.988492,-2.15819 -1.437712,-3.28609 -1.81573,-4.43023 -0.216698,-0.65588 -0.888562,-1.74579 -1.471344,-3.45974 -0.552339,-1.62442 -1.102816,-2.69311 -1.458271,-3.70648 -0.137081,-0.39081 -0.736389,-1.07034 -1.62982,-1.45822 -1.18026,-0.5124 -8.9732259,-0.70508 -28.501163,-0.7047 -20.719023,4.1e-4 -27.187725,0.17357 -28.234089,0.75577 -0.74654,0.41538 -1.643451,1.47006 -1.993136,2.34373 -0.349684,0.87368 -1.164403,2.91758 -1.810485,4.542 -0.646083,1.62441 -1.82717,4.68127 -2.624638,6.79302 -0.797469,2.11174 -1.677905,4.50407 -1.956524,5.31628 -0.278619,0.81221 -1.035108,2.80581 -1.681087,4.43023 -0.645978,1.62442 -2.020264,5.11531 -3.053968,7.75755 -1.367866,3.49638 -2.273697,4.98368 -3.327771,5.46395 -0.940813,0.42866 -5.836982,0.63171 -13.97284,0.57945 -6.888493,-0.0442 -13.10331,-0.19311 -13.810705,-0.33081 z M -21.58319,118.83596 c -3.587396,-0.43731 -7.477446,-1.69716 -10.206064,-2.66618 -1.224453,-0.43484 -3.27909,-1.23417 -4.650883,-2.11225 -1.27186,-0.81411 -4.347469,-2.9829 -6.612611,-5.22569 -3.020273,-2.99047 -4.801336,-5.20238 -6.218621,-8.50351 -1.741947,-4.057325 -2.10018,-4.570161 -2.10018,-11.82623 0,-6.104574 0.151483,-7.400527 0.86504,-7.400527 0.475772,0 3.466179,1.291316 6.645349,2.869591 3.17917,1.578276 10.56496,5.220856 16.412867,8.094623 5.847907,2.873767 11.695814,5.510758 12.995349,5.85998 1.729137,0.464668 2.996445,0.450029 4.7255818,-0.05458 1.2995349,-0.379243 3.8247675,-1.339982 5.6116279,-2.134975 1.7868605,-0.794993 9.310791,-4.471389 16.7198453,-8.169767 9.422666,-4.703514 13.601457,-6.513255 13.905082,-6.021979 0.238741,0.38629 0.360124,3.036355 0.26974,5.889031 -0.09038,2.852677 -0.415201,6.515755 -0.721816,8.140174 -0.306615,1.624418 -1.113877,4.084138 -1.793916,5.466039 -0.680039,1.38191 -2.734389,3.98678 -4.565223,5.78859 -1.830833,1.80182 -5.146161,4.29347 -7.324311,5.60954 -3.2639991,1.97215 -3.2715456,1.93544 -6.166977,3.26153 -1.2360609,0.56611 -4.0244632,1.38128 -6.32364854,2.066 -3.11949006,0.92903 -5.99359606,1.76772 -11.32560246,1.83908 -3.929897,0.0526 -7.42649,-0.41299 -10.140629,-0.76848 -3e-6,0 0,-1e-5 0,-1e-5 z m 39.355989,-17.66818 c 0.625047,-0.33451 1.691433,-1.03359 2.178156,-1.984511 0.702179,-1.37187 0.742613,-2.645601 0.742613,-3.34399 0,-0.69839 -0.58653,-2.173567 -1.691135,-3.278171 -1.447209,-1.44721 -2.853762,-2.008372 -4.215842,-2.008372 -1.362079,0 -2.803881,0.349671 -4.25109,1.796881 -1.1046045,1.104604 -1.6558863,2.791272 -1.6558863,3.489662 0,0.698389 0.099621,2.090678 0.5869395,3.033048 0.4873188,0.94237 1.6503078,1.934493 2.2188618,2.265643 0.568553,0.33115 1.915104,0.61018 2.992334,0.62006 1.077231,0.01 2.470003,-0.25573 3.095049,-0.59025 z M 43.14008,84.945873 c 0,-8.765873 -0.161346,-16.358412 -0.358547,-16.872309 -0.197201,-0.513897 -0.956984,-0.934358 -1.688407,-0.934358 -0.731423,0 -6.218623,2.404527 -12.193779,5.343394 -5.975155,2.938866 -11.329093,5.597006 -11.897639,5.906976 -0.568547,0.309971 -1.565349,0.829397 -2.215117,1.154281 -0.649767,0.324884 -1.779476,0.902508 -2.510465,1.283609 -0.730988,0.381101 -4.3859299,2.20647 -8.1220927,4.056376 -3.73616287,1.849905 -7.7233722,3.78676 -8.8604652,4.304121 -1.1370931,0.517361 -3.3272289,1.359712 -4.8669686,1.87189 -2.7256195,0.906649 -2.8301815,0.714983 -6.7182505,-0.825801 -2.728494,-0.841204 -5.090284,-2.403797 -7.638382,-3.601823 -1.13612,-0.573263 -4.849548,-2.161979 -10.246023,-4.804397 -5.396474,-2.642418 -14.463516,-7.143501 -20.148981,-10.002407 -5.685465,-2.858905 -13.093155,-6.604798 -16.461534,-8.324206 -3.368379,-1.719408 -6.255617,-3.468338 -6.416085,-3.886511 -0.160468,-0.418173 -0.0095,-1.100408 0.335469,-1.516078 0.344976,-0.415671 8.814307,-4.837381 18.820736,-9.826024 10.006429,-4.988643 18.592228,-9.282172 19.079554,-9.541176 0.487325,-0.259003 6.047325,-3.057042 12.355555,-6.217864 9.783661,-4.902232 11.872189,-5.739569 14.209105,-5.69674 2.34005,0.04289 6.7407568,2.043949 30.174677,13.720844 15.089295,7.518849 28.764152,14.360182 30.38857,15.202961 1.624419,0.84278 3.285756,1.791176 3.691861,2.107547 0.406104,0.31637 0.738372,1.078206 0.738372,1.692969 0,0.627177 -0.842573,1.631417 -1.919768,2.288119 -1.055872,0.643703 -2.185581,1.259815 -2.510465,1.369136 -0.368535,0.124011 -0.701779,7.178558 -0.886046,18.756995 -0.295349,18.558223 -0.295349,18.558223 -2.215116,18.743323 -1.919768,0.1851 -1.919768,0.1851 -1.919768,-15.752847 z"
         id="path66"
         sodipodi:nodetypes="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaassssssssssssssssssssssssaaaasscssssssssssssssssssssssssssssssssssssssssssssssssssssscssssssssssssssssssssscssssssssss" /></g><g
       id="g59"
       transform="translate(486.91271,6.4610437)"><path
         style="fill:#fbfdfd"
         d="m -96.264572,149.41328 c 0,-138.223248 0,-138.223248 191.976745,-138.223248 191.976747,0 191.976747,0 191.976747,138.223248 0,138.22325 0,138.22325 -191.976747,138.22325 -191.976745,0 -191.976745,0 -191.976745,-138.22325 z M 152.85356,281.28653 c 1.39711,-1.21588 2.92065,-4.14988 6.05797,-11.66627 2.30529,-5.52303 5.40807,-13.00419 6.89507,-16.6248 2.02619,-4.93346 3.06281,-6.74659 4.13705,-7.23605 0.98448,-0.44856 10.35115,-0.65038 29.90678,-0.6444 21.44468,0.007 28.83791,0.18942 29.95012,0.74077 0.81221,0.40263 2.05749,1.92714 2.7673,3.3878 0.70981,1.46066 2.00358,4.64935 2.87505,7.08598 0.87146,2.43663 2.10405,5.62639 2.73908,7.08837 0.63503,1.46198 1.5023,3.45558 1.92726,4.43023 0.42496,0.97465 1.66848,4.27313 2.76337,7.32994 1.59328,4.44822 2.34453,5.77453 3.76282,6.64314 1.58813,0.97263 3.22411,1.08553 15.75897,1.08751 11.92974,0.002 14.1234,-0.13432 14.91512,-0.92604 0.51053,-0.51053 0.92824,-1.40841 0.92824,-1.9953 0,-0.58688 -0.42405,-2.09633 -0.94233,-3.35432 -0.51829,-1.25799 -1.28432,-3.08469 -1.70231,-4.05935 -0.41798,-0.97465 -2.37151,-5.7593 -4.34117,-10.63255 -1.96966,-4.87326 -5.19084,-12.78488 -7.15816,-17.58138 -1.96733,-4.79651 -3.57696,-8.8429 -3.57696,-8.992 0,-0.14909 -0.64638,-1.67386 -1.4364,-3.38838 -0.79002,-1.71452 -2.14678,-4.97801 -3.01502,-7.2522 -0.86824,-2.27418 -2.33761,-5.86267 -3.26527,-7.97441 -0.92766,-2.11175 -3.12517,-7.42803 -4.88337,-11.81396 -1.75819,-4.38593 -5.72077,-14.08814 -8.80573,-21.56046 -3.08495,-7.47233 -6.60264,-16.11128 -7.81708,-19.19768 -1.21444,-3.08639 -2.56394,-6.40906 -2.9989,-7.38372 -0.43496,-0.97465 -3.97639,-8.41028 -7.86985,-16.52362 -3.89346,-8.11334 -7.78277,-15.63351 -8.64291,-16.71149 -1.56389,-1.95996 -1.56389,-1.95996 -8.46003,-1.85779 -4.48395,0.0664 -7.67568,0.40918 -9.12475,0.97987 -1.22573,0.48273 -3.15288,1.9575 -4.28256,3.27727 -1.12967,1.31977 -2.05395,2.61296 -2.05395,2.87377 0,0.2608 -1.16662,2.93755 -2.5925,5.94832 -1.42587,3.01078 -3.39614,7.20193 -4.37837,9.31367 -0.98223,2.11175 -2.88746,6.23186 -4.23384,9.15582 -1.34638,2.92395 -7.35053,17.04781 -13.34255,31.38635 -5.99203,14.33854 -10.8946,26.33248 -10.8946,26.6532 0,0.32072 -1.22129,3.34186 -2.71397,6.71365 -1.49268,3.37178 -3.33068,7.76829 -4.08443,9.77 -0.75376,2.00172 -2.68383,6.38765 -4.28904,9.74651 -1.60522,3.35887 -3.38974,7.17029 -3.96559,8.46982 -0.57586,1.29953 -2.17863,4.75512 -3.5617,7.67907 -1.38308,2.92395 -4.53882,9.89015 -7.01277,15.48044 -2.47394,5.59029 -4.49808,10.55922 -4.49808,11.04208 0,0.48286 0.59077,1.29172 1.31283,1.79747 1.09192,0.76481 3.50606,0.91954 14.34673,0.91954 13.0339,0 13.0339,0 14.90043,-1.62442 z m 28.84732,-63.09916 c -0.51053,-0.51053 -0.92824,-1.67362 -0.92824,-2.58464 0,-0.91102 0.63223,-3.085 1.40496,-4.83106 0.77273,-1.74607 3.98788,-8.49095 7.14479,-14.98862 3.1569,-6.49767 6.11656,-12.7443 6.57702,-13.8814 0.46046,-1.13709 1.69977,-3.79523 2.75403,-5.90697 1.05425,-2.11175 2.30327,-3.83954 2.7756,-3.83954 0.47232,0 1.1981,0.66454 1.61285,1.47675 0.41474,0.81221 3.01662,6.21276 5.78195,12.00123 2.76533,5.78848 5.02787,10.62568 5.02787,10.74934 0,0.12366 1.8607,4.01157 4.13488,8.63979 2.46463,5.01579 4.13489,9.16693 4.13489,10.27655 0,1.05332 -0.46903,2.28608 -1.08024,2.83921 -0.95719,0.86625 -3.20626,0.9776 -19.74618,0.9776 -16.18144,0 -18.78949,-0.12356 -19.59418,-0.92824 z m -236.695353,59.15267 c 0.987829,-0.51082 2.049597,-1.85485 2.683218,-3.39651 0.576693,-1.40315 1.688582,-3.95259 2.470864,-5.66543 0.782282,-1.71284 1.422331,-3.58918 1.422331,-4.16966 0,-0.58047 0.390267,-1.57139 0.86726,-2.20203 0.476993,-0.63064 0.875714,-1.60277 0.886047,-2.1603 0.01033,-0.55752 0.446853,-2.0195 0.970045,-3.24884 0.523193,-1.22933 1.586449,-3.63656 2.362791,-5.3494 0.776342,-1.71284 1.411531,-3.4989 1.411531,-3.96902 0,-0.47013 0.562089,-1.93316 1.249087,-3.2512 0.686997,-1.31803 1.785948,-2.68374 2.442114,-3.03491 0.794732,-0.42533 9.498491,-0.66083 26.070681,-0.70541 13.6827094,-0.0368 26.145354,0.14161 27.694766,0.39647 2.778188,0.45699 2.841441,0.51705 4.577907,4.34675 0.968437,2.13584 1.760795,4.14623 1.760795,4.46753 0,0.3213 0.831751,2.34459 1.848335,4.4962 1.016585,2.15161 2.380509,5.10819 3.030943,6.57016 0.650435,1.46198 1.679381,3.64115 2.286549,4.84261 0.607167,1.20146 1.10394,2.45214 1.10394,2.77929 0,0.32716 0.81573,2.30254 1.812732,4.38975 1.275353,2.66993 2.369794,4.09279 3.691861,4.79972 1.644934,0.87956 3.552036,0.98045 15.302244,0.8095 12.8758,-0.18732 13.475616,-0.24783 14.710675,-1.484 1.287557,-1.28871 1.287557,-1.28871 -0.661054,-6.20232 -1.071737,-2.70249 -2.308807,-5.43794 -2.749046,-6.07877 -0.440239,-0.64084 -0.800435,-1.50672 -0.800435,-1.92418 0,-0.41746 -1.481369,-3.88034 -3.291932,-7.69531 -1.810563,-3.81496 -4.11635,-8.58192 -5.12397,-10.59324 -1.007621,-2.01133 -2.516658,-4.15236 -3.353417,-4.75785 -0.836758,-0.60549 -4.65699,-2.94707 -8.489403,-5.20351 -3.832414,-2.25644 -7.95253,-4.70633 -9.155814,-5.4442 -1.203284,-0.73786 -2.586511,-1.52154 -3.073836,-1.7415 -0.487326,-0.21995 -3.012558,-1.66283 -5.611628,-3.20639 -2.59907,-1.54355 -6.420195,-3.81674 -8.49139,-5.05152 -2.071195,-1.23478 -4.8622412,-3.10134 -6.2023257,-4.14791 -1.3400844,-1.04657 -3.4747944,-2.46866 -4.7437999,-3.16019 -2.2007686,-1.19928 -2.93939264,-1.24779 -15.9998804,-1.05063 -10.645216,0.1607 -13.900907,0.0349 -14.628585,-0.56525 -0.852033,-0.70271 -0.841855,-1.02061 0.113464,-3.54419 0.577199,-1.52473 1.378319,-3.70258 1.780267,-4.83967 0.401948,-1.1371 1.258053,-3.39651 1.902456,-5.02093 0.644402,-1.62442 2.048211,-5.47872 3.119574,-8.56512 1.071363,-3.08639 2.29124,-6.54198 2.710837,-7.67907 0.419597,-1.13709 1.250518,-3.19425 1.846492,-4.57147 0.595973,-1.37721 1.083588,-2.78732 1.083588,-3.13357 0,-0.34625 0.538272,-1.81112 1.196159,-3.25527 0.657888,-1.44416 1.41989,-2.62573 1.693338,-2.62573 0.273449,0 1.049175,1.26261 1.7238367,2.80581 0.6746615,1.5432 1.6196304,3.47035 2.0999308,4.28256 0.4803004,0.81221 4.3522723,8.57974 8.6043819,17.26117 7.5678398,15.45109 7.8046289,15.84404 11.2124496,18.60698 1.914738,1.5524 4.503826,3.41895 5.75353,4.14789 1.249704,0.72894 4.507581,2.65609 7.239727,4.28256 2.732146,1.62646 5.064533,2.95721 5.183083,2.95721 0.118549,0 1.870366,1.02327 3.892927,2.27393 2.02256,1.25066 7.664591,4.60764 12.537847,7.45994 4.873256,2.85231 9.790814,5.77902 10.927907,6.5038 1.137093,0.72478 2.997791,1.86802 4.134884,2.54054 1.137093,0.67251 2.841751,2.03213 3.78813,3.02136 1.325194,1.3852 1.701624,2.30572 1.637744,4.00493 -0.04562,1.21348 0.276909,2.75554 0.71673,3.42679 0.439822,0.67125 2.435775,2.34323 4.435452,3.71551 1.999677,1.37228 3.747603,2.49506 3.884281,2.49506 0.136677,0 1.94806,1.18807 4.025295,2.64016 2.077235,1.45209 5.479098,3.44549 7.559696,4.42977 2.080597,0.98428 4.492153,1.78981 5.359011,1.79007 0.866859,2.5e-4 2.0064,-0.16465 2.532313,-0.36647 0.525913,-0.20181 1.362484,-1.15258 1.859047,-2.11283 0.836494,-1.6176 1.075075,-1.71681 3.246515,-1.34994 1.97784,0.33415 2.66333,0.15214 4.39159,-1.16607 1.79269,-1.36736 2.04792,-1.88766 2.04792,-4.17493 0,-2.2938 0.21204,-2.72256 1.73623,-3.51075 0.95493,-0.49382 2.15109,-1.49014 2.65814,-2.21405 0.50705,-0.72391 0.92191,-2.0677 0.92191,-2.98619 0,-0.9185 -0.37151,-2.38841 -0.82558,-3.26648 -0.45406,-0.87806 -1.40883,-2.12748 -2.12171,-2.77648 -0.71288,-0.649 -2.53434,-1.89427 -4.04769,-2.76727 -1.51334,-0.873 -4.66617,-2.66724 -7.006269,-3.98721 -2.340104,-1.31996 -4.763036,-2.39993 -5.384293,-2.39993 -0.621258,0 -1.896395,0.58561 -2.833639,1.30137 -0.937243,0.71575 -3.081512,2.54034 -4.765041,4.05463 -1.934356,1.73991 -3.999751,2.98962 -5.611628,3.39542 -1.642789,0.41359 -3.391671,0.45327 -4.913456,0.11147 -1.511572,-0.3395 -3.054407,-1.28362 -4.282559,-2.62067 -1.465907,-1.59589 -1.919767,-2.6233 -1.919767,-4.34581 0,-1.48747 0.598524,-3.19959 1.757222,-5.02667 0.966472,-1.52397 2.776217,-3.90188 4.021655,-5.28425 1.245438,-1.38237 2.847013,-3.28024 3.559057,-4.21748 0.712043,-0.93724 1.294624,-2.16361 1.294624,-2.72526 0,-0.56166 -0.652052,-1.67324 -1.449005,-2.4702 -0.796953,-0.79695 -3.920267,-2.84658 -6.940698,-4.55473 -3.020431,-1.70815 -7.086576,-4.04881 -9.035878,-5.20146 -1.949303,-1.15266 -6.733954,-3.9559 -10.632559,-6.22944 -3.898604,-2.27354 -8.949069,-5.21108 -11.223256,-6.52786 -2.274186,-1.31678 -5.145191,-3.34485 -6.380011,-4.50683 -1.634387,-1.53798 -3.867018,-5.40678 -8.207318,-14.222 -3.279204,-6.66012 -7.753495,-15.8307 -9.942868,-20.37907 -2.189373,-4.54837 -5.512262,-11.45953 -7.3841972,-15.35814 -1.8719356,-3.8986 -4.0124299,-7.91217 -4.7566541,-8.91903 -0.8001677,-1.08254 -3.22404354,-2.75508 -5.9313295,-4.09278 -4.222454,-2.08635 -5.0171594,-2.27355 -10.2274432,-2.40908 -3.107087,-0.0808 -6.661781,0.14639 -7.89932,0.5049 -1.23754,0.35851 -3.410625,1.6734 -4.829079,2.92198 -1.418453,1.24857 -3.203125,3.39475 -3.965937,4.76928 -0.762812,1.37453 -2.401715,5.15729 -3.642006,8.40613 -1.240291,3.24883 -2.602798,6.83732 -3.027793,7.97442 -0.424995,1.13709 -1.699035,4.32686 -2.8312,7.08837 -1.132166,2.76151 -3.180175,7.94488 -4.551132,11.5186 -1.370956,3.57372 -3.101965,7.95965 -3.846686,9.74651 -0.744721,1.78686 -2.334217,5.77407 -3.532215,8.86047 -1.197998,3.08639 -3.120519,8.00395 -4.27227,10.9279 -1.151751,2.92396 -2.84047,7.18433 -3.752709,9.46749 -0.912239,2.28317 -2.102804,5.47294 -2.645701,7.08838 -0.542896,1.61543 -1.463325,4.00041 -2.045397,5.29995 -0.582071,1.29953 -2.281308,5.46274 -3.776081,9.25157 -1.494773,3.78884 -2.71777,7.06209 -2.71777,7.2739 0,0.21181 -0.626796,1.7636 -1.39288,3.44842 -0.766083,1.68483 -1.73046,4.12657 -2.143058,5.42611 -0.412599,1.29953 -1.247779,3.45516 -1.855958,4.79028 -0.608178,1.33512 -1.105778,2.81274 -1.105778,3.28361 0,0.47087 -0.390267,1.3721 -0.86726,2.00274 -0.476994,0.63064 -0.875715,1.60537 -0.886047,2.16607 -0.01033,0.56069 -0.54942,1.88976 -1.197973,2.95348 -0.648553,1.06373 -1.180181,2.33671 -1.181396,2.82884 -0.0012,0.49214 -0.510101,1.84242 -1.130859,3.00062 -0.620758,1.1582 -1.524131,3.41368 -2.007494,5.01218 -0.483363,1.5985 -1.302903,3.7038 -1.821198,4.67845 -0.518295,0.97466 -0.943993,2.10436 -0.945994,2.51047 -0.002,0.4061 0.527988,1.27 1.177756,1.91977 1.113056,1.11305 1.968992,1.18139 14.796776,1.18139 10.655764,0 13.970717,-0.18375 15.250067,-0.84533 z M 79.272234,237.67108 c 0.997161,-0.51565 3.477576,-2.48608 5.512032,-4.37873 2.034457,-1.89265 4.514871,-3.86308 5.512033,-4.37873 0.997161,-0.51565 2.843373,-0.93755 4.102693,-0.93755 1.798895,0 3.356184,0.71292 7.265378,3.32607 2.73664,1.82934 6.0837,4.22167 7.43791,5.31628 1.35422,1.09462 2.84181,1.99021 3.30576,1.99021 0.46396,0 1.74829,-0.44753 2.85408,-0.9945 1.10578,-0.54698 4.84187,-3.56184 8.3024,-6.69968 3.46053,-3.13785 9.21788,-8.03249 12.7941,-10.87698 6.50222,-5.1718 6.50222,-5.1718 14.33668,-23.27823 4.30896,-9.95853 8.46786,-19.64504 9.24201,-21.52557 0.79872,-1.94021 1.24847,-3.92036 1.03977,-4.5779 -0.20227,-0.63732 -0.71883,-1.15877 -1.1479,-1.15877 -0.42906,0 -11.04327,8.21948 -23.58713,18.2655 -12.54385,10.04603 -23.67134,18.5289 -24.72775,18.85084 -1.0564,0.32194 -4.71178,1.38138 -8.12306,2.35433 -3.411276,0.97294 -7.520207,2.10938 -9.130955,2.52543 -2.352509,0.60764 -3.850339,1.63515 -7.613985,5.2232 -2.576944,2.45671 -6.774699,6.95642 -9.328345,9.99935 -3.800754,4.52899 -4.642991,5.89675 -4.642991,7.54008 0,1.63094 0.360082,2.22702 1.919767,3.17798 1.055873,0.64378 2.132329,1.1715 2.392125,1.17271 0.259797,10e-4 1.288217,-0.41969 2.285378,-0.93534 z M -1.0403239,113.76721 c 1.85391761,-0.49451 4.6123004,-1.44831 6.1297397,-2.11954 1.5174392,-0.67124 2.9719535,-1.22043 3.2322539,-1.22043 0.2603004,0 2.1478353,-0.9968 4.1945223,-2.21512 2.046686,-1.21831 5.378734,-3.76497 7.40455,-5.65923 2.435018,-2.2769 4.200503,-4.573841 5.209403,-6.777568 0.839355,-1.833393 1.64986,-4.403655 1.801121,-5.711693 0.151261,-1.308038 0.338089,-4.874294 0.415173,-7.925013 0.115592,-4.574721 -0.02765,-5.652693 -0.817373,-6.151241 -0.7456,-0.470692 -4.275512,1.033725 -15.948838,6.797253 -8.245221,4.070954 -16.1798046,7.902268 -17.6324077,8.514033 -1.4526031,0.611764 -3.8781653,1.093587 -5.3901373,1.070717 -2.163485,-0.03272 -4.557711,-0.932669 -11.240299,-4.225019 -4.670192,-2.300891 -12.34556,-6.052041 -17.056374,-8.335888 -4.710814,-2.283848 -9.096745,-4.236891 -9.746512,-4.340097 -1.126406,-0.178912 -1.189032,0.188391 -1.345458,7.891206 -0.160715,7.914045 -0.128156,8.152976 1.596051,11.712395 0.968062,1.998449 2.738637,4.91667 3.934612,6.484935 1.195975,1.56827 3.955859,4.20565 6.133077,5.86086 2.177218,1.65521 4.261209,3.00947 4.631091,3.00947 0.369881,0 1.809332,0.50218 3.198779,1.11596 1.389447,0.61377 3.855336,1.4463 5.479755,1.85006 1.624419,0.40375 3.853103,0.89837 4.952631,1.09915 1.099528,0.20079 5.485458,0.32205 9.746511,0.26949 4.7673699,-0.0588 9.0439213,-0.44141 11.1181291,-0.99469 z M 11.592933,94.921425 C 10.774839,94.190436 9.9342061,92.863153 9.7248606,91.971907 9.4120002,90.639965 9.7130302,89.98266 11.415645,88.280046 c 1.139276,-1.139276 2.656202,-2.071412 3.370946,-2.071412 0.714745,0 2.231671,0.932136 3.370947,2.071412 1.702615,1.702614 2.003645,2.359919 1.690784,3.691861 -0.209345,0.891246 -1.049978,2.218529 -1.868072,2.949518 -0.818095,0.730988 -2.255241,1.329069 -3.193659,1.329069 -0.938417,0 -2.375564,-0.598081 -3.193658,-1.329069 z M 237.72213,113.92433 c 1.14517,-0.67567 2.6888,-2.2041 3.43028,-3.39651 1.31342,-2.11219 1.35279,-2.62332 1.52878,-19.846935 0.17433,-17.061035 0.13821,-17.736317 -1.03372,-19.321429 -0.6679,-0.903385 -1.21437,-1.926916 -1.21437,-2.274512 0,-0.347596 -1.09152,-2.019697 -2.4256,-3.715779 -1.33408,-1.696082 -3.26123,-3.770489 -4.28255,-4.609794 -1.02133,-0.839304 -3.45185,-2.274199 -5.40115,-3.188654 -3.09995,-1.45425 -4.28232,-1.67019 -9.43327,-1.722829 -5.88908,-0.06018 -5.88908,-0.06018 -7.22462,2.733648 -0.79338,1.659692 -2.31912,3.506341 -3.75851,4.549024 -1.33263,0.965357 -3.55568,1.925054 -4.94011,2.132662 -1.38442,0.207607 -3.49075,0.108637 -4.68074,-0.219934 -1.18998,-0.328571 -3.20086,-1.418919 -4.46861,-2.422996 -1.51429,-1.19934 -2.57684,-2.684397 -3.09745,-4.329091 -0.79244,-2.503496 -0.79244,-2.503496 -6.41851,-2.436062 -4.78067,0.0573 -6.12561,0.303759 -8.95056,1.640172 -1.82847,0.865007 -4.61293,2.60267 -6.18768,3.861474 -1.57476,1.258804 -3.73553,3.737339 -4.80172,5.507857 -1.06619,1.770517 -2.46171,4.6505 -3.10116,6.399962 -1.02842,2.813625 -1.16264,4.723908 -1.16264,16.546928 0,7.351347 0.2671,14.774478 0.59355,16.495858 0.32645,1.72137 1.26068,4.00442 2.07607,5.07346 0.81539,1.06903 2.20963,2.32685 3.09832,2.79517 1.34881,0.71079 7.24654,0.86183 35.69481,0.91414 33.51052,0.0616 34.11376,0.0422 36.16116,-1.16583 z M 172.09755,94.507802 c -1.03514,-0.631168 -2.16485,-1.675955 -2.51047,-2.321749 -0.34562,-0.645794 -0.62839,-2.002288 -0.62839,-3.014431 0,-1.012143 0.37878,-2.572752 0.84174,-3.468019 0.46296,-0.895268 1.53873,-1.945323 2.39059,-2.333457 0.85186,-0.388134 2.49326,-0.705698 3.64755,-0.705698 1.59918,0 2.57675,0.478034 4.10709,2.008372 1.43384,1.433835 2.00837,2.540607 2.00837,3.868869 0,1.023273 -0.40322,2.640239 -0.89604,3.593257 -0.49283,0.953018 -1.67579,2.135981 -2.62881,2.628806 -0.95301,0.492824 -2.34404,0.895051 -3.09116,0.893837 -0.74712,-0.0012 -2.20533,-0.518619 -3.24047,-1.149787 z M 47.193829,94.280814 c 0.438779,-0.528696 0.705749,-6.687394 0.8107,-18.701937 0.156481,-17.913653 0.156481,-17.913653 2.436776,-19.189983 1.254162,-0.701981 2.546924,-1.75277 2.872805,-2.335087 0.460358,-0.822613 0.281135,-1.368217 -0.80355,-2.446224 C 51.742726,50.844477 37.557987,43.406559 20.988917,35.078878 -6.2029313,21.412145 -9.4530475,19.922472 -12.385502,19.781896 c -2.398923,-0.114999 -3.659016,0.131558 -4.816767,0.942476 -0.862362,0.60402 -1.809482,1.098218 -2.104711,1.098218 -0.295229,0 -2.779428,1.148176 -5.520442,2.551502 -2.741014,1.403326 -5.515289,2.838264 -6.165057,3.188751 -0.649767,0.350487 -2.510465,1.283266 -4.134883,2.072841 -1.624419,0.789575 -3.485117,1.726508 -4.134884,2.082073 -0.649768,0.355565 -6.364768,3.201625 -12.7,6.324578 -6.335233,3.122954 -12.18314,6.047713 -12.995349,6.499466 -0.812209,0.451752 -1.875465,0.973073 -2.362791,1.158491 -0.487325,0.185417 -2.963465,1.480085 -5.502533,2.877038 -2.539067,1.396954 -4.846392,2.911912 -5.127388,3.366574 -0.280996,0.454661 -0.286186,1.2397 -0.01153,1.744531 0.274653,0.504831 1.651629,1.498859 3.059946,2.208951 1.408317,0.710092 2.959298,1.439388 3.446623,1.620659 0.487326,0.18127 1.284768,0.55706 1.772093,0.835088 0.487326,0.278028 1.683489,0.94476 2.65814,1.481627 0.974651,0.536867 8.816163,4.454737 17.425581,8.706378 8.609419,4.251641 16.118663,7.972531 16.68721,8.268644 0.568546,0.296113 1.498895,0.787813 2.067442,1.092667 0.568546,0.304854 4.356395,2.151945 8.417442,4.104647 4.061046,1.952702 8.105899,3.723486 8.988561,3.935075 1.081733,0.25931 3.007151,-0.14697 5.9069773,-1.246425 2.3661748,-0.897123 10.2622616,-4.645124 17.5468597,-8.32889 7.284598,-3.683766 13.510295,-6.697756 13.834883,-6.697756 0.324588,0 1.009812,-0.369464 1.522719,-0.821032 0.512907,-0.451567 2.394535,-1.431258 4.181395,-2.177091 1.786861,-0.745832 3.882766,-1.838345 4.657568,-2.427805 0.774802,-0.589461 1.871964,-1.071746 2.438137,-1.071746 0.566174,0 1.37147,-0.41216 1.789546,-0.915911 0.423002,-0.509686 1.43753,-0.837169 2.287444,-0.738372 1.527306,0.177539 1.527306,0.177539 1.677242,16.126375 0.08247,8.77186 0.273484,16.281104 0.424485,16.687209 0.151001,0.406105 1.047784,0.738372 1.992851,0.738372 0.945068,0 2.012703,-0.354728 2.372523,-0.788285 z M 204.72275,58.768043 c 1.39193,-1.391939 1.44989,-1.75945 1.44989,-9.194164 0,-7.74427 0,-7.74427 2.8646,-10.534479 2.23031,-2.17239 3.02674,-3.466071 3.59685,-5.842551 0.40477,-1.687276 0.54789,-3.922558 0.32001,-4.998184 -0.22672,-1.070213 -0.96185,-2.938992 -1.63361,-4.15284 -0.67176,-1.213849 -2.28147,-2.941639 -3.57714,-3.839535 -2.0435,-1.416146 -2.92335,-1.632537 -6.63793,-1.632537 -3.80668,0 -4.56075,0.196775 -6.79092,1.772093 -1.37981,0.974651 -3.02261,2.766904 -3.65068,3.982785 -0.62807,1.215881 -1.2766,3.214576 -1.44117,4.441544 -0.16457,1.226969 0.0181,3.421924 0.40601,4.87768 0.49832,1.870256 1.55563,3.470599 3.60367,5.45453 2.89845,2.807702 2.89845,2.807702 2.89845,10.511733 0,7.391991 0.0587,7.762757 1.44989,9.153925 1.00104,1.001037 2.10656,1.449894 3.57104,1.449894 1.46448,0 2.57,-0.448857 3.57104,-1.449894 z"
         id="path61" /><path
         style="fill:#23a3d4"
         d="m 123.6064,281.99141 c -0.72206,-0.50575 -1.31283,-1.31461 -1.31283,-1.79747 0,-0.48286 2.02414,-5.45179 4.49808,-11.04208 2.47395,-5.59029 5.62969,-12.55649 7.01277,-15.48044 1.38307,-2.92395 2.98584,-6.37954 3.5617,-7.67907 0.57585,-1.29953 2.36037,-5.11095 3.96559,-8.46982 1.60521,-3.35886 3.53528,-7.74479 4.28904,-9.74651 0.75375,-2.00171 2.59175,-6.39822 4.08443,-9.77 1.49268,-3.37179 2.71397,-6.39293 2.71397,-6.71365 0,-0.32072 4.90257,-12.31466 10.8946,-26.6532 5.99202,-14.33854 11.99617,-28.4624 13.34255,-31.38635 1.34638,-2.92396 3.25161,-7.04407 4.23384,-9.15582 0.98223,-2.11174 2.9525,-6.30289 4.37837,-9.31367 1.42588,-3.01077 2.5925,-5.68752 2.5925,-5.94832 0,-0.26081 0.92428,-1.554 2.05395,-2.87377 1.12968,-1.31977 3.05683,-2.79454 4.28256,-3.27727 1.44907,-0.57069 4.6408,-0.91344 9.12475,-0.97987 6.89614,-0.10217 6.89614,-0.10217 8.46003,1.85779 0.86014,1.07798 4.74945,8.59815 8.64291,16.71149 3.89346,8.11334 7.43489,15.54897 7.86985,16.52362 0.43496,0.97466 1.78446,4.29733 2.9989,7.38372 1.21444,3.0864 4.73213,11.72535 7.81708,19.19768 3.08496,7.47232 7.04754,17.17453 8.80573,21.56046 1.7582,4.38593 3.95571,9.70221 4.88337,11.81396 0.92766,2.11174 2.39703,5.70023 3.26527,7.97441 0.86824,2.27419 2.225,5.53768 3.01502,7.2522 0.79002,1.71452 1.4364,3.23929 1.4364,3.38838 0,0.1491 1.60963,4.19549 3.57696,8.992 1.96732,4.7965 5.1885,12.70812 7.15816,17.58138 1.96966,4.87325 3.92319,9.6579 4.34117,10.63255 0.41799,0.97466 1.18402,2.80136 1.70231,4.05935 0.51828,1.25799 0.94233,2.76744 0.94233,3.35432 0,0.58689 -0.41771,1.48477 -0.92824,1.9953 -0.79172,0.79172 -2.98538,0.92792 -14.91512,0.92604 -12.53486,-0.002 -14.17084,-0.11488 -15.75897,-1.08751 -1.41829,-0.86861 -2.16954,-2.19492 -3.76282,-6.64314 -1.09489,-3.05681 -2.33841,-6.35529 -2.76337,-7.32994 -0.42496,-0.97465 -1.29223,-2.96825 -1.92726,-4.43023 -0.63503,-1.46198 -1.86762,-4.65174 -2.73908,-7.08837 -0.87147,-2.43663 -2.16524,-5.62532 -2.87505,-7.08598 -0.70981,-1.46066 -1.95509,-2.98517 -2.7673,-3.3878 -1.11221,-0.55135 -8.50544,-0.73421 -29.95012,-0.74077 -19.55563,-0.006 -28.9223,0.19584 -29.90678,0.6444 -1.07424,0.48946 -2.11086,2.30259 -4.13705,7.23605 -1.487,3.62061 -4.58978,11.10177 -6.89507,16.6248 -3.13732,7.51639 -4.66086,10.45039 -6.05797,11.66627 -1.86653,1.62442 -1.86653,1.62442 -14.90043,1.62442 -10.84067,0 -13.25481,-0.15473 -14.34673,-0.91954 z m 97.43484,-63.8534 c 0.61121,-0.55313 1.08024,-1.78589 1.08024,-2.83921 0,-1.10962 -1.67026,-5.26076 -4.13489,-10.27655 -2.27418,-4.62822 -4.13488,-8.51613 -4.13488,-8.63979 0,-0.12366 -2.26254,-4.96086 -5.02787,-10.74934 -2.76533,-5.78847 -5.36721,-11.18902 -5.78195,-12.00123 -0.41475,-0.81221 -1.14053,-1.47675 -1.61285,-1.47675 -0.47233,0 -1.72135,1.72779 -2.7756,3.83954 -1.05426,2.11174 -2.29357,4.76988 -2.75403,5.90697 -0.46046,1.1371 -3.42012,7.38373 -6.57702,13.8814 -3.15691,6.49767 -6.37206,13.24255 -7.14479,14.98862 -0.77273,1.74606 -1.40496,3.92004 -1.40496,4.83106 0,0.91102 0.41771,2.07411 0.92824,2.58464 0.80469,0.80468 3.41274,0.92824 19.59418,0.92824 16.53992,0 18.78899,-0.11135 19.74618,-0.9776 z m -306.082556,58.86597 c -0.649768,-0.64977 -1.179758,-1.51367 -1.177756,-1.91977 0.002,-0.40611 0.427699,-1.53581 0.945994,-2.51047 0.518295,-0.97465 1.337835,-3.07995 1.821198,-4.67845 0.483363,-1.5985 1.386736,-3.85398 2.007494,-5.01218 0.620758,-1.1582 1.129645,-2.50848 1.130859,-3.00062 0.0012,-0.49213 0.532843,-1.76511 1.181396,-2.82884 0.648553,-1.06372 1.187641,-2.39279 1.197973,-2.95348 0.01033,-0.5607 0.409053,-1.53543 0.886047,-2.16607 0.476993,-0.63064 0.86726,-1.53187 0.86726,-2.00274 0,-0.47087 0.4976,-1.94849 1.105778,-3.28361 0.608179,-1.33512 1.443359,-3.49075 1.855958,-4.79028 0.412598,-1.29954 1.376975,-3.74128 2.143058,-5.42611 0.766084,-1.68482 1.39288,-3.23661 1.39288,-3.44842 0,-0.21181 1.222997,-3.48506 2.71777,-7.2739 1.494773,-3.78883 3.19401,-7.95204 3.776081,-9.25157 0.582072,-1.29954 1.502501,-3.68452 2.045397,-5.29995 0.542897,-1.61544 1.733462,-4.80521 2.645701,-7.08838 0.912239,-2.28316 2.600958,-6.54353 3.752709,-9.46749 1.151751,-2.92395 3.074272,-7.84151 4.27227,-10.9279 1.197998,-3.0864 2.787494,-7.07361 3.532215,-8.86047 0.744721,-1.78686 2.47573,-6.17279 3.846686,-9.74651 1.370957,-3.57372 3.418966,-8.75709 4.551132,-11.5186 1.132165,-2.76151 2.406205,-5.95128 2.8312,-7.08837 0.424995,-1.1371 1.787502,-4.72559 3.027793,-7.97442 1.240291,-3.24884 2.879194,-7.0316 3.642006,-8.40613 0.762812,-1.37453 2.547484,-3.52071 3.965937,-4.76928 1.418454,-1.24858 3.591539,-2.56347 4.829079,-2.92198 1.237539,-0.35851 4.792233,-0.58572 7.89932,-0.5049 5.2102838,0.13553 6.0049892,0.32273 10.2274432,2.40908 2.70728596,1.3377 5.1311618,3.01024 5.9313295,4.09278 0.7442242,1.00686 2.8847185,5.02043 4.7566541,8.91903 1.8719352,3.89861 5.1948242,10.80977 7.3841972,15.35814 2.189373,4.54837 6.663664,13.71895 9.942868,20.37907 4.3403,8.81522 6.572931,12.68402 8.207318,14.222 1.23482,1.16198 4.105825,3.19005 6.380011,4.50683 2.274187,1.31678 7.324652,4.25432 11.223256,6.52786 3.898605,2.27354 8.683256,5.07678 10.632559,6.22944 1.949302,1.15265 6.015447,3.49331 9.035878,5.20146 3.020431,1.70815 6.143745,3.75778 6.940698,4.55473 0.796953,0.79696 1.449005,1.90854 1.449005,2.4702 0,0.56165 -0.582581,1.78802 -1.294624,2.72526 -0.712044,0.93724 -2.313619,2.83511 -3.559057,4.21748 -1.245438,1.38237 -3.055183,3.76028 -4.021655,5.28425 -1.158698,1.82708 -1.757222,3.5392 -1.757222,5.02667 0,1.72251 0.45386,2.74992 1.919767,4.34581 1.228152,1.33705 2.770987,2.28117 4.282559,2.62067 1.521785,0.3418 3.270667,0.30212 4.913456,-0.11147 1.611877,-0.4058 3.677272,-1.65551 5.611628,-3.39542 1.683529,-1.51429 3.827798,-3.33888 4.765041,-4.05463 0.937244,-0.71576 2.212381,-1.30137 2.833639,-1.30137 0.621257,0 3.044189,1.07997 5.384293,2.39993 2.340099,1.31997 5.492929,3.11421 7.006269,3.98721 1.51335,0.873 3.33481,2.11827 4.04769,2.76727 0.71288,0.649 1.66765,1.89842 2.12171,2.77648 0.45407,0.87807 0.82558,2.34798 0.82558,3.26648 0,0.91849 -0.41486,2.26228 -0.92191,2.98619 -0.50705,0.72391 -1.70321,1.72023 -2.65814,2.21405 -1.52419,0.78819 -1.73623,1.21695 -1.73623,3.51075 0,2.28727 -0.25523,2.80757 -2.04792,4.17493 -1.72826,1.31821 -2.41375,1.50022 -4.39159,1.16607 -2.17144,-0.36687 -2.410021,-0.26766 -3.246515,1.34994 -0.496563,0.96025 -1.333134,1.91102 -1.859047,2.11283 -0.525913,0.20182 -1.665454,0.36672 -2.532313,0.36647 -0.866858,-2.6e-4 -3.278414,-0.80579 -5.359011,-1.79007 -2.080598,-0.98428 -5.482461,-2.97768 -7.559696,-4.42977 -2.077235,-1.45209 -3.888618,-2.64016 -4.025295,-2.64016 -0.136678,0 -1.884604,-1.12278 -3.884281,-2.49506 -1.999677,-1.37228 -3.99563,-3.04426 -4.435452,-3.71551 -0.439821,-0.67125 -0.76235,-2.21331 -0.71673,-3.42679 0.06388,-1.69921 -0.31255,-2.61973 -1.637744,-4.00493 -0.946379,-0.98923 -2.651037,-2.34885 -3.78813,-3.02136 -1.137093,-0.67252 -2.997791,-1.81576 -4.134884,-2.54054 -1.137093,-0.72478 -6.054651,-3.65149 -10.927907,-6.5038 -4.873256,-2.8523 -10.515287,-6.20928 -12.537847,-7.45994 -2.022561,-1.25066 -3.774378,-2.27393 -3.892927,-2.27393 -0.11855,0 -2.450937,-1.33075 -5.183083,-2.95721 -2.732146,-1.62647 -5.990023,-3.55362 -7.239727,-4.28256 -1.249704,-0.72894 -3.838792,-2.59549 -5.75353,-4.14789 -3.4078207,-2.76294 -3.6446098,-3.15589 -11.2124496,-18.60698 -4.2521096,-8.68143 -8.1240815,-16.44896 -8.6043819,-17.26117 -0.4803004,-0.81221 -1.4252693,-2.73936 -2.0999308,-4.28256 -0.6746617,-1.5432 -1.4503877,-2.80581 -1.7238367,-2.80581 -0.273448,0 -1.03545,1.18157 -1.693338,2.62573 -0.657887,1.44415 -1.196159,2.90902 -1.196159,3.25527 0,0.34625 -0.487615,1.75636 -1.083588,3.13357 -0.595974,1.37722 -1.426895,3.43438 -1.846492,4.57147 -0.419597,1.13709 -1.639474,4.59268 -2.710837,7.67907 -1.071363,3.0864 -2.475172,6.9407 -3.119574,8.56512 -0.644403,1.62442 -1.500508,3.88383 -1.902456,5.02093 -0.401948,1.13709 -1.203068,3.31494 -1.780267,4.83967 -0.955319,2.52358 -0.965497,2.84148 -0.113464,3.54419 0.727678,0.60015 3.983369,0.72595 14.628585,0.56525 13.06048776,-0.19716 13.7991118,-0.14865 15.9998804,1.05063 1.2690055,0.69153 3.4037155,2.11362 4.7437999,3.16019 1.3400845,1.04657 4.1311307,2.91313 6.2023257,4.14791 2.071195,1.23478 5.89232,3.50797 8.49139,5.05152 2.59907,1.54356 5.124302,2.98644 5.611628,3.20639 0.487325,0.21996 1.870552,1.00364 3.073836,1.7415 1.203284,0.73787 5.3234,3.18776 9.155814,5.4442 3.832413,2.25644 7.652645,4.59802 8.489403,5.20351 0.836759,0.60549 2.345796,2.74652 3.353417,4.75785 1.00762,2.01132 3.313407,6.77828 5.12397,10.59324 1.810563,3.81497 3.291932,7.27785 3.291932,7.69531 0,0.41746 0.360196,1.28334 0.800435,1.92418 0.440239,0.64083 1.677309,3.37628 2.749046,6.07877 1.948611,4.91361 1.948611,4.91361 0.661054,6.20232 -1.235059,1.23617 -1.834875,1.29668 -14.710675,1.484 -11.750208,0.17095 -13.65731,0.0701 -15.302244,-0.8095 -1.322067,-0.70693 -2.416508,-2.12979 -3.691861,-4.79972 -0.997002,-2.08721 -1.812732,-4.06259 -1.812732,-4.38975 0,-0.32715 -0.496773,-1.57783 -1.10394,-2.77929 -0.607168,-1.20146 -1.636114,-3.38063 -2.286549,-4.84261 -0.650434,-1.46197 -2.014358,-4.41855 -3.030943,-6.57016 -1.016584,-2.15161 -1.848335,-4.1749 -1.848335,-4.4962 0,-0.3213 -0.792358,-2.33169 -1.760795,-4.46753 -1.736466,-3.8297 -1.799719,-3.88976 -4.577907,-4.34675 -1.549412,-0.25486 -14.0120566,-0.43328 -27.694766,-0.39647 -16.57219,0.0446 -25.275949,0.28008 -26.070681,0.70541 -0.656166,0.35117 -1.755117,1.71688 -2.442114,3.03491 -0.686998,1.31804 -1.249087,2.78107 -1.249087,3.2512 0,0.47012 -0.635189,2.25618 -1.411531,3.96902 -0.776342,1.71284 -1.839598,4.12007 -2.362791,5.3494 -0.523192,1.22934 -0.959713,2.69132 -0.970045,3.24884 -0.01033,0.55753 -0.409054,1.52966 -0.886047,2.1603 -0.476993,0.63064 -0.86726,1.62156 -0.86726,2.20203 0,0.58048 -0.640049,2.45682 -1.422331,4.16966 -0.782282,1.71284 -1.894171,4.26228 -2.470864,5.66543 -0.633621,1.54166 -1.695389,2.88569 -2.683218,3.39651 -1.27935,0.66158 -4.594303,0.84533 -15.250067,0.84533 -12.827784,0 -13.68372,-0.0683 -14.796776,-1.18139 z m 29.746209,-0.0692 c 1.054074,-0.48027 1.959905,-1.96757 3.327771,-5.46395 1.033704,-2.64224 2.40799,-6.13313 3.053968,-7.75755 0.645979,-1.62442 1.402468,-3.61802 1.681087,-4.43023 0.278619,-0.81221 1.159055,-3.20454 1.956524,-5.31628 0.797468,-2.11175 1.978555,-5.16861 2.624638,-6.79302 0.646082,-1.62442 1.460801,-3.66832 1.810485,-4.542 0.349685,-0.87367 1.246596,-1.92835 1.993136,-2.34373 1.046364,-0.5822 7.515066,-0.75536 28.234089,-0.75577 19.5279371,-3.8e-4 27.320903,0.1923 28.501163,0.7047 0.893431,0.38788 1.626849,1.04408 1.62982,1.45822 0.003,0.41415 0.659192,2.08206 1.458271,3.70648 0.799079,1.62442 1.461184,3.1813 1.471344,3.45974 0.01016,0.27843 0.827238,2.27204 1.81573,4.43023 0.988492,2.15819 2.289992,4.98724 2.892223,6.28678 0.602232,1.29953 1.687834,3.82476 2.41245,5.61162 0.724616,1.78686 2.080451,4.90294 3.012966,6.92461 1.164305,2.52418 2.242032,3.9584 3.440029,4.5779 1.389211,0.71839 4.066588,0.90082 13.14481,0.89564 6.270146,-0.004 12.407209,-0.1729 13.637919,-0.37629 1.253237,-0.20711 2.486192,-0.83419 2.8026,-1.42541 0.418864,-0.78265 0.02172,-2.32732 -1.535896,-5.9737 -1.155464,-2.70495 -2.350181,-5.17062 -2.654926,-5.47926 -0.304746,-0.30864 -0.554084,-0.98495 -0.554084,-1.50291 0,-0.51796 -1.038379,-3.05649 -2.30751,-5.64116 -1.269131,-2.58468 -2.882204,-6.02849 -3.584607,-7.6529 -0.702403,-1.62442 -1.856988,-4.09763 -2.565745,-5.49601 -0.708757,-1.39839 -2.203636,-3.25909 -3.321954,-4.13489 -1.118318,-0.8758 -2.758475,-1.99108 -3.644794,-2.47841 -0.886319,-0.48732 -3.1611,-1.79821 -5.055067,-2.91307 -1.893968,-1.11487 -6.685835,-3.95984 -10.648594,-6.32217 -3.962758,-2.36232 -8.348688,-4.87804 -9.746511,-5.59048 -1.397823,-0.71245 -4.402195,-2.49752 -6.676381,-3.96683 -2.274186,-1.46931 -4.7994184,-3.24706 -5.6116277,-3.95055 -0.8122093,-0.7035 -2.54,-1.89041 -3.8395349,-2.63758 -2.3338015,-1.34184 -2.5231971,-1.35369 -15.4368674,-0.96551 -9.457085,0.28427 -13.492707,0.20226 -14.587272,-0.29646 -0.832258,-0.3792 -1.659772,-1.07143 -1.838922,-1.53829 -0.179149,-0.46685 -0.08813,-1.29474 0.202263,-1.83975 0.290394,-0.54501 1.067882,-2.58582 1.727752,-4.53512 0.65987,-1.9493 1.772325,-5.00616 2.472123,-6.79302 0.699799,-1.78686 2.16574,-5.77407 3.257647,-8.86047 1.091908,-3.08639 2.688947,-7.47232 3.548978,-9.74651 0.86003,-2.27418 1.779028,-4.79942 2.042217,-5.61163 0.26319,-0.81221 0.899607,-2.45537 1.414261,-3.65146 0.514654,-1.1961 1.151814,-2.30827 1.415911,-2.47149 0.264097,-0.16322 0.750656,-0.11495 1.081242,0.10728 0.330586,0.22223 2.4178597,4.12544 4.6383858,8.67381 2.2205261,4.54838 5.75754179,11.72535 7.8600348,15.94884 2.102493,4.22349 4.4549117,8.94038 5.227597,10.48199 0.7726853,1.5416 1.4048824,3.04336 1.4048824,3.33724 0,0.29387 1.4970835,1.90257 3.326852,3.57487 1.829769,1.67231 4.336966,3.55588 5.57155,4.18572 1.234584,0.62984 2.42284,1.4334 2.640569,1.78569 0.217729,0.35229 0.83561,0.82127 1.373068,1.04216 0.537458,0.2209 4.368938,2.39524 8.514401,4.83186 4.145463,2.43663 8.263816,4.80321 9.151895,5.25906 0.888078,0.45585 3.342479,1.93505 5.454223,3.28712 2.111745,1.35206 7.567832,4.62378 12.124639,7.27049 4.556807,2.64671 9.049487,5.61004 9.983733,6.58518 1.303253,1.3603 1.719269,2.38423 1.787302,4.39903 0.04877,1.44432 0.453085,3.06513 0.898479,3.6018 0.445393,0.53666 4.153043,3.18995 8.239222,5.89618 4.086179,2.70624 9.083173,5.74702 11.104432,6.7573 2.021259,1.01028 4.44749,1.83687 5.391626,1.83687 0.944135,0 2.071047,-0.42707 2.504248,-0.94905 0.433201,-0.52197 1.077212,-1.51878 1.431136,-2.21512 0.363552,-0.71528 1.144512,-1.22436 1.795155,-1.17019 0.633413,0.0527 1.706073,0.27167 2.383683,0.48654 0.86378,0.27389 1.79072,-0.0794 3.10117,-1.18211 1.57514,-1.32539 1.86913,-1.98021 1.86913,-4.16323 0,-2.26896 0.21548,-2.70189 1.73623,-3.4883 0.95493,-0.49381 2.1511,-1.49013 2.65814,-2.21405 0.50705,-0.72391 0.92191,-2.09247 0.92191,-3.04124 0,-1.28964 -0.71674,-2.41194 -2.8397,-4.44648 -1.56184,-1.49678 -5.34969,-4.13685 -8.41745,-5.86682 -3.067753,-1.72997 -6.24227,-3.26976 -7.05448,-3.42177 -1.172536,-0.21945 -2.389366,0.52015 -5.906976,3.59031 -2.436628,2.12669 -5.54879,4.29642 -6.915916,4.82163 -1.75076,0.6726 -3.286291,0.83488 -5.19353,0.54887 -1.766703,-0.26493 -3.414885,-1.02685 -4.742125,-2.19219 -1.206923,-1.05969 -2.28788,-2.72792 -2.657826,-4.1018 -0.517882,-1.92326 -0.432789,-2.73994 0.502143,-4.81929 0.61913,-1.37699 3.155438,-4.85891 5.63624,-7.7376 2.480802,-2.87869 4.510548,-5.48785 4.510548,-5.79814 0,-0.31028 -0.258945,-1.048 -0.575435,-1.63936 -0.316489,-0.59137 -1.579105,-1.68728 -2.805814,-2.43536 -1.226708,-0.74809 -3.02782,-1.80842 -4.002472,-2.3563 -0.974651,-0.54788 -3.101162,-1.81839 -4.725581,-2.82335 -1.624419,-1.00497 -4.016744,-2.39742 -5.316279,-3.09434 -1.299535,-0.69692 -4.489302,-2.52233 -7.088372,-4.05648 -2.59907,-1.53414 -7.705442,-4.56085 -11.347493,-6.72602 -3.642051,-2.16517 -6.844325,-3.93667 -7.116165,-3.93667 -0.271841,0 -1.466053,-0.9968 -2.653806,-2.21511 -1.23966,-1.27156 -3.693909,-5.36032 -5.761635,-9.59884 -1.981147,-4.06105 -4.341735,-8.8457 -5.245752,-10.63256 -0.904017,-1.78686 -1.92383,-3.78046 -2.266249,-4.43023 -0.34242,-0.64977 -2.459261,-5.0357 -4.70409,-9.74651 -2.244829,-4.71082 -5.7943464,-12.09879 -7.8878158,-16.41771 -2.0934693,-4.31893 -4.4732473,-8.46319 -5.2883955,-9.20947 -0.8151482,-0.74629 -2.41243653,-1.90731 -3.5495296,-2.58005 -1.137093,-0.67274 -3.5294186,-1.63012 -5.3162791,-2.12751 -2.0247794,-0.56362 -5.029285,-0.83993 -7.974419,-0.73338 -2.599069,0.094 -5.467948,0.47523 -6.375285,0.8471 -0.907338,0.37187 -2.578209,1.40936 -3.713048,2.30555 -1.134839,0.89618 -2.739568,2.82558 -3.566065,4.28756 -0.826497,1.46198 -2.679886,5.715 -4.118642,9.45116 -1.438756,3.73617 -2.879509,7.25459 -3.201672,7.81873 -0.322164,0.56414 -0.585753,1.33247 -0.585753,1.7074 0,0.37492 -0.511469,1.77405 -1.136598,3.10917 -0.625129,1.33512 -2.057987,4.81982 -3.184129,7.74377 -1.126142,2.92396 -3.304986,8.50605 -4.841875,12.40465 -1.536889,3.89861 -3.406874,8.68326 -4.155523,10.63256 -0.748648,1.9493 -1.876302,4.87326 -2.505896,6.49768 -0.629594,1.62441 -1.884943,4.81418 -2.789664,7.08837 -0.904721,2.27418 -2.565709,6.52721 -3.691085,9.45116 -1.125375,2.92395 -2.273409,5.84791 -2.551185,6.49767 -0.277777,0.64977 -1.874987,4.63698 -3.549356,8.86047 -1.674369,4.22349 -3.634677,9.27395 -4.356239,11.22325 -0.721562,1.94931 -2.002459,5.27198 -2.846436,7.38372 -0.843978,2.11175 -2.496519,6.36477 -3.672314,9.45117 -1.175795,3.08639 -2.512202,6.40907 -2.969794,7.38372 -0.457591,0.97465 -1.216706,2.83535 -1.686923,4.13488 -0.470216,1.29954 -1.55307,4.22349 -2.406341,6.49768 -0.853272,2.27418 -1.959042,5.01416 -2.457268,6.08885 -0.689403,1.48705 -0.743964,2.14905 -0.228328,2.77035 0.372646,0.44901 1.256316,0.92905 1.963711,1.06675 0.707395,0.1377 6.922212,0.28657 13.810705,0.33081 8.135858,0.0523 13.032027,-0.15079 13.97284,-0.57945 z M 74.594731,237.43371 c -1.559685,-0.95096 -1.919767,-1.54704 -1.919767,-3.17798 0,-1.64333 0.842237,-3.01109 4.642991,-7.54008 2.553646,-3.04293 6.751401,-7.54264 9.328345,-9.99935 3.763646,-3.58805 5.261476,-4.61556 7.613985,-5.2232 1.610748,-0.41605 5.719679,-1.55249 9.130955,-2.52543 3.41128,-0.97295 7.06666,-2.03239 8.12306,-2.35433 1.05641,-0.32194 12.1839,-8.80481 24.72775,-18.85084 12.54386,-10.04602 23.15807,-18.2655 23.58713,-18.2655 0.42907,0 0.94563,0.52145 1.1479,1.15877 0.2087,0.65754 -0.24105,2.63769 -1.03977,4.5779 -0.77415,1.88053 -4.93305,11.56704 -9.24201,21.52557 -7.83446,18.10643 -7.83446,18.10643 -14.33668,23.27823 -3.57622,2.84449 -9.33357,7.73913 -12.7941,10.87698 -3.46053,3.13784 -7.19662,6.1527 -8.3024,6.69968 -1.10579,0.54697 -2.39012,0.9945 -2.85408,0.9945 -0.46395,0 -1.95154,-0.89559 -3.30576,-1.99021 -1.35421,-1.09461 -4.70127,-3.48694 -7.43791,-5.31628 -3.909194,-2.61315 -5.466483,-3.32607 -7.265378,-3.32607 -1.25932,0 -3.105532,0.4219 -4.102693,0.93755 -0.997162,0.51565 -3.477576,2.48608 -5.512033,4.37873 -2.034456,1.89265 -4.514871,3.86308 -5.512032,4.37873 -0.997161,0.51565 -2.025581,0.93656 -2.285378,0.93534 -0.259796,-0.001 -1.336252,-0.52893 -2.392125,-1.17271 z m -96.499695,-122.9413 c -1.099528,-0.20078 -3.328212,-0.6954 -4.952631,-1.09915 -1.624419,-0.40376 -4.090308,-1.23629 -5.479755,-1.85006 -1.389447,-0.61378 -2.828898,-1.11596 -3.198779,-1.11596 -0.369882,0 -2.453873,-1.35426 -4.631091,-3.00947 -2.177218,-1.65521 -4.937102,-4.29259 -6.133077,-5.86086 -1.195975,-1.568265 -2.96655,-4.486486 -3.934612,-6.484935 -1.724207,-3.559419 -1.756766,-3.79835 -1.596051,-11.712395 0.156426,-7.702815 0.219052,-8.070118 1.345458,-7.891206 0.649767,0.103206 5.035698,2.056249 9.746512,4.340097 4.710814,2.283847 12.386182,6.034997 17.056374,8.335888 6.682588,3.29235 9.076814,4.192295 11.240299,4.225019 1.511972,0.02287 3.9375342,-0.458953 5.3901373,-1.070717 1.4526031,-0.611765 9.3871867,-4.443079 17.6324077,-8.514033 11.673326,-5.763528 15.203238,-7.267945 15.948838,-6.797253 0.789724,0.498548 0.932965,1.57652 0.817373,6.151241 -0.07708,3.050719 -0.263912,6.616975 -0.415173,7.925013 -0.151261,1.308038 -0.961766,3.8783 -1.801121,5.711693 -1.0089,2.203727 -2.774385,4.500668 -5.209403,6.777568 -2.025816,1.89426 -5.357864,4.44092 -7.40455,5.65923 -2.046687,1.21832 -3.9342219,2.21512 -4.1945223,2.21512 -0.2603004,0 -1.7148147,0.54919 -3.2322539,1.22043 -1.5174393,0.67123 -4.27582209,1.62503 -6.1297397,2.11954 -2.0742078,0.55328 -6.3507592,0.93588 -11.1181291,0.99469 -4.261053,0.0526 -8.646983,-0.0687 -9.746511,-0.26949 z m 21.78800546,-1.66185 c 2.29918534,-0.68472 4.93172274,-1.63686 5.85008304,-2.11585 0.9183603,-0.47899 1.8891825,-0.87253 2.1573828,-0.87453 0.2682002,-0.002 2.2856227,-1.05372 4.4831597,-2.33715 2.197538,-1.28343 5.493478,-3.80772 7.324311,-5.60954 1.830834,-1.80181 3.885184,-4.406674 4.565223,-5.788579 0.680039,-1.381906 1.487301,-3.841626 1.793916,-5.466044 0.306615,-1.624419 0.631432,-5.287497 0.721816,-8.140174 0.09038,-2.852676 -0.031,-5.502741 -0.26974,-5.889031 -0.303625,-0.491276 -4.482416,1.318465 -13.905082,6.021979 -7.4090543,3.698378 -14.9329848,7.374774 -16.7198453,8.169767 -1.7868604,0.794993 -4.312093,1.755732 -5.6116279,2.134975 -1.7291368,0.504614 -2.9964448,0.519253 -4.7255818,0.05458 -1.299535,-0.349222 -7.147442,-2.986213 -12.995349,-5.85998 -5.847907,-2.873767 -13.233697,-6.516347 -16.412867,-8.094623 -3.17917,-1.578275 -6.169577,-2.869591 -6.645349,-2.869591 -0.713557,0 -0.86504,1.295953 -0.86504,7.400527 0,7.256069 0.041,7.486916 2.10018,11.826234 1.540175,3.245608 3.198348,5.51304 6.218621,8.50351 2.265142,2.24279 5.240817,4.59435 6.612611,5.22569 1.371793,0.63134 3.464691,1.58185 4.650883,2.11225 1.186193,0.53039 2.732098,0.96435 3.435345,0.96435 0.703248,0 1.840395,0.30065 2.526995,0.6681 0.686599,0.36746 2.596275,0.83264 4.243724,1.03373 1.64745,0.20108 6.210732,0.32258 10.140629,0.26999 5.3320064,-0.0714 8.2061124,-0.41156 11.32560246,-1.34059 z M 11.685416,96.203173 C 11.116862,95.872021 10.252967,94.830049 9.7656482,93.887679 9.2783298,92.945309 8.8796147,91.602869 8.8796147,90.90448 c 0,-0.69839 0.9037674,-2.173567 2.0083723,-3.278171 1.447209,-1.44721 2.536525,-2.008372 3.898604,-2.008372 1.36208,0 2.451396,0.561162 3.898605,2.008372 1.104605,1.104604 2.008372,2.579781 2.008372,3.278171 0,0.698389 -0.401472,2.04616 -0.89216,2.995047 -0.490689,0.948886 -1.403562,1.998942 -2.028609,2.333457 -0.625046,0.334514 -2.017818,0.600125 -3.095049,0.590246 -1.07723,-0.0099 -2.423781,-0.288905 -2.992334,-0.620057 z m 6.294834,-1.281748 c 0.818094,-0.730989 1.658727,-2.058272 1.868072,-2.949518 0.312861,-1.331942 0.01183,-1.989247 -1.690784,-3.691861 -1.139276,-1.139276 -2.656202,-2.071412 -3.370947,-2.071412 -0.714744,0 -2.23167,0.932136 -3.370946,2.071412 -1.7026148,1.702614 -2.0036448,2.359919 -1.6907844,3.691861 0.2093455,0.891246 1.0499784,2.218529 1.8680724,2.949518 0.818094,0.730988 2.255241,1.329069 3.193658,1.329069 0.938418,0 2.375564,-0.598081 3.193659,-1.329069 z m 147.88591,19.254595 c -0.88869,-0.46832 -2.28293,-1.72614 -3.09832,-2.79517 -0.81539,-1.06904 -1.74962,-3.35209 -2.07607,-5.07346 -0.32645,-1.72138 -0.59355,-9.144511 -0.59355,-16.495858 0,-11.82302 0.13422,-13.733303 1.16264,-16.546928 0.63945,-1.749462 2.03497,-4.629445 3.10116,-6.399962 1.06619,-1.770518 3.22696,-4.249053 4.80172,-5.507857 1.57475,-1.258804 4.35921,-2.996467 6.18768,-3.861474 2.82495,-1.336413 4.16989,-1.582872 8.95056,-1.640172 5.62607,-0.06743 5.62607,-0.06743 6.41851,2.436062 0.52061,1.644694 1.58316,3.129751 3.09745,4.329091 1.26775,1.004077 3.27863,2.094425 4.46861,2.422996 1.18999,0.328571 3.29632,0.427541 4.68074,0.219934 1.38443,-0.207608 3.60748,-1.167305 4.94011,-2.132662 1.43939,-1.042683 2.96513,-2.889332 3.75851,-4.549024 1.33554,-2.793831 1.33554,-2.793831 7.22462,-2.733648 5.15095,0.05264 6.33332,0.268579 9.43327,1.722829 1.9493,0.914455 4.37982,2.34935 5.40115,3.188654 1.02132,0.839305 2.94847,2.913712 4.28255,4.609794 1.33408,1.696082 2.4256,3.368183 2.4256,3.715779 0,0.347596 0.54647,1.371127 1.21437,2.274512 1.17193,1.585112 1.20805,2.260394 1.03372,19.321429 -0.17599,17.223615 -0.21536,17.734745 -1.52878,19.846935 -0.74148,1.19241 -2.28511,2.72084 -3.43028,3.39651 -2.0474,1.208 -2.65064,1.22744 -36.16116,1.16583 -28.44827,-0.0523 -34.346,-0.20335 -35.69481,-0.91414 z m 12.56302,-19.412268 c 0.95302,-0.492825 2.13598,-1.675788 2.62881,-2.628806 0.49282,-0.953018 0.89604,-2.569984 0.89604,-3.593257 0,-1.328262 -0.57453,-2.435034 -2.00837,-3.868869 -1.53034,-1.530338 -2.50791,-2.008372 -4.10709,-2.008372 -1.15429,0 -2.79569,0.317564 -3.64755,0.705698 -0.85186,0.388134 -1.92763,1.438189 -2.39059,2.333457 -0.46296,0.895267 -0.84174,2.455876 -0.84174,3.468019 0,1.012143 0.28277,2.368637 0.62839,3.014431 0.34562,0.645794 1.47533,1.690581 2.51047,2.321749 1.03514,0.631168 2.49335,1.148572 3.24047,1.149787 0.74712,0.0012 2.13815,-0.401013 3.09116,-0.893837 z M 42.828455,94.330727 C 42.677454,93.924622 42.486436,86.415378 42.40397,77.643518 42.254034,61.694682 42.254034,61.694682 40.726728,61.517143 c -0.849914,-0.0988 -1.864442,0.228686 -2.287444,0.738372 -0.418076,0.503751 -1.223372,0.915911 -1.789546,0.915911 -0.566173,0 -1.663335,0.482285 -2.438137,1.071746 -0.774802,0.58946 -2.870707,1.681973 -4.657568,2.427805 -1.78686,0.745833 -3.668488,1.725524 -4.181395,2.177091 -0.512907,0.451568 -1.198131,0.821032 -1.522719,0.821032 -0.324588,0 -6.550285,3.01399 -13.834883,6.697756 -7.2845981,3.683766 -15.1806849,7.431767 -17.5468597,8.32889 -2.8998263,1.099455 -4.8252443,1.505735 -5.9069773,1.246425 -0.882662,-0.211589 -4.927515,-1.982373 -8.988561,-3.935075 -4.061047,-1.952702 -7.848896,-3.799793 -8.417442,-4.104647 -0.568547,-0.304854 -1.498896,-0.796554 -2.067442,-1.092667 -0.568547,-0.296113 -8.077791,-4.017003 -16.68721,-8.268644 -8.609418,-4.251641 -16.45093,-8.169511 -17.425581,-8.706378 -0.974651,-0.536867 -2.170814,-1.203599 -2.65814,-1.481627 -0.487325,-0.278028 -1.284767,-0.653818 -1.772093,-0.835088 -0.487325,-0.181271 -2.038306,-0.910567 -3.446623,-1.620659 -1.408317,-0.710092 -2.785293,-1.70412 -3.059946,-2.208951 -0.274654,-0.504831 -0.269464,-1.28987 0.01153,-1.744531 0.280996,-0.454662 2.588321,-1.96962 5.127388,-3.366574 2.539068,-1.396953 5.015208,-2.691621 5.502533,-2.877038 0.487326,-0.185418 1.550582,-0.706739 2.362791,-1.158491 0.812209,-0.451753 6.660116,-3.376512 12.995349,-6.499466 6.335232,-3.122953 12.050232,-5.969013 12.7,-6.324578 0.649767,-0.355565 2.510465,-1.292498 4.134884,-2.082073 1.624418,-0.789575 3.485116,-1.722354 4.134883,-2.072841 0.649768,-0.350487 3.424043,-1.785425 6.165057,-3.188751 2.741014,-1.403326 5.225213,-2.551502 5.520442,-2.551502 0.295229,0 1.242349,-0.494198 2.104711,-1.098218 1.157751,-0.810918 2.417844,-1.057475 4.816767,-0.942476 2.9324545,0.140576 6.1825707,1.630249 33.374419,15.296982 16.56907,8.327681 30.753809,15.765599 31.521643,16.528705 1.084685,1.078007 1.263908,1.623611 0.80355,2.446224 -0.325881,0.582317 -1.618643,1.633106 -2.872805,2.335087 -2.280295,1.27633 -2.280295,1.27633 -2.436776,19.189983 -0.104951,12.014543 -0.371921,18.173241 -0.8107,18.701937 -0.35982,0.433557 -1.427455,0.788285 -2.372523,0.788285 -0.945067,0 -1.84185,-0.332267 -1.992851,-0.738372 z m 4.446509,-18.705901 c 0.184267,-11.578437 0.517511,-18.632984 0.886046,-18.756995 0.324884,-0.109321 1.454593,-0.725433 2.510465,-1.369136 1.077195,-0.656702 1.919768,-1.660942 1.919768,-2.288119 0,-0.614763 -0.332268,-1.376599 -0.738372,-1.692969 C 51.446766,51.201236 49.785429,50.25284 48.16101,49.41006 46.536592,48.567281 32.861735,41.725948 17.77244,34.207099 -5.6614802,22.530204 -10.062187,20.529142 -12.402237,20.486255 c -2.336916,-0.04283 -4.425444,0.794508 -14.209105,5.69674 -6.30823,3.160822 -11.86823,5.958861 -12.355555,6.217864 -0.487326,0.259004 -9.073125,4.552533 -19.079554,9.541176 -10.006429,4.988643 -18.47576,9.410353 -18.820736,9.826024 -0.344976,0.41567 -0.495937,1.097905 -0.335469,1.516078 0.160468,0.418173 3.047706,2.167103 6.416085,3.886511 3.368379,1.719408 10.776069,5.465301 16.461534,8.324206 5.685465,2.858906 14.752507,7.359989 20.148981,10.002407 5.396475,2.642418 10.007185,4.804397 10.246023,4.804397 0.238839,0 1.13982,0.493589 2.002182,1.096865 0.862362,0.603276 3.365004,1.809019 5.561427,2.679429 3.888069,1.540784 4.067404,1.557979 6.7930235,0.65133 1.5397397,-0.512178 3.7298755,-1.354529 4.8669686,-1.87189 1.137093,-0.517361 5.12430233,-2.454216 8.8604652,-4.304121 3.7361628,-1.849906 7.3911047,-3.675275 8.1220927,-4.056376 0.730989,-0.381101 1.860698,-0.958725 2.510465,-1.283609 0.649768,-0.324884 1.64657,-0.84431 2.215117,-1.154281 0.568546,-0.30997 5.922484,-2.96811 11.897639,-5.906976 5.975156,-2.938867 11.462356,-5.343394 12.193779,-5.343394 0.731423,0 1.491206,0.420461 1.688407,0.934358 0.197201,0.513897 0.358547,8.106436 0.358547,16.872309 0,15.937951 0,15.937951 1.919768,15.752851 1.919767,-0.1851 1.919767,-0.1851 2.215116,-18.743327 z M 197.58067,58.768043 c -1.39117,-1.391168 -1.44989,-1.761934 -1.44989,-9.153925 0,-7.704031 0,-7.704031 -2.89845,-10.511733 -2.04804,-1.983931 -3.10535,-3.584274 -3.60367,-5.45453 -0.38787,-1.455756 -0.57058,-3.650711 -0.40601,-4.87768 0.16457,-1.226968 0.8131,-3.225663 1.44117,-4.441544 0.62807,-1.215881 2.27087,-3.008134 3.65068,-3.982785 2.23017,-1.575318 2.98424,-1.772093 6.79092,-1.772093 3.71458,0 4.59443,0.216391 6.63793,1.632537 1.29567,0.897896 2.90538,2.625686 3.57714,3.839535 0.67176,1.213848 1.40689,3.082627 1.63361,4.15284 0.22788,1.075626 0.0848,3.310908 -0.32001,4.998184 -0.57011,2.37648 -1.36654,3.670161 -3.59685,5.842551 -2.8646,2.790209 -2.8646,2.790209 -2.8646,10.534479 0,7.434714 -0.058,7.802225 -1.44989,9.194164 -1.00104,1.001037 -2.10656,1.449894 -3.57104,1.449894 -1.46448,0 -2.57,-0.448857 -3.57104,-1.449894 z"
         id="path60" /><path
         style="fill:#09446c"
         d="m -83.078652,277.18342 c -0.707395,-0.1377 -1.591065,-0.61774 -1.963711,-1.06675 -0.515636,-0.6213 -0.461075,-1.2833 0.228328,-2.77035 0.498226,-1.07469 1.603996,-3.81467 2.457268,-6.08885 0.853271,-2.27419 1.936125,-5.19814 2.406341,-6.49768 0.470217,-1.29953 1.229332,-3.16023 1.686923,-4.13488 0.457592,-0.97465 1.793999,-4.29733 2.969794,-7.38372 1.175795,-3.0864 2.828336,-7.33942 3.672314,-9.45117 0.843977,-2.11174 2.124874,-5.43441 2.846436,-7.38372 0.721562,-1.9493 2.68187,-6.99976 4.356239,-11.22325 1.674369,-4.22349 3.271579,-8.2107 3.549356,-8.86047 0.277776,-0.64976 1.42581,-3.57372 2.551185,-6.49767 1.125376,-2.92395 2.786364,-7.17698 3.691085,-9.45116 0.904721,-2.27419 2.16007,-5.46396 2.789664,-7.08837 0.629594,-1.62442 1.757248,-4.54838 2.505896,-6.49768 0.748649,-1.9493 2.618634,-6.73395 4.155523,-10.63256 1.536889,-3.8986 3.715733,-9.48069 4.841875,-12.40465 1.126142,-2.92395 2.559,-6.40865 3.184129,-7.74377 0.625129,-1.33512 1.136598,-2.73425 1.136598,-3.10917 0,-0.37493 0.263589,-1.14326 0.585753,-1.7074 0.322163,-0.56414 1.762916,-4.08256 3.201672,-7.81873 1.438756,-3.73616 3.292145,-7.98918 4.118642,-9.45116 0.826497,-1.46198 2.431226,-3.39138 3.566065,-4.28756 1.134839,-0.89619 2.80571,-1.93368 3.713048,-2.30555 0.907337,-0.37187 3.776216,-0.75306 6.375285,-0.8471 2.945134,-0.10655 5.9496396,0.16976 7.974419,0.73338 1.7868605,0.49739 4.1791861,1.45477 5.3162791,2.12751 1.13709307,0.67274 2.7343814,1.83376 3.5495296,2.58005 0.8151482,0.74628 3.1949262,4.89054 5.2883955,9.20947 2.0934694,4.31892 5.6429868,11.70689 7.8878158,16.41771 2.244829,4.71081 4.36167,9.09674 4.70409,9.74651 0.342419,0.64977 1.362232,2.64337 2.266249,4.43023 0.904017,1.78686 3.264605,6.57151 5.245752,10.63256 2.067726,4.23852 4.521975,8.32728 5.761635,9.59884 1.187753,1.21831 2.381965,2.21511 2.653806,2.21511 0.27184,0 3.474114,1.7715 7.116165,3.93667 3.642051,2.16517 8.748423,5.19188 11.347493,6.72602 2.59907,1.53415 5.788837,3.35956 7.088372,4.05648 1.299535,0.69692 3.69186,2.08937 5.316279,3.09434 1.624419,1.00496 3.75093,2.27547 4.725581,2.82335 0.974652,0.54788 2.775764,1.60821 4.002472,2.3563 1.226709,0.74808 2.489325,1.84399 2.805814,2.43536 0.31649,0.59136 0.575435,1.32908 0.575435,1.63936 0,0.31029 -2.029746,2.91945 -4.510548,5.79814 -2.480802,2.87869 -5.01711,6.36061 -5.63624,7.7376 -0.934932,2.07935 -1.020025,2.89603 -0.502143,4.81929 0.369946,1.37388 1.450903,3.04211 2.657826,4.1018 1.32724,1.16534 2.975422,1.92726 4.742125,2.19219 1.907239,0.28601 3.44277,0.12373 5.19353,-0.54887 1.367126,-0.52521 4.479288,-2.69494 6.915916,-4.82163 3.51761,-3.07016 4.73444,-3.80976 5.906976,-3.59031 0.81221,0.15201 3.986727,1.6918 7.05448,3.42177 3.06776,1.72997 6.85561,4.37004 8.41745,5.86682 2.12296,2.03454 2.8397,3.15684 2.8397,4.44648 0,0.94877 -0.41486,2.31733 -0.92191,3.04124 -0.50704,0.72392 -1.70321,1.72024 -2.65814,2.21405 -1.52075,0.78641 -1.73623,1.21934 -1.73623,3.4883 0,2.18302 -0.29399,2.83784 -1.86913,4.16323 -1.31045,1.10267 -2.23739,1.456 -3.10117,1.18211 -0.67761,-0.21487 -1.75027,-0.43381 -2.383683,-0.48654 -0.650643,-0.0542 -1.431603,0.45491 -1.795155,1.17019 -0.353924,0.69634 -0.997935,1.69315 -1.431136,2.21512 -0.433201,0.52198 -1.560113,0.94905 -2.504248,0.94905 -0.944136,0 -3.370367,-0.82659 -5.391626,-1.83687 -2.021259,-1.01028 -7.018253,-4.05106 -11.104432,-6.7573 -4.086179,-2.70623 -7.793829,-5.35952 -8.239222,-5.89618 -0.445394,-0.53667 -0.849709,-2.15748 -0.898479,-3.6018 -0.06803,-2.0148 -0.484049,-3.03873 -1.787302,-4.39903 -0.934246,-0.97514 -5.426926,-3.93847 -9.983733,-6.58518 -4.556807,-2.64671 -10.012894,-5.91843 -12.124639,-7.27049 -2.111744,-1.35207 -4.566145,-2.83127 -5.454223,-3.28712 -0.888079,-0.45585 -5.006432,-2.82243 -9.151895,-5.25906 -4.145463,-2.43662 -7.976943,-4.61096 -8.514401,-4.83186 -0.537458,-0.22089 -1.155339,-0.68987 -1.373068,-1.04216 -0.217729,-0.35229 -1.405985,-1.15585 -2.640569,-1.78569 -1.234584,-0.62984 -3.741781,-2.51341 -5.57155,-4.18572 -1.8297685,-1.6723 -3.326852,-3.281 -3.326852,-3.57487 0,-0.29388 -0.6321971,-1.79564 -1.4048824,-3.33724 -0.7726853,-1.54161 -3.125104,-6.2585 -5.227597,-10.48199 -2.10249301,-4.22349 -5.6395087,-11.40046 -7.8600348,-15.94884 -2.2205261,-4.54837 -4.3077998,-8.45158 -4.6383858,-8.67381 -0.330586,-0.22223 -0.817145,-0.2705 -1.081242,-0.10728 -0.264097,0.16322 -0.901257,1.27539 -1.415911,2.47149 -0.514654,1.19609 -1.151071,2.83925 -1.414261,3.65146 -0.263189,0.81221 -1.182187,3.33745 -2.042217,5.61163 -0.860031,2.27419 -2.45707,6.66012 -3.548978,9.74651 -1.091907,3.0864 -2.557848,7.07361 -3.257647,8.86047 -0.699798,1.78686 -1.812253,4.84372 -2.472123,6.79302 -0.65987,1.9493 -1.437358,3.99011 -1.727752,4.53512 -0.290394,0.54501 -0.381412,1.3729 -0.202263,1.83975 0.17915,0.46686 1.006664,1.15909 1.838922,1.53829 1.094565,0.49872 5.130187,0.58073 14.587272,0.29646 12.9136703,-0.38818 13.1030659,-0.37633 15.4368674,0.96551 1.2995349,0.74717 3.0273256,1.93408 3.8395349,2.63758 0.8122093,0.70349 3.3374417,2.48124 5.6116277,3.95055 2.274186,1.46931 5.278558,3.25438 6.676381,3.96683 1.397823,0.71244 5.783753,3.22816 9.746511,5.59048 3.962759,2.36233 8.754626,5.2073 10.648594,6.32217 1.893967,1.11486 4.168748,2.42575 5.055067,2.91307 0.886319,0.48733 2.526476,1.60261 3.644794,2.47841 1.118318,0.8758 2.613197,2.7365 3.321954,4.13489 0.708757,1.39838 1.863342,3.87159 2.565745,5.49601 0.702403,1.62441 2.315476,5.06822 3.584607,7.6529 1.269131,2.58467 2.30751,5.1232 2.30751,5.64116 0,0.51796 0.249338,1.19427 0.554084,1.50291 0.304745,0.30864 1.499462,2.77431 2.654926,5.47926 1.557611,3.64638 1.95476,5.19105 1.535896,5.9737 -0.316408,0.59122 -1.549363,1.2183 -2.8026,1.42541 -1.23071,0.20339 -7.367773,0.37272 -13.637919,0.37629 -9.078222,0.005 -11.755599,-0.17725 -13.14481,-0.89564 -1.197997,-0.6195 -2.275724,-2.05372 -3.440029,-4.5779 -0.932515,-2.02167 -2.28835,-5.13775 -3.012966,-6.92461 -0.724616,-1.78686 -1.810218,-4.31209 -2.41245,-5.61162 -0.602231,-1.29954 -1.903731,-4.12859 -2.892223,-6.28678 -0.988492,-2.15819 -1.80557,-4.1518 -1.81573,-4.43023 -0.01016,-0.27844 -0.672265,-1.83532 -1.471344,-3.45974 -0.799079,-1.62442 -1.455301,-3.29233 -1.458271,-3.70648 -0.003,-0.41414 -0.736389,-1.07034 -1.62982,-1.45822 -1.18026,-0.5124 -8.9732259,-0.70508 -28.501163,-0.7047 -20.719023,4.1e-4 -27.187725,0.17357 -28.234089,0.75577 -0.74654,0.41538 -1.643451,1.47006 -1.993136,2.34373 -0.349684,0.87368 -1.164403,2.91758 -1.810485,4.542 -0.646083,1.62441 -1.82717,4.68127 -2.624638,6.79302 -0.797469,2.11174 -1.677905,4.50407 -1.956524,5.31628 -0.278619,0.81221 -1.035108,2.80581 -1.681087,4.43023 -0.645978,1.62442 -2.020264,5.11531 -3.053968,7.75755 -1.367866,3.49638 -2.273697,4.98368 -3.327771,5.46395 -0.940813,0.42866 -5.836982,0.63171 -13.97284,0.57945 -6.888493,-0.0442 -13.10331,-0.19311 -13.810705,-0.33081 z M -21.58319,113.90116 c -1.647449,-0.20109 -3.557125,-0.66627 -4.243724,-1.03373 -0.6866,-0.36745 -1.823747,-0.6681 -2.526995,-0.6681 -0.703247,0 -2.249152,-0.43396 -3.435345,-0.96435 -1.186192,-0.5304 -3.27909,-1.48091 -4.650883,-2.11225 -1.371794,-0.63134 -4.347469,-2.9829 -6.612611,-5.22569 -3.020273,-2.99047 -4.678446,-5.257897 -6.218621,-8.503505 -2.059184,-4.339318 -2.10018,-4.570165 -2.10018,-11.826234 0,-6.104574 0.151483,-7.400527 0.86504,-7.400527 0.475772,0 3.466179,1.291316 6.645349,2.869591 3.17917,1.578276 10.56496,5.220856 16.412867,8.094623 5.847907,2.873767 11.695814,5.510758 12.995349,5.85998 1.729137,0.464668 2.996445,0.450029 4.7255818,-0.05458 1.2995349,-0.379243 3.8247675,-1.339982 5.6116279,-2.134975 1.7868605,-0.794993 9.310791,-4.471389 16.7198453,-8.169767 9.422666,-4.703514 13.601457,-6.513255 13.905082,-6.021979 0.238741,0.38629 0.360124,3.036355 0.26974,5.889031 -0.09038,2.852677 -0.415201,6.515755 -0.721816,8.140174 -0.306615,1.624418 -1.113877,4.084138 -1.793916,5.466044 -0.680039,1.381905 -2.734389,3.986774 -4.565223,5.788584 -1.830833,1.80182 -5.126773,4.32611 -7.324311,5.60954 -2.197537,1.28343 -4.2149595,2.33515 -4.4831597,2.33715 -0.2682003,0.002 -1.2390225,0.39554 -2.1573828,0.87453 -0.9183603,0.47899 -3.5508977,1.43113 -5.85008304,2.11585 -3.11949006,0.92903 -5.99359606,1.26923 -11.32560246,1.34059 -3.929897,0.0526 -8.493179,-0.0689 -10.140629,-0.26999 z M 17.772799,96.232984 c 0.625047,-0.334515 1.53792,-1.384571 2.028609,-2.333457 0.490688,-0.948887 0.89216,-2.296658 0.89216,-2.995047 0,-0.69839 -0.903767,-2.173567 -2.008372,-3.278171 -1.447209,-1.44721 -2.536525,-2.008372 -3.898605,-2.008372 -1.362079,0 -2.451395,0.561162 -3.898604,2.008372 -1.1046049,1.104604 -2.0083723,2.579781 -2.0083723,3.278171 0,0.698389 0.3987151,2.040829 0.8860335,2.983199 0.4873188,0.94237 1.3512138,1.984342 1.9197678,2.315494 0.568553,0.331152 1.915104,0.610177 2.992334,0.620057 1.077231,0.0099 2.470003,-0.255732 3.095049,-0.590246 z M 43.14008,78.615302 c 0,-8.765873 -0.161346,-16.358412 -0.358547,-16.872309 -0.197201,-0.513897 -0.956984,-0.934358 -1.688407,-0.934358 -0.731423,0 -6.218623,2.404527 -12.193779,5.343394 -5.975155,2.938866 -11.329093,5.597006 -11.897639,5.906976 -0.568547,0.309971 -1.565349,0.829397 -2.215117,1.154281 -0.649767,0.324884 -1.779476,0.902508 -2.510465,1.283609 -0.730988,0.381101 -4.3859299,2.20647 -8.1220927,4.056376 -3.73616287,1.849905 -7.7233722,3.78676 -8.8604652,4.304121 -1.1370931,0.517361 -3.3272289,1.359712 -4.8669686,1.87189 -2.7256195,0.906649 -2.9049545,0.889454 -6.7930235,-0.65133 -2.196423,-0.87041 -4.699065,-2.076153 -5.561427,-2.679429 -0.862362,-0.603276 -1.763343,-1.096865 -2.002182,-1.096865 -0.238838,0 -4.849548,-2.161979 -10.246023,-4.804397 -5.396474,-2.642418 -14.463516,-7.143501 -20.148981,-10.002407 -5.685465,-2.858905 -13.093155,-6.604798 -16.461534,-8.324206 -3.368379,-1.719408 -6.255617,-3.468338 -6.416085,-3.886511 -0.160468,-0.418173 -0.0095,-1.100408 0.335469,-1.516078 0.344976,-0.415671 8.814307,-4.837381 18.820736,-9.826024 10.006429,-4.988643 18.592228,-9.282172 19.079554,-9.541176 0.487325,-0.259003 6.047325,-3.057042 12.355555,-6.217864 9.783661,-4.902232 11.872189,-5.739569 14.209105,-5.69674 2.34005,0.04289 6.7407568,2.043949 30.174677,13.720844 15.089295,7.518849 28.764152,14.360182 30.38857,15.202961 1.624419,0.84278 3.285756,1.791176 3.691861,2.107547 0.406104,0.31637 0.738372,1.078206 0.738372,1.692969 0,0.627177 -0.842573,1.631417 -1.919768,2.288119 -1.055872,0.643703 -2.185581,1.259815 -2.510465,1.369136 -0.368535,0.124011 -0.701779,7.178558 -0.886046,18.756995 -0.295349,18.558227 -0.295349,18.558227 -2.215116,18.743327 -1.919768,0.1851 -1.919768,0.1851 -1.919768,-15.752851 z"
         id="path59" /></g></g></svg></div>
    <div>
      <div class="school-name">Academic Automations SCHOOL</div>
      <div class="school-motto">Automated Reports for UK Secondary Schools</div>
    </div>
  </div>

  <!-- ✅ KPI Section -->
  <div class="ou-section">
    <div class="ou-year-title">📊 Attendance KPI Summary — Week 15</div>
    <table class="ou-table">
      <tr>
        <th>Metric</th><th>Week 15</th>
        <th>AI Forecast (Week 16)</th>
      </tr>
      <tr>
        <td><strong>Whole-School</strong></td>
        <td>94.10%
          <span class="trend-down">
          ↓ 0.05 pp</span>
        </td>
        <td>93.83% 
          <span class="trend-down">
          ↓</span>
        </td>
      </tr>
      <tr>
        <td><strong>Persistent Absence</strong></td>
        <td>15.22%
          <span class="trend-up">
          ↓ 0.05 pp</span>
        </td>
        <td>15.91%
          <span class="trend-down">
          ↑</span>
        </td>
      </tr>
      <tr>
        <td><strong>Severe Absence</strong></td>
        <td>0.68%
          <span class="trend-down">
          ↑ 0.1 pp</span>
        </td>
        <td>0.70%
          <span class="trend-down">
          ↑</span>
        </td>
      </tr>
      <tr>
        <td><strong>Biggest Concern</strong></td>
        <td>Year 11 (92.8%), Year 10 (93.5%)</td>
        <td>Year 11 (92.4%)🟧↓, Year 10 (93.2%)🟧↓</td>
      </tr>
      <tr>
        <td><strong>Drivers</strong></td>
        <td>Authorised 5.62%, Unauthorised 1.14%</td>
        <td>5.31% / 1.28%</td>
      </tr>
    </table>
    <p><strong>🎯 Targeted Actions:</strong> Focus on Year 11 (92.8%), Year 10 (93.5%), PP (89.86%) mentoring, SEN attendance (91.04%) calls, DSL review of <80% students.</p>
  </div>
</div>


    

<style>
#att-kpi-wrapper{
  --green:#1e40af;
  --card:#ffffff;
  font-family:'Segoe UI', Roboto, Arial, sans-serif;
}


    /* =========================================
       Attendance Card System (shared)
       MUST be wrapped per-node with an ID
       ========================================= */

    .att-card{
      background:var(--card);
      border:1px solid #374151;
      border-radius:12px;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      padding:16px 18px;
      margin:0 auto 20px auto;
      max-width:900px;
    }

    .att-card--green{  border-left:6px solid var(--green); }
    .att-card--gold{   border-left:6px solid var(--gold); }
    .att-card--orange{ border-left:6px solid var(--orange); }

    .att-title{
      font-size:18px;
      font-weight:700;
      color:var(--green);
      margin:0 0 10px;
    }

    .att-subtitle{
      font-size:13px;
      font-weight:700;
      color:var(--green);
      margin:12px 0 6px;
    }

    .att-table{
      width:100%;
      border-collapse:collapse;
      font-size:12px;
      background:#fff;
    }

    .att-table th{
      background:var(--green);
      color:#fff;
      padding:6px;
      text-align:center;
      white-space:nowrap;
    }

    .att-table td{
      padding:5px 6px;
      border:1px solid #ddd;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }

    .att-gap{
      background:#ddd;
      font-size:9px;
      color:#666;
      text-align:center;
    }
  

.kpi-grid{
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  gap:14px;
  margin-bottom:28px;
}

.kpi-card{
  background:var(--card);
  border:1px solid #374151;
  border-left:4px solid var(--green);
  border-radius:14px;
  padding:14px 16px;
  box-shadow:0 2px 6px rgba(0,0,0,0.06);
  min-height:96px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.kpi-title{
  font-size:11px;
  font-weight:700;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:#555;
}

.kpi-main{
  font-size:26px;
  font-weight:800;
  color:#0f172a;
}

.kpi-sub{
  font-size:12px;
  color:#666;
}

.dot{
  display:inline-block;
  width:9px;
  height:10px;
  border-radius:3px;
  margin-right:6px;
}

.dot.green{ background:#3ba99c; }
.dot.red{ background:#f4a261; }
.dot.blue{ background:#94a3b8; }
</style>

<div id="att-kpi-wrapper">
  <div class="kpi-grid">
    
  <div class="kpi-card">
    <div class="kpi-title">Whole-School Attendance</div>
    <div class="kpi-main">94.10%</div>
    <div class="kpi-sub">
      <span class="dot red"></span>↓
    </div>
  </div>

  <div class="kpi-card">
    <div class="kpi-title">Persistent Absence</div>
    <div class="kpi-main">15.22%</div>
    <div class="kpi-sub">
      <span class="dot green"></span>↓ (50–89%)
    </div>
  </div>

  <div class="kpi-card">
    <div class="kpi-title">Severe Absence</div>
    <div class="kpi-main">0.68%</div>
    <div class="kpi-sub">
      <span class="dot red"></span>↑ (&lt;50%)
    </div>
  </div>

  <div class="kpi-card">
  <div class="kpi-title">Vulnerable Cohorts</div>

  <div class="kpi-sub">
    <strong class="sen">SEN: 91.04%</strong>
  </div>

  <div class="kpi-sub">
    <strong class="pp">PP: 89.86%</strong>
  </div>

  <div class="kpi-sub">
    <strong class="eal">EAL: 94.25%</strong>
  </div>
</div>


  <div class="kpi-card">
    <div class="kpi-title">Authorised vs Unauthorised</div>
    <div class="kpi-sub">Authorised: 5.62%</div>
    <div class="kpi-sub">Unauthorised: 1.14%</div>
  </div>

  </div>
</div>


    <h2>Executive & Governance Summary</h2>
    
    
<style>
  /* Wrapper ensures total isolation */
  #exec-wrapper {
    --green: #1e40af;
    --gold: #0f766e;
    --orange: #b85c00;
    --soft: #f4f7ff;
    --text: #0f172a;
    --card: #ffffff;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }

  #exec-wrapper * {
    box-sizing: border-box;
  }

  #exec-wrapper .ou-section {
    background: var(--card);
    border: 1px solid #374151;

    /* 🔥 KEY FIX — STRONGER SPECIFICITY */
    border-left: 6px solid var(--orange) !important;

    border-radius: 12px;
    padding: 16px 18px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    max-width: 900px;
    margin: 0 auto 20px auto;
  }

  #exec-wrapper h1,
  #exec-wrapper h2,
  #exec-wrapper h3,
  #exec-wrapper h4 {
    color: var(--green);
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  #exec-wrapper h2 {
    border-left: 5px solid var(--gold);
    padding-left: 8px;
    font-size: 18px;
  }

  #exec-wrapper h3 { font-size: 15px; }

  #exec-wrapper p {
    margin: 6px 0 14px;
    font-size: 13px;
    line-height: 1.55;
  }

  #exec-wrapper table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0 22px;
    font-size: 13px;
  }

  #exec-wrapper th,
  #exec-wrapper td {
    border: 1px solid #ddd;
    padding: 6px 8px;
    text-align: center;
  }

  #exec-wrapper th {
    background-color: var(--green);
    color: #fff;
  }

  #exec-wrapper img.chart {
    width: 100%;
    max-width: 450px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>

    <div id="exec-wrapper">
      <div class="ou-section">
  <p>
    Whole-school attendance for the current week stands at <strong>94.10%</strong>,
    representing a week-on-week decline. The <strong>Persistent Absence (PA)</strong>
    rate is <strong>15.22%</strong>, also showing a decrease compared with the previous
    week. In contrast, <strong>Severe Absence (SA)</strong> has increased slightly and is
    currently <strong>0.68%</strong> of the cohort.
  </p>

  <p>
    Attendance within vulnerable groups remains variable. Students with
    <strong>Special Educational Needs (SEN)</strong> currently record attendance of
    <strong>91.04%</strong>, while <strong>Pupil Premium (PP)</strong> students are lower
    at <strong>89.86%</strong>. <strong>EAL students</strong> continue to demonstrate
    strong engagement, with attendance at <strong>94.25%</strong>.
  </p>

  <p>
    These figures indicate ongoing pressure within key vulnerable cohorts,
    particularly PP students, alongside a small but notable rise in severe absence.
    Targeted pastoral and safeguarding review is recommended, with a focus on students
    approaching or falling below critical attendance thresholds.
  </p>
</div>

    </div>
  

    

    

<style>
  #cohort-wrapper {
    font-family:'Segoe UI', Roboto, Arial, sans-serif;
    --green:#1e40af;
    --gold:#0f766e;
    --text:#0f172a;
    --soft:#f4f7ff;
    --card:#ffffff;
  }

  
    /* =========================================
       Attendance Card System (shared)
       MUST be wrapped per-node with an ID
       ========================================= */

    .att-card{
      background:var(--card);
      border:1px solid #374151;
      border-radius:12px;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      padding:16px 18px;
      margin:0 auto 20px auto;
      max-width:900px;
    }

    .att-card--green{  border-left:6px solid var(--green); }
    .att-card--gold{   border-left:6px solid var(--gold); }
    .att-card--orange{ border-left:6px solid var(--orange); }

    .att-title{
      font-size:18px;
      font-weight:700;
      color:var(--green);
      margin:0 0 10px;
    }

    .att-subtitle{
      font-size:13px;
      font-weight:700;
      color:var(--green);
      margin:12px 0 6px;
    }

    .att-table{
      width:100%;
      border-collapse:collapse;
      font-size:12px;
      background:#fff;
    }

    .att-table th{
      background:var(--green);
      color:#fff;
      padding:6px;
      text-align:center;
      white-space:nowrap;
    }

    .att-table td{
      padding:5px 6px;
      border:1px solid #ddd;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }

    .att-gap{
      background:#ddd;
      font-size:9px;
      color:#666;
      text-align:center;
    }
  

   

  #cohort-wrapper p {
    font-size:13px;
    color:var(--text);
    margin:4px 0 10px;
    line-height:1.5;
  }

  
 
</style>

<div id="cohort-wrapper">
<div class="att-card att-card--gold">

  <div class="att-title">📈 Cumulative Attendance Key Metrics (Cohorts)</div>

  <p>
    Cohort-level cumulative attendance metrics with week-by-week trends
    and attendance progress over time.
  </p>
  <table class="ou-table">
    <tr>
      <th>Cohort</th>
<th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr><tr><td><strong>Whole School</strong></td><td style="background-color:#fde8d8;">94.10%🟧↓</td><td style="background-color:#fde8d8;">94.15%🟧↓</td><td style="background-color:#fde8d8;">94.21%🟧↓</td><td style="background-color:#fde8d8;">94.61%🟧↓</td><td style="background-color:#fde8d8;">95.16%🟧↓</td><td style="background-color:#fde8d8;">95.45%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">95.52% 🟩 ↑</td><td style="background-color:#e6f5f2;">95.40% 🟩 ↑</td></tr><tr><td><strong>SEN Students</strong></td><td style="background-color:#fde8d8;">91.04%🟧↓</td><td style="background-color:#fde8d8;">91.19%🟧↓</td><td style="background-color:#fde8d8;">91.33%🟧↓</td><td style="background-color:#fde8d8;">91.75%🟧↓</td><td style="background-color:#fde8d8;">92.35%🟧↓</td><td style="background-color:#fde8d8;">92.81%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">92.87% 🟩 ↑</td><td style="background-color:#e6f5f2;">92.49% 🟩 ↑</td></tr><tr><td><strong>PP Students</strong></td><td style="background-color:#e6f5f2;">89.86% 🟩 ↑</td><td style="background-color:#e6f5f2;">89.81% 🟩 ↑</td><td style="background-color:#fde8d8;">89.44%🟧↓</td><td style="background-color:#fde8d8;">89.91%🟧↓</td><td style="background-color:#fde8d8;">90.77%🟧↓</td><td style="background-color:#fde8d8;">90.96%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">91.37% 🟩 ↑</td><td style="background-color:#e6f5f2;">90.73% 🟩 ↑</td></tr><tr><td><strong>FSM Students</strong></td><td style="background-color:#e6f5f2;">89.44% 🟩 ↑</td><td style="background-color:#e6f5f2;">89.37% 🟩 ↑</td><td style="background-color:#fde8d8;">88.96%🟧↓</td><td style="background-color:#fde8d8;">89.44%🟧↓</td><td style="background-color:#fde8d8;">90.33%🟧↓</td><td style="background-color:#fde8d8;">90.53%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">90.95% 🟩 ↑</td><td style="background-color:#e6f5f2;">90.29% 🟩 ↑</td></tr><tr><td><strong>EAL Students</strong></td><td style="background-color:#e6f5f2;">94.25% 🟩 ↑</td><td style="background-color:#e6f5f2;">94.22% 🟩 ↑</td><td style="background-color:#fde8d8;">94.11%🟧↓</td><td style="background-color:#fde8d8;">94.49%🟧↓</td><td style="background-color:#fde8d8;">94.96%🟧↓</td><td style="background-color:#fde8d8;">95.60%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">95.91% 🟩 ↑</td><td style="background-color:#e6f5f2;">95.64% 🟩 ↑</td></tr>
  </table>
</div>
</div>


    <h2>Key Findings and Emerging Patterns</h2>
    
    
<style>
  /* Prevent leakage AND prevent override */
  #patterns-wrapper {
    --green: #1e40af;
    --gold: #0f766e;
    --orange: #b85c00; 
    --soft: #f4f7ff;
    --text: #0f172a;
    --card: #ffffff;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }

  #patterns-wrapper * {
    box-sizing: border-box;
  }

  /* The key override — orange left bar ALWAYS used */
  #patterns-wrapper .ou-section {
    background: var(--card);
    border: 1px solid #374151;
    border-left: 6px solid var(--orange) !important; 
    border-radius: 12px;
    padding: 16px 18px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    max-width: 900px;
    margin: 0 auto 20px auto;
  }

  #patterns-wrapper h1,
  #patterns-wrapper h2,
  #patterns-wrapper h3,
  #patterns-wrapper h4 {
    color: var(--green);
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  #patterns-wrapper h2 {
    border-left: 5px solid var(--gold);
    padding-left: 8px;
    font-size: 18px;
  }

  #patterns-wrapper h3 {
    font-size: 15px;
  }

  #patterns-wrapper p {
    margin: 6px 0 14px;
    font-size: 13px;
    line-height: 1.55;
  }

  #patterns-wrapper table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0 22px;
    font-size: 13px;
    background: #fff;
  }

  #patterns-wrapper th,
  #patterns-wrapper td {
    border: 1px solid #ddd;
    padding: 6px 8px;
    text-align: center;
    vertical-align: middle;
  }

  #patterns-wrapper th {
    background-color: var(--green);
    color: #fff;
  }

  #patterns-wrapper img.chart {
    width: 100%;
    max-width: 450px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>

    <div id="patterns-wrapper">
      <div class="ou-section">
        <p>Current attendance data reveals key trends across various cohorts and year groups. The highest year group for attendance is Year 7 at 96.32%, while Year 11 shows the lowest at 92.78%. Among cohorts, the EAL students lead with 94.25%, whereas the PP students have the lowest attendance at 89.86%. Attendance varies by weekday as well, with Mondays and Fridays being the highest at 90%, in contrast to Wednesdays, which reported the lowest at 89%. The lowest attendance per lesson occurs in Lesson 3 at 88%.</p><ul><li>Year 7 consistently demonstrates the highest attendance rates.</li></ul><ul><li>Year 11 remains the weakest year group in attendance.</li></ul><ul><li>EAL students show the strongest attendance among cohorts.</li></ul><ul><li>Midweek dip persists, with Wednesdays having the lowest attendance.</li></ul><ul><li>Lesson 3 records the lowest attendance overall.</li></ul><table><thead><tr><th>Cause</th><th>Evidence</th><th>Possible Explanation</th></tr></thead><tbody><tr><td>Illness</td><td>4.75% absenteeism</td><td>Student illness impacting attendance.</td></tr><tr><td>Late</td><td>1.56% late arrivals</td><td>Occasional lateness affecting overall attendance.</td></tr><tr><td>Unauthorised Absences</td><td>1.64% unauthorised</td><td>Instances of unauthorised absences among students.</td></tr></tbody></table>
      </div>
    </div>
  

    

<style>
  #yeargroup-wrapper {
    font-family:'Segoe UI', Roboto, Arial, sans-serif;
    --green:#1e40af;
    --gold:#0f766e;
    --text:#0f172a;
    --soft:#f4f7ff;
    --card:#ffffff;
  }

  
    /* =========================================
       Attendance Card System (shared)
       MUST be wrapped per-node with an ID
       ========================================= */

    .att-card{
      background:var(--card);
      border:1px solid #374151;
      border-radius:12px;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      padding:16px 18px;
      margin:0 auto 20px auto;
      max-width:900px;
    }

    .att-card--green{  border-left:6px solid var(--green); }
    .att-card--gold{   border-left:6px solid var(--gold); }
    .att-card--orange{ border-left:6px solid var(--orange); }

    .att-title{
      font-size:18px;
      font-weight:700;
      color:var(--green);
      margin:0 0 10px;
    }

    .att-subtitle{
      font-size:13px;
      font-weight:700;
      color:var(--green);
      margin:12px 0 6px;
    }

    .att-table{
      width:100%;
      border-collapse:collapse;
      font-size:12px;
      background:#fff;
    }

    .att-table th{
      background:var(--green);
      color:#fff;
      padding:6px;
      text-align:center;
      white-space:nowrap;
    }

    .att-table td{
      padding:5px 6px;
      border:1px solid #ddd;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }

    .att-gap{
      background:#ddd;
      font-size:9px;
      color:#666;
      text-align:center;
    }
  

  

  #yeargroup-wrapper p {
    font-size:13px;
    color:var(--text);
    margin:4px 0 10px;
    line-height:1.5;
  }

 

 
</style>

<div id="yeargroup-wrapper">
<div class="att-card att-card--gold">

  <div class="att-title">🏫 Cumulative Attendance Key Metrics by Year Group</div>
  <p>
    Displays weekly cumulative attendance for each year group to track
    consistency and trends across cohorts.
  </p>
  <table class="ou-table">
    <tr>
      <th>Year Group</th>
<th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr><tr><td><strong>7</strong></td><td style="background-color:#fde8d8;">96.32%🟧↓</td><td style="background-color:#fde8d8;">96.54%🟧↓</td><td style="background-color:#fde8d8;">96.89%🟧↓</td><td style="background-color:#fde8d8;">97.19%🟧↓</td><td style="background-color:#fde8d8;">97.48%🟧↓</td><td style="background-color:#fde8d8;">97.75%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">97.99% 🟩 ↑</td><td style="background-color:#fde8d8;">97.88%🟧↓</td></tr><tr><td><strong>8</strong></td><td style="background-color:#fde8d8;">94.33%🟧↓</td><td style="background-color:#fde8d8;">94.34%🟧↓</td><td style="background-color:#fde8d8;">94.45%🟧↓</td><td style="background-color:#fde8d8;">94.87%🟧↓</td><td style="background-color:#fde8d8;">95.49%🟧↓</td><td style="background-color:#fde8d8;">96.31%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#fde8d8;">96.34%🟧↓</td><td style="background-color:#e6f5f2;">96.43% 🟩 ↑</td></tr><tr><td><strong>9</strong></td><td style="background-color:#e6f5f2;">93.71% 🟩 ↑</td><td style="background-color:#e6f5f2;">93.63% 🟩 ↑</td><td style="background-color:#fde8d8;">93.49%🟧↓</td><td style="background-color:#fde8d8;">93.85%🟧↓</td><td style="background-color:#fde8d8;">94.16%🟧↓</td><td style="background-color:#fde8d8;">94.26%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">94.34% 🟩 ↑</td><td style="background-color:#fde8d8;">94.09%🟧↓</td></tr><tr><td><strong>10</strong></td><td style="background-color:#fde8d8;">93.49%🟧↓</td><td style="background-color:#fde8d8;">93.63%🟧↓</td><td style="background-color:#fde8d8;">93.76%🟧↓</td><td style="background-color:#fde8d8;">94.10%🟧↓</td><td style="background-color:#fde8d8;">94.58%🟧↓</td><td style="background-color:#fde8d8;">94.61%🟧↓</td><td class="gap-cell">9</td><td style="background-color:#e6f5f2;">94.66% 🟩 ↑</td><td style="background-color:#e6f5f2;">94.27% 🟩 ↑</td></tr><tr><td><strong>11</strong></td><td style="background-color:#e6f5f2;">92.78% 🟩 ↑</td><td style="background-color:#e6f5f2;">92.73% 🟩 ↑</td><td style="background-color:#fde8d8;">92.62%🟧↓</td><td style="background-color:#fde8d8;">93.17%🟧↓</td><td style="background-color:#fde8d8;">94.17%🟧↓</td><td style="background-color:#e6f5f2;">94.43% 🟩 ↑</td><td class="gap-cell">9</td><td style="background-color:#fde8d8;">94.37%🟧↓</td><td style="background-color:#e6f5f2;">94.45% 🟩 ↑</td></tr>
  </table>
</div>
</div>


    
<h2 style="margin-bottom:8px; text-align:left; color:#1e40af;">Attendance Charts Overview</h2>
<p style="font-size:13px; color:#333; max-width:900px; text-align:left; line-height:1.5;">
  <strong>Purpose:</strong> These charts provide a clear visual overview of attendance trends by cohort, year group, and overall average.<br>
  
</p>

<div style="
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:stretch;
  gap:16px;
  width:100%;
  box-sizing:border-box;
">

  
    <div style="
      flex:1 1 calc(33.333% - 16px);
      min-width:280px;
      background:#ffffff;
      border:1px solid #374151;
      border-left:6px solid #1e40af;
      border-radius:12px;
      padding:10px;
      box-sizing:border-box;
      text-align:left;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    ">
      <div style="
        font-weight:bold;
        background:#0f766e20;
        border-left:4px solid #0f766e;
        color:#1e40af;
        padding:4px 8px;
        border-radius:6px;
        font-size:13px;
        margin-bottom:6px;
      ">
        Cohort Trend (All, PP, SEN)
      </div>
      <div style="width:100%; aspect-ratio:16/9; overflow:hidden;">
        <img src="https://quickchart.io/chart?backgroundColor=white&width=450&height=240&c=%7B%22type%22%3A%22line%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Week%2015%22%2C%22Week%2014%22%2C%22Week%2013%22%2C%22Week%2012%22%2C%22Week%2011%22%2C%22Week%2010%22%2C%22Week%208%22%2C%22Week%207%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22All%20Students%22%2C%22data%22%3A%5B94.10020920262323%2C94.14719399847982%2C94.20866655738868%2C94.6073184148815%2C95.16197326355895%2C95.4512678057732%2C95.52034007540695%2C95.40357791874138%5D%2C%22fill%22%3Atrue%2C%22tension%22%3A0.35%2C%22borderColor%22%3A%22%231e40af%22%2C%22backgroundColor%22%3A%22rgba(0%2C66%2C37%2C0.2)%22%7D%2C%7B%22label%22%3A%22PP%22%2C%22data%22%3A%5B89.8641834450483%2C89.80829409145508%2C89.44019281645768%2C89.90757614634647%2C90.77342728218993%2C90.95712566510997%2C91.36869390434057%2C90.73245345672959%5D%2C%22fill%22%3Atrue%2C%22tension%22%3A0.35%2C%22borderColor%22%3A%22%230f766e%22%2C%22backgroundColor%22%3A%22rgba(198%2C168%2C79%2C0.25)%22%7D%2C%7B%22label%22%3A%22SEN%22%2C%22data%22%3A%5B91.03543073549767%2C91.18970966668746%2C91.3287852116202%2C91.74766764253621%2C92.35198158198686%2C92.80714847244857%2C92.87238112165004%2C92.49367837073409%5D%2C%22fill%22%3Atrue%2C%22tension%22%3A0.35%2C%22borderColor%22%3A%22%23b35d2e%22%2C%22backgroundColor%22%3A%22rgba(179%2C93%2C46%2C0.25)%22%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22position%22%3A%22bottom%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Cohort%20Attendance%20Trends%22%2C%22font%22%3A%7B%22size%22%3A13%7D%7D%7D%2C%22scales%22%3A%7B%22x%22%3A%7B%22reverse%22%3Atrue%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Week%20(%E2%86%90%20Current%20%E2%80%A6%20Earliest%20%E2%86%92)%22%7D%7D%2C%22y%22%3A%7B%22min%22%3A0%2C%22max%22%3A100%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Cumulative%20%25%22%7D%7D%7D%7D%7D" style="width:100%; height:100%; object-fit:contain;">
      </div>
    </div>
  
    <div style="
      flex:1 1 calc(33.333% - 16px);
      min-width:280px;
      background:#ffffff;
      border:1px solid #374151;
      border-left:6px solid #1e40af;
      border-radius:12px;
      padding:10px;
      box-sizing:border-box;
      text-align:left;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    ">
      <div style="
        font-weight:bold;
        background:#0f766e20;
        border-left:4px solid #0f766e;
        color:#1e40af;
        padding:4px 8px;
        border-radius:6px;
        font-size:13px;
        margin-bottom:6px;
      ">
        Year Group Comparison (Current Week)
      </div>
      <div style="width:100%; aspect-ratio:16/9; overflow:hidden;">
        <img src="https://quickchart.io/chart?backgroundColor=white&width=450&height=240&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%227%22%2C%228%22%2C%229%22%2C%2210%22%2C%2211%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Current%20Cumulative%20Attendance%20by%20Year%20Group%20(%25)%22%2C%22data%22%3A%5B96.3%2C94.3%2C93.7%2C93.5%2C92.8%5D%2C%22backgroundColor%22%3A%5B%22%231e40af%22%2C%22%230f766e%22%2C%22%23b35d2e%22%2C%22%23567a5b%22%2C%22%2393a17d%22%5D%2C%22borderColor%22%3A%22%231e40af%22%2C%22borderWidth%22%3A1%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Current%20Cumulative%20Attendance%20by%20Year%20Group%20(%25)%22%2C%22font%22%3A%7B%22size%22%3A13%7D%7D%7D%2C%22scales%22%3A%7B%22x%22%3A%7B%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Year%20Group%22%2C%22font%22%3A%7B%22size%22%3A10%7D%7D%7D%2C%22y%22%3A%7B%22beginAtZero%22%3Atrue%2C%22min%22%3A0%2C%22max%22%3A100%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Attendance%20%25%22%2C%22font%22%3A%7B%22size%22%3A10%7D%7D%7D%7D%7D%7D" style="width:100%; height:100%; object-fit:contain;">
      </div>
    </div>
  
    <div style="
      flex:1 1 calc(33.333% - 16px);
      min-width:280px;
      background:#ffffff;
      border:1px solid #374151;
      border-left:6px solid #1e40af;
      border-radius:12px;
      padding:10px;
      box-sizing:border-box;
      text-align:left;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    ">
      <div style="
        font-weight:bold;
        background:#0f766e20;
        border-left:4px solid #0f766e;
        color:#1e40af;
        padding:4px 8px;
        border-radius:6px;
        font-size:13px;
        margin-bottom:6px;
      ">
        Weekly Average Attendance Trend
      </div>
      <div style="width:100%; aspect-ratio:16/9; overflow:hidden;">
        <img src="https://quickchart.io/chart?backgroundColor=white&width=450&height=240&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Week%2015%22%2C%22Week%2014%22%2C%22Week%2013%22%2C%22Week%2012%22%2C%22Week%2011%22%2C%22Week%2010%22%2C%22Week%208%22%2C%22Week%207%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Average%20Attendance%22%2C%22data%22%3A%5B94.10020920262323%2C94.14719399847982%2C94.20866655738868%2C94.6073184148815%2C95.16197326355895%2C95.4512678057732%2C95.52034007540695%2C95.40357791874138%5D%2C%22backgroundColor%22%3A%5B%22%231e40af%22%2C%22%231e40af%22%2C%22%231e40af%22%2C%22%231e40af%22%2C%22%231e40af%22%2C%22%231e40af%22%2C%22%231e40af%22%2C%22%231e40af%22%5D%2C%22borderColor%22%3A%22%230f766e%22%2C%22borderWidth%22%3A1%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Overall%20Weekly%20Average%20Attendance%20Trend%22%2C%22font%22%3A%7B%22size%22%3A13%7D%7D%7D%2C%22scales%22%3A%7B%22x%22%3A%7B%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Week%22%2C%22font%22%3A%7B%22size%22%3A10%7D%7D%7D%2C%22y%22%3A%7B%22min%22%3A0%2C%22max%22%3A100%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Attendance%20%25%22%2C%22font%22%3A%7B%22size%22%3A10%7D%7D%7D%7D%7D%7D" style="width:100%; height:100%; object-fit:contain;">
      </div>
    </div>
  

</div>

<style>
@media (max-width: 1000px) {
  div[style*='flex-wrap:wrap'] > div {
    flex: 1 1 calc(50% - 16px);
  }
}
@media (max-width: 650px) {
  div[style*='flex-wrap:wrap'] > div {
    flex: 1 1 100%;
  }
}
</style>

<div style="display:none; max-height:0; overflow:hidden;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</div>


    <h2>Recommended Next Steps</h2>
    
    
<style>
  #nextsteps-wrapper {
    --green: #1e40af;
    --gold: #0f766e;
    --orange: #b85c00;
    --soft: #f4f7ff;
    --text: #0f172a;
    --card: #ffffff;
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }

  #nextsteps-wrapper * {
    box-sizing: border-box;
  }

  /* FORCE burnt orange left bar */
  #nextsteps-wrapper .ou-section {
    background: var(--card);
    border: 1px solid #374151;
    border-left: 6px solid var(--orange) !important;
    border-radius: 12px;
    padding: 16px 18px;
    max-width: 900px;
    margin: 0 auto 20px auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  #nextsteps-wrapper h1,
  #nextsteps-wrapper h2,
  #nextsteps-wrapper h3,
  #nextsteps-wrapper h4 {
    color: var(--green);
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  #nextsteps-wrapper h2 {
    border-left: 5px solid var(--gold);
    padding-left: 8px;
    font-size: 18px;
  }

  #nextsteps-wrapper h3 {
    font-size: 15px;
  }

  #nextsteps-wrapper p {
    margin: 6px 0 14px;
    font-size: 13px;
    line-height: 1.55;
  }

  #nextsteps-wrapper table {
    border-collapse: collapse;
    width: 100%;
    font-size: 13px;
    margin: 10px 0 22px;
    background: #fff;
    text-align: center;
  }

  #nextsteps-wrapper th,
  #nextsteps-wrapper td {
    border: 1px solid #ddd;
    padding: 6px 8px;
    vertical-align: middle;
  }

  #nextsteps-wrapper th {
    background: var(--green);
    color: #fff;
  }

  #nextsteps-wrapper img.chart {
    max-width: 450px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>

    <div id="nextsteps-wrapper">
      <div class="ou-section">
        <table><thead><tr><th>Suggested Action</th><th>Target Group</th><th>Intended Outcome</th><th>Timeframe</th></tr></thead><tbody><tr><td>Review Year 11 attendance 92.78% (↑)</td><td>Year 11</td><td>Identify strategies to sustain attendance</td><td>Immediate</td></tr><tr><td>Support Year 10 attendance 93.49% (↓)</td><td>Year 10</td><td>Improve attendance metrics</td><td>Immediate</td></tr><tr><td>Evaluate PP attendance 89.86% (↓ from 91.00%)</td><td>PP Students</td><td>Develop targeted interventions</td><td>Immediate</td></tr><tr><td>Monitor Unauthorised 1.64% (↑)</td><td>Whole School</td><td>Address increasing absence concerns</td><td>Weekly</td></tr><tr><td>Evaluate Lesson 5 Friday attendance 87.1% lowest</td><td>Lesson 5 Friday</td><td>Enhance engagement to boost attendance</td><td>Immediate</td></tr></tbody></table>
      </div>
    </div>
  

    <h2>Safeguarding and Vulnerable Learners</h2>
    
    
<style>
  #safeguard-wrapper {
    --green: #1e40af;
    --gold: #0f766e;
    --orange: #b85c00;
    --soft: #f4f7ff;
    --text: #0f172a;
    --card: #ffffff;

    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  }

  #safeguard-wrapper * {
    box-sizing: border-box;
  }

  /* GUARANTEED burnt-orange border */
  #safeguard-wrapper .ou-section {
    background: var(--card);
    border: 1px solid #374151;
    border-left: 6px solid var(--orange) !important;
    border-radius: 12px;
    padding: 16px 18px;
    max-width: 900px;
    margin: 0 auto 20px auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  #safeguard-wrapper h1,
  #safeguard-wrapper h2,
  #safeguard-wrapper h3,
  #safeguard-wrapper h4 {
    color: var(--green);
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 6px;
  }

  #safeguard-wrapper h2 {
    border-left: 5px solid var(--gold);
    padding-left: 8px;
    font-size: 18px;
    line-height: 1.3;
  }

  #safeguard-wrapper h3 {
    font-size: 15px;
  }

  #safeguard-wrapper p {
    margin: 6px 0 14px;
    font-size: 13px;
    line-height: 1.55;
    color: var(--text);
  }

  #safeguard-wrapper ul {
    margin: 6px 0 12px 20px;
    padding: 0;
  }

  #safeguard-wrapper li {
    margin-bottom: 6px;
  }

  #safeguard-wrapper table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    margin: 10px 0 22px;
    font-size: 13px;
    text-align: center;
  }

  #safeguard-wrapper th,
  #safeguard-wrapper td {
    border: 1px solid #ddd;
    padding: 6px 8px;
    vertical-align: middle;
  }

  #safeguard-wrapper th {
    background: var(--green);
    color: #fff;
    font-weight: 600;
  }

  #safeguard-wrapper .muted {
    color: #666;
    font-size: 12px;
  }

  #safeguard-wrapper img.chart {
    max-width: 450px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 6px 0 20px;
  }
</style>

    <div id="safeguard-wrapper">
      <div class="ou-section">
        <p>There are 179 students below 90% attendance, with Year 11 (42 students) having the highest count. This week, 4 students crossed below 80%, predominantly from Year 8. Additionally, 8 students are below 50% attendance. This summary covers all learners below 90% attendance, including severe and newly fallen cases. These students should be reviewed with the DSL and pastoral/safeguarding teams to prioritise follow-up and intervention.</p>
      </div>
    </div>
  

    

<style>
#absence-drivers-wrapper {
  font-family:'Segoe UI',Roboto,Arial,sans-serif;
  --green:#1e40af;
  --gold:#0f766e;
  --text:#0f172a;
  --card:#fff;
}

/* Section */
#absence-drivers-wrapper .ou-section {
  margin:8px auto;
  max-width:1200px;
  background:var(--card);
  border-radius:12px;
  padding:16px;
  border:1px solid #374151;
  border-left:6px solid var(--green);
}

/* Table */
#absence-drivers-wrapper .ou-year-title {
  font-size:18px;
  color:var(--green);
  font-weight:700;
  margin-bottom:8px;
}

#absence-drivers-wrapper .ou-table {
  width:100%;
  border-collapse:collapse;
  font-size:12px;
}

#absence-drivers-wrapper .ou-table th {
  background:var(--green);
  color:#fff;
  padding:6px;
  white-space:nowrap;
}

#absence-drivers-wrapper .ou-table td {
  padding:5px;
  border:1px solid #ddd;
  text-align:center;
  white-space:nowrap; /* prevents arrows wrapping */
}

/* Consistent grey gap column, scoped to this node */
#absence-drivers-wrapper .gap-cell {
  background:#ddd !important;
  width:4px;
  border-left:2px solid #ccc;
  font-size:9px;
  color:#666;
  text-align:center;
  white-space:nowrap;
}

/* Charts */
#absence-drivers-wrapper .chart-row {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:stretch;
  gap:16px;
  margin-top:18px;
}

#absence-drivers-wrapper .chart-card {
  flex:1 1 calc(50% - 16px);
  max-width:calc(50% - 16px);
  min-width:260px;
  background:#fff;
  border-radius:12px;
  border:1px solid #374151;
  border-left:6px solid var(--green);
  padding:10px;
  box-shadow:0 1px 3px rgba(0,0,0,0.05);
}

#absence-drivers-wrapper .chart-inner img {
  width:100%;
  height:auto;
  object-fit:contain;
  border-radius:8px;
}

@media(max-width:750px){
  #absence-drivers-wrapper .chart-card {
    flex:1 1 100%;
    max-width:100%;
  }
}
</style>

<div id="absence-drivers-wrapper">
  <div class="ou-section">
  
    
<div>
  <div class="ou-year-title">📉 Whole-School Absence Drivers by Week</div>
  <p style="font-size:13px;margin-bottom:10px;">
    Weekly (non-cumulative) averages for key absence reasons across the most recent 8 weeks.
  </p>
  <table class="ou-table">
    <tr><th>Metric</th><th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr><tr><td><strong>Present</strong></td><td style="background:#e6f5f2;">90.88% 🟩 ↑</td><td style="background:#e6f5f2;">90.48% 🟩 ↑</td><td style="background:#fde8d8;">87.11%🟧↓</td><td style="background:#fde8d8;">87.23%🟧↓</td><td style="background:#fde8d8;">90.84%🟧↓</td><td style="background:#fde8d8;">92.79%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">93.02%🟧↓</td><td style="background:#e6f5f2;">93.57% 🟩 ↑</td></tr><tr><td><strong>Authorised</strong></td><td style="background:#e6f5f2;">7.44% 🟩 ↓</td><td style="background:#e6f5f2;">8.06% 🟩 ↓</td><td style="background:#fde8d8;">11.80% 🟧 ↑</td><td style="background:#fde8d8;">11.46% 🟧 ↑</td><td style="background:#fde8d8;">8.13% 🟧 ↑</td><td style="background:#fde8d8;">5.97% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">5.77% 🟧 ↑</td><td style="background:#e6f5f2;">5.23% 🟩 ↓</td></tr><tr><td><strong>Unauthorised</strong></td><td style="background:#fde8d8;">1.64% 🟧 ↑</td><td style="background:#fde8d8;">1.46% 🟧 ↑</td><td style="background:#e6f5f2;">1.09% 🟩 ↓</td><td style="background:#fde8d8;">1.31% 🟧 ↑</td><td style="background:#e6f5f2;">1.03% 🟩 ↓</td><td style="background:#fde8d8;">1.24% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">1.21% 🟧 ↑</td><td style="background:#e6f5f2;">1.20% 🟩 ↓</td></tr><tr><td><strong>Late</strong></td><td style="background:#fde8d8;">1.56% 🟧 ↑</td><td style="background:#fde8d8;">1.42% 🟧 ↑</td><td style="background:#e6f5f2;">1.13% 🟩 ↓</td><td style="background:#fde8d8;">1.44% 🟧 ↑</td><td style="background:#e6f5f2;">1.34% 🟩 ↓</td><td style="background:#fde8d8;">1.63% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">1.36% 🟧 ↑</td><td style="background:#e6f5f2;">1.27% 🟩 ↓</td></tr><tr><td><strong>Illness</strong></td><td style="background:#e6f5f2;">4.75% 🟩 ↓</td><td style="background:#e6f5f2;">5.70% 🟩 ↓</td><td style="background:#fde8d8;">9.82% 🟧 ↑</td><td style="background:#fde8d8;">8.92% 🟧 ↑</td><td style="background:#fde8d8;">5.67% 🟧 ↑</td><td style="background:#e6f5f2;">3.05% 🟩 ↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">3.44% 🟧 ↑</td><td style="background:#eef2ff;">3.00% ⬜ →</td></tr><tr><td><strong>Medical Appointments</strong></td><td style="background:#eef2ff;">0.28% ⬜ →</td><td style="background:#fde8d8;">0.28% 🟧 ↑</td><td style="background:#e6f5f2;">0.21% 🟩 ↓</td><td style="background:#e6f5f2;">0.24% 🟩 ↓</td><td style="background:#e6f5f2;">0.27% 🟩 ↓</td><td style="background:#fde8d8;">0.34% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">0.32% 🟧 ↑</td><td style="background:#fde8d8;">0.26% 🟧 ↑</td></tr><tr><td><strong>Authorised Holiday</strong></td><td style="background:#eef2ff;">0.00% ⬜ →</td><td style="background:#eef2ff;">0.00% ⬜ →</td><td style="background:#eef2ff;">0.00% ⬜ →</td><td style="background:#eef2ff;">0.00% ⬜ →</td><td style="background:#e6f5f2;">0.00% 🟩 ↓</td><td style="background:#fde8d8;">0.02% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#eef2ff;">0.00% ⬜ →</td><td style="background:#eef2ff;">0.00% ⬜ →</td></tr><tr><td><strong>Other Authorised</strong></td><td style="background:#fde8d8;">2.41% 🟧 ↑</td><td style="background:#fde8d8;">2.07% 🟧 ↑</td><td style="background:#e6f5f2;">1.76% 🟩 ↓</td><td style="background:#fde8d8;">2.30% 🟧 ↑</td><td style="background:#e6f5f2;">2.19% 🟩 ↓</td><td style="background:#fde8d8;">2.57% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">2.01% 🟧 ↑</td><td style="background:#e6f5f2;">1.97% 🟩 ↓</td></tr><tr><td><strong>Unauthorised Holiday</strong></td><td style="background:#e6f5f2;">0.11% 🟩 ↓</td><td style="background:#fde8d8;">0.16% 🟧 ↑</td><td style="background:#fde8d8;">0.13% 🟧 ↑</td><td style="background:#e6f5f2;">0.03% 🟩 ↓</td><td style="background:#e6f5f2;">0.08% 🟩 ↓</td><td style="background:#fde8d8;">0.24% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">0.22% 🟧 ↑</td><td style="background:#e6f5f2;">0.17% 🟩 ↓</td></tr><tr><td><strong>Unauthorised Other</strong></td><td style="background:#fde8d8;">1.53% 🟧 ↑</td><td style="background:#fde8d8;">1.30% 🟧 ↑</td><td style="background:#e6f5f2;">0.95% 🟩 ↓</td><td style="background:#fde8d8;">1.29% 🟧 ↑</td><td style="background:#e6f5f2;">0.95% 🟩 ↓</td><td style="background:#fde8d8;">1.00% 🟧 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">0.99% 🟩 ↓</td><td style="background:#fde8d8;">1.02% 🟧 ↑</td></tr></table></div>

    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-inner">
          <img src="https://quickchart.io/chart?backgroundColor=white&width=650&height=350&c=%7B%22type%22%3A%22line%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Week%2015%22%2C%22Week%2014%22%2C%22Week%2013%22%2C%22Week%2012%22%2C%22Week%2011%22%2C%22Week%2010%22%2C%22Week%208%22%2C%22Week%207%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22authorised%22%2C%22data%22%3A%5B7.44%2C8.06%2C11.8%2C11.46%2C8.13%2C5.97%2C5.77%2C5.23%5D%2C%22borderColor%22%3A%22%230f766e%22%2C%22backgroundColor%22%3A%22%230f766e%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22unauthorised%22%2C%22data%22%3A%5B1.64%2C1.46%2C1.09%2C1.31%2C1.03%2C1.24%2C1.21%2C1.2%5D%2C%22borderColor%22%3A%22%23b35d2e%22%2C%22backgroundColor%22%3A%22%23b35d2e%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22late%22%2C%22data%22%3A%5B1.56%2C1.42%2C1.13%2C1.44%2C1.34%2C1.63%2C1.36%2C1.27%5D%2C%22borderColor%22%3A%22%237c6f49%22%2C%22backgroundColor%22%3A%22%237c6f49%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22illness%22%2C%22data%22%3A%5B4.75%2C5.7%2C9.82%2C8.92%2C5.67%2C3.05%2C3.44%2C3%5D%2C%22borderColor%22%3A%22%231e40af%22%2C%22backgroundColor%22%3A%22%231e40af%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22medical%20appointment%22%2C%22data%22%3A%5B0.28%2C0.28%2C0.21%2C0.24%2C0.27%2C0.34%2C0.32%2C0.26%5D%2C%22borderColor%22%3A%22%23567a5b%22%2C%22backgroundColor%22%3A%22%23567a5b%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22authorised%20holiday%22%2C%22data%22%3A%5B0%2C0%2C0%2C0%2C0%2C0.02%2C0%2C0%5D%2C%22borderColor%22%3A%22%239c8a5a%22%2C%22backgroundColor%22%3A%22%239c8a5a%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22other%20authorised%22%2C%22data%22%3A%5B2.41%2C2.07%2C1.76%2C2.3%2C2.19%2C2.57%2C2.01%2C1.97%5D%2C%22borderColor%22%3A%22%2393a17d%22%2C%22backgroundColor%22%3A%22%2393a17d%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22unauthorised%20holiday%22%2C%22data%22%3A%5B0.11%2C0.16%2C0.13%2C0.03%2C0.08%2C0.24%2C0.22%2C0.17%5D%2C%22borderColor%22%3A%22%238a4c2e%22%2C%22backgroundColor%22%3A%22%238a4c2e%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%2C%7B%22label%22%3A%22unauthorised%20other%22%2C%22data%22%3A%5B1.53%2C1.3%2C0.95%2C1.29%2C0.95%2C1%2C0.99%2C1.02%5D%2C%22borderColor%22%3A%22%23556b4e%22%2C%22backgroundColor%22%3A%22%23556b4e%22%2C%22tension%22%3A0.35%2C%22fill%22%3Afalse%2C%22borderWidth%22%3A2%2C%22pointRadius%22%3A2%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22position%22%3A%22bottom%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Absence%20Drivers%20%E2%80%94%20Weekly%20Trends%22%2C%22font%22%3A%7B%22size%22%3A13%7D%2C%22color%22%3A%22%231e40af%22%7D%7D%2C%22scales%22%3A%7B%22y%22%3A%7B%22beginAtZero%22%3Atrue%7D%7D%7D%7D">
        </div>
      </div>

      <div class="chart-card">
        <div class="chart-inner">
          <img src="https://quickchart.io/chart?backgroundColor=white&width=650&height=350&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Week%2015%22%2C%22Week%2014%22%2C%22Week%2013%22%2C%22Week%2012%22%2C%22Week%2011%22%2C%22Week%2010%22%2C%22Week%208%22%2C%22Week%207%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22authorised%22%2C%22data%22%3A%5B7.44%2C8.06%2C11.8%2C11.46%2C8.13%2C5.97%2C5.77%2C5.23%5D%2C%22backgroundColor%22%3A%22%230f766e%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22unauthorised%22%2C%22data%22%3A%5B1.64%2C1.46%2C1.09%2C1.31%2C1.03%2C1.24%2C1.21%2C1.2%5D%2C%22backgroundColor%22%3A%22%23b35d2e%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22late%22%2C%22data%22%3A%5B1.56%2C1.42%2C1.13%2C1.44%2C1.34%2C1.63%2C1.36%2C1.27%5D%2C%22backgroundColor%22%3A%22%237c6f49%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22illness%22%2C%22data%22%3A%5B4.75%2C5.7%2C9.82%2C8.92%2C5.67%2C3.05%2C3.44%2C3%5D%2C%22backgroundColor%22%3A%22%231e40af%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22medical%20appointment%22%2C%22data%22%3A%5B0.28%2C0.28%2C0.21%2C0.24%2C0.27%2C0.34%2C0.32%2C0.26%5D%2C%22backgroundColor%22%3A%22%23567a5b%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22authorised%20holiday%22%2C%22data%22%3A%5B0%2C0%2C0%2C0%2C0%2C0.02%2C0%2C0%5D%2C%22backgroundColor%22%3A%22%239c8a5a%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22other%20authorised%22%2C%22data%22%3A%5B2.41%2C2.07%2C1.76%2C2.3%2C2.19%2C2.57%2C2.01%2C1.97%5D%2C%22backgroundColor%22%3A%22%2393a17d%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22unauthorised%20holiday%22%2C%22data%22%3A%5B0.11%2C0.16%2C0.13%2C0.03%2C0.08%2C0.24%2C0.22%2C0.17%5D%2C%22backgroundColor%22%3A%22%238a4c2e%22%2C%22stack%22%3A%22abs%22%7D%2C%7B%22label%22%3A%22unauthorised%20other%22%2C%22data%22%3A%5B1.53%2C1.3%2C0.95%2C1.29%2C0.95%2C1%2C0.99%2C1.02%5D%2C%22backgroundColor%22%3A%22%23556b4e%22%2C%22stack%22%3A%22abs%22%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22position%22%3A%22bottom%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Weekly%20Absence%20Composition%20(All%20Drivers%20Except%20Present)%22%2C%22font%22%3A%7B%22size%22%3A13%7D%2C%22color%22%3A%22%231e40af%22%7D%7D%2C%22scales%22%3A%7B%22x%22%3A%7B%22stacked%22%3Atrue%7D%2C%22y%22%3A%7B%22stacked%22%3Atrue%2C%22beginAtZero%22%3Atrue%7D%7D%7D%7D">
        </div>
      </div>
    </div>

  </div>
</div>


    

<style>
  :root{
    --green:#1e40af;
    --gold:#0f766e;
    --text:#0f172a;
    --soft:#f4f7ff;
    --card:#ffffff;
  }
  

    /* =========================================
       Attendance Card System (shared)
       MUST be wrapped per-node with an ID
       ========================================= */

    .att-card{
      background:var(--card);
      border:1px solid #374151;
      border-radius:12px;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      padding:16px 18px;
      margin:0 auto 20px auto;
      max-width:900px;
    }

    .att-card--green{  border-left:6px solid var(--green); }
    .att-card--gold{   border-left:6px solid var(--gold); }
    .att-card--orange{ border-left:6px solid var(--orange); }

    .att-title{
      font-size:18px;
      font-weight:700;
      color:var(--green);
      margin:0 0 10px;
    }

    .att-subtitle{
      font-size:13px;
      font-weight:700;
      color:var(--green);
      margin:12px 0 6px;
    }

    .att-table{
      width:100%;
      border-collapse:collapse;
      font-size:12px;
      background:#fff;
    }

    .att-table th{
      background:var(--green);
      color:#fff;
      padding:6px;
      text-align:center;
      white-space:nowrap;
    }

    .att-table td{
      padding:5px 6px;
      border:1px solid #ddd;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }

    .att-gap{
      background:#ddd;
      font-size:9px;
      color:#666;
      text-align:center;
    }
  

  body {
    font-family:'Segoe UI', Roboto, Arial, sans-serif;
    color:var(--text);
    background:var(--soft);
    margin:0;
    padding:0;
  }

 

  

  .ou-subtitle {
    font-size:14px;
    color:var(--green);
    font-weight:600;
    margin:10px 0 6px 0;
    border-left:4px solid var(--gold);
    padding-left:6px;
  }

  p {
    font-size:13px;
    color:var(--text);
    margin:4px 0 10px;
    line-height:1.5;
  }

 

  

  

  /* ----------------------------------------------------------
     FIX: Force consistent gap column grey in THIS node only
     Prevents zebra striping or other global rules overriding it
  ---------------------------------------------------------- */
  

  .indicator-dot {
    display:inline-block;
    width:8px;
    height:8px;
    border-radius:3px;
    margin-right:2px;
  }

  .key-dot {
    display:inline-block;
    width:9px;
    height:10px;
    border-radius:3px;
    margin:0 4px;
  }
</style>

<div id="severe-wrapper">
<div class="att-card att-card--orange">

  <div class="att-title">🚨 Severe Absence Students (&lt; 50%)</div>

  <p>
    Shows all students whose <strong>cumulative attendance</strong> is below 50%,
    grouped by year.
  </p>

  <div style="font-size:12px; margin-bottom:6px;">
    <strong>Key:</strong>
    <span class="key-dot" style="background:#9b59b6;"></span> SEN
    <span class="key-dot" style="background:#1abc9c;"></span> PP
    <span class="key-dot" style="background:#e67e22;"></span> EAL
    <span class="key-dot" style="background:#bdc3c7;"></span> None
  </div>
  </div>

  <div class="ou-subtitle">Year 8</div>
  <table class="ou-table">
    <tr>
      <th>Name</th>
      <th>Indicators</th>
      <th>Year</th>
      <th>Tutor</th>
  <th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr>
    <tr>
      <td>Danan Young</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
      <td>8</td>
      <td>8B</td>
    <td style="background:#fde8d8;">37.5%🟧↓</td><td style="background:#fde8d8;">40.5%🟧↓</td><td style="background:#fde8d8;">44.0%🟧↓</td><td style="background:#fde8d8;">47.2%🟧↓</td><td style="background:#fde8d8;">50.0%🟧↓</td><td style="background:#fde8d8;">56.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">56.6%🟩 ↑</td><td style="background:#eef2ff;">50.0%⬜ →</td></tr>
    <tr>
      <td>Finus Pinehurst</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
      <td>8</td>
      <td>8N</td>
    <td style="background:#fde8d8;">37.8%🟧↓</td><td style="background:#fde8d8;">40.2%🟧↓</td><td style="background:#fde8d8;">43.1%🟧↓</td><td style="background:#fde8d8;">43.6%🟧↓</td><td style="background:#fde8d8;">46.2%🟧↓</td><td style="background:#fde8d8;">48.1%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">50.7%🟧↓</td><td style="background:#fde8d8;">54.0%🟧↓</td></tr></table>
  <div class="ou-subtitle">Year 9</div>
  <table class="ou-table">
    <tr>
      <th>Name</th>
      <th>Indicators</th>
      <th>Year</th>
      <th>Tutor</th>
  <th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr>
    <tr>
      <td>Eleb Eastfall</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
      <td>9</td>
      <td>9A</td>
    <td style="background:#fde8d8;">1.5%🟧↓</td><td style="background:#fde8d8;">1.6%🟧↓</td><td style="background:#fde8d8;">1.7%🟧↓</td><td style="background:#fde8d8;">1.9%🟧↓</td><td style="background:#fde8d8;">2.0%🟧↓</td><td style="background:#fde8d8;">2.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">2.6%🟧↓</td><td style="background:#fde8d8;">2.9%🟧↓</td></tr>
    <tr>
      <td>Ashar Croft</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
      <td>9</td>
      <td>9A</td>
    <td style="background:#fde8d8;">45.1%🟧↓</td><td style="background:#e6f5f2;">45.5%🟩 ↑</td><td style="background:#e6f5f2;">45.1%🟩 ↑</td><td style="background:#fde8d8;">44.8%🟧↓</td><td style="background:#e6f5f2;">46.7%🟩 ↑</td><td style="background:#e6f5f2;">45.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">45.3%🟩 ↑</td><td style="background:#fde8d8;">44.6%🟧↓</td></tr>
    <tr>
      <td>Wiler Ironford</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
      <td>9</td>
      <td>9S</td>
    <td style="background:#fde8d8;">47.8%🟧↓</td><td style="background:#fde8d8;">49.2%🟧↓</td><td style="background:#fde8d8;">49.6%🟧↓</td><td style="background:#fde8d8;">50.9%🟧↓</td><td style="background:#fde8d8;">53.1%🟧↓</td><td style="background:#fde8d8;">57.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">60.5%🟧↓</td><td style="background:#fde8d8;">61.2%🟧↓</td></tr></table>
  <div class="ou-subtitle">Year 10</div>
  <table class="ou-table">
    <tr>
      <th>Name</th>
      <th>Indicators</th>
      <th>Year</th>
      <th>Tutor</th>
  <th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr>
    <tr>
      <td>Coron Ironburn</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
      <td>10</td>
      <td>10N</td>
    <td style="background:#fde8d8;">1.5%🟧↓</td><td style="background:#fde8d8;">1.6%🟧↓</td><td style="background:#fde8d8;">1.7%🟧↓</td><td style="background:#fde8d8;">1.9%🟧↓</td><td style="background:#fde8d8;">2.0%🟧↓</td><td style="background:#fde8d8;">2.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">2.6%🟧↓</td><td style="background:#fde8d8;">2.9%🟧↓</td></tr></table>
  <div class="ou-subtitle">Year 11</div>
  <table class="ou-table">
    <tr>
      <th>Name</th>
      <th>Indicators</th>
      <th>Year</th>
      <th>Tutor</th>
  <th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr>
    <tr>
      <td>Micer Hillmere</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
      <td>11</td>
      <td>11Z</td>
    <td style="background:#fde8d8;">1.5%🟧↓</td><td style="background:#fde8d8;">1.6%🟧↓</td><td style="background:#fde8d8;">1.7%🟧↓</td><td style="background:#fde8d8;">1.9%🟧↓</td><td style="background:#fde8d8;">2.0%🟧↓</td><td style="background:#fde8d8;">2.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">2.6%🟧↓</td><td style="background:#fde8d8;">3.1%🟧↓</td></tr>
    <tr>
      <td>Leoer Pineham</td>
      <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
      <td>11</td>
      <td>11Z</td>
    <td style="background:#fde8d8;">2.9%🟧↓</td><td style="background:#fde8d8;">3.2%🟧↓</td><td style="background:#fde8d8;">3.4%🟧↓</td><td style="background:#fde8d8;">3.7%🟧↓</td><td style="background:#fde8d8;">4.1%🟧↓</td><td style="background:#fde8d8;">4.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">5.1%🟧↓</td><td style="background:#fde8d8;">5.9%🟧↓</td></tr></table>
</div>


    

<style>
  #below80-wrapper {
    font-family:'Segoe UI', Roboto, Arial, sans-serif;
    --green:#1e40af;
    --gold:#0f766e;
    --text:#0f172a;
    --soft:#f4f7ff;
    --card:#ffffff;
  }

  
    /* =========================================
       Attendance Card System (shared)
       MUST be wrapped per-node with an ID
       ========================================= */

    .att-card{
      background:var(--card);
      border:1px solid #374151;
      border-radius:12px;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      padding:16px 18px;
      margin:0 auto 20px auto;
      max-width:900px;
    }

    .att-card--green{  border-left:6px solid var(--green); }
    .att-card--gold{   border-left:6px solid var(--gold); }
    .att-card--orange{ border-left:6px solid var(--orange); }

    .att-title{
      font-size:18px;
      font-weight:700;
      color:var(--green);
      margin:0 0 10px;
    }

    .att-subtitle{
      font-size:13px;
      font-weight:700;
      color:var(--green);
      margin:12px 0 6px;
    }

    .att-table{
      width:100%;
      border-collapse:collapse;
      font-size:12px;
      background:#fff;
    }

    .att-table th{
      background:var(--green);
      color:#fff;
      padding:6px;
      text-align:center;
      white-space:nowrap;
    }

    .att-table td{
      padding:5px 6px;
      border:1px solid #ddd;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }

    .att-gap{
      background:#ddd;
      font-size:9px;
      color:#666;
      text-align:center;
    }
  
  

  #below80-wrapper p {
    font-size:13px;
    color:var(--text);
    margin:4px 0 10px;
    line-height:1.5;
  }


  #below80-wrapper .indicator-dot {
    display:inline-block;
    width:8px;
    height:8px;
    border-radius:3px;
    margin-right:2px;
  }

  #below80-wrapper .key-dot {
    display:inline-block;
    width:9px;
    height:10px;
    border-radius:3px;
    margin:0 4px;
  }
</style>

<div id="below80-wrapper">
<div class="att-card att-card--orange">

  <div class="att-title">⚠️ Students Who Crossed Below 80%</div>

  <p>
    Lists students whose <strong>cumulative attendance</strong> fell below 80% this week,
    with prior week trends for context.
  </p>

  <div style="font-size:12px; margin-bottom:6px;">
    <strong>Key:</strong>
    <span class="key-dot" style="background:#9b59b6;"></span> SEN
    <span class="key-dot" style="background:#1abc9c;"></span> PP
    <span class="key-dot" style="background:#e67e22;"></span> EAL
    <span class="key-dot" style="background:#bdc3c7;"></span> None
  </div>

  <table class="att-table">

    <tr>
      <th>Name</th>
      <th>Indicators</th>
      <th>Year</th>
      <th>Tutor</th>
<th>Current (15)</th><th>Week 14</th><th>Week 13</th><th>Week 12</th><th>Week 11</th><th>Week 10</th><th class="gap-cell">9</th><th>Week 8</th><th>Week 7</th></tr>
  <tr>
    <td>Noar Millwood</td>
    <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
    <td>9</td>
    <td>9B</td>
  <td style="background:#fde8d8;">77.6%🟧↓</td><td style="background:#e6f5f2;">80.6%🟩 ↑</td><td style="background:#e6f5f2;">78.9%🟩 ↑</td><td style="background:#fde8d8;">77.4%🟧↓</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">83.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">78.8%🟩 ↑</td></tr>
  <tr>
    <td>Jaus Pineshaw</td>
    <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
    <td>8</td>
    <td>8E</td>
  <td style="background:#fde8d8;">77.9%🟧↓</td><td style="background:#e6f5f2;">81.0%🟩 ↑</td><td style="background:#e6f5f2;">79.3%🟩 ↑</td><td style="background:#fde8d8;">77.8%🟧↓</td><td style="background:#fde8d8;">80.0%🟧↓</td><td style="background:#fde8d8;">84.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.1%🟧↓</td></tr>
  <tr>
    <td>Kenis Oakbrook</td>
    <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
    <td>10</td>
    <td>10S</td>
  <td style="background:#fde8d8;">77.9%🟧↓</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#fde8d8;">82.8%🟧↓</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">79.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">79.2%🟧↓</td><td style="background:#fde8d8;">82.1%🟧↓</td></tr>
  <tr>
    <td>Maxam Northmere</td>
    <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
    <td>10</td>
    <td>10B</td>
  <td style="background:#fde8d8;">79.7%🟧↓</td><td style="background:#fde8d8;">85.9%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#e6f5f2;">90.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">87.1%🟩 ↑</td></tr>
  </table>
</div>
</div>


    <h3>Unauthorised Absence and Compliance Summary</h3>

<style>
  #ou-report-wrapper {
    --green:#1e40af;
    --gold:#0f766e;
    --text:#0f172a;
    --soft:#f4f7ff;
    --card:#fff;
    --light-green:#eef2ff;
    font-family:'Segoe UI', Roboto, Arial, sans-serif;
  }

  #ou-report-wrapper .ou-section {
    margin-top:8px; margin-bottom:16px;
    border-radius:12px; background:var(--card);
    border:1px solid #374151; 
    border-left:6px solid var(--green);
    padding:16px 18px; 
    max-width:950px; 
    margin-left:auto; 
    margin-right:auto;
  }

  #ou-report-wrapper .ou-year-title {
    font-size:18px; 
    color:var(--green); 
    font-weight:700; 
    margin:0 0 8px;
  }

  #ou-report-wrapper .ou-trigger-orange {
    background:#fff3cd;
    border-left:6px solid #ff9800;
    padding:6px 8px;
    border-radius:8px;
    margin-bottom:8px;
    font-weight:600;
  }

  #ou-report-wrapper .ou-trigger-red {
    background:#f8d7da;
    border-left:6px solid #f4a261;
    padding:6px 8px;
    border-radius:8px;
    margin-bottom:8px;
    font-weight:600;
  }

  #ou-report-wrapper .ou-table {
    width:100%;
    border-collapse:collapse;
    font-size:12px;
    margin-top:6px;
    table-layout:fixed;
  }

  #ou-report-wrapper .ou-table th {
    background:var(--green);
    color:#fff;
    padding:6px;
    text-align:center;
    white-space:nowrap;
  }

  #ou-report-wrapper .ou-table td {
    padding:4px 6px;
    border:1px solid #ddd;
    text-align:center;
    white-space:nowrap;
  }

  /* Student name background matches data cells */
  #ou-report-wrapper .ou-name-col {
    width:190px;
    max-width:190px;
    min-width:190px;
    text-align:left;
    white-space:normal;
    word-break:break-word;
    background:#fafafa;
    color:#1e40af;
  }

  #ou-report-wrapper .ou-flag-col { width:50px; max-width:50px; }
  #ou-report-wrapper .ou-tutor-col { width:55px; max-width:55px; }
  #ou-report-wrapper .ou-total-col { width:55px; max-width:55px; }

  #ou-report-wrapper .ou-weekly-col {
    min-width:380px;
    max-width:480px;
  }

  #ou-report-wrapper .ou-weekly-inner {
    white-space:nowrap;
  }

  /* Sub-head row (10-week window / Hit / T4 / T10) — mid green */
  #ou-report-wrapper .ou-subhead-row td {
    background:#E4EEE8;   /* soft sage green */
    color:#1e40af;        /* dark green text */
    font-weight:700;
  }

  /* Value row under subhead */
  #ou-report-wrapper .ou-subval-row td {
    background:#fafafa;
  }

  #ou-report-wrapper .student-separator {
    height:3px;
    background:#1e40af;   /* deep green */
    border:none;
    margin:0;
  }

  #ou-report-wrapper .att-box,
  #ou-report-wrapper .ou-box {
    display:inline-block;
    width:28px;
    height:28px;
    border-radius:4px;
    text-align:center;
    line-height:28px;
    font-size:11px;
    font-weight:600;
    margin-right:2px;
  }

  #ou-report-wrapper .att-box { color:#fff; }
  #ou-report-wrapper .wk-label {
    display:inline-block;
    width:28px;
    text-align:center;
    font-size:9px;
    color:#666;
    margin-right:2px;
  }

  #ou-report-wrapper .name-block {
    display:block;
    margin-bottom:2px;
    font-weight:600;
  }

  #ou-report-wrapper .missing-warning {
    background:#ffe9d6;
    border-left:3px solid #b34700;
    padding:3px 6px;
    margin-top:2px;
    border-radius:4px;
    font-size:10px;
    color:#b34700;
    display:inline-block;
    max-width:160px;
    white-space:normal;
    word-wrap:break-word;
    line-height:1.2;
  }

  #ou-report-wrapper .indicator-dot {
    width:9px;
    height:10px;
    display:inline-block;
    border-radius:3px;
    margin-right:2px;
  }
</style>

<div id="ou-report-wrapper">
  <div class="ou-section">
    <h3>🚨 O/U Fines & Unauthorised Sessions (Rolling 10 Weeks)</h3>

    <p>
      Each row shows the pupil’s <strong>latest rolling 10-week attendance window</strong>.<br>
      The leftmost boxes are the <strong>most recent</strong> weeks.<br>
      Attendance boxes show weekly %, O/U boxes show unauthorised sessions.<br>
      Week labels show the week index used by Bromcom (skips holidays automatically).
    </p>

    <p>
      <strong>Column guide:</strong><br>
      <strong>Name</strong> – Pupil name<br>
      <strong>Flag</strong> – SEN / PP / EAL indicators<br>
      <strong>Tutor</strong> – Tutor group<br>
      <strong>Total</strong> – Unauthorised sessions in rolling 10 weeks<br>
      <strong>10-week window</strong> – Date range of the 10w cycle<br>
      <strong>Hit</strong> – When trigger was hit<br>
      <strong>T4</strong> – Previous trigger-4 count<br>
      <strong>T10</strong> – Previous trigger-10 count
    </p>

    <p>
      🟧 4–9 unauthorised sessions = <strong>Moderate</strong><br>
      🟧 10+ unauthorised sessions = <strong>High</strong>
    </p>
  </div>

    <div class="ou-section">
      <div class="ou-year-title">Year 7</div>

      
        <div class="ou-trigger-orange">🟧 Moderate O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Wilon Oakridge</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">7B</td>
        <td class="ou-total-col">7</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">55%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.82;">4</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.64;">1</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Olic Westton</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td class="ou-tutor-col">7S</td>
        <td class="ou-total-col">8</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">75%</span><span class="att-box" style="background:#ef9a9a;">83%</span><span class="att-box" style="background:#ef9a9a;">78%</span><span class="att-box" style="background:#ef9a9a;">64%</span><span class="att-box" style="background:#ef9a9a;">71%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#607d8b;opacity:1.00;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">2</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Sebio Youngley</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td class="ou-tutor-col">7E</td>
        <td class="ou-total-col">8</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#ef9a9a;">82%</span><span class="att-box" style="background:#ffcc80;">88%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">5</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">1</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Elium Pineside</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">7B</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">20%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.94;">4</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Maris Quarryburn</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">7N</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">75%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">83%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">2</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Paam Denley</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">7H</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">27%</span><span class="att-box" style="background:#ef9a9a;">78%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">4</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Olex Fairman</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">7N</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">91%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.94;">4</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Benin Lakeham</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td class="ou-tutor-col">7N</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">63%</span><span class="att-box" style="background:#ef9a9a;">82%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#ef9a9a;">44%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">90%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">2</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      

      
    </div>
    <div class="ou-section">
      <div class="ou-year-title">Year 8</div>

      
        <div class="ou-trigger-orange">🟧 Moderate O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Kaiex Westridge</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">8B</td>
        <td class="ou-total-col">9</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#ffcc80;">88%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">67%</span><span class="att-box" style="background:#ef9a9a;">67%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#607d8b;opacity:1.00;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">1</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.58;">3</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">2</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Finus Pinehurst</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">8N</td>
        <td class="ou-total-col">6</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">10%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">38%</span><span class="att-box" style="background:#ef9a9a;">20%</span><span class="att-box" style="background:#ef9a9a;">30%</span><span class="att-box" style="background:#ef9a9a;">30%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#ef9a9a;">58%</span><span class="att-box" style="background:#ef9a9a;">20%</span></div>
            <div><span class="ou-box" style="background:#607d8b;opacity:1.00;">2</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">2</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">2</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Jaus Pineshaw</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td class="ou-tutor-col">8E</td>
        <td class="ou-total-col">6</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">40%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#ef9a9a;">40%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">64%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.58;">2</span><span class="ou-box" style="background:#ff9800;opacity:0.52;">4</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Theoam Quarrycroft</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">8D</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">4</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Keneth Stonemore</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">8C</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.76;">4</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      

      
        <div class="ou-trigger-red">🟧 High O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Danan Young</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">8B</td>
        <td class="ou-total-col">42</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">20%</span><span class="att-box" style="background:#ef9a9a;">14%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#ef9a9a;">83%</span><span class="att-box" style="background:#ef9a9a;">20%</span></div>
            <div><span class="ou-box" style="background:#f4a261;opacity:1.00;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.94;">10</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.82;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.76;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.70;">4</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">2</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      
    </div>
    <div class="ou-section">
      <div class="ou-year-title">Year 9</div>

      
        <div class="ou-trigger-orange">🟧 Moderate O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Paic Kingworth</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">9A</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.94;">4</span><span class="ou-box" style="background:#ccc;opacity:0.88;">-</span><span class="ou-box" style="background:#ccc;opacity:0.82;">-</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">15 Sept → 12 Dec</td>
        <td class="ou-flag-col">15 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      

      
        <div class="ou-trigger-red">🟧 High O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Reex Westburn</span>
          
        <div class="missing-warning">
          <strong>No recent data found.</strong> This may indicate the pupil is no longer meeting O/U thresholds.
        </div>
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">9N</td>
        <td class="ou-total-col">66</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">17%</span><span class="att-box" style="background:#e0e0e0;">0%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">-</span><span class="ou-box" style="background:#ccc;opacity:0.94;">-</span><span class="ou-box" style="background:#ccc;opacity:0.88;">-</span><span class="ou-box" style="background:#ccc;opacity:0.82;">-</span><span class="ou-box" style="background:#ccc;opacity:0.76;">-</span><span class="ou-box" style="background:#ccc;opacity:0.70;">-</span><span class="ou-box" style="background:#ccc;opacity:0.64;">-</span><span class="ou-box" style="background:#f4a261;opacity:0.58;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.52;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.46;">10</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">03 Sept → 17 Oct</td>
        <td class="ou-flag-col">03 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Benor Faircroft</span>
          
        <div class="missing-warning">
          <strong>No recent data found.</strong> This may indicate the pupil is no longer meeting O/U thresholds.
        </div>
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">9N</td>
        <td class="ou-total-col">49</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">10%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#ef9a9a;">10%</span><span class="att-box" style="background:#ef9a9a;">33%</span><span class="att-box" style="background:#ef9a9a;">36%</span><span class="att-box" style="background:#ef9a9a;">10%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">-</span><span class="ou-box" style="background:#ccc;opacity:0.94;">-</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">2</span><span class="ou-box" style="background:#ff9800;opacity:0.82;">4</span><span class="ou-box" style="background:#ff9800;opacity:0.76;">4</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.64;">4</span><span class="ou-box" style="background:#607d8b;opacity:0.58;">1</span><span class="ou-box" style="background:#ff9800;opacity:0.52;">6</span><span class="ou-box" style="background:#ff9800;opacity:0.46;">8</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">15 Sept → 27 Nov</td>
        <td class="ou-flag-col">15 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      
    </div>
    <div class="ou-section">
      <div class="ou-year-title">Year 10</div>

      
        <div class="ou-trigger-orange">🟧 Moderate O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Kaiic Ashwell</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td class="ou-tutor-col">10N</td>
        <td class="ou-total-col">7</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">33%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#ef9a9a;">83%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">47%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">1</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">2</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">3</span><span class="ou-box" style="background:#607d8b;opacity:0.64;">1</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Finas Eastworth</span>
          
        <div class="missing-warning">
          <strong>No recent data found.</strong> This may indicate the pupil is no longer meeting O/U thresholds.
        </div>
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">10A</td>
        <td class="ou-total-col">7</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">-</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">33%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">-</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">2</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.64;">1</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">2</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">22 Sept → 01 Dec</td>
        <td class="ou-flag-col">22 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Wileth Quarrybrook</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">10S</td>
        <td class="ou-total-col">5</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">91%</span><span class="att-box" style="background:#ffcc80;">86%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">92%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">1</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">2</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Alum Quarryworth</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">10B</td>
        <td class="ou-total-col">5</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">78%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">83%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#607d8b;opacity:1.00;">1</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">1</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">1</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Finam Pinedale</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">10N</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">83%</span><span class="att-box" style="background:#ef9a9a;">60%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">22 Sept → 05 Dec</td>
        <td class="ou-flag-col">22 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Maxin Brookmore</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td class="ou-tutor-col">10B</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">2</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">30 Sept → 12 Dec</td>
        <td class="ou-flag-col">30 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      

      
        <div class="ou-trigger-red">🟧 High O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Coron Ironburn</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">10N</td>
        <td class="ou-total-col">94</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">17%</span><span class="att-box" style="background:#e0e0e0;">0%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">8</span><span class="ou-box" style="background:#f4a261;opacity:0.94;">10</span><span class="ou-box" style="background:#ff9800;opacity:0.88;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.82;">8</span><span class="ou-box" style="background:#f4a261;opacity:0.76;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.70;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.64;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.58;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.52;">10</span><span class="ou-box" style="background:#f4a261;opacity:0.46;">10</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Reis Calworth</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">10E</td>
        <td class="ou-total-col">14</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ffcc80;">93%</span><span class="att-box" style="background:#ef9a9a;">80%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">08 Sept → 21 Nov</td>
        <td class="ou-flag-col">08 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      
    </div>
    <div class="ou-section">
      <div class="ou-year-title">Year 11</div>

      
        <div class="ou-trigger-orange">🟧 Moderate O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Isaeth Greenmore</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">11Z</td>
        <td class="ou-total-col">8</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ffcc80;">93%</span><span class="att-box" style="background:#ef9a9a;">83%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.64;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.58;">2</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Alor Westham</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td class="ou-tutor-col">11J</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">88%</span><span class="att-box" style="background:#ef9a9a;">78%</span><span class="att-box" style="background:#ef9a9a;">58%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">90%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">1</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">1</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">22 Sept → 05 Dec</td>
        <td class="ou-flag-col">22 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Calas Westham</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td class="ou-tutor-col">11A</td>
        <td class="ou-total-col">4</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">88%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">90%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.88;">1</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">1</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">22 Sept → 05 Dec</td>
        <td class="ou-flag-col">22 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Micon Ashbrook</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">11N</td>
        <td class="ou-total-col">5</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ffcc80;">89%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ffcc80;">89%</span><span class="att-box" style="background:#ffcc80;">91%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#607d8b;opacity:1.00;">1</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">1</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">15 Sept → 27 Nov</td>
        <td class="ou-flag-col">15 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      

      
        <div class="ou-trigger-red">🟧 High O/U Activity</div>
        
    <table class="ou-table">
      <tr>
        <th class="ou-name-col">Name</th>
        <th class="ou-flag-col">Flag</th>
        <th class="ou-tutor-col">Tutor</th>
        <th class="ou-total-col">Total</th>
        <th class="ou-weekly-col">Weekly Breakdown</th>
      </tr>
      
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Micer Hillmere</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">11Z</td>
        <td class="ou-total-col">75</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">14%</span><span class="att-box" style="background:#e0e0e0;">0%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.94;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.88;">6</span><span class="ou-box" style="background:#ff9800;opacity:0.82;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.76;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.70;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.64;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.58;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.52;">8</span><span class="ou-box" style="background:#ff9800;opacity:0.46;">5</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Harel Eastshaw</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">11Z</td>
        <td class="ou-total-col">22</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#ef9a9a;">40%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#ef9a9a;">30%</span><span class="att-box" style="background:#ef9a9a;">40%</span><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">30%</span><span class="att-box" style="background:#ef9a9a;">64%</span><span class="att-box" style="background:#ef9a9a;">78%</span></div>
            <div><span class="ou-box" style="background:#607d8b;opacity:1.00;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#ff9800;opacity:0.88;">4</span><span class="ou-box" style="background:#ff9800;opacity:0.82;">4</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ff9800;opacity:0.58;">4</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">2</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Sebin Oakworth</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td class="ou-tutor-col">11B</td>
        <td class="ou-total-col">14</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ef9a9a;">10%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#ccc;opacity:0.70;">0</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#ccc;opacity:0.52;">0</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">08 Sept → 21 Nov</td>
        <td class="ou-flag-col">08 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Theoiel Ashton</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">11S</td>
        <td class="ou-total-col">13</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ffcc80;">90%</span><span class="att-box" style="background:#ffcc80;">91%</span><span class="att-box" style="background:#ef9a9a;">78%</span><span class="att-box" style="background:#ef9a9a;">67%</span><span class="att-box" style="background:#ef9a9a;">75%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">78%</span><span class="att-box" style="background:#ffcc80;">89%</span><span class="att-box" style="background:#ef9a9a;">54%</span><span class="att-box" style="background:#ef9a9a;">60%</span></div>
            <div><span class="ou-box" style="background:#ccc;opacity:1.00;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">1</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">1</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.64;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.58;">1</span><span class="ou-box" style="background:#ff9800;opacity:0.52;">4</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">3</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Noen Millfield</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td class="ou-tutor-col">11C</td>
        <td class="ou-total-col">14</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">50%</span><span class="att-box" style="background:#ffcc80;">92%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">67%</span><span class="att-box" style="background:#ef9a9a;">69%</span><span class="att-box" style="background:#ef9a9a;">70%</span><span class="att-box" style="background:#ef9a9a;">75%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">79%</span><span class="att-box" style="background:#ef9a9a;">83%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">5</span><span class="ou-box" style="background:#ccc;opacity:0.94;">0</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.82;">1</span><span class="ou-box" style="background:#607d8b;opacity:0.76;">3</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#ccc;opacity:0.64;">0</span><span class="ou-box" style="background:#ccc;opacity:0.58;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.46;">1</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">30 Sept → 12 Dec</td>
        <td class="ou-flag-col">30 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
      <!-- ROW 1 -->
      <tr>
        <td class="ou-name-col">
          <span class="name-block">Beneth Ironford</span>
          
        </td>
        <td class="ou-flag-col"><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td class="ou-tutor-col">11H</td>
        <td class="ou-total-col">13</td>
        <td class="ou-weekly-col">
          <div class="ou-weekly-inner">
            <div><span class="att-box" style="background:#ef9a9a;">60%</span><span class="att-box" style="background:#ef9a9a;">56%</span><span class="att-box" style="background:#ef9a9a;">25%</span><span class="att-box" style="background:#e0e0e0;">0%</span><span class="att-box" style="background:#ef9a9a;">40%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">80%</span><span class="att-box" style="background:#ef9a9a;">85%</span><span class="att-box" style="background:#81c784;">100%</span></div>
            <div><span class="ou-box" style="background:#ff9800;opacity:1.00;">4</span><span class="ou-box" style="background:#607d8b;opacity:0.94;">2</span><span class="ou-box" style="background:#ccc;opacity:0.88;">0</span><span class="ou-box" style="background:#ccc;opacity:0.82;">0</span><span class="ou-box" style="background:#ccc;opacity:0.76;">0</span><span class="ou-box" style="background:#607d8b;opacity:0.70;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.64;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.58;">2</span><span class="ou-box" style="background:#607d8b;opacity:0.52;">1</span><span class="ou-box" style="background:#ccc;opacity:0.46;">0</span></div>
            <div><span class="wk-label">W15</span><span class="wk-label">W14</span><span class="wk-label">W13</span><span class="wk-label">W12</span><span class="wk-label">W11</span><span class="wk-label">W10</span><span class="wk-label">W8</span><span class="wk-label">W7</span><span class="wk-label">W6</span><span class="wk-label">W5</span></div>
          </div>
        </td>
      </tr>

      <!-- ROW 2 -->
      <tr class="ou-subhead-row">
        <td class="ou-name-col">10-week window</td>
        <td class="ou-flag-col">Hit</td>
        <td class="ou-tutor-col">T4</td>
        <td class="ou-total-col">T10</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <!-- ROW 3 -->
      <tr class="ou-subval-row">
        <td class="ou-name-col">29 Sept → 12 Dec</td>
        <td class="ou-flag-col">29 Sept</td>
        <td class="ou-tutor-col">0</td>
        <td class="ou-total-col">0</td>
        <td class="ou-weekly-col"></td>
      </tr>

      <tr class="student-separator"><td colspan="5"></td></tr>
    
    </table>
  
      
    </div></div>

    

<style>
  :root{
    --green:#1e40af;
    --gold:#0f766e;
    --text:#0f172a;
    --soft:#f4f7ff;
    --card:#ffffff;
  }
  
  
    /* =========================================
       Attendance Card System (shared)
       MUST be wrapped per-node with an ID
       ========================================= */

    .att-card{
      background:var(--card);
      border:1px solid #374151;
      border-radius:12px;
      box-shadow:0 1px 3px rgba(0,0,0,0.05);
      padding:16px 18px;
      margin:0 auto 20px auto;
      max-width:900px;
    }

    .att-card--green{  border-left:6px solid var(--green); }
    .att-card--gold{   border-left:6px solid var(--gold); }
    .att-card--orange{ border-left:6px solid var(--orange); }

    .att-title{
      font-size:18px;
      font-weight:700;
      color:var(--green);
      margin:0 0 10px;
    }

    .att-subtitle{
      font-size:13px;
      font-weight:700;
      color:var(--green);
      margin:12px 0 6px;
    }

    .att-table{
      width:100%;
      border-collapse:collapse;
      font-size:12px;
      background:#fff;
    }

    .att-table th{
      background:var(--green);
      color:#fff;
      padding:6px;
      text-align:center;
      white-space:nowrap;
    }

    .att-table td{
      padding:5px 6px;
      border:1px solid #ddd;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }

    .att-gap{
      background:#ddd;
      font-size:9px;
      color:#666;
      text-align:center;
    }
  
  .ou-subtitle{
    font-size:14px;
    font-weight:600;
    color:var(--green);
    margin:10px 0 6px;
    border-left:4px solid var(--gold);
    padding-left:6px;
  }
 
</style>

<div id="pa-wrapper">
<div class="att-card att-card--orange">

  <div class="att-title">📉 Persistent Absence Students (50–89%)</div>
  <p>Students with persistent attendance concerns. Those below 80% require urgent pastoral review.</p>

  <div class="ou-subtitle">⚠️ Suspected Drop: Students Trending Toward &lt;80%</div>
  <p>Based on recent attendance trends, these students may fall below 80% soon.</p>

  <table class="att-table pa-drop-table">

    <tr>
      <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
      <th>Cur %</th><th>Projected %</th>
  <th>W14</th><th>W13</th><th>W12</th></tr>
    <tr>
      <td class="name-cell">Reio Ironley</td>
      <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
      <td>10</td>
      <td>10E</td>
      <td class="highlight-yellow">🟡80.0%</td>
      <td class="highlight-red">🟧77.9%</td>
    <td style="background:#fde4e7;">79.2%🟧↓</td><td style="background:#e3f4e9;">84.2%🟩 ↑</td><td style="background:#fde4e7;">83.2%🟧↓</td></tr></table><hr><div class="ou-subtitle">🟧 High-Risk Persistent Absence (<80%)</div>
    <div style="margin-top:6px; font-weight:600;">Year 7</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Paam Denley</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>7</td>
        <td>7H</td>
      <td style="background:#fde8d8;">66.2%🟧↓</td><td style="background:#fde8d8;">71.4%🟧↓</td><td style="background:#fde8d8;">77.6%🟧↓</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.6%🟧↓</td><td style="background:#fde8d8;">91.0%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Noeth Millhurst</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>7</td>
        <td>7D</td>
      <td style="background:#fde8d8;">72.7%🟧↓</td><td style="background:#fde8d8;">75.4%🟧↓</td><td style="background:#fde8d8;">78.8%🟧↓</td><td style="background:#fde8d8;">82.9%🟧↓</td><td style="background:#fde8d8;">84.9%🟧↓</td><td style="background:#fde8d8;">88.2%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.0%🟧↓</td><td style="background:#fde8d8;">95.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Sebio Youngley</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>7</td>
        <td>7E</td>
      <td style="background:#fde8d8;">77.3%🟧↓</td><td style="background:#fde8d8;">79.5%🟧↓</td><td style="background:#fde8d8;">86.6%🟧↓</td><td style="background:#fde8d8;">89.4%🟧↓</td><td style="background:#fde8d8;">90.3%🟧↓</td><td style="background:#fde8d8;">90.6%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.4%🟩 ↑</td><td style="background:#e6f5f2;">97.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Noer Northridge</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>7</td>
        <td>7B</td>
      <td style="background:#e6f5f2;">78.4%🟩 ↑</td><td style="background:#fde8d8;">78.2%🟧↓</td><td style="background:#e6f5f2;">81.7%🟩 ↑</td><td style="background:#fde8d8;">80.4%🟧↓</td><td style="background:#fde8d8;">88.7%🟧↓</td><td style="background:#fde8d8;">90.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#eef2ff;">100.0%⬜ →</td><td style="background:#eef2ff;">100.0%⬜ →</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 8</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Jaeth Stonemore</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8H</td>
      <td style="background:#fde8d8;">54.8%🟧↓</td><td style="background:#e6f5f2;">56.0%🟩 ↑</td><td style="background:#fde8d8;">55.7%🟧↓</td><td style="background:#e6f5f2;">57.0%🟩 ↑</td><td style="background:#fde8d8;">56.7%🟧↓</td><td style="background:#e6f5f2;">61.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">58.7%🟩 ↑</td><td style="background:#e6f5f2;">58.5%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Haram Denford</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8C</td>
      <td style="background:#e6f5f2;">67.4%🟩 ↑</td><td style="background:#fde8d8;">64.8%🟧↓</td><td style="background:#e6f5f2;">70.4%🟩 ↑</td><td style="background:#fde8d8;">68.2%🟧↓</td><td style="background:#e6f5f2;">69.4%🟩 ↑</td><td style="background:#fde8d8;">67.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">70.5%🟧↓</td><td style="background:#e6f5f2;">71.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Taeb Denwell</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#e6f5f2;">70.4%🟩 ↑</td><td style="background:#e6f5f2;">69.6%🟩 ↑</td><td style="background:#e6f5f2;">68.7%🟩 ↑</td><td style="background:#e6f5f2;">66.4%🟩 ↑</td><td style="background:#fde8d8;">64.9%🟧↓</td><td style="background:#fde8d8;">67.1%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">68.0%🟧↓</td><td style="background:#e6f5f2;">75.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Jaus Pineshaw</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8E</td>
      <td style="background:#fde8d8;">77.9%🟧↓</td><td style="background:#e6f5f2;">81.0%🟩 ↑</td><td style="background:#e6f5f2;">79.3%🟩 ↑</td><td style="background:#fde8d8;">77.8%🟧↓</td><td style="background:#fde8d8;">80.0%🟧↓</td><td style="background:#fde8d8;">84.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Danum Eastley</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8N</td>
      <td style="background:#e6f5f2;">79.4%🟩 ↑</td><td style="background:#e6f5f2;">77.8%🟩 ↑</td><td style="background:#e6f5f2;">75.9%🟩 ↑</td><td style="background:#e6f5f2;">74.1%🟩 ↑</td><td style="background:#e6f5f2;">71.7%🟩 ↑</td><td style="background:#e6f5f2;">68.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">64.6%🟧↓</td><td style="background:#fde8d8;">65.2%🟧↓</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 9</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Samin Ironford</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#fde8d8;">60.0%🟧↓</td><td style="background:#fde8d8;">60.8%🟧↓</td><td style="background:#fde8d8;">62.3%🟧↓</td><td style="background:#fde8d8;">67.0%🟧↓</td><td style="background:#e6f5f2;">74.0%🟩 ↑</td><td style="background:#fde8d8;">73.6%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">75.6%🟩 ↑</td><td style="background:#fde8d8;">73.5%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Jael Oakworth</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>9</td>
        <td>9D</td>
      <td style="background:#e6f5f2;">73.1%🟩 ↑</td><td style="background:#e6f5f2;">72.6%🟩 ↑</td><td style="background:#fde8d8;">70.2%🟧↓</td><td style="background:#e6f5f2;">71.7%🟩 ↑</td><td style="background:#e6f5f2;">68.8%🟩 ↑</td><td style="background:#e6f5f2;">65.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">60.5%🟩 ↑</td><td style="background:#fde8d8;">54.5%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Theoas Calton</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9S</td>
      <td style="background:#e6f5f2;">75.0%🟩 ↑</td><td style="background:#e6f5f2;">74.6%🟩 ↑</td><td style="background:#fde8d8;">72.4%🟧↓</td><td style="background:#e6f5f2;">77.8%🟩 ↑</td><td style="background:#e6f5f2;">75.5%🟩 ↑</td><td style="background:#e6f5f2;">72.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">71.8%🟩 ↑</td><td style="background:#e6f5f2;">67.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wilus Hillwood</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9B</td>
      <td style="background:#e6f5f2;">75.7%🟩 ↑</td><td style="background:#e6f5f2;">73.8%🟩 ↑</td><td style="background:#fde8d8;">73.3%🟧↓</td><td style="background:#e6f5f2;">76.9%🟩 ↑</td><td style="background:#e6f5f2;">76.5%🟩 ↑</td><td style="background:#fde8d8;">73.9%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">78.2%🟩 ↑</td><td style="background:#e6f5f2;">77.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Noar Millwood</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9B</td>
      <td style="background:#fde8d8;">77.6%🟧↓</td><td style="background:#e6f5f2;">80.6%🟩 ↑</td><td style="background:#e6f5f2;">78.9%🟩 ↑</td><td style="background:#fde8d8;">77.4%🟧↓</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">83.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">78.8%🟩 ↑</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 10</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Kaiic Ashwell</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10N</td>
      <td style="background:#fde8d8;">63.8%🟧↓</td><td style="background:#fde8d8;">68.8%🟧↓</td><td style="background:#e6f5f2;">72.4%🟩 ↑</td><td style="background:#e6f5f2;">70.9%🟩 ↑</td><td style="background:#e6f5f2;">70.0%🟩 ↑</td><td style="background:#fde8d8;">66.7%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">67.5%🟩 ↑</td><td style="background:#e6f5f2;">64.7%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Harus Fairmere</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#fde8d8;">67.4%🟧↓</td><td style="background:#fde8d8;">72.3%🟧↓</td><td style="background:#e6f5f2;">73.4%🟩 ↑</td><td style="background:#e6f5f2;">72.3%🟩 ↑</td><td style="background:#e6f5f2;">71.4%🟩 ↑</td><td style="background:#fde8d8;">67.9%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">68.0%🟧↓</td><td style="background:#e6f5f2;">70.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Zaon Ironburn</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#fde8d8;">68.1%🟧↓</td><td style="background:#fde8d8;">69.0%🟧↓</td><td style="background:#fde8d8;">70.7%🟧↓</td><td style="background:#fde8d8;">73.1%🟧↓</td><td style="background:#fde8d8;">74.2%🟧↓</td><td style="background:#fde8d8;">76.1%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">79.5%🟧↓</td><td style="background:#e6f5f2;">80.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Reis Calworth</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10E</td>
      <td style="background:#e6f5f2;">72.1%🟩 ↑</td><td style="background:#e6f5f2;">69.8%🟩 ↑</td><td style="background:#e6f5f2;">69.0%🟩 ↑</td><td style="background:#fde8d8;">66.7%🟧↓</td><td style="background:#eef2ff;">70.0%⬜ →</td><td style="background:#e6f5f2;">70.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">68.8%🟩 ↑</td><td style="background:#e6f5f2;">64.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Maror Hillton</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>10</td>
        <td>10B</td>
      <td style="background:#e6f5f2;">75.2%🟩 ↑</td><td style="background:#e6f5f2;">73.9%🟩 ↑</td><td style="background:#fde8d8;">73.4%🟧↓</td><td style="background:#fde8d8;">73.5%🟧↓</td><td style="background:#fde8d8;">74.0%🟧↓</td><td style="background:#e6f5f2;">75.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">71.8%🟩 ↑</td><td style="background:#fde8d8;">70.6%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Kenis Oakbrook</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#fde8d8;">77.9%🟧↓</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#fde8d8;">82.8%🟧↓</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">79.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">79.2%🟧↓</td><td style="background:#fde8d8;">82.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxam Northmere</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10B</td>
      <td style="background:#fde8d8;">79.7%🟧↓</td><td style="background:#fde8d8;">85.9%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#e6f5f2;">90.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">87.1%🟩 ↑</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 11</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Harel Eastshaw</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11Z</td>
      <td style="background:#e6f5f2;">56.9%🟩 ↑</td><td style="background:#fde8d8;">56.7%🟧↓</td><td style="background:#fde8d8;">58.1%🟧↓</td><td style="background:#fde8d8;">60.6%🟧↓</td><td style="background:#fde8d8;">63.6%🟧↓</td><td style="background:#fde8d8;">66.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">67.1%🟧↓</td><td style="background:#fde8d8;">76.8%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Noen Millfield</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11C</td>
      <td style="background:#fde8d8;">67.7%🟧↓</td><td style="background:#e6f5f2;">69.1%🟩 ↑</td><td style="background:#fde8d8;">66.7%🟧↓</td><td style="background:#fde8d8;">71.8%🟧↓</td><td style="background:#fde8d8;">72.3%🟧↓</td><td style="background:#fde8d8;">72.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">73.2%🟩 ↑</td><td style="background:#e6f5f2;">73.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Danio Ironford</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11Z</td>
      <td style="background:#e6f5f2;">68.4%🟩 ↑</td><td style="background:#e6f5f2;">68.3%🟩 ↑</td><td style="background:#fde8d8;">67.2%🟧↓</td><td style="background:#e6f5f2;">70.4%🟩 ↑</td><td style="background:#e6f5f2;">69.4%🟩 ↑</td><td style="background:#fde8d8;">68.2%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">69.2%🟩 ↑</td><td style="background:#fde8d8;">69.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Alum Greendale</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11H</td>
      <td style="background:#fde8d8;">70.6%🟧↓</td><td style="background:#fde8d8;">71.4%🟧↓</td><td style="background:#e6f5f2;">73.7%🟩 ↑</td><td style="background:#fde8d8;">73.6%🟧↓</td><td style="background:#e6f5f2;">75.0%🟩 ↑</td><td style="background:#e6f5f2;">74.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">74.0%🟩 ↑</td><td style="background:#fde8d8;">73.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Isaeth Greenmore</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11Z</td>
      <td style="background:#e6f5f2;">71.7%🟩 ↑</td><td style="background:#e6f5f2;">70.9%🟩 ↑</td><td style="background:#fde8d8;">70.1%🟧↓</td><td style="background:#e6f5f2;">75.8%🟩 ↑</td><td style="background:#fde8d8;">74.2%🟧↓</td><td style="background:#fde8d8;">75.9%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">79.7%🟧↓</td><td style="background:#fde8d8;">81.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Beneth Ironford</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11H</td>
      <td style="background:#fde8d8;">71.9%🟧↓</td><td style="background:#fde8d8;">72.8%🟧↓</td><td style="background:#fde8d8;">74.1%🟧↓</td><td style="background:#fde8d8;">77.8%🟧↓</td><td style="background:#fde8d8;">85.7%🟧↓</td><td style="background:#fde8d8;">90.9%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#fde8d8;">94.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Sebin Oakworth</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#e6f5f2;">75.2%🟩 ↑</td><td style="background:#e6f5f2;">73.2%🟩 ↑</td><td style="background:#e6f5f2;">72.6%🟩 ↑</td><td style="background:#fde8d8;">70.6%🟧↓</td><td style="background:#e6f5f2;">76.8%🟩 ↑</td><td style="background:#e6f5f2;">74.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">70.9%🟩 ↑</td><td style="background:#e6f5f2;">68.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Elen Eastside</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#e6f5f2;">75.8%🟩 ↑</td><td style="background:#e6f5f2;">73.8%🟩 ↑</td><td style="background:#e6f5f2;">71.2%🟩 ↑</td><td style="background:#e6f5f2;">70.9%🟩 ↑</td><td style="background:#e6f5f2;">67.7%🟩 ↑</td><td style="background:#e6f5f2;">63.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">61.6%🟧↓</td><td style="background:#fde8d8;">67.7%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Theoiel Ashton</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11S</td>
      <td style="background:#e6f5f2;">76.6%🟩 ↑</td><td style="background:#e6f5f2;">75.6%🟩 ↑</td><td style="background:#e6f5f2;">74.1%🟩 ↑</td><td style="background:#fde8d8;">73.8%🟧↓</td><td style="background:#e6f5f2;">74.5%🟩 ↑</td><td style="background:#e6f5f2;">74.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">73.7%🟩 ↑</td><td style="background:#e6f5f2;">73.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Eleb Quarryfield</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11E</td>
      <td style="background:#e6f5f2;">77.2%🟩 ↑</td><td style="background:#fde8d8;">75.4%🟧↓</td><td style="background:#fde8d8;">76.7%🟧↓</td><td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#fde8d8;">82.7%🟧↓</td><td style="background:#e6f5f2;">83.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">80.8%🟧↓</td><td style="background:#e6f5f2;">83.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Theoin Greenburn</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#e6f5f2;">77.4%🟩 ↑</td><td style="background:#e6f5f2;">75.8%🟩 ↑</td><td style="background:#e6f5f2;">73.2%🟩 ↑</td><td style="background:#fde8d8;">72.1%🟧↓</td><td style="background:#e6f5f2;">76.0%🟩 ↑</td><td style="background:#e6f5f2;">75.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">73.3%🟩 ↑</td><td style="background:#e6f5f2;">71.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Daniel Millwood</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11J</td>
      <td style="background:#e6f5f2;">79.7%🟩 ↑</td><td style="background:#e6f5f2;">79.6%🟩 ↑</td><td style="background:#e6f5f2;">77.7%🟩 ↑</td><td style="background:#e6f5f2;">75.8%🟩 ↑</td><td style="background:#e6f5f2;">72.9%🟩 ↑</td><td style="background:#e6f5f2;">69.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">64.6%🟩 ↑</td><td style="background:#e6f5f2;">61.8%🟩 ↑</td></tr></table><div class="ou-subtitle">🟠 Moderate Persistent Absence (80–89%)</div>
    <div style="margin-top:6px; font-weight:600;">Year 7</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Olic Westton</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>7</td>
        <td>7S</td>
      <td style="background:#fde8d8;">80.6%🟧↓</td><td style="background:#fde8d8;">80.6%🟧↓</td><td style="background:#fde8d8;">80.7%🟧↓</td><td style="background:#e6f5f2;">81.1%🟩 ↑</td><td style="background:#fde8d8;">80.9%🟧↓</td><td style="background:#fde8d8;">81.2%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">83.8%🟧↓</td><td style="background:#e6f5f2;">85.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wileth Quarryfield</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>7</td>
        <td>7E</td>
      <td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#e6f5f2;">82.6%🟩 ↑</td><td style="background:#e6f5f2;">82.6%🟩 ↑</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#fde8d8;">81.3%🟧↓</td><td style="background:#fde8d8;">84.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">84.5%🟩 ↑</td><td style="background:#fde8d8;">82.5%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Wilon Oakridge</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7B</td>
      <td style="background:#e6f5f2;">83.0%🟩 ↑</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">80.0%🟩 ↑</td><td style="background:#fde8d8;">78.5%🟧↓</td><td style="background:#fde8d8;">81.3%🟧↓</td><td style="background:#fde8d8;">81.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#fde8d8;">80.3%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Isaon Westburn</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>7</td>
        <td>7A</td>
      <td style="background:#e6f5f2;">83.8%🟩 ↑</td><td style="background:#e6f5f2;">82.5%🟩 ↑</td><td style="background:#fde8d8;">81.9%🟧↓</td><td style="background:#e6f5f2;">88.0%🟩 ↑</td><td style="background:#fde8d8;">86.7%🟧↓</td><td style="background:#e6f5f2;">96.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">96.2%🟩 ↑</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Benin Lakeham</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>7</td>
        <td>7N</td>
      <td style="background:#fde8d8;">85.1%🟧↓</td><td style="background:#fde8d8;">85.5%🟧↓</td><td style="background:#fde8d8;">86.0%🟧↓</td><td style="background:#fde8d8;">87.7%🟧↓</td><td style="background:#fde8d8;">88.4%🟧↓</td><td style="background:#e6f5f2;">89.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.3%🟧↓</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Zaan Greenman</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>7</td>
        <td>7A</td>
      <td style="background:#fde8d8;">87.4%🟧↓</td><td style="background:#fde8d8;">90.4%🟧↓</td><td style="background:#e6f5f2;">94.8%🟩 ↑</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Calam Quarryhurst</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7D</td>
      <td style="background:#e6f5f2;">87.4%🟩 ↑</td><td style="background:#fde8d8;">86.4%🟧↓</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">91.8%🟩 ↑</td><td style="background:#fde8d8;">90.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.1%🟩 ↑</td><td style="background:#fde8d8;">91.0%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Jonis Hilldale</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7B</td>
      <td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#fde8d8;">87.2%🟧↓</td><td style="background:#fde8d8;">92.2%🟧↓</td><td style="background:#e6f5f2;">95.2%🟩 ↑</td><td style="background:#fde8d8;">94.9%🟧↓</td><td style="background:#e6f5f2;">96.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">96.1%🟩 ↑</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Maris Quarryburn</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7N</td>
      <td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#fde8d8;">87.3%🟧↓</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.8%🟩 ↑</td><td style="background:#fde8d8;">86.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#e6f5f2;">85.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wilio Northshaw</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>7</td>
        <td>7A</td>
      <td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#e6f5f2;">95.2%🟩 ↑</td><td style="background:#fde8d8;">94.8%🟧↓</td><td style="background:#e6f5f2;">96.3%🟩 ↑</td><td style="background:#e6f5f2;">95.9%🟩 ↑</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">94.9%🟧↓</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Danan Oakcroft</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>7</td>
        <td>7A</td>
      <td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#fde8d8;">86.2%🟧↓</td><td style="background:#fde8d8;">92.6%🟧↓</td><td style="background:#fde8d8;">95.8%🟧↓</td><td style="background:#e6f5f2;">97.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.4%🟩 ↑</td><td style="background:#fde8d8;">97.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Micam Lakewell</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>7</td>
        <td>7E</td>
      <td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#fde8d8;">88.7%🟧↓</td><td style="background:#fde8d8;">90.3%🟧↓</td><td style="background:#fde8d8;">91.5%🟧↓</td><td style="background:#fde8d8;">92.6%🟧↓</td><td style="background:#e6f5f2;">94.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td style="background:#e6f5f2;">92.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Jaeb Pinecroft</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7B</td>
      <td style="background:#fde8d8;">89.6%🟧↓</td><td style="background:#fde8d8;">90.4%🟧↓</td><td style="background:#e6f5f2;">91.3%🟩 ↑</td><td style="background:#fde8d8;">90.7%🟧↓</td><td style="background:#e6f5f2;">91.8%🟩 ↑</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Coris Ashfall</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7C</td>
      <td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.8%🟧↓</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td><td style="background:#e6f5f2;">93.8%🟩 ↑</td><td style="background:#e6f5f2;">93.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.2%🟩 ↑</td><td style="background:#fde8d8;">91.0%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Harex Ashford</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>7</td>
        <td>7A</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#e6f5f2;">91.4%🟩 ↑</td><td style="background:#fde8d8;">90.7%🟧↓</td><td style="background:#fde8d8;">91.7%🟧↓</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Zaam Denley</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>7</td>
        <td>7H</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">90.7%🟩 ↑</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#fde8d8;">85.3%🟧↓</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 8</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Wilus Brookley</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8H</td>
      <td style="background:#e6f5f2;">80.7%🟩 ↑</td><td style="background:#fde8d8;">79.2%🟧↓</td><td style="background:#fde8d8;">80.9%🟧↓</td><td style="background:#fde8d8;">81.3%🟧↓</td><td style="background:#fde8d8;">81.4%🟧↓</td><td style="background:#fde8d8;">83.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Samor Pinedale</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8E</td>
      <td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">80.2%🟩 ↑</td><td style="background:#fde8d8;">78.4%🟧↓</td><td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#fde8d8;">88.8%🟧↓</td><td style="background:#fde8d8;">89.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">91.0%🟧↓</td><td style="background:#e6f5f2;">98.5%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wilel Quarryshaw</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8S</td>
      <td style="background:#e6f5f2;">83.0%🟩 ↑</td><td style="background:#fde8d8;">81.6%🟧↓</td><td style="background:#fde8d8;">85.0%🟧↓</td><td style="background:#e6f5f2;">86.9%🟩 ↑</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#e6f5f2;">84.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">82.1%🟧↓</td><td style="background:#e6f5f2;">82.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Marer Westmere</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8A</td>
      <td style="background:#fde8d8;">83.2%🟧↓</td><td style="background:#e6f5f2;">83.5%🟩 ↑</td><td style="background:#fde8d8;">82.0%🟧↓</td><td style="background:#e6f5f2;">86.4%🟩 ↑</td><td style="background:#e6f5f2;">85.1%🟩 ↑</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">81.1%🟩 ↑</td><td style="background:#fde8d8;">78.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Theoum Youngfall</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">83.6%🟩 ↑</td><td style="background:#fde8d8;">82.0%🟧↓</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td></td><td></td><td class="gap-cell">9</td><td style="background:#fde8d8;">87.8%🟧↓</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kaieth Eastman</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8E</td>
      <td style="background:#e6f5f2;">83.8%🟩 ↑</td><td style="background:#e6f5f2;">82.5%🟩 ↑</td><td style="background:#e6f5f2;">81.0%🟩 ↑</td><td style="background:#fde8d8;">79.6%🟧↓</td><td style="background:#e6f5f2;">87.8%🟩 ↑</td><td style="background:#fde8d8;">86.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Sebeth Kingfield</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#fde8d8;">83.8%🟧↓</td><td style="background:#e6f5f2;">84.1%🟩 ↑</td><td style="background:#e6f5f2;">82.8%🟩 ↑</td><td style="background:#fde8d8;">81.5%🟧↓</td><td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Paas Kingham</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8D</td>
      <td style="background:#e6f5f2;">84.6%🟩 ↑</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#e6f5f2;">81.9%🟩 ↑</td><td style="background:#e6f5f2;">80.6%🟩 ↑</td><td style="background:#e6f5f2;">78.8%🟩 ↑</td><td style="background:#e6f5f2;">76.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">73.4%🟧↓</td><td style="background:#fde8d8;">82.6%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxin Lakedale</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#e6f5f2;">84.6%🟩 ↑</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">83.6%🟩 ↑</td><td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#fde8d8;">90.8%🟧↓</td><td style="background:#fde8d8;">90.9%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Benel Calford</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8H</td>
      <td style="background:#fde8d8;">86.2%🟧↓</td><td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">90.7%🟩 ↑</td><td style="background:#e6f5f2;">90.0%🟩 ↑</td><td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">87.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td style="background:#e6f5f2;">87.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Keneth Stonemore</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8C</td>
      <td style="background:#fde8d8;">86.8%🟧↓</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#e6f5f2;">91.4%🟩 ↑</td><td style="background:#e6f5f2;">90.7%🟩 ↑</td><td style="background:#fde8d8;">89.9%🟧↓</td><td style="background:#e6f5f2;">93.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Calam Calford</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8D</td>
      <td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#fde8d8;">85.9%🟧↓</td><td style="background:#fde8d8;">91.5%🟧↓</td><td style="background:#e6f5f2;">94.5%🟩 ↑</td><td style="background:#fde8d8;">94.1%🟧↓</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">95.1%🟩 ↑</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wilan Eastridge</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8C</td>
      <td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#fde8d8;">86.0%🟧↓</td><td style="background:#fde8d8;">88.3%🟧↓</td><td style="background:#fde8d8;">93.3%🟧↓</td><td style="background:#e6f5f2;">93.8%🟩 ↑</td><td style="background:#fde8d8;">93.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.7%🟩 ↑</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kaiex Westridge</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#fde8d8;">87.5%🟧↓</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#fde8d8;">88.8%🟧↓</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#fde8d8;">90.8%🟧↓</td><td style="background:#e6f5f2;">92.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td style="background:#fde8d8;">89.6%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Sebis Oakhurst</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>8</td>
        <td>8E</td>
      <td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#e6f5f2;">92.0%🟩 ↑</td><td style="background:#fde8d8;">91.3%🟧↓</td><td style="background:#e6f5f2;">98.1%🟩 ↑</td><td style="background:#e6f5f2;">98.0%🟩 ↑</td><td style="background:#fde8d8;">97.7%🟧↓</td><td class="gap-cell">9</td><td style="background:#eef2ff;">100.0%⬜ →</td><td style="background:#eef2ff;">100.0%⬜ →</td></tr>
      <tr>
        <td class="name-cell">Samel Quarryshaw</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8H</td>
      <td style="background:#e6f5f2;">88.4%🟩 ↑</td><td style="background:#fde8d8;">87.5%🟧↓</td><td style="background:#fde8d8;">93.2%🟧↓</td><td style="background:#e6f5f2;">96.4%🟩 ↑</td><td style="background:#e6f5f2;">96.0%🟩 ↑</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">95.0%🟩 ↑</td><td style="background:#e6f5f2;">94.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Finum Fairley</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8H</td>
      <td style="background:#fde8d8;">88.4%🟧↓</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#fde8d8;">90.9%🟧↓</td><td style="background:#fde8d8;">92.0%🟧↓</td><td style="background:#e6f5f2;">93.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.5%🟩 ↑</td><td style="background:#e6f5f2;">91.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wilor Lakecroft</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8A</td>
      <td style="background:#e6f5f2;">88.6%🟩 ↑</td><td style="background:#fde8d8;">87.7%🟧↓</td><td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#fde8d8;">87.3%🟧↓</td><td style="background:#e6f5f2;">96.0%🟩 ↑</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">95.0%🟩 ↑</td><td style="background:#e6f5f2;">94.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Corai Brookley</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#e6f5f2;">90.5%🟩 ↑</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#fde8d8;">88.8%🟧↓</td><td style="background:#e6f5f2;">94.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">93.6%🟧↓</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Leoeth Stonemore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8B</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#fde8d8;">91.4%🟧↓</td><td style="background:#e6f5f2;">96.3%🟩 ↑</td><td style="background:#e6f5f2;">95.9%🟩 ↑</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Micel Westworth</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8D</td>
      <td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#fde8d8;">89.0%🟧↓</td><td style="background:#e6f5f2;">91.9%🟩 ↑</td><td style="background:#fde8d8;">91.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.4%🟩 ↑</td><td style="background:#fde8d8;">91.3%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxai Calley</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8A</td>
      <td style="background:#e6f5f2;">89.9%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#fde8d8;">90.0%🟧↓</td><td style="background:#fde8d8;">99.0%🟧↓</td><td style="background:#eef2ff;">100.0%⬜ →</td><td class="gap-cell">9</td><td style="background:#eef2ff;">100.0%⬜ →</td><td style="background:#eef2ff;">100.0%⬜ →</td></tr>
      <tr>
        <td class="name-cell">Isaer Lakedale</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>8</td>
        <td>8H</td>
      <td style="background:#e6f5f2;">89.9%🟩 ↑</td><td style="background:#fde8d8;">89.1%🟧↓</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td style="background:#fde8d8;">92.7%🟧↓</td><td style="background:#e6f5f2;">96.0%🟩 ↑</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">95.0%🟩 ↑</td><td style="background:#e6f5f2;">94.3%🟩 ↑</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 9</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Samis Millfield</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9A</td>
      <td style="background:#fde8d8;">81.3%🟧↓</td><td style="background:#fde8d8;">81.5%🟧↓</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">85.8%🟩 ↑</td><td style="background:#fde8d8;">84.4%🟧↓</td><td style="background:#e6f5f2;">84.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#e6f5f2;">85.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Jonel Hillfield</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9E</td>
      <td style="background:#e6f5f2;">81.5%🟩 ↑</td><td style="background:#e6f5f2;">80.0%🟩 ↑</td><td style="background:#fde8d8;">78.0%🟧↓</td><td style="background:#e6f5f2;">84.2%🟩 ↑</td><td style="background:#e6f5f2;">82.4%🟩 ↑</td><td style="background:#e6f5f2;">80.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">77.8%🟩 ↑</td><td style="background:#fde8d8;">74.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Finon Rivershaw</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9A</td>
      <td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">80.2%🟩 ↑</td><td style="background:#fde8d8;">79.8%🟧↓</td><td style="background:#fde8d8;">80.2%🟧↓</td><td style="background:#fde8d8;">80.9%🟧↓</td><td style="background:#fde8d8;">83.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">86.5%🟧↓</td><td style="background:#fde8d8;">87.9%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Noin Greenmore</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9D</td>
      <td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">80.2%🟩 ↑</td><td style="background:#fde8d8;">80.2%🟧↓</td><td style="background:#e6f5f2;">82.4%🟩 ↑</td><td style="background:#e6f5f2;">80.6%🟩 ↑</td><td style="background:#e6f5f2;">78.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">75.6%🟩 ↑</td><td style="background:#fde8d8;">72.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Kenor Hillfall</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#fde8d8;">81.6%🟧↓</td><td style="background:#fde8d8;">81.7%🟧↓</td><td style="background:#e6f5f2;">81.9%🟩 ↑</td><td style="background:#e6f5f2;">80.6%🟩 ↑</td><td style="background:#fde8d8;">79.6%🟧↓</td><td style="background:#fde8d8;">81.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">82.1%🟩 ↑</td><td style="background:#fde8d8;">79.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Paex Riverbrook</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9S</td>
      <td style="background:#e6f5f2;">83.8%🟩 ↑</td><td style="background:#e6f5f2;">82.5%🟩 ↑</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#fde8d8;">80.2%🟧↓</td><td style="background:#e6f5f2;">84.7%🟩 ↑</td><td style="background:#e6f5f2;">83.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">82.1%🟩 ↑</td><td style="background:#e6f5f2;">79.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Micas Calton</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#fde8d8;">84.4%🟧↓</td><td style="background:#e6f5f2;">84.8%🟩 ↑</td><td style="background:#e6f5f2;">83.5%🟩 ↑</td><td style="background:#fde8d8;">82.2%🟧↓</td><td style="background:#e6f5f2;">84.5%🟩 ↑</td><td style="background:#fde8d8;">82.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">90.1%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Samio Denmere</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#e6f5f2;">85.3%🟩 ↑</td><td style="background:#e6f5f2;">84.1%🟩 ↑</td><td style="background:#e6f5f2;">82.8%🟩 ↑</td><td style="background:#e6f5f2;">81.5%🟩 ↑</td><td style="background:#e6f5f2;">79.6%🟩 ↑</td><td style="background:#e6f5f2;">77.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">74.4%🟩 ↑</td><td style="background:#e6f5f2;">70.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Paum Stonecroft</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#fde8d8;">85.4%🟧↓</td><td style="background:#fde8d8;">89.0%🟧↓</td><td style="background:#fde8d8;">91.3%🟧↓</td><td style="background:#e6f5f2;">91.7%🟩 ↑</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">88.5%🟧↓</td><td style="background:#fde8d8;">92.8%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Sebis Youngmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9B</td>
      <td style="background:#fde8d8;">85.9%🟧↓</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">87.6%🟩 ↑</td><td style="background:#e6f5f2;">86.7%🟩 ↑</td><td style="background:#fde8d8;">85.3%🟧↓</td><td style="background:#fde8d8;">85.9%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.3%🟧↓</td><td style="background:#fde8d8;">91.0%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Zaam Riverridge</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9D</td>
      <td style="background:#e6f5f2;">86.0%🟩 ↑</td><td style="background:#fde8d8;">84.9%🟧↓</td><td style="background:#e6f5f2;">85.1%🟩 ↑</td><td style="background:#e6f5f2;">84.0%🟩 ↑</td><td style="background:#fde8d8;">82.5%🟧↓</td><td style="background:#e6f5f2;">87.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">85.9%🟧↓</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Calen Oakwell</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9A</td>
      <td style="background:#e6f5f2;">86.4%🟩 ↑</td><td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#e6f5f2;">87.4%🟩 ↑</td><td style="background:#e6f5f2;">86.4%🟩 ↑</td><td style="background:#e6f5f2;">85.1%🟩 ↑</td><td style="background:#fde8d8;">83.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">85.7%🟧↓</td><td style="background:#fde8d8;">94.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Kener Denley</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9S</td>
      <td style="background:#fde8d8;">86.8%🟧↓</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td style="background:#e6f5f2;">85.2%🟩 ↑</td><td style="background:#fde8d8;">83.7%🟧↓</td><td style="background:#fde8d8;">88.6%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Leoai Youngridge</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9E</td>
      <td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#fde8d8;">85.7%🟧↓</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td><td style="background:#e6f5f2;">90.6%🟩 ↑</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">88.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#e6f5f2;">85.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Leoeth Calburn</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9H</td>
      <td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#fde8d8;">84.3%🟧↓</td><td style="background:#fde8d8;">86.9%🟧↓</td><td style="background:#fde8d8;">91.8%🟧↓</td><td style="background:#e6f5f2;">93.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.2%🟧↓</td><td style="background:#fde8d8;">94.0%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Isaas Calton</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9A</td>
      <td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#fde8d8;">86.3%🟧↓</td><td style="background:#fde8d8;">86.7%🟧↓</td><td style="background:#fde8d8;">90.7%🟧↓</td><td style="background:#fde8d8;">91.8%🟧↓</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Alic Brookside</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9S</td>
      <td style="background:#fde8d8;">87.5%🟧↓</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#e6f5f2;">89.2%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">87.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td><td style="background:#fde8d8;">93.7%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Wilis Millfield</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#e6f5f2;">87.5%🟩 ↑</td><td style="background:#fde8d8;">86.5%🟧↓</td><td style="background:#e6f5f2;">90.5%🟩 ↑</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.5%🟩 ↑</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Micam Brookside</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9C</td>
      <td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#e6f5f2;">90.2%🟩 ↑</td><td style="background:#e6f5f2;">89.4%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td style="background:#e6f5f2;">87.4%🟩 ↑</td><td style="background:#e6f5f2;">85.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">84.0%🟧↓</td><td style="background:#e6f5f2;">84.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Zaan Westburn</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9B</td>
      <td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#fde8d8;">86.2%🟧↓</td><td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#fde8d8;">85.7%🟧↓</td><td style="background:#fde8d8;">86.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.1%🟩 ↑</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Jaon Stoneshaw</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9H</td>
      <td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">87.2%🟧↓</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Rowio Lakeham</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>9</td>
        <td>9D</td>
      <td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#e6f5f2;">88.7%🟩 ↑</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#fde8d8;">88.7%🟧↓</td><td style="background:#fde8d8;">89.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">93.4%🟩 ↑</td><td style="background:#fde8d8;">92.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Samus Greenwood</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9A</td>
      <td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#e6f5f2;">91.5%🟩 ↑</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td style="background:#fde8d8;">89.9%🟧↓</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#e6f5f2;">94.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Rowam Brookside</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#e6f5f2;">89.4%🟩 ↑</td><td style="background:#e6f5f2;">88.5%🟩 ↑</td><td style="background:#e6f5f2;">87.4%🟩 ↑</td><td style="background:#fde8d8;">86.4%🟧↓</td><td style="background:#e6f5f2;">91.4%🟩 ↑</td><td style="background:#fde8d8;">90.7%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wiler Hillridge</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9A</td>
      <td style="background:#e6f5f2;">89.5%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td style="background:#e6f5f2;">88.4%🟩 ↑</td><td style="background:#fde8d8;">87.5%🟧↓</td><td style="background:#e6f5f2;">90.4%🟩 ↑</td><td style="background:#e6f5f2;">89.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">87.8%🟧↓</td><td style="background:#e6f5f2;">89.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Taex Westburn</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>9</td>
        <td>9D</td>
      <td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">88.7%🟩 ↑</td><td style="background:#fde8d8;">87.7%🟧↓</td><td style="background:#e6f5f2;">94.3%🟩 ↑</td><td style="background:#e6f5f2;">93.8%🟩 ↑</td><td style="background:#e6f5f2;">93.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.1%🟩 ↑</td><td style="background:#fde8d8;">90.9%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxeb Youngmere</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9N</td>
      <td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">90.5%🟩 ↑</td><td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">90.7%🟩 ↑</td><td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Calex Millham</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9C</td>
      <td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#fde8d8;">92.1%🟧↓</td><td style="background:#e6f5f2;">93.1%🟩 ↑</td><td style="background:#e6f5f2;">92.6%🟩 ↑</td><td style="background:#fde8d8;">91.8%🟧↓</td><td style="background:#e6f5f2;">93.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.1%🟧↓</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Paas Pinehurst</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9D</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.8%🟩 ↑</td><td style="background:#fde8d8;">86.9%🟧↓</td><td style="background:#e6f5f2;">91.8%🟩 ↑</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.6%🟧↓</td><td style="background:#e6f5f2;">97.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Noum Stonecroft</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>9</td>
        <td>9B</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#e6f5f2;">95.9%🟩 ↑</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Samas Quarryhurst</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>9</td>
        <td>9S</td>
      <td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td style="background:#e6f5f2;">90.0%🟩 ↑</td><td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#fde8d8;">92.7%🟧↓</td><td style="background:#fde8d8;">94.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">96.2%🟩 ↑</td><td style="background:#e6f5f2;">95.6%🟩 ↑</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 10</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Reio Ironley</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10E</td>
      <td style="background:#e6f5f2;">80.0%🟩 ↑</td><td style="background:#fde8d8;">79.2%🟧↓</td><td style="background:#e6f5f2;">84.2%🟩 ↑</td><td style="background:#fde8d8;">83.2%🟧↓</td><td style="background:#e6f5f2;">87.6%🟩 ↑</td><td style="background:#fde8d8;">87.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">88.3%🟧↓</td><td style="background:#fde8d8;">89.6%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Reai Fairmere</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10C</td>
      <td style="background:#fde8d8;">80.3%🟧↓</td><td style="background:#e6f5f2;">80.3%🟩 ↑</td><td style="background:#fde8d8;">78.6%🟧↓</td><td style="background:#eef2ff;">80.0%⬜ →</td><td style="background:#fde8d8;">80.0%🟧↓</td><td style="background:#fde8d8;">84.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">85.0%🟧↓</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kenis Millworth</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#e6f5f2;">80.9%🟩 ↑</td><td style="background:#e6f5f2;">80.3%🟩 ↑</td><td style="background:#fde8d8;">78.6%🟧↓</td><td style="background:#e6f5f2;">78.8%🟩 ↑</td><td style="background:#e6f5f2;">76.6%🟩 ↑</td><td style="background:#fde8d8;">76.2%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">77.0%🟩 ↑</td><td style="background:#e6f5f2;">73.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Paas Hillton</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#e6f5f2;">81.5%🟩 ↑</td><td style="background:#e6f5f2;">80.0%🟩 ↑</td><td style="background:#e6f5f2;">78.2%🟩 ↑</td><td style="background:#e6f5f2;">76.9%🟩 ↑</td><td style="background:#e6f5f2;">76.1%🟩 ↑</td><td style="background:#e6f5f2;">73.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">72.2%🟩 ↑</td><td style="background:#e6f5f2;">67.7%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Beneth Youngman</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10B</td>
      <td style="background:#fde8d8;">81.6%🟧↓</td><td style="background:#e6f5f2;">84.1%🟩 ↑</td><td style="background:#e6f5f2;">82.8%🟩 ↑</td><td style="background:#fde8d8;">81.5%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#fde8d8;">88.6%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Sebor Northwood</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10E</td>
      <td style="background:#e6f5f2;">82.1%🟩 ↑</td><td style="background:#e6f5f2;">80.6%🟩 ↑</td><td style="background:#fde8d8;">80.4%🟧↓</td><td style="background:#fde8d8;">84.9%🟧↓</td><td style="background:#e6f5f2;">91.8%🟩 ↑</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Calic Hillton</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>10</td>
        <td>10A</td>
      <td style="background:#e6f5f2;">82.2%🟩 ↑</td><td style="background:#e6f5f2;">81.0%🟩 ↑</td><td style="background:#e6f5f2;">80.7%🟩 ↑</td><td style="background:#fde8d8;">79.6%🟧↓</td><td style="background:#fde8d8;">81.6%🟧↓</td><td style="background:#fde8d8;">81.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">85.9%🟩 ↑</td><td style="background:#fde8d8;">83.8%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Rowan Eastside</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10C</td>
      <td style="background:#fde8d8;">82.7%🟧↓</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#fde8d8;">87.6%🟧↓</td><td style="background:#fde8d8;">88.6%🟧↓</td><td style="background:#e6f5f2;">89.5%🟩 ↑</td><td style="background:#e6f5f2;">89.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.3%🟩 ↑</td><td style="background:#e6f5f2;">87.7%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Theoar Denburn</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#fde8d8;">83.0%🟧↓</td><td style="background:#fde8d8;">84.0%🟧↓</td><td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#e6f5f2;">88.0%🟩 ↑</td><td style="background:#e6f5f2;">86.7%🟩 ↑</td><td style="background:#e6f5f2;">85.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#fde8d8;">80.9%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Finam Pinedale</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10N</td>
      <td style="background:#fde8d8;">83.1%🟧↓</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#fde8d8;">84.5%🟧↓</td><td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#e6f5f2;">84.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">82.1%🟧↓</td><td style="background:#e6f5f2;">85.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Wileth Quarrybrook</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#e6f5f2;">83.1%🟩 ↑</td><td style="background:#e6f5f2;">81.7%🟩 ↑</td><td style="background:#e6f5f2;">80.9%🟩 ↑</td><td style="background:#fde8d8;">80.6%🟧↓</td><td style="background:#e6f5f2;">82.7%🟩 ↑</td><td style="background:#e6f5f2;">80.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">78.2%🟧↓</td><td style="background:#e6f5f2;">79.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Caler Calridge</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10A</td>
      <td style="background:#fde8d8;">83.1%🟧↓</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">85.3%🟩 ↑</td><td style="background:#e6f5f2;">84.3%🟩 ↑</td><td style="background:#fde8d8;">82.7%🟧↓</td><td style="background:#fde8d8;">83.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#fde8d8;">80.9%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Jaor Youngcroft</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#fde8d8;">83.2%🟧↓</td><td style="background:#fde8d8;">83.5%🟧↓</td><td style="background:#fde8d8;">83.8%🟧↓</td><td style="background:#fde8d8;">87.2%🟧↓</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#fde8d8;">86.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">87.3%🟧↓</td><td style="background:#fde8d8;">88.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxam Greenfall</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10N</td>
      <td style="background:#fde8d8;">83.8%🟧↓</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td style="background:#e6f5f2;">85.2%🟩 ↑</td><td style="background:#fde8d8;">83.7%🟧↓</td><td style="background:#fde8d8;">86.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.4%🟩 ↑</td><td style="background:#fde8d8;">97.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxis Eastburn</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#e6f5f2;">84.1%🟩 ↑</td><td style="background:#fde8d8;">83.6%🟧↓</td><td style="background:#fde8d8;">83.6%🟧↓</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#e6f5f2;">85.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">83.8%🟩 ↑</td><td style="background:#e6f5f2;">82.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kaiai Millton</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10C</td>
      <td style="background:#fde8d8;">84.6%🟧↓</td><td style="background:#e6f5f2;">86.5%🟩 ↑</td><td style="background:#fde8d8;">85.3%🟧↓</td><td style="background:#e6f5f2;">86.1%🟩 ↑</td><td style="background:#fde8d8;">84.7%🟧↓</td><td style="background:#e6f5f2;">85.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">83.3%🟧↓</td><td style="background:#e6f5f2;">83.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Reex Oakmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10A</td>
      <td style="background:#e6f5f2;">85.2%🟩 ↑</td><td style="background:#fde8d8;">84.1%🟧↓</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#fde8d8;">88.6%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Olas Ashmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10B</td>
      <td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#e6f5f2;">89.2%🟩 ↑</td><td style="background:#e6f5f2;">88.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">86.3%🟧↓</td><td style="background:#fde8d8;">87.3%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Corai Northham</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10C</td>
      <td style="background:#fde8d8;">86.7%🟧↓</td><td style="background:#e6f5f2;">87.2%🟩 ↑</td><td style="background:#fde8d8;">86.1%🟧↓</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">87.2%🟧↓</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Elin Ironwood</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>10</td>
        <td>10A</td>
      <td style="background:#fde8d8;">86.8%🟧↓</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Tais Riverdale</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>10</td>
        <td>10A</td>
      <td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td style="background:#e6f5f2;">84.9%🟩 ↑</td><td style="background:#fde8d8;">83.7%🟧↓</td><td style="background:#e6f5f2;">86.4%🟩 ↑</td><td style="background:#e6f5f2;">84.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#e6f5f2;">82.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Micer Brookridge</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10D</td>
      <td style="background:#e6f5f2;">87.5%🟩 ↑</td><td style="background:#fde8d8;">86.5%🟧↓</td><td style="background:#fde8d8;">90.5%🟧↓</td><td style="background:#e6f5f2;">91.7%🟩 ↑</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td style="background:#fde8d8;">89.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#fde8d8;">91.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxas Fairridge</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10D</td>
      <td style="background:#fde8d8;">87.5%🟧↓</td><td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#e6f5f2;">87.1%🟩 ↑</td><td style="background:#fde8d8;">86.1%🟧↓</td><td style="background:#e6f5f2;">86.5%🟩 ↑</td><td style="background:#e6f5f2;">86.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">84.6%🟩 ↑</td><td style="background:#e6f5f2;">82.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Leoin Oakfield</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td style="background:#e6f5f2;">85.2%🟩 ↑</td><td style="background:#fde8d8;">83.7%🟧↓</td><td style="background:#e6f5f2;">84.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">82.1%🟩 ↑</td><td style="background:#e6f5f2;">79.4%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Marum Ironmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10D</td>
      <td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#fde8d8;">92.1%🟧↓</td><td style="background:#fde8d8;">93.1%🟧↓</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Zaai Denbrook</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#fde8d8;">86.7%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.2%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Ashor Fairridge</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10E</td>
      <td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">88.0%🟩 ↑</td><td style="background:#e6f5f2;">87.1%🟩 ↑</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#e6f5f2;">95.9%🟩 ↑</td><td style="background:#e6f5f2;">95.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.8%🟩 ↑</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Danam Oakdale</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#fde8d8;">88.6%🟧↓</td><td style="background:#e6f5f2;">93.5%🟩 ↑</td><td style="background:#e6f5f2;">92.9%🟩 ↑</td><td style="background:#fde8d8;">92.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">93.6%🟩 ↑</td><td style="background:#fde8d8;">92.6%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Benen Youngcroft</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#fde8d8;">89.0%🟧↓</td><td style="background:#e6f5f2;">90.5%🟩 ↑</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">88.5%🟧↓</td><td style="background:#fde8d8;">94.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Maxin Brookmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10B</td>
      <td style="background:#fde8d8;">89.6%🟧↓</td><td style="background:#e6f5f2;">90.3%🟩 ↑</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">92.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Olum Calside</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10H</td>
      <td style="background:#fde8d8;">89.6%🟧↓</td><td style="background:#fde8d8;">90.5%🟧↓</td><td style="background:#e6f5f2;">94.8%🟩 ↑</td><td style="background:#fde8d8;">94.4%🟧↓</td><td style="background:#e6f5f2;">95.8%🟩 ↑</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Alar Lakeworth</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>10</td>
        <td>10S</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#e6f5f2;">87.0%🟩 ↑</td><td style="background:#fde8d8;">85.7%🟧↓</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">87.2%🟩 ↑</td><td style="background:#e6f5f2;">85.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Paic Pinebrook</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10A</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Maxus Stonedale</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>10</td>
        <td>10N</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td><td style="background:#e6f5f2;">93.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Beniel Dencroft</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>10</td>
        <td>10C</td>
      <td style="background:#e6f5f2;">89.9%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#e6f5f2;">88.0%🟩 ↑</td><td style="background:#fde8d8;">87.3%🟧↓</td><td style="background:#e6f5f2;">94.0%🟩 ↑</td><td style="background:#fde8d8;">93.3%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">96.3%🟩 ↑</td><td style="background:#e6f5f2;">95.7%🟩 ↑</td></tr></table>
    <div style="margin-top:6px; font-weight:600;">Year 11</div>
    <table class="att-table pa-drop-table">

      <tr>
        <th class="name-cell">Name</th><th>Flag</th><th>Yr</th><th>Tu</th>
    <th>Cur (15)</th><th>W14</th><th>W13</th><th>W12</th><th>W11</th><th>W10</th><th class="gap-cell">9</th><th>W8</th><th>W7</th></tr>
      <tr>
        <td class="name-cell">Isaus Denshaw</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#e6f5f2;">80.0%🟩 ↑</td><td style="background:#e6f5f2;">78.4%🟩 ↑</td><td style="background:#fde8d8;">76.5%🟧↓</td><td style="background:#fde8d8;">76.6%🟧↓</td><td style="background:#fde8d8;">80.4%🟧↓</td><td style="background:#e6f5f2;">88.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#fde8d8;">85.3%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Isaas Greenhurst</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td></td>
      <td style="background:#e6f5f2;">81.1%🟩 ↑</td><td style="background:#e6f5f2;">76.7%🟩 ↑</td><td style="background:#fde8d8;">73.3%🟧↓</td><td style="background:#eef2ff;">81.0%⬜ →</td><td></td><td></td><td class="gap-cell">9</td><td></td><td></td></tr>
      <tr>
        <td class="name-cell">Jaas Westdale</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#fde8d8;">82.4%🟧↓</td><td style="background:#fde8d8;">82.5%🟧↓</td><td style="background:#e6f5f2;">82.8%🟩 ↑</td><td style="background:#e6f5f2;">81.5%🟩 ↑</td><td style="background:#e6f5f2;">79.6%🟩 ↑</td><td style="background:#e6f5f2;">77.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">74.4%🟩 ↑</td><td style="background:#e6f5f2;">70.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Rowai Riverman</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11D</td>
      <td style="background:#e6f5f2;">82.4%🟩 ↑</td><td style="background:#fde8d8;">81.0%🟧↓</td><td style="background:#fde8d8;">84.5%🟧↓</td><td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#fde8d8;">93.9%🟧↓</td><td style="background:#e6f5f2;">95.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.8%🟩 ↑</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Maxis Kington</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#fde8d8;">83.0%🟧↓</td><td style="background:#e6f5f2;">84.9%🟩 ↑</td><td style="background:#e6f5f2;">82.9%🟩 ↑</td><td style="background:#fde8d8;">82.5%🟧↓</td><td style="background:#fde8d8;">84.0%🟧↓</td><td style="background:#fde8d8;">84.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">85.1%🟧↓</td><td style="background:#e6f5f2;">85.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Joneth Eastworth</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11J</td>
      <td style="background:#e6f5f2;">83.1%🟩 ↑</td><td style="background:#e6f5f2;">82.7%🟩 ↑</td><td style="background:#e6f5f2;">81.2%🟩 ↑</td><td style="background:#fde8d8;">79.8%🟧↓</td><td style="background:#e6f5f2;">83.8%🟩 ↑</td><td style="background:#e6f5f2;">82.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">79.7%🟩 ↑</td><td style="background:#e6f5f2;">76.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Finel Eastdale</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11C</td>
      <td style="background:#e6f5f2;">83.2%🟩 ↑</td><td style="background:#e6f5f2;">81.9%🟩 ↑</td><td style="background:#fde8d8;">81.9%🟧↓</td><td style="background:#e6f5f2;">82.4%🟩 ↑</td><td style="background:#e6f5f2;">80.8%🟩 ↑</td><td style="background:#e6f5f2;">78.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">76.9%🟧↓</td><td style="background:#e6f5f2;">80.9%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Benex Brookbrook</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#e6f5f2;">83.8%🟩 ↑</td><td style="background:#e6f5f2;">82.5%🟩 ↑</td><td style="background:#fde8d8;">80.9%🟧↓</td><td style="background:#fde8d8;">86.9%🟧↓</td><td style="background:#e6f5f2;">87.8%🟩 ↑</td><td style="background:#fde8d8;">86.4%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">87.2%🟩 ↑</td><td style="background:#fde8d8;">85.3%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Elin Northfall</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11H</td>
      <td style="background:#fde8d8;">83.9%🟧↓</td><td style="background:#e6f5f2;">90.6%🟩 ↑</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">89.0%🟧↓</td><td style="background:#fde8d8;">91.9%🟧↓</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#e6f5f2;">94.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Micon Ashbrook</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11N</td>
      <td style="background:#e6f5f2;">84.3%🟩 ↑</td><td style="background:#e6f5f2;">84.0%🟩 ↑</td><td style="background:#fde8d8;">82.6%🟧↓</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">88.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Danin Oakham</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#e6f5f2;">84.4%🟩 ↑</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#fde8d8;">81.9%🟧↓</td><td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">88.5%🟩 ↑</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Rowio Greenhurst</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11S</td>
      <td style="background:#e6f5f2;">84.7%🟩 ↑</td><td style="background:#e6f5f2;">83.5%🟩 ↑</td><td style="background:#e6f5f2;">82.0%🟩 ↑</td><td style="background:#fde8d8;">80.6%🟧↓</td><td style="background:#fde8d8;">80.6%🟧↓</td><td style="background:#fde8d8;">88.0%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#e6f5f2;">87.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Benin Oakham</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11S</td>
      <td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#fde8d8;">84.3%🟧↓</td><td style="background:#e6f5f2;">90.7%🟩 ↑</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">88.5%🟧↓</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Taor Lakemere</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11N</td>
      <td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#fde8d8;">90.4%🟧↓</td><td style="background:#e6f5f2;">91.3%🟩 ↑</td><td style="background:#fde8d8;">90.7%🟧↓</td><td style="background:#e6f5f2;">97.9%🟩 ↑</td><td style="background:#e6f5f2;">97.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.4%🟩 ↑</td><td style="background:#e6f5f2;">97.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Ashis Calhurst</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11D</td>
      <td style="background:#e6f5f2;">85.5%🟩 ↑</td><td style="background:#e6f5f2;">84.4%🟩 ↑</td><td style="background:#fde8d8;">83.1%🟧↓</td><td style="background:#e6f5f2;">85.5%🟩 ↑</td><td style="background:#e6f5f2;">84.0%🟩 ↑</td><td style="background:#fde8d8;">82.2%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">90.0%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Finio Ironford</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#e6f5f2;">86.0%🟩 ↑</td><td style="background:#e6f5f2;">84.9%🟩 ↑</td><td style="background:#fde8d8;">83.6%🟧↓</td><td style="background:#fde8d8;">86.1%🟧↓</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#fde8d8;">87.5%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.3%🟧↓</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Olan Calmore</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11E</td>
      <td style="background:#fde8d8;">86.0%🟧↓</td><td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#fde8d8;">86.8%🟧↓</td><td style="background:#e6f5f2;">93.4%🟩 ↑</td><td style="background:#e6f5f2;">92.8%🟩 ↑</td><td style="background:#e6f5f2;">92.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">90.9%🟩 ↑</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Elium Pineley</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#fde8d8;">86.1%🟧↓</td><td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#e6f5f2;">90.5%🟩 ↑</td><td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">92.9%🟩 ↑</td><td style="background:#e6f5f2;">92.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">91.1%🟧↓</td><td style="background:#fde8d8;">91.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Marer Northton</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11N</td>
      <td style="background:#e6f5f2;">86.7%🟩 ↑</td><td style="background:#e6f5f2;">85.6%🟩 ↑</td><td style="background:#fde8d8;">85.2%🟧↓</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">87.6%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">84.4%🟩 ↑</td><td style="background:#e6f5f2;">83.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kaian Lakeman</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11H</td>
      <td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#fde8d8;">84.3%🟧↓</td><td style="background:#fde8d8;">85.0%🟧↓</td><td style="background:#e6f5f2;">93.8%🟩 ↑</td><td style="background:#e6f5f2;">93.1%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.2%🟩 ↑</td><td style="background:#e6f5f2;">91.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Leoen Millfield</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11J</td>
      <td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#e6f5f2;">85.7%🟩 ↑</td><td style="background:#e6f5f2;">84.5%🟩 ↑</td><td style="background:#e6f5f2;">83.3%🟩 ↑</td><td style="background:#e6f5f2;">81.6%🟩 ↑</td><td style="background:#e6f5f2;">79.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">76.9%🟩 ↑</td><td style="background:#e6f5f2;">73.5%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Taum Ironfall</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11J</td>
      <td style="background:#e6f5f2;">86.9%🟩 ↑</td><td style="background:#e6f5f2;">85.8%🟩 ↑</td><td style="background:#e6f5f2;">84.5%🟩 ↑</td><td style="background:#fde8d8;">83.2%🟧↓</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">97.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.5%🟩 ↑</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Reio Pinewood</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#e6f5f2;">87.4%🟩 ↑</td><td style="background:#fde8d8;">86.4%🟧↓</td><td style="background:#e6f5f2;">87.6%🟩 ↑</td><td style="background:#fde8d8;">86.7%🟧↓</td><td style="background:#e6f5f2;">89.5%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">86.7%🟧↓</td><td style="background:#e6f5f2;">93.8%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Samon Quarrydale</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11C</td>
      <td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#e6f5f2;">87.2%🟩 ↑</td><td style="background:#e6f5f2;">86.1%🟩 ↑</td><td style="background:#fde8d8;">85.0%🟧↓</td><td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.4%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#fde8d8;">85.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Elex Calmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11D</td>
      <td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#fde8d8;">87.2%🟧↓</td><td style="background:#e6f5f2;">91.2%🟩 ↑</td><td style="background:#fde8d8;">90.6%🟧↓</td><td style="background:#fde8d8;">91.7%🟧↓</td><td style="background:#e6f5f2;">97.6%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.3%🟩 ↑</td><td style="background:#e6f5f2;">97.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Elum Brookwell</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11J</td>
      <td style="background:#fde8d8;">88.2%🟧↓</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#fde8d8;">87.8%🟧↓</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#e6f5f2;">94.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Leois Quarryford</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11H</td>
      <td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#fde8d8;">87.3%🟧↓</td><td style="background:#e6f5f2;">93.1%🟩 ↑</td><td style="background:#fde8d8;">92.6%🟧↓</td><td style="background:#e6f5f2;">98.0%🟩 ↑</td><td style="background:#fde8d8;">97.7%🟧↓</td><td class="gap-cell">9</td><td style="background:#eef2ff;">100.0%⬜ →</td><td style="background:#eef2ff;">100.0%⬜ →</td></tr>
      <tr>
        <td class="name-cell">Jaio Ironford</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11H</td>
      <td style="background:#e6f5f2;">88.3%🟩 ↑</td><td style="background:#e6f5f2;">87.4%🟩 ↑</td><td style="background:#fde8d8;">86.3%🟧↓</td><td style="background:#fde8d8;">87.2%🟧↓</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td><td style="background:#e6f5f2;">93.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.4%🟩 ↑</td><td style="background:#e6f5f2;">91.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kaian Oakmore</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11S</td>
      <td style="background:#e6f5f2;">88.3%🟩 ↑</td><td style="background:#fde8d8;">87.4%🟧↓</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#fde8d8;">90.8%🟧↓</td><td style="background:#e6f5f2;">91.9%🟩 ↑</td><td style="background:#e6f5f2;">91.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.9%🟩 ↑</td><td style="background:#fde8d8;">88.4%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Theoeth Brookcroft</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11C</td>
      <td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#e6f5f2;">88.1%🟩 ↑</td><td style="background:#e6f5f2;">87.1%🟩 ↑</td><td style="background:#e6f5f2;">86.1%🟩 ↑</td><td style="background:#e6f5f2;">84.7%🟩 ↑</td><td style="background:#fde8d8;">82.6%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">86.8%🟩 ↑</td><td style="background:#e6f5f2;">85.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Zaas Greenburn</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11C</td>
      <td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td><td style="background:#e6f5f2;">87.2%🟩 ↑</td><td style="background:#e6f5f2;">86.2%🟩 ↑</td><td style="background:#e6f5f2;">84.8%🟩 ↑</td><td style="background:#fde8d8;">82.8%🟧↓</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Kaiai Riverman</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11Z</td>
      <td style="background:#fde8d8;">89.1%🟧↓</td><td style="background:#e6f5f2;">89.8%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#fde8d8;">89.9%🟧↓</td><td style="background:#fde8d8;">91.9%🟧↓</td><td style="background:#e6f5f2;">93.3%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.4%🟩 ↑</td><td style="background:#e6f5f2;">91.3%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Mican Millbrook</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11N</td>
      <td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">88.8%🟩 ↑</td><td style="background:#e6f5f2;">87.8%🟩 ↑</td><td style="background:#fde8d8;">86.9%🟧↓</td><td style="background:#e6f5f2;">93.8%🟩 ↑</td><td style="background:#e6f5f2;">93.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">92.1%🟩 ↑</td><td style="background:#e6f5f2;">91.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Elias Oakworth</td>
        <td><span class="indicator-dot" style="background:#9b59b6;"></span></td>
        <td>11</td>
        <td>11N</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#fde8d8;">91.8%🟧↓</td><td style="background:#e6f5f2;">97.7%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.4%🟩 ↑</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Maran Calmore</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11J</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">89.0%🟩 ↑</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#e6f5f2;">97.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">97.5%🟩 ↑</td><td style="background:#e6f5f2;">97.1%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Micen Eastside</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11D</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#e6f5f2;">87.9%🟩 ↑</td><td style="background:#fde8d8;">87.0%🟧↓</td><td style="background:#e6f5f2;">91.8%🟩 ↑</td><td style="background:#e6f5f2;">90.8%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">89.6%🟩 ↑</td><td style="background:#e6f5f2;">88.2%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Ashex Pinewood</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11D</td>
      <td style="background:#fde8d8;">89.7%🟧↓</td><td style="background:#e6f5f2;">95.2%🟩 ↑</td><td style="background:#e6f5f2;">94.8%🟩 ↑</td><td style="background:#e6f5f2;">94.4%🟩 ↑</td><td style="background:#e6f5f2;">93.9%🟩 ↑</td><td style="background:#e6f5f2;">93.0%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#fde8d8;">92.1%🟧↓</td><td style="background:#e6f5f2;">97.0%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Calas Westham</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#e6f5f2;">88.9%🟩 ↑</td><td style="background:#fde8d8;">87.9%🟧↓</td><td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#fde8d8;">88.8%🟧↓</td><td style="background:#e6f5f2;">94.2%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">93.4%🟩 ↑</td><td style="background:#e6f5f2;">92.6%🟩 ↑</td></tr>
      <tr>
        <td class="name-cell">Zaer Youngbrook</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11E</td>
      <td style="background:#e6f5f2;">89.7%🟩 ↑</td><td style="background:#fde8d8;">88.9%🟧↓</td><td style="background:#e6f5f2;">94.8%🟩 ↑</td><td style="background:#fde8d8;">94.4%🟧↓</td><td style="background:#e6f5f2;">95.9%🟩 ↑</td><td style="background:#e6f5f2;">95.5%🟩 ↑</td><td class="gap-cell">9</td><td style="background:#e6f5f2;">94.9%🟩 ↑</td><td style="background:#fde8d8;">94.1%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Theoiel Denridge</td>
        <td><span class="indicator-dot" style="background:#1abc9c;"></span></td>
        <td>11</td>
        <td>11A</td>
      <td style="background:#fde8d8;">89.8%🟧↓</td><td style="background:#e6f5f2;">90.6%🟩 ↑</td><td style="background:#e6f5f2;">89.4%🟩 ↑</td><td style="background:#e6f5f2;">88.6%🟩 ↑</td><td style="background:#fde8d8;">87.4%🟧↓</td><td style="background:#fde8d8;">88.2%🟧↓</td><td class="gap-cell">9</td><td style="background:#fde8d8;">89.3%🟧↓</td><td style="background:#fde8d8;">90.8%🟧↓</td></tr>
      <tr>
        <td class="name-cell">Isaiel Eastridge</td>
        <td><span class="indicator-dot" style="background:#bdc3c7;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#e6f5f2;">89.9%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.1%🟧↓</td><td style="background:#fde8d8;">90.9%🟧↓</td><td style="background:#eef2ff;">100.0%⬜ →</td><td style="background:#eef2ff;">100.0%⬜ →</td><td class="gap-cell">9</td><td style="background:#eef2ff;">100.0%⬜ →</td><td style="background:#eef2ff;">100.0%⬜ →</td></tr>
      <tr>
        <td class="name-cell">Isaor Stoneham</td>
        <td><span class="indicator-dot" style="background:#e67e22;"></span></td>
        <td>11</td>
        <td>11B</td>
      <td style="background:#e6f5f2;">89.9%🟩 ↑</td><td style="background:#e6f5f2;">89.1%🟩 ↑</td><td style="background:#fde8d8;">88.0%🟧↓</td><td style="background:#e6f5f2;">93.0%🟩 ↑</td><td style="background:#e6f5f2;">92.3%🟩 ↑</td><td style="background:#e6f5f2;">91.4%🟩 ↑</td><td class="gap-cell">9</td><td></td><td style="background:#e6f5f2;">90.1%🟩 ↑</td></tr></table></div></div>

    
<style>
  .hm-container {
    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;
  }

  .hm-top {
    width:100%;
    display:block;
  }

  .hm-bottom {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:20px;
  }

  .hm-bottom .hm-card {
    flex:1 1 50%;
    max-width:50%;
  }

  .hm-card {
    background:#e3eee8;
    border:1px solid #374151;
    border-left:6px solid #1e40af;
    border-radius:12px;
    padding:12px;
    box-sizing:border-box;
    box-shadow:0 1px 3px rgba(0,0,0,0.05);
  }

  .hm-title {
    font-weight:bold;
    background:#0f766e20;
    color:#1e40af;
    padding:6px 8px;
    border-radius:6px;
    margin-bottom:8px;
    border-left:4px solid #0f766e;
    font-size:14px;
  }

  .hm-table-wrap {
    overflow-x:auto;
  }

  .hm-table {
    width:100%;
    border-collapse:collapse;
    table-layout:fixed;
    font-size:12px;
  }

  .hm-table th {
    background:#1e40af;
    color:white;
    padding:4px;
    font-weight:600;
  }

  .hm-table td {
    padding:4px;
    text-align:center;
    font-weight:500;
    color:#1e40af;
  }

  .hm-table .rowhead {
    font-weight:600;
    color:#1e40af;
    white-space:nowrap;
  }
</style>


      </div>
    </div>
  
  </div>
</div>

  </div>
</body>
</html>
      
      </div>
    </body>
  </html>
  `;


function Header({
  title = 'Academic Automations',
  tagline = 'Automated Reports for UK Secondary Schools',
  menuLinks = [
    { label: 'Email', href: '#how' },
    { label: 'How it works', href: '#blog' },
    { label: 'FAQ', href: '#pricing' },
  ],
  ctaLabel = "let's talk",
  ctaHref = 'https://cal.com/academicautomations/discovery',
  onBlogClick,
}: {
  title?: string;
  tagline?: string;
  menuLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  onBlogClick?: () => void;
}) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#blog' && onBlogClick) {
      e.preventDefault();
      onBlogClick();
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-24 h-24 flex items-center justify-center">
            <img 
              src="/AcademicAutomations.com_Logo6.svg" 
              alt="Academic Automations Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <div>
            {/* brand uses Poppins */}
            <h1 className="text-xl md:text-2xl font-extrabold leading-tight brand">{title}</h1>
            <p className="text-xs md:text-sm text-gray-500">{tagline}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-700 transition text-base font-medium"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          {/* use the unified TalkCTA style here (small variant) */}
          <TalkCTA label={ctaLabel} href={ctaHref} size="md" className="talk-cta" />
        </nav>
      </div>
    </header>
  );
}

/* Reusable Talk CTA — improved animation, color invert on hover, clipped inside pill */
function TalkCTA({
  label = "let's talk",
  href = 'mailto:hello@schoolsautomate.com',
  size = 'md',
  className = '',
}: {
  label?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  // knob sizes in pixels - make knob slightly larger than pill height for proper overflow
  const sizeMap = {
    sm: { knobPx: 22, text: 'text-sm', padX: 16, padY: 6, pillHeight: 18 },
    md: { knobPx: 26, text: 'text-sm', padX: 18, padY: 8, pillHeight: 22 },
    lg: { knobPx: 32, text: 'text-base', padX: 20, padY: 12, pillHeight: 28 },
  } as const;

  const { knobPx, text, padX, padY, pillHeight } = sizeMap[size];

  const knobVariants = {
    rest: { left: 6 },
    hover: (k: number) => ({ left: `calc(100% - ${k + 8}px)` }),
  } as const;

  const textVariants = {
    rest: { x: 0 },
    hover: (k: number) => ({ x: -Math.round(k * 1.4) }),
  } as const;

  return (
    <motion.a
      href={href}
      className={`inline-flex items-center whitespace-nowrap rounded-full shadow-sm bg-gradient-to-r from-indigo-600 to-blue-500 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 relative overflow-hidden ${className}`}
      aria-label={label}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ 
        paddingLeft: padX + knobPx + 4, 
        paddingRight: padX,
        paddingTop: padY,
        paddingBottom: padY,
        height: pillHeight + (padY * 2)
      }}
    >
      <motion.span
        className={`inline-flex items-center justify-center rounded-full flex-shrink-0 bg-white transition-colors duration-200 knob`}
        style={{ width: knobPx, height: knobPx, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        variants={knobVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <ArrowRight
          style={{ width: Math.round(knobPx * 0.6), height: Math.round(knobPx * 0.6) }}
          className="text-indigo-700 transition-colors duration-200"
        />
      </motion.span>

      <motion.span
        className={`font-medium lowercase tracking-tight ${text} select-none transition-transform duration-200`}
        variants={textVariants}
        custom={knobPx}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {label}
      </motion.span>

      <style>{`
        a[aria-label] :global(.ml-4) { }
      `}</style>
    </motion.a>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does this cost?",
      answer: "Prices vary by scope, starting at £5,000. We guarantee ROI by prioritising savings and efficiency."
    },
    {
      question: "How long does it take?",
      answer: "Once agreements are signed, the full bespoke build and installation are delivered in under 4 weeks."
    },
    {
      question: "Will there be support when things go wrong?",
      answer: "Yes. With an annual agreement, we provide 24-hour support for urgent fixes and future-proofing, plus 72-hour responses for email requests. This ensures systems never lose functionality or purpose."
    },
    {
      question: "Is there any risk?",
      answer: "We work with full transparency. All deliverables are clearly scoped and agreed upon before work begins."
    },
    {
      question: "How do we start?",
      answer: "Book a free discovery call. In the first call, we consult with your staff to identify the highest-value admin tasks. After review, we provide a targeted plan and focused solution."
    },
    {
      question: "How do we work?",
      answer: "We work one-to-one with your team through a 5 step framework: consult, review, prototype, implement, and formal handover - with ongoing support available."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-gray-900 pr-4">{faq.question}</h4>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-6 w-6 text-blue-600 flex-shrink-0" />
              </motion.div>
            </div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 mx-4 p-6 rounded-xl mt-2 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* --- Big footer section --- */
function BigBlackFooter() {
  return (
    <section id="big-footer" className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 py-24 md:py-36 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Logo (not inverted on light background) */}
          <img
            src="/AcademicAutomations.com_Logo6.svg"
            alt="Academic Automations"
            className="max-w-[560px] w-[clamp(180px,44vw,560px)] h-auto"
            style={{ display: 'block' }}
          />

          <div className="max-w-2xl">
            <div className="text-sm text-gray-600 mb-2 uppercase font-semibold">Academic Automations</div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Let's Automate Your School</h3>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Start with a free, thirty minute growth mapping call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* primary animated CTA */}
              <TalkCTA label="let's talk" href="https://cal.com/academicautomations/discovery" size="lg" className="talk-cta" />

              {/* secondary plain CTA for visual rhythm */}
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
              >
                Email
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-600 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:gap-6">
              <span className="text-gray-600">Privacy Policy</span>
              <span className="text-gray-600">Cookie preferences</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- New: Generic preview modal that sits on top of the existing page --- */
function PreviewModal({
  visible,
  title,
  onClose,
  children,
}: {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'slt-report' | 'attendance-report' | 'merits-report' | 'behaviour-report'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = total > 0 ? Math.min(100, (current / total) * 100) : 0;
      setScrollProgress(pct);
      setHeroParallax(Math.min(120, current * 0.12)); // gentle parallax (if you want to use it)
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (currentPage === 'blog') {
    return <BlogPage onBack={() => setCurrentPage('home')} />;
  }

  const reveal = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, ease: 'easeOut' } }),
  };

  const cards = [
    {
      icon: <Users className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Automatic Alerts',
      sub: 'triggered by Teams + Forms submissions',
      value: '£4,000–£6,000/year',
      small: '2–4 hrs/week',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Staff Absence + Cover',
      sub: 'auto-alerts with suggested cover options',
      value: '£6,000–£10,000/year',
      small: '2 hrs/week',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'AI Weekly Reports',
      sub: 'SLT-ready behaviour/attendance data',
      value: '£7,500–£12,000/year',
      small: '3 hrs/week',
    },
    {
      icon: <ArrowRight className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Parent Reminders',
      sub: 'Auto-send/draft detentions & event notifications',
      value: '£2,500–£4,000/year',
      small: '1 hr/week',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Behaviour Escalation',
      sub: 'threshold triggers & weekly summaries',
      value: '£5,000–£8,000/year',
      small: '2 hrs/week',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600 mr-2" />,
      title: 'Onboarding / Offboarding',
      sub: 'Accounts, access & folders',
      value: '£3,500–£6,000/year',
      small: '1 hr/person',
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-200 selection:text-indigo-900 text-gray-900">
      {/* load fonts + animated gradient CSS */}
      <style>{` 
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Jost:wght@300;400;500;600;700;800&display=swap');

        :root {
          --system-font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        body, body * {
          font-family: 'Jost', var(--system-font);
        }

        .brand, .hero-title, .hero-subtitle {
          font-family: 'Poppins', var(--system-font) !important;
        }

        .gradient-realm {
          background-image: linear-gradient(90deg, #4f46e5 0%, #7c3aed 25%, #6366f1 50%, #7f5af0 75%, #5b21b6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .title-wrap { position: relative; display: inline-block; line-height: 1; }

        .talk-cta { transition: background-color 180ms, color 180ms; }
        .talk-cta .knob { transition: background-color 180ms, color 180ms; }
        .talk-cta:hover { background: white; color: #3730a3; }
        .talk-cta:hover .knob { background: #3730a3; }
        .talk-cta:hover .knob svg { color: white; }
      `}</style>

      {/* reading progress bar */}
      <div className="fixed left-0 right-0 top-0 h-1 z-50 bg-transparent">
        <div
          aria-hidden
          className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-sm"
          style={{ width: `${scrollProgress}%`, transition: 'width 120ms linear' }}
        />
      </div>

      <Header onBlogClick={() => setCurrentPage('blog')} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="title-wrap">
                <motion.span
                  className="gradient-realm hero-title"
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 6 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  AI Automation
                </motion.span>
              </div>

              <motion.span
                className="text-4xl md:text-5xl mt-3 md:mt-2 text-gray-900 hero-subtitle"
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                for UK schools
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 font-medium max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Empowering your school to leverage the use of AI automation, bridging the digital divide by connecting <strong>old</strong> systems to <strong>new</strong> solutions.
            </motion.p>
          </div>
        </div>

        <div className="absolute left-6 bottom-6 z-0">
          <TalkCTA label="let's talk" href="https://cal.com/academicautomations/discovery" size="lg" className="talk-cta" />
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-24 bg-white" id="how">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <span className="text-2xl font-bold text-orange-600">!</span>
              </div>
              <h3 className="text-5xl font-bold text-gray-900">How can we help?</h3>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              Our goal is to reduce overhead costs by deploying systems that automate monotonous tasks, allowing your staff to delegate their time towards more important matters.
              <br />
              <strong className="text-blue-700">Teaching and genuine human interaction.</strong>
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 w-full mx-auto px-4">
            <motion.div
              className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Current Admin burdens</h4>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Manual absence updates</div>
                    <div className="text-sm mt-1 whitespace-nowrap">staff spend hours repeatedly entering absence information.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Behaviour logging fatigue</div>
                    <div className="text-sm mt-1">repetitive data entry for every incident slows staff down and adds frustration.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Repetitive Reports</div>
                    <div className="text-sm mt-1">preparing weekly reports for SLT is time-consuming and repetitive.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Disconnected systems</div>
                    <div className="text-sm mt-1 whitespace-nowrap">Fragmented systems make tasks harder than necessary.</div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Benefits of Smarter Systems</h4>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Save time and money</div>
                    <div className="text-sm mt-1">hours freed each week, redirecting staff effort to teaching and student support.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">User friendly formats</div>
                    <div className="text-sm mt-1">drag-and-drop uploads and quick, easy-to-complete forms.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Powerful insights</div>
                    <div className="text-sm mt-1">spot specific trends across weeks, terms, and years to guide smarter decisions.</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Proactive intervention</div>
                    <div className="text-sm mt-1">early alerts flag issues before they escalate into costly problems.</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Highlights - toned down, context-first variant */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-slate-600 mr-3" />
              <h3 className="text-3xl font-semibold text-gray-900">Automated Reports</h3>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            <motion.button
              onClick={() => setCurrentPage('slt-report')}
              className="group bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-gray-900">SLT Performance</h4>
                <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-gray-600">Academic Automations – SLT Performance Report</p>
              <p className="text-xs text-gray-500 mt-4">Click to preview</p>
            </motion.button>

            <motion.button
              onClick={() => setCurrentPage('attendance-report')}
              className="group bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-gray-900">Attendance KPI</h4>
                <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-gray-600">Academic Automations – Attendance KPI Report</p>
              <p className="text-xs text-gray-500 mt-4">Click to preview</p>
            </motion.button>

            <motion.button
              onClick={() => setCurrentPage('merits-report')}
              className="group bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-gray-900">Merits</h4>
                <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-gray-600">Academic Automations – Merits Report</p>
              <p className="text-xs text-gray-500 mt-4">Click to preview</p>
            </motion.button>

            <motion.button
              onClick={() => setCurrentPage('behaviour-report')}
              className="group bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg text-gray-900">Behaviour</h4>
                <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-gray-600">Academic Automations – Behaviour Report</p>
              <p className="text-xs text-gray-500 mt-4">Click to preview</p>
            </motion.button>
          </div>

          <motion.div
            className="mx-auto max-w-6xl p-10 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-gray-100 shadow"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <BarChart3 className="h-10 w-10 text-slate-500" />
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-900">Estimated school savings</h4>
                <p className="text-base text-gray-600 mt-2 max-w-3xl">
                  Typical savings for an average secondary school based on number of automations deployed.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Tier 1: 1-2 Automations */}
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Automations Deployed</div>
                        <div className="font-semibold text-2xl text-slate-700">1–2</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Annual Savings</div>
                        <div className="font-semibold text-2xl text-emerald-600">£10k–£25k</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Staff Time Freed</div>
                        <div className="font-semibold text-xl text-slate-700">~50–200 hrs</div>
                        <div className="text-sm text-gray-500">(1–5 weeks)</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tier 2: 3-5 Automations */}
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Automations Deployed</div>
                        <div className="font-semibold text-2xl text-slate-700">3–5</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Annual Savings</div>
                        <div className="font-semibold text-2xl text-emerald-600">£40k–£90k</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Staff Time Freed</div>
                        <div className="font-semibold text-xl text-slate-700">~150–600 hrs</div>
                        <div className="text-sm text-gray-500">(4–15 weeks)</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tier 3: 8-10+ Automations */}
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Automations Deployed</div>
                        <div className="font-semibold text-2xl text-slate-700">8–10+</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Annual Savings</div>
                        <div className="font-semibold text-2xl text-emerald-600">£90k–£165k</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase mb-2 font-medium">Staff Time Freed</div>
                        <div className="font-semibold text-xl text-slate-700">~400–1,200 hrs</div>
                        <div className="text-sm text-gray-500">(10–30 weeks)</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  Figures are estimates — results vary by school size, processes automated and data quality.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="pricing" className="bg-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h3>
            </div>
          </motion.div>

          <FAQSection />

          <div className="absolute bottom-24 right-6 max-w-7xl mx-auto">
            <motion.button
              onClick={() => setCurrentPage('blog')}
              className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-xl shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-medium">learn more about how it works</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Big CTA Section */}
      <BigBlackFooter />

      {/* CTA Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <img 
              src="/AcademicAutomations.com_Logo6.svg" 
              alt="Academic Automations Logo" 
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-gray-300">© 2025 Academic Automations. All rights reserved. Built with care.</p>
          </div>
        </div>
      </footer>

      {/* MODALS: SLT + Attendance — overlay on top of the existing page */}
      <PreviewModal
        visible={currentPage === 'slt-report'}
        title="Academic Automations – SLT Performance Report"
        onClose={() => setCurrentPage('home')}
      >
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Automations – SLT Performance Report
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            
          </p>
          <div className="bg-white rounded-xl p-8 border border-gray-200 min-h-[400px] flex items-center justify-center">
            <p className="text-gray-400 text-center">SLT Report content will render here</p>
          </div>
        </div>
      </PreviewModal>

      <PreviewModal
        visible={currentPage === 'attendance-report'}
        title="Academic Automations – Attendance KPI Report"
        onClose={() => setCurrentPage('home')}
      >
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Automations – Attendance KPI Report
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">

          </p>

          <iframe
            title="Academic Automations – Attendance KPI Report"
            src="/Academic_Automation_Attendance_Report_SINGLEFILE.html"
            srcDoc={attendanceReportHTML && attendanceReportHTML.trim().length > 0 ? attendanceReportHTML : undefined}
            className="w-full rounded-xl border border-gray-200 bg-white"
            style={{ minHeight: '85vh' }}
          />
        </div>
      </PreviewModal>

      <PreviewModal
        visible={currentPage === 'merits-report'}
        title="Academic Automations – Merits Report"
        onClose={() => setCurrentPage('home')}
      >
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Automations – Merits Report
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Report preview will be populated with your custom HTML.
          </p>
          <div className="bg-white rounded-xl p-8 border border-gray-200 min-h-[400px] flex items-center justify-center">
            <p className="text-gray-400 text-center">Merits Report content will render here</p>
          </div>
        </div>
      </PreviewModal>

      <PreviewModal
        visible={currentPage === 'behaviour-report'}
        title="Academic Automations – Behaviour Report"
        onClose={() => setCurrentPage('home')}
      >
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Automations – Behaviour Report
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Report preview will be populated with your custom HTML.
          </p>
          <div className="bg-white rounded-xl p-8 border border-gray-200 min-h-[400px] flex items-center justify-center">
            <p className="text-gray-400 text-center">Behaviour Report content will render here</p>
          </div>
        </div>
      </PreviewModal>
    </div>
  );
}
