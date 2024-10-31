import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { HeaderTextDefault } from "../../components/HeaderTextDefault";
import { LogoToriiiWhite } from "../../components/LogoToriiiWhite";
import { LogoAceWhite1 } from "../../icons/LogoAceWhite1";
import { LogoAceWhite3 } from "../../icons/LogoAceWhite3";
import { LogoAceWhite4 } from "../../icons/LogoAceWhite4";
import { LogoAceWhite5 } from "../../icons/LogoAceWhite5";
import { LogoAceWhite7 } from "../../icons/LogoAceWhite7";
import { LogoAceWhite8 } from "../../icons/LogoAceWhite8";
import { LogoBinanceWhite1 } from "../../icons/LogoBinanceWhite1";
import { LogoBinanceWhite2 } from "../../icons/LogoBinanceWhite2";
import { LogoBinanceWhite3 } from "../../icons/LogoBinanceWhite3";
import { LogoBinanceWhite4 } from "../../icons/LogoBinanceWhite4";
import { LogoBinanceWhite7 } from "../../icons/LogoBinanceWhite7";
import { LogoBinanceWhite8 } from "../../icons/LogoBinanceWhite8";
import { LogoBitmexWhite3 } from "../../icons/LogoBitmexWhite3";
import { LogoBitmexWhite4 } from "../../icons/LogoBitmexWhite4";
import { LogoBitmexWhite5 } from "../../icons/LogoBitmexWhite5";
import { LogoBitmexWhite6 } from "../../icons/LogoBitmexWhite6";
import { LogoBitmexWhite7 } from "../../icons/LogoBitmexWhite7";
import { LogoBitmexWhite8 } from "../../icons/LogoBitmexWhite8";
import { LogoBitoproWhite1 } from "../../icons/LogoBitoproWhite1";
import { LogoBitoproWhite2 } from "../../icons/LogoBitoproWhite2";
import { LogoBitoproWhite6 } from "../../icons/LogoBitoproWhite6";
import { LogoBitoproWhite7 } from "../../icons/LogoBitoproWhite7";
import { LogoBitoproWhite8 } from "../../icons/LogoBitoproWhite8";
import { LogoGateioWhite1 } from "../../icons/LogoGateioWhite1";
import { LogoGateioWhite2 } from "../../icons/LogoGateioWhite2";
import { LogoGateioWhite3 } from "../../icons/LogoGateioWhite3";
import { LogoGateioWhite4 } from "../../icons/LogoGateioWhite4";
import { LogoGateioWhite5 } from "../../icons/LogoGateioWhite5";
import { LogoGateioWhite6 } from "../../icons/LogoGateioWhite6";
import { LogoGateioWhite7 } from "../../icons/LogoGateioWhite7";
import { LogoGateioWhite8 } from "../../icons/LogoGateioWhite8";
import { LogoToriiiWhite34 } from "../../icons/LogoToriiiWhite34";
import { LogoToriiiWhite41 } from "../../icons/LogoToriiiWhite41";
import { LogoToriiiWhite61 } from "../../icons/LogoToriiiWhite61";
import { LogoToriiiWhite65 } from "../../icons/LogoToriiiWhite65";
import { LogoToriiiWhite69 } from "../../icons/LogoToriiiWhite69";
import { LogoToriiiWhite315 } from "../../icons/LogoToriiiWhite315";
import { LogoToriiiWhite317 } from "../../icons/LogoToriiiWhite317";
import { LogoToriiiWhite318 } from "../../icons/LogoToriiiWhite318";
import { LogoToriiiWhite319 } from "../../icons/LogoToriiiWhite319";
import { LogoToriiiWhite611 } from "../../icons/LogoToriiiWhite611";
import { LogoWooxWhite2 } from "../../icons/LogoWooxWhite2";
import { LogoWooxWhite3 } from "../../icons/LogoWooxWhite3";
import "./style.css";

export const Element = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element"
      style={{
        gap:
          (screenWidth >= 375 && screenWidth < 414) ||
          (screenWidth >= 414 && screenWidth < 500) ||
          (screenWidth >= 500 && screenWidth < 768) ||
          screenWidth < 375
            ? "24px"
            : (screenWidth >= 1366 && screenWidth < 1920) ||
                screenWidth >= 1920 ||
                (screenWidth >= 768 && screenWidth < 992) ||
                (screenWidth >= 992 && screenWidth < 1366)
              ? "48px"
              : undefined,
        minWidth:
          screenWidth < 375
            ? "320px"
            : screenWidth >= 375 && screenWidth < 414
              ? "375px"
              : screenWidth >= 414 && screenWidth < 500
                ? "414px"
                : screenWidth >= 500 && screenWidth < 768
                  ? "500px"
                  : screenWidth >= 768 && screenWidth < 992
                    ? "768px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "992px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "1366px"
                        : screenWidth >= 1920
                          ? "1920px"
                          : undefined,
      }}
    >
      <header
        className="header"
        style={{
          padding:
            (screenWidth >= 375 && screenWidth < 414) ||
            (screenWidth >= 414 && screenWidth < 500) ||
            (screenWidth >= 500 && screenWidth < 768) ||
            (screenWidth >= 768 && screenWidth < 992) ||
            screenWidth < 375
              ? "24px"
              : screenWidth >= 992 && screenWidth < 1366
                ? "24px 36px"
                : (screenWidth >= 1366 && screenWidth < 1920) ||
                    screenWidth >= 1920
                  ? "24px 48px"
                  : undefined,
        }}
      >
        <div
          className="logo"
          style={{
            backgroundImage:
              screenWidth >= 768 && screenWidth < 992
                ? "url(https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-4-5.svg)"
                : screenWidth >= 992 && screenWidth < 1366
                  ? "url(https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-4-6.svg)"
                  : screenWidth >= 1366 && screenWidth < 1920
                    ? "url(https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-4-7.svg)"
                    : screenWidth >= 1920
                      ? "url(https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-4-8.svg)"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "url(https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-4-2.svg)"
                        : (screenWidth >= 414 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 768)
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-4-4.svg)"
                          : undefined,
            backgroundSize:
              (screenWidth >= 1366 && screenWidth < 1920) ||
              screenWidth >= 1920 ||
              (screenWidth >= 375 && screenWidth < 414) ||
              (screenWidth >= 414 && screenWidth < 500) ||
              (screenWidth >= 500 && screenWidth < 768) ||
              (screenWidth >= 768 && screenWidth < 992) ||
              (screenWidth >= 992 && screenWidth < 1366)
                ? "100% 100%"
                : undefined,
            height:
              screenWidth >= 768 && screenWidth < 992
                ? "40.04px"
                : screenWidth >= 992 && screenWidth < 1366
                  ? "45.45px"
                  : (screenWidth >= 1366 && screenWidth < 1920) ||
                      screenWidth >= 1920
                    ? "48.97px"
                    : screenWidth < 375
                      ? "28px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "30.69px"
                        : (screenWidth >= 414 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 768)
                          ? "33.31px"
                          : undefined,
            width:
              screenWidth >= 768 && screenWidth < 992
                ? "192.95px"
                : screenWidth >= 992 && screenWidth < 1366
                  ? "219.05px"
                  : (screenWidth >= 1366 && screenWidth < 1920) ||
                      screenWidth >= 1920
                    ? "236px"
                    : screenWidth < 375
                      ? "134.93px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "147.9px"
                        : (screenWidth >= 414 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 768)
                          ? "160.52px"
                          : undefined,
          }}
        >
          {screenWidth < 375 && (
            <LogoToriiiWhite41 className="logo-toriii-white-4-1" />
          )}
        </div>

        {((screenWidth >= 375 && screenWidth < 414) ||
          (screenWidth >= 414 && screenWidth < 500) ||
          (screenWidth >= 500 && screenWidth < 768) ||
          screenWidth < 375) && (
          <img
            className="list"
            style={{
              height:
                screenWidth < 375
                  ? "28px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "30px"
                    : (screenWidth >= 414 && screenWidth < 500) ||
                        (screenWidth >= 500 && screenWidth < 768)
                      ? "36px"
                      : undefined,
              width:
                screenWidth < 375
                  ? "28px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "30px"
                    : (screenWidth >= 414 && screenWidth < 500) ||
                        (screenWidth >= 500 && screenWidth < 768)
                      ? "36px"
                      : undefined,
            }}
            alt="List"
            src={
              screenWidth < 375
                ? "https://c.animaapp.com/N6qZcdUt/img/list.svg"
                : screenWidth >= 375 && screenWidth < 414
                  ? "https://c.animaapp.com/N6qZcdUt/img/list-1.svg"
                  : (screenWidth >= 414 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 768)
                    ? "https://c.animaapp.com/N6qZcdUt/img/list-3.svg"
                    : undefined
            }
          />
        )}

        {((screenWidth >= 1366 && screenWidth < 1920) ||
          screenWidth >= 1920 ||
          (screenWidth >= 768 && screenWidth < 992) ||
          (screenWidth >= 992 && screenWidth < 1366)) && (
          <div
            className="menu"
            style={{
              borderRadius:
                screenWidth >= 768 && screenWidth < 992
                  ? "20.57px"
                  : (screenWidth >= 1366 && screenWidth < 1920) ||
                      screenWidth >= 1920 ||
                      (screenWidth >= 992 && screenWidth < 1366)
                    ? "24px"
                    : undefined,
              gap:
                screenWidth >= 768 && screenWidth < 992
                  ? "13.71px"
                  : (screenWidth >= 1366 && screenWidth < 1920) ||
                      screenWidth >= 1920 ||
                      (screenWidth >= 992 && screenWidth < 1366)
                    ? "16px"
                    : undefined,
              padding:
                screenWidth >= 768 && screenWidth < 992
                  ? "6.86px"
                  : (screenWidth >= 1366 && screenWidth < 1920) ||
                      screenWidth >= 1920 ||
                      (screenWidth >= 992 && screenWidth < 1366)
                    ? "8px"
                    : undefined,
            }}
          >
            <HeaderTextDefault
              className={`${screenWidth >= 768 && screenWidth < 992 && "class-2"} ${((screenWidth >= 1366 && screenWidth < 1920) || screenWidth >= 1920 || (screenWidth >= 992 && screenWidth < 1366)) && "class-3"}`}
              divClassName={`${screenWidth >= 768 && screenWidth < 992 && "class-4"}`}
              frameClassName={`${screenWidth >= 768 && screenWidth < 992 && "class"}`}
              text={
                (screenWidth >= 1366 && screenWidth < 1920) ||
                screenWidth >= 1920 ||
                (screenWidth >= 992 && screenWidth < 1366)
                  ? "About Us"
                  : undefined
              }
              targetId="about-us-section"
            />
            <HeaderTextDefault
              className={`${screenWidth >= 768 && screenWidth < 992 && "class-2"} ${((screenWidth >= 1366 && screenWidth < 1920) || screenWidth >= 1920 || (screenWidth >= 992 && screenWidth < 1366)) && "class-3"}`}
              divClassName={`${screenWidth >= 768 && screenWidth < 992 && "class-4"}`}
              frameClassName={`${screenWidth >= 768 && screenWidth < 992 && "class"}`}
              text="Service"
              targetId="service-section"
            />
            <HeaderTextDefault
              className={`${screenWidth >= 768 && screenWidth < 992 && "class-2"} ${((screenWidth >= 1366 && screenWidth < 1920) || screenWidth >= 1920 || (screenWidth >= 992 && screenWidth < 1366)) && "class-3"}`}
              divClassName={`${screenWidth >= 768 && screenWidth < 992 && "class-4"}`}
              frameClassName={`${screenWidth >= 768 && screenWidth < 992 && "class"}`}
              text="Liquidity"
              targetId="liquidity-section"
            />
          </div>
        )}
      </header>
      <div className="header-placeholder"></div>
      <div
        className="content"
        style={{
          gap:
            screenWidth < 375
              ? "54px"
              : screenWidth >= 375 && screenWidth < 414
                ? "64px"
                : (screenWidth >= 414 && screenWidth < 500) ||
                    (screenWidth >= 500 && screenWidth < 768)
                  ? "80px"
                  : screenWidth >= 768 && screenWidth < 992
                    ? "139px"
                    : (screenWidth >= 1366 && screenWidth < 1920) ||
                        screenWidth >= 1920 ||
                        (screenWidth >= 992 && screenWidth < 1366)
                      ? "209px"
                      : undefined,
        }}
      >
        <div
          id="about-us-section"
          className="page-about-us"
          style={{
            height:
              screenWidth < 375
                ? "464.63px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "535.97px"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "591.09px"
                    : screenWidth >= 500 && screenWidth < 768
                      ? "719px"
                      : screenWidth >= 768 && screenWidth < 992
                        ? "420.87px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "558.97px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "771.75px"
                            : screenWidth >= 1920
                              ? "840px"
                              : undefined,
            marginLeft:
              screenWidth < 375
                ? "-1.55px"
                : screenWidth >= 768 && screenWidth < 992
                  ? "-97.00px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "-142.83px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "-199.00px"
                      : undefined,
            marginRight:
              screenWidth < 375
                ? "-1.55px"
                : screenWidth >= 768 && screenWidth < 992
                  ? "-97.00px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "-142.83px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "-199.00px"
                      : undefined,
            width:
              screenWidth < 375
                ? "323.11px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "372.72px"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "411.05px"
                    : screenWidth >= 500 && screenWidth < 768
                      ? "500px"
                      : screenWidth >= 768 && screenWidth < 992
                        ? "962px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1277.66px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1764px"
                            : screenWidth >= 1920
                              ? "1920px"
                              : undefined,
          }}
        >
          {((screenWidth >= 375 && screenWidth < 414) ||
            (screenWidth >= 414 && screenWidth < 500) ||
            (screenWidth >= 500 && screenWidth < 768) ||
            screenWidth < 375) && (
            <>
              <div
                className="overlap"
                style={{
                  height:
                    screenWidth < 375
                      ? "152px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "176px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "194px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "236px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "17px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "20px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "22px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "27px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "60px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "70px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "77px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "93px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "289px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "333px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "368px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "447px"
                            : undefined,
                }}
              >
                <div
                  className="overlap-group"
                  style={{
                    height:
                      screenWidth < 375
                        ? "149px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "171px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "189px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "230px"
                              : undefined,
                    left:
                      (screenWidth >= 375 && screenWidth < 414) ||
                      (screenWidth >= 414 && screenWidth < 500) ||
                      screenWidth < 375
                        ? "2px"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "3px"
                          : undefined,
                    top:
                      (screenWidth >= 375 && screenWidth < 414) ||
                      screenWidth < 375
                        ? "4px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "5px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "6px"
                            : undefined,
                    width:
                      screenWidth < 375
                        ? "287px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "331px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "365px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "444px"
                              : undefined,
                  }}
                >
                  <div
                    className="div"
                    style={{
                      height:
                        screenWidth < 375
                          ? "108px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "124px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "137px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "167px"
                                : undefined,
                      top:
                        screenWidth < 375
                          ? "30px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "35px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "38px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "46px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "287px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "331px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "365px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "444px"
                                : undefined,
                    }}
                  >
                    <img
                      className="toriii-name"
                      style={{
                        height:
                          screenWidth < 375
                            ? "103px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "119px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "132px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "160px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "4px"
                            : (screenWidth >= 375 && screenWidth < 414) ||
                                (screenWidth >= 414 && screenWidth < 500)
                              ? "5px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "7px"
                                : undefined,
                        width:
                          screenWidth < 375
                            ? "103px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "119px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "132px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "160px"
                                  : undefined,
                      }}
                      alt="Toriii name"
                      src={
                        screenWidth < 375
                          ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name.svg"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-2.svg"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-4.svg"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-6.svg"
                                : undefined
                      }
                    />

                    <p
                      className="text-wrapper"
                      style={{
                        fontSize:
                          screenWidth < 375
                            ? "3.1px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "3.5px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "3.9px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "4.8px"
                                  : undefined,
                        height:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          screenWidth < 375
                            ? "25px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "30px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "35px"
                                : undefined,
                        left:
                          screenWidth < 375
                            ? "77px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "87px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "98px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "118px"
                                  : undefined,
                        lineHeight:
                          screenWidth < 375
                            ? "4.6px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "5.3px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "5.9px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "7.1px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "40px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "48px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "52px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "64px"
                                  : undefined,
                        width:
                          screenWidth < 375
                            ? "105px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "122px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "134px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "163px"
                                  : undefined,
                      }}
                    >
                      Our firm excels in sophisticated trading approaches,
                      leveraging cutting-edge technology and quantitative
                      methods. We offer market-making services with a custom
                      trading engine capable of millisecond reactions, ensuring
                      optimal liquidity provision. Our statistical arbitrage
                      models employ complex mathematical algorithms to identify
                      and exploit co-integrating relationships between assets.
                    </p>

                    <img
                      className="group"
                      style={{
                        height:
                          screenWidth < 375
                            ? "32px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "37px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "41px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "50px"
                                  : undefined,
                        left:
                          screenWidth < 375
                            ? "156px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "180px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "199px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "242px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "43px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "50px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "55px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "67px"
                                  : undefined,
                        width:
                          screenWidth < 375
                            ? "131px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "151px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "166px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "202px"
                                  : undefined,
                      }}
                      alt="Group"
                      src={
                        screenWidth < 375
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-50@2x.png"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-50-1@2x.png"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "https://c.animaapp.com/N6qZcdUt/img/group-50-2@2x.png"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "https://c.animaapp.com/N6qZcdUt/img/group-50-3@2x.png"
                                : undefined
                      }
                    />
                  </div>

                  <div
                    className="overlap-group-wrapper"
                    style={{
                      backgroundImage:
                        screenWidth < 375
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1.svg)"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-2.svg)"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-4.svg)"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-6.svg)"
                                : undefined,
                      height:
                        screenWidth < 375
                          ? "36px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "41px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "45px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "55px"
                                : undefined,
                      left:
                        screenWidth < 375
                          ? "158px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "182px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "201px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "244px"
                                : undefined,
                      top:
                        screenWidth < 375
                          ? "113px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "130px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "144px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "175px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "36px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "41px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "45px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "55px"
                                : undefined,
                    }}
                  >
                    <div
                      className="img-wrapper"
                      style={{
                        backgroundImage:
                          screenWidth < 375
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2.svg)"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-2.svg)"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-4.svg)"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-6.svg)"
                                  : undefined,
                        height:
                          screenWidth < 375
                            ? "30px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "34px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "38px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "46px"
                                  : undefined,
                        left:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          screenWidth < 375
                            ? "3px"
                            : (screenWidth >= 414 && screenWidth < 500) ||
                                (screenWidth >= 500 && screenWidth < 768)
                              ? "4px"
                              : undefined,
                        top:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          screenWidth < 375
                            ? "3px"
                            : (screenWidth >= 414 && screenWidth < 500) ||
                                (screenWidth >= 500 && screenWidth < 768)
                              ? "4px"
                              : undefined,
                        width:
                          screenWidth < 375
                            ? "30px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "34px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "38px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "46px"
                                  : undefined,
                      }}
                    >
                      <img
                        className="img"
                        style={{
                          height:
                            screenWidth < 375
                              ? "13px"
                              : screenWidth >= 375 && screenWidth < 414
                                ? "16px"
                                : screenWidth >= 414 && screenWidth < 500
                                  ? "17px"
                                  : screenWidth >= 500 && screenWidth < 768
                                    ? "21px"
                                    : undefined,
                          left:
                            screenWidth < 375
                              ? "13px"
                              : screenWidth >= 375 && screenWidth < 414
                                ? "15px"
                                : screenWidth >= 414 && screenWidth < 500
                                  ? "17px"
                                  : screenWidth >= 500 && screenWidth < 768
                                    ? "21px"
                                    : undefined,
                          top:
                            screenWidth < 375
                              ? "7px"
                              : screenWidth >= 375 && screenWidth < 414
                                ? "8px"
                                : screenWidth >= 414 && screenWidth < 500
                                  ? "9px"
                                  : screenWidth >= 500 && screenWidth < 768
                                    ? "11px"
                                    : undefined,
                          width:
                            screenWidth < 375
                              ? "3px"
                              : (screenWidth >= 375 && screenWidth < 414) ||
                                  (screenWidth >= 414 && screenWidth < 500)
                                ? "4px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "5px"
                                  : undefined,
                        }}
                        alt="Img"
                        src={
                          screenWidth < 375
                            ? "https://c.animaapp.com/N6qZcdUt/img/-.svg"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "https://c.animaapp.com/N6qZcdUt/img/--2.svg"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "https://c.animaapp.com/N6qZcdUt/img/--4.svg"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "https://c.animaapp.com/N6qZcdUt/img/--6.svg"
                                  : undefined
                        }
                      />
                    </div>
                  </div>

                  <img
                    className="img-2"
                    style={{
                      height:
                        screenWidth < 375
                          ? "14px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "16px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "18px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "22px"
                                : undefined,
                      left:
                        screenWidth < 375
                          ? "204px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "236px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "260px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "316px"
                                : undefined,
                      top:
                        screenWidth < 375
                          ? "121px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "139px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "154px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "187px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "81px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "94px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "103px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "126px"
                                : undefined,
                    }}
                    alt="Element"
                    src={
                      screenWidth < 375
                        ? "https://c.animaapp.com/N6qZcdUt/img/99--.svg"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "https://c.animaapp.com/N6qZcdUt/img/99---1.svg"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/99---2.svg"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/99---3.svg"
                              : undefined
                    }
                  />

                  <img
                    className="group-2"
                    style={{
                      height:
                        screenWidth < 375
                          ? "61px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "70px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "77px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "94px"
                                : undefined,
                      left:
                        screenWidth < 375
                          ? "158px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "182px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "201px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "244px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "129px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "149px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "164px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "200px"
                                : undefined,
                    }}
                    alt="Group"
                    src={
                      screenWidth < 375
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-39@2x.png"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-39-1@2x.png"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-39-2@2x.png"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/group-39-3@2x.png"
                              : undefined
                    }
                  />
                </div>

                <div
                  className="text-wrapper-2"
                  style={{
                    fontSize:
                      screenWidth < 375
                        ? "17.3px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "20px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "22px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "26.8px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "17px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "20px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "22px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "27px"
                              : undefined,
                  }}
                >
                  TORIII TECHNOLOGY CORP.
                </div>
              </div>

              <p
                className="p"
                style={{
                  fontSize:
                    screenWidth < 375
                      ? "2.7px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "3.2px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "3.5px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "4.2px"
                            : undefined,
                  height:
                    screenWidth < 375
                      ? "16px"
                      : (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500)
                        ? "20px"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "24px"
                          : undefined,
                  left:
                    screenWidth < 375
                      ? "26px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "30px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "33px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "40px"
                            : undefined,
                  letterSpacing:
                    screenWidth < 375
                      ? "0.01px"
                      : (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 768)
                        ? "0.02px"
                        : undefined,
                  lineHeight:
                    screenWidth < 375
                      ? "4.1px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "4.8px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "5.2px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "6.4px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "350px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "404px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "445px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "541px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "118px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "136px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "150px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "183px"
                            : undefined,
                }}
              >
                Our technical prowess extends beyond trading to provide valuable
                support and optimization services. We specialize in enhancing
                trading systems, improving execution speed, and building stable,
                robust trading infrastructure. Combined with our trading acumen,
                positions us as a comprehensive solution provider in the
                quantitative trading and cryptocurrency market-making landscape.
              </p>

              <img
                className="battery"
                style={{
                  height:
                    screenWidth < 375
                      ? "20px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "23px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "25px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "31px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "26px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "30px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "33px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "40px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "325px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "375px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "414px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "504px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "120px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "139px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "153px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "186px"
                            : undefined,
                }}
                alt="Battery"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/battery@2x.png"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/battery-1@2x.png"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/battery-2@2x.png"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/battery-3@2x.png"
                          : undefined
                }
              />

              <img
                className="group-3"
                style={{
                  height:
                    screenWidth < 375
                      ? "25px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "29px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "32px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "39px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "16px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "19px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "21px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "25px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "7px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "8px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "9px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "11px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "293px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "338px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "372px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "453px"
                            : undefined,
                }}
                alt="Group"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/group-40@2x.png"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-40-1@2x.png"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-40-2@2x.png"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-40-3@2x.png"
                          : undefined
                }
              />

              <div
                className="overlap-2"
                style={{
                  height:
                    screenWidth < 375
                      ? "136px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "157px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "173px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "211px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "198px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "228px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "252px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "306px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "328px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "378px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "417px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "507px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "109px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "125px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "138px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "168px"
                            : undefined,
                }}
              >
                <img
                  className="toriii-name-2"
                  style={{
                    height:
                      screenWidth < 375
                        ? "117px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "135px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "149px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "181px"
                              : undefined,
                    left:
                      (screenWidth >= 375 && screenWidth < 414) ||
                      screenWidth < 375
                        ? "1px"
                        : (screenWidth >= 414 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 768)
                          ? "2px"
                          : undefined,
                    top:
                      screenWidth < 375
                        ? "19px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "22px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "24px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "30px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "107px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "124px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "136px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "166px"
                              : undefined,
                  }}
                  alt="Toriii name"
                  src={
                    screenWidth < 375
                      ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-1.svg"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-3.svg"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-5.svg"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-7.svg"
                            : undefined
                  }
                />

                <p
                  className="text-wrapper-3"
                  style={{
                    fontSize:
                      screenWidth < 375
                        ? "2.7px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.2px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.5px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.2px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "19px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "22px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "25px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "30px"
                              : undefined,
                    letterSpacing:
                      screenWidth < 375
                        ? "0.01px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 768)
                          ? "0.02px"
                          : undefined,
                    lineHeight:
                      screenWidth < 375
                        ? "4.1px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "4.8px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "5.2px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "6.4px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "106px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "122px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "135px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "164px"
                              : undefined,
                  }}
                >
                  We provide a wide array of financial services tailored to the
                  cryptocurrency ecosystem. In the exchange space, we enhance
                  liquidity while limiting volatility through high-frequency and
                  quantitative trading strategies. Our asset management division
                  employs a multi-strategy approach to deliver consistent and
                  uncorrelated returns from the market.
                </p>
              </div>

              <div
                className="group-4"
                style={{
                  border:
                    screenWidth < 375
                      ? "0.81px solid"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "0.94px solid"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "1.03px solid"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "1.26px solid"
                            : undefined,
                  borderRadius:
                    screenWidth < 375
                      ? "8.14px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "9.38px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "10.35px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "12.59px"
                            : undefined,
                  height:
                    screenWidth < 375
                      ? "89px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "103px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "114px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "138px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "25px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "28px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "31px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "38px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "375px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "432px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "477px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "580px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "122px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "140px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "155px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "188px"
                            : undefined,
                }}
              >
                <img
                  className="crypto-ASSETS"
                  style={{
                    height:
                      screenWidth < 375
                        ? "33px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "38px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "42px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "51px"
                              : undefined,
                    left:
                      screenWidth < 375
                        ? "8px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "9px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "10px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "12px"
                              : undefined,
                    top:
                      screenWidth < 375
                        ? "13px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "15px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "17px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "20px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "105px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "122px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "134px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "163px"
                              : undefined,
                  }}
                  alt="Crypto ASSETS"
                  src={
                    screenWidth < 375
                      ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets.svg"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-1.svg"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-2.svg"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-3.svg"
                            : undefined
                  }
                />

                <div
                  className="frame-wrapper"
                  style={{
                    borderRadius:
                      screenWidth < 375
                        ? "0px 0px 6.51px 6.51px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0px 0px 7.51px 7.51px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0px 0px 8.28px 8.28px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "0px 0px 10.07px 10.07px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "32px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "37px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "40px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "49px"
                              : undefined,
                    left:
                      (screenWidth >= 375 && screenWidth < 414) ||
                      (screenWidth >= 414 && screenWidth < 500) ||
                      screenWidth < 375
                        ? "2px"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "3px"
                          : undefined,
                    top:
                      screenWidth < 375
                        ? "56px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "65px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "87px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "118px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "136px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "150px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "183px"
                              : undefined,
                  }}
                >
                  <div
                    className="frame-2"
                    style={{
                      gap:
                        screenWidth < 375
                          ? "13.4px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "15.45px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "17.04px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "20.73px"
                                : undefined,
                      height:
                        screenWidth < 375
                          ? "21px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "24px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "26px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "32px"
                                : undefined,
                      left:
                        screenWidth < 375
                          ? "15px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "17px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "19px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "23px"
                                : undefined,
                      top:
                        screenWidth < 375
                          ? "5px"
                          : (screenWidth >= 375 && screenWidth < 414) ||
                              (screenWidth >= 414 && screenWidth < 500)
                            ? "6px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8px"
                              : undefined,
                      width:
                        screenWidth < 375
                          ? "89px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "103px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "114px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "138px"
                                : undefined,
                    }}
                  >
                    <img
                      className="frame-3"
                      style={{
                        height:
                          screenWidth < 375
                            ? "20.82px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "24.02px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "26.49px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "32.23px"
                                  : undefined,
                        width:
                          screenWidth < 375
                            ? "20.82px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "24.02px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "26.49px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "32.22px"
                                  : undefined,
                      }}
                      alt="Frame"
                      src={
                        screenWidth < 375
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904.svg"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-1.svg"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-2.svg"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-3.svg"
                                : undefined
                      }
                    />

                    <img
                      className="tether-usdt-seeklogo"
                      style={{
                        height:
                          screenWidth < 375
                            ? "20.82px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "24.02px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "26.49px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "32.22px"
                                  : undefined,
                        width:
                          screenWidth < 375
                            ? "20.82px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "24.02px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "26.49px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "32.22px"
                                  : undefined,
                      }}
                      alt="Tether usdt seeklogo"
                      src={
                        screenWidth < 375
                          ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo.svg"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-1.svg"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-2.svg"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-3.svg"
                                : undefined
                      }
                    />

                    <div
                      className="group-wrapper"
                      style={{
                        border:
                          screenWidth < 375
                            ? "0.92px solid"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "1.07px solid"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "1.18px solid"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "1.43px solid"
                                  : undefined,
                        borderRadius:
                          screenWidth < 375
                            ? "10.41px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "12.01px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "13.24px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "16.11px"
                                  : undefined,
                        height:
                          screenWidth < 375
                            ? "20.82px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "24.02px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "26.49px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "32.22px"
                                  : undefined,
                        width:
                          screenWidth < 375
                            ? "20.82px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "24.02px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "26.49px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "32.22px"
                                  : undefined,
                      }}
                    >
                      <img
                        className="group-5"
                        style={{
                          height:
                            screenWidth < 375
                              ? "17px"
                              : screenWidth >= 375 && screenWidth < 414
                                ? "20px"
                                : screenWidth >= 414 && screenWidth < 500
                                  ? "22px"
                                  : screenWidth >= 500 && screenWidth < 768
                                    ? "27px"
                                    : undefined,
                          left:
                            screenWidth < 375
                              ? "4px"
                              : (screenWidth >= 375 && screenWidth < 414) ||
                                  (screenWidth >= 414 && screenWidth < 500)
                                ? "5px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "6px"
                                  : undefined,
                          width:
                            screenWidth < 375
                              ? "11px"
                              : screenWidth >= 375 && screenWidth < 414
                                ? "12px"
                                : screenWidth >= 414 && screenWidth < 500
                                  ? "13px"
                                  : screenWidth >= 500 && screenWidth < 768
                                    ? "16px"
                                    : undefined,
                        }}
                        alt="Group"
                        src={
                          screenWidth < 375
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-54@2x.png"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "https://c.animaapp.com/N6qZcdUt/img/group-54-1@2x.png"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "https://c.animaapp.com/N6qZcdUt/img/group-54-2@2x.png"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "https://c.animaapp.com/N6qZcdUt/img/group-54-3@2x.png"
                                  : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="liquidity"
                style={{
                  height:
                    screenWidth < 375
                      ? "140px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "161px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "178px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "216px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "163px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "189px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "208px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "253px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "326px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "376px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "414px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "504px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "19px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "22px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "24px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "30px"
                            : undefined,
                }}
                alt="Liquidity"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/liquidity-.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--3.svg"
                          : undefined
                }
              />

              <div
                className="frame-4"
                style={{
                  gap:
                    screenWidth < 375
                      ? "9.23px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "10.64px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "11.74px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "14.28px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "18px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "21px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "23px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "29px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "44px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "51px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "56px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "68px"
                            : undefined,
                }}
              >
                <div
                  className="rectangle"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "10.36px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "11.95px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "13.18px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "16.03px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "89.29px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "103px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "113.59px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "138.17px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-2"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-3"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-4"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-5"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-6"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-7"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "2.64px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "3.04px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "3.35px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4.08px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                  }}
                />

                <div
                  className="rectangle-2"
                  style={{
                    border:
                      screenWidth < 375
                        ? "0.69px solid"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.8px solid"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.88px solid"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "1.07px solid"
                              : undefined,
                    borderRadius:
                      screenWidth < 375
                        ? "10.36px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "11.95px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "13.18px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "16.03px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "5.27px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "6.71px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8.16px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "89.29px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "103px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "113.59px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "138.17px"
                              : undefined,
                  }}
                />
              </div>

              <div
                className="overlap-3"
                style={{
                  height:
                    screenWidth < 375
                      ? "65px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "77px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "83px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "102px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "36px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "41px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "45px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "55px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "220px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "253px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "280px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "340px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "266px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "307px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "339px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "412px"
                            : undefined,
                }}
              >
                <img
                  className="vector"
                  style={{
                    height:
                      screenWidth < 375
                        ? "55px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "63px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "70px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "85px"
                              : undefined,
                    left:
                      screenWidth < 375
                        ? "192px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "222px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "245px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "297px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "74px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "86px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "94px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "115px"
                              : undefined,
                  }}
                  alt="Vector"
                  src={
                    screenWidth < 375
                      ? "https://c.animaapp.com/N6qZcdUt/img/vector.svg"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "https://c.animaapp.com/N6qZcdUt/img/vector-4.svg"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-8.svg"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-12.svg"
                            : undefined
                  }
                />

                <p
                  className="text-wrapper-4"
                  style={{
                    fontSize:
                      screenWidth < 375
                        ? "14.2px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "16.4px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "18.1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "22px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "42px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "50px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "54px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "66px"
                              : undefined,
                    letterSpacing:
                      screenWidth < 375
                        ? "0.07px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "0.08px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "0.09px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "0.11px"
                              : undefined,
                    lineHeight:
                      screenWidth < 375
                        ? "21.3px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "24.6px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "27.1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "32.9px"
                              : undefined,
                    top:
                      screenWidth < 375
                        ? "23px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "27px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "29px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "36px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "257px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "296px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "327px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "397px"
                              : undefined,
                  }}
                >
                  Specializing in high frequency and low latency solutions for
                  digital asset markets.
                </p>
              </div>

              <img
                className="vector-2"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "12px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "16px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "292px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "337px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "371px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "452px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "292px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "337px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "371px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "452px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "12px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "16px"
                            : undefined,
                }}
                alt="Vector"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/vector-1.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/vector-5.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/vector-9.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-13.svg"
                          : undefined
                }
              />

              <img
                className="vector-3"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "12px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "16px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "26px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "31px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "34px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "41px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "342px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "377px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "459px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "12px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "16px"
                            : undefined,
                }}
                alt="Vector"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/vector-2.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/vector-6.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/vector-10.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-15.svg"
                          : undefined
                }
              />

              <div
                className="ellipse-8"
                style={{
                  borderRadius:
                    screenWidth < 375
                      ? "4.93px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "5.69px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "6.28px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "7.64px"
                            : undefined,
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "79px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "91px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "100px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "122px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
              />

              <img
                className="ellipse-9"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "89px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "102px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "113px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "137px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-10"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "99px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "114px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "125px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "153px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-11"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "108px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "125px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "138px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "168px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-12"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "118px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "136px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "151px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "183px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-13"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "128px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "148px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "163px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "198px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-14"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "138px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "159px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "176px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "214px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-15"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "148px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "171px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "188px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "229px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-16"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "158px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "182px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "201px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "244px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-17"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "168px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "193px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "213px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "259px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-3.svg"
                          : undefined
                }
              />

              <img
                className="ellipse-18"
                style={{
                  height:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "178px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "205px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "226px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "275px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "297px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "343px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "378px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "460px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "10px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "11px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "13px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "15px"
                            : undefined,
                }}
                alt="Ellipse"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-3.svg"
                          : undefined
                }
              />
            </>
          )}

          {((screenWidth >= 1366 && screenWidth < 1920) ||
            screenWidth >= 1920 ||
            (screenWidth >= 768 && screenWidth < 992) ||
            (screenWidth >= 992 && screenWidth < 1366)) && (
            <div
              className="group-6"
              style={{
                height:
                  screenWidth >= 768 && screenWidth < 992
                    ? "421px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "559px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "771px"
                        : screenWidth >= 1920
                          ? "839px"
                          : undefined,
                left:
                  screenWidth >= 768 && screenWidth < 992
                    ? "34px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "45px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "62px"
                        : screenWidth >= 1920
                          ? "68px"
                          : undefined,
                width:
                  screenWidth >= 768 && screenWidth < 992
                    ? "787px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "1043px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "1437px"
                        : screenWidth >= 1920
                          ? "1563px"
                          : undefined,
              }}
            >
              <div
                className="overlap-4"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "148px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "196px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "271px"
                          : screenWidth >= 1920
                            ? "295px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "124px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "165px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "228px"
                          : screenWidth >= 1920
                            ? "248px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "101px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "134px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "186px"
                          : screenWidth >= 1920
                            ? "202px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "605px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "803px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "1109px"
                          : screenWidth >= 1920
                            ? "1207px"
                            : undefined,
                }}
              >
                <div
                  className="div-wrapper"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "146px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "194px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "267px"
                            : screenWidth >= 1920
                              ? "291px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "87px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "115px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "159px"
                            : screenWidth >= 1920
                              ? "173px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "2px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "3px"
                          : (screenWidth >= 1366 && screenWidth < 1920) ||
                              screenWidth >= 1920
                            ? "4px"
                            : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "518px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "688px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "950px"
                            : screenWidth >= 1920
                              ? "1034px"
                              : undefined,
                  }}
                >
                  <div
                    className="overlap-group-2"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "146px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "194px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "267px"
                              : screenWidth >= 1920
                                ? "291px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "506px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "672px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "927px"
                              : screenWidth >= 1920
                                ? "1009px"
                                : undefined,
                    }}
                  >
                    <img
                      className="vector-4"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "107px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "142px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "196px"
                                : screenWidth >= 1920
                                  ? "214px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "12px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "16px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "22px"
                                : screenWidth >= 1920
                                  ? "24px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "12px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "16px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "22px"
                                : screenWidth >= 1920
                                  ? "24px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "107px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "142px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "196px"
                                : screenWidth >= 1920
                                  ? "214px"
                                  : undefined,
                      }}
                      alt="Vector"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-17.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-20.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/vector-23.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/vector-26.svg"
                                : undefined
                      }
                    />

                    <img
                      className="group-7"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "146px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "194px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "267px"
                                : screenWidth >= 1920
                                  ? "291px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "506px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "672px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "927px"
                                : screenWidth >= 1920
                                  ? "1009px"
                                  : undefined,
                      }}
                      alt="Group"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/group.png"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-1.png"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/group-2.png"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/group-3.png"
                                : undefined
                      }
                    />

                    <img
                      className="line"
                      style={{
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "11px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "15px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "20px"
                                : screenWidth >= 1920
                                  ? "22px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "69px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "91px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "126px"
                                : screenWidth >= 1920
                                  ? "137px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "108px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "144px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "198px"
                                : screenWidth >= 1920
                                  ? "216px"
                                  : undefined,
                      }}
                      alt="Line"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "/img/line-2-3.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "/img/line-2-2.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "/img/image.svg"
                              : screenWidth >= 1920
                                ? "/img/line-2.svg"
                                : undefined
                      }
                    />

                    <img
                      className="line-2"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "108px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "144px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "198px"
                                : screenWidth >= 1920
                                  ? "216px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "63px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "84px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "116px"
                                : screenWidth >= 1920
                                  ? "126px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "11px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "15px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "20px"
                                : screenWidth >= 1920
                                  ? "22px"
                                  : undefined,
                      }}
                      alt="Line"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/line-3.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/line-3-1.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/line-3-2.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/line-3-3.svg"
                                : undefined
                      }
                    />

                    <img
                      className="frame-5"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "83px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "110px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "152px"
                                : screenWidth >= 1920
                                  ? "165px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "23px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "30px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "42px"
                                : screenWidth >= 1920
                                  ? "46px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "29px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "40px"
                                : screenWidth >= 1920
                                  ? "43px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "82px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "108px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "150px"
                                : screenWidth >= 1920
                                  ? "163px"
                                  : undefined,
                      }}
                      alt="Frame"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39887.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/frame-39887-1.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/frame-39887-2.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/frame-39887-3.svg"
                                : undefined
                      }
                    />

                    <div
                      className="frame-6"
                      style={{
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "234px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "310px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "429px"
                                : screenWidth >= 1920
                                  ? "467px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "119px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "158px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "219px"
                                : screenWidth >= 1920
                                  ? "238px"
                                  : undefined,
                      }}
                    >
                      <div
                        className="ellipse-19"
                        style={{
                          borderRadius:
                            screenWidth >= 768 && screenWidth < 992
                              ? "9.97px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "13.24px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "18.28px"
                                  : screenWidth >= 1920
                                    ? "19.9px"
                                    : undefined,
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                      />

                      <img
                        className="ellipse-20"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-6-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-21"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-7-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-22"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-8-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-23"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-9-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-24"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-10-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-25"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-11-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-26"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-13-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-27"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-14-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-28"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-15-7.svg"
                                  : undefined
                        }
                      />

                      <img
                        className="ellipse-29"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19.94px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "26.48px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "36.56px"
                                  : screenWidth >= 1920
                                    ? "39.8px"
                                    : undefined,
                        }}
                        alt="Ellipse"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-4.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-5.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-6.svg"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/ellipse-12-7.svg"
                                  : undefined
                        }
                      />
                    </div>

                    <p
                      className="text-wrapper-5"
                      style={{
                        fontSize:
                          screenWidth >= 768 && screenWidth < 992
                            ? "18px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "24px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "33.1px"
                                : screenWidth >= 1920
                                  ? "36px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "54px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "72px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "100px"
                                : screenWidth >= 1920
                                  ? "108px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "167px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "222px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "307px"
                                : screenWidth >= 1920
                                  ? "334px"
                                  : undefined,
                        letterSpacing:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.09px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "0.12px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "0.17px"
                                : screenWidth >= 1920
                                  ? "0.18px"
                                  : undefined,
                        lineHeight:
                          screenWidth >= 768 && screenWidth < 992
                            ? "27.1px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "35.9px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "49.6px"
                                : screenWidth >= 1920
                                  ? "54px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "37px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "50px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "69px"
                                : screenWidth >= 1920
                                  ? "75px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "326px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "433px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "598px"
                                : screenWidth >= 1920
                                  ? "651px"
                                  : undefined,
                      }}
                    >
                      Specializing in high frequency and low latency solutions
                      for digital asset markets.
                    </p>
                  </div>
                </div>

                <p
                  className="text-wrapper-6"
                  style={{
                    fontSize:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.2px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.6px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.8px"
                            : screenWidth >= 1920
                              ? "8.5px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "30px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "40px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "60px"
                            : screenWidth >= 1920
                              ? "65px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "-26px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "-34px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "-45px"
                            : screenWidth >= 1920
                              ? "-49px"
                              : undefined,
                    letterSpacing:
                      screenWidth >= 768 && screenWidth < 992
                        ? "0.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "0.03px"
                          : (screenWidth >= 1366 && screenWidth < 1920) ||
                              screenWidth >= 1920
                            ? "0.04px"
                            : undefined,
                    lineHeight:
                      screenWidth >= 768 && screenWidth < 992
                        ? "6.4px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "8.5px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "11.7px"
                            : screenWidth >= 1920
                              ? "12.7px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "60px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "79px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "107px"
                            : screenWidth >= 1920
                              ? "117px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "146px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "194px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "267px"
                            : screenWidth >= 1920
                              ? "291px"
                              : undefined,
                  }}
                >
                  Our technical prowess extends beyond trading to provide
                  valuable support and optimization services. We specialize in
                  enhancing trading systems, improving execution speed, and
                  building stable, robust trading infrastructure. Combined with
                  our trading acumen, positions us as a comprehensive solution
                  provider in the quantitative trading and cryptocurrency
                  market-making landscape.
                </p>

                <img
                  className="battery-2"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "148px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "196px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "271px"
                            : screenWidth >= 1920
                              ? "295px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "25px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "33px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "45px"
                            : screenWidth >= 1920
                              ? "49px"
                              : undefined,
                  }}
                  alt="Battery"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/battery-4@2x.png"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/battery-5@2x.png"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/battery-6@2x.png"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/battery-7@2x.png"
                            : undefined
                  }
                />
              </div>

              <div
                className="text-wrapper-7"
                style={{
                  fontSize:
                    screenWidth >= 768 && screenWidth < 992
                      ? "26.8px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "35.6px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "49.1px"
                          : screenWidth >= 1920
                            ? "53.5px"
                            : undefined,
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "27px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "36px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "49px"
                          : screenWidth >= 1920
                            ? "53px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "118px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "156px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "216px"
                          : screenWidth >= 1920
                            ? "235px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "394px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "523px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "722px"
                          : screenWidth >= 1920
                            ? "786px"
                            : undefined,
                }}
              >
                TORIII TECHNOLOGY CORP.
              </div>

              <img
                className="group-8"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "35px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "47px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "65px"
                          : screenWidth >= 1920
                            ? "71px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "127px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "169px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "233px"
                          : screenWidth >= 1920
                            ? "254px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "14px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "19px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "26px"
                          : screenWidth >= 1920
                            ? "29px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "413px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "548px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "756px"
                          : screenWidth >= 1920
                            ? "823px"
                            : undefined,
                }}
                alt="Group"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/group-40-4@2x.png"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-40-5.png"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-40-6.png"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-40-7.png"
                          : undefined
                }
              />

              <img
                className="group-9"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "95px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "126px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "174px"
                          : screenWidth >= 1920
                            ? "190px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "574px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "762px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "1052px"
                          : screenWidth >= 1920
                            ? "1145px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "202px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "268px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "370px"
                          : screenWidth >= 1920
                            ? "403px"
                            : undefined,
                }}
                alt="Group"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/group-39-4@2x.png"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-39-6@2x.png"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-39-8@2x.png"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-39-10@2x.png"
                          : undefined
                }
              />

              <img
                className="toriii-name-3"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "149px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "198px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "273px"
                          : screenWidth >= 1920
                            ? "297px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "564px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "750px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "1035px"
                          : screenWidth >= 1920
                            ? "1126px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "269px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "357px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "493px"
                          : screenWidth >= 1920
                            ? "537px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "152px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "202px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "278px"
                          : screenWidth >= 1920
                            ? "303px"
                            : undefined,
                }}
                alt="Toriii name"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-8.svg"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-9.svg"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-10.svg"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/toriii-name-11.svg"
                          : undefined
                }
              />

              <p
                className="text-wrapper-8"
                style={{
                  fontSize:
                    screenWidth >= 768 && screenWidth < 992
                      ? "4.8px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "6.3px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "8.7px"
                          : screenWidth >= 1920
                            ? "9.5px"
                            : undefined,
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "28px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "36px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "52px"
                          : screenWidth >= 1920
                            ? "56px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "122px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "162px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "223px"
                          : screenWidth >= 1920
                            ? "243px"
                            : undefined,
                  letterSpacing:
                    screenWidth >= 768 && screenWidth < 992
                      ? "0.02px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "0.03px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "0.04px"
                          : screenWidth >= 1920
                            ? "0.05px"
                            : undefined,
                  lineHeight:
                    screenWidth >= 768 && screenWidth < 992
                      ? "7.1px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "9.5px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "13.1px"
                          : screenWidth >= 1920
                            ? "14.2px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "354px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "471px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "650px"
                          : screenWidth >= 1920
                            ? "707px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "204px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "270px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "373px"
                          : screenWidth >= 1920
                            ? "406px"
                            : undefined,
                }}
              >
                Our firm excels in sophisticated trading approaches, leveraging
                cutting-edge technology and quantitative methods. We offer
                market-making services with a custom trading engine capable of
                millisecond reactions, ensuring optimal liquidity provision. Our
                statistical arbitrage models employ complex mathematical
                algorithms to identify and exploit co-integrating relationships
                between assets.
              </p>

              <p
                className="text-wrapper-9"
                style={{
                  fontSize:
                    screenWidth >= 768 && screenWidth < 992
                      ? "4.2px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "5.6px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "7.8px"
                          : screenWidth >= 1920
                            ? "8.5px"
                            : undefined,
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "30px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "40px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "60px"
                          : screenWidth >= 1920
                            ? "65px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "355px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "472px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "652px"
                          : screenWidth >= 1920
                            ? "709px"
                            : undefined,
                  letterSpacing:
                    screenWidth >= 768 && screenWidth < 992
                      ? "0.02px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "0.03px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "0.04px"
                          : undefined,
                  lineHeight:
                    screenWidth >= 768 && screenWidth < 992
                      ? "6.4px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "8.5px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "11.7px"
                          : screenWidth >= 1920
                            ? "12.7px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "280px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "372px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "514px"
                          : screenWidth >= 1920
                            ? "559px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "127px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "168px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "232px"
                          : screenWidth >= 1920
                            ? "253px"
                            : undefined,
                }}
              >
                We provide a wide array of financial services tailored to the
                cryptocurrency ecosystem. In the exchange space, we enhance
                liquidity while limiting volatility through high-frequency and
                quantitative trading strategies. Our asset management division
                employs a multi-strategy approach to deliver consistent and
                uncorrelated returns from the market.
              </p>

              <div
                className="overlap-wrapper"
                style={{
                  backgroundImage:
                    screenWidth >= 768 && screenWidth < 992
                      ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-8.svg)"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-9.svg)"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-10.svg)"
                          : screenWidth >= 1920
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-11.svg)"
                            : undefined,
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "72px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "96px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "132px"
                          : screenWidth >= 1920
                            ? "144px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "115px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "153px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "211px"
                          : screenWidth >= 1920
                            ? "229px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "279px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "370px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "511px"
                          : screenWidth >= 1920
                            ? "556px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "72px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "96px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "132px"
                          : screenWidth >= 1920
                            ? "144px"
                            : undefined,
                }}
              >
                <div
                  className="overlap-5"
                  style={{
                    backgroundImage:
                      screenWidth >= 768 && screenWidth < 992
                        ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-8.svg)"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-9.svg)"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-10.svg)"
                            : screenWidth >= 1920
                              ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-2-11.svg)"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "60px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "80px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "111px"
                            : screenWidth >= 1920
                              ? "120px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "6px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "8px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "11px"
                            : screenWidth >= 1920
                              ? "12px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "6px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "8px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "11px"
                            : screenWidth >= 1920
                              ? "12px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "60px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "80px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "111px"
                            : screenWidth >= 1920
                              ? "120px"
                              : undefined,
                  }}
                >
                  <img
                    className="img-3"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "27px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "36px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "50px"
                              : screenWidth >= 1920
                                ? "55px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "27px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "36px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "50px"
                              : screenWidth >= 1920
                                ? "54px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "14px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "19px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "26px"
                              : screenWidth >= 1920
                                ? "28px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "7px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "9px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "12px"
                              : screenWidth >= 1920
                                ? "13px"
                                : undefined,
                    }}
                    alt="Img"
                    src={
                      screenWidth >= 768 && screenWidth < 992
                        ? "https://c.animaapp.com/N6qZcdUt/img/--8.svg"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/--9.svg"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/--10.svg"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/--11.svg"
                              : undefined
                    }
                  />
                </div>
              </div>

              <div
                className="group-10"
                style={{
                  border:
                    screenWidth >= 768 && screenWidth < 992
                      ? "0.88px solid"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "1.17px solid"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "1.62px solid"
                          : screenWidth >= 1920
                            ? "1.76px solid"
                            : undefined,
                  borderRadius:
                    screenWidth >= 768 && screenWidth < 992
                      ? "8.82px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "11.72px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "16.18px"
                          : screenWidth >= 1920
                            ? "17.61px"
                            : undefined,
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "97px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "129px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "178px"
                          : screenWidth >= 1920
                            ? "194px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "352px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "468px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "646px"
                          : screenWidth >= 1920
                            ? "703px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "324px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "430px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "593px"
                          : screenWidth >= 1920
                            ? "646px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "132px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "175px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "242px"
                          : screenWidth >= 1920
                            ? "263px"
                            : undefined,
                }}
              >
                <img
                  className="crypto-ASSETS-2"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "36px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "48px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "66px"
                            : screenWidth >= 1920
                              ? "72px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "9px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "11px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "16px"
                            : screenWidth >= 1920
                              ? "17px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "14px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "19px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "26px"
                            : screenWidth >= 1920
                              ? "28px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "114px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "152px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "209px"
                            : screenWidth >= 1920
                              ? "228px"
                              : undefined,
                  }}
                  alt="Crypto ASSETS"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-4.svg"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-5.svg"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-6.svg"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/crypto-assets-7.svg"
                            : undefined
                  }
                />

                <div
                  className="overlap-6"
                  style={{
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "0px 0px 7.06px 7.06px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "0px 0px 9.37px 9.37px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "0px 0px 12.94px 12.94px"
                            : screenWidth >= 1920
                              ? "0px 0px 14.09px 14.09px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "34px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "46px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "63px"
                            : screenWidth >= 1920
                              ? "69px"
                              : undefined,
                    left:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "2px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "3px"
                          : screenWidth >= 1920
                            ? "4px"
                            : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "61px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "81px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "112px"
                            : screenWidth >= 1920
                              ? "122px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "128px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "170px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "235px"
                            : screenWidth >= 1920
                              ? "255px"
                              : undefined,
                  }}
                >
                  <div
                    className="frame-7"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "14.53px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "19.3px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "26.64px"
                              : screenWidth >= 1920
                                ? "29px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "16px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "22px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "30px"
                              : screenWidth >= 1920
                                ? "32px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "5px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "7px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "10px"
                              : screenWidth >= 1920
                                ? "11px"
                                : undefined,
                    }}
                  >
                    <img
                      className="frame-8"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22.59px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "30px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "41.41px"
                                : screenWidth >= 1920
                                  ? "45.08px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22.58px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "29.99px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "41.41px"
                                : screenWidth >= 1920
                                  ? "45.07px"
                                  : undefined,
                      }}
                      alt="Frame"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-4.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-5.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-6.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/frame-39904-7.svg"
                                : undefined
                      }
                    />

                    <img
                      className="tether-usdt-seeklogo-2"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22.58px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "29.99px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "41.41px"
                                : screenWidth >= 1920
                                  ? "45.07px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22.58px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "29.99px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "41.41px"
                                : screenWidth >= 1920
                                  ? "45.07px"
                                  : undefined,
                      }}
                      alt="Tether usdt seeklogo"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-4.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-5.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-6.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/tether-usdt-seeklogo-7.svg"
                                : undefined
                      }
                    />

                    <div
                      className="frame-9"
                      style={{
                        border:
                          screenWidth >= 768 && screenWidth < 992
                            ? "1px solid"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "1.33px solid"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "1.84px solid"
                                : screenWidth >= 1920
                                  ? "2px solid"
                                  : undefined,
                        borderRadius:
                          screenWidth >= 768 && screenWidth < 992
                            ? "11.29px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "15px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "20.7px"
                                : screenWidth >= 1920
                                  ? "22.54px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22.58px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "29.99px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "41.41px"
                                : screenWidth >= 1920
                                  ? "45.07px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "22.58px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "29.99px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "41.41px"
                                : screenWidth >= 1920
                                  ? "45.07px"
                                  : undefined,
                      }}
                    >
                      <img
                        className="group-11"
                        style={{
                          height:
                            screenWidth >= 768 && screenWidth < 992
                              ? "19px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "25px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "34px"
                                  : screenWidth >= 1920
                                    ? "37px"
                                    : undefined,
                          left:
                            screenWidth >= 768 && screenWidth < 992
                              ? "5px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "6px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "8px"
                                  : screenWidth >= 1920
                                    ? "9px"
                                    : undefined,
                          top:
                            (screenWidth >= 768 && screenWidth < 992) ||
                            (screenWidth >= 992 && screenWidth < 1366)
                              ? "1px"
                              : (screenWidth >= 1366 && screenWidth < 1920) ||
                                  screenWidth >= 1920
                                ? "2px"
                                : undefined,
                          width:
                            screenWidth >= 768 && screenWidth < 992
                              ? "11px"
                              : screenWidth >= 992 && screenWidth < 1366
                                ? "15px"
                                : screenWidth >= 1366 && screenWidth < 1920
                                  ? "21px"
                                  : screenWidth >= 1920
                                    ? "23px"
                                    : undefined,
                        }}
                        alt="Group"
                        src={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-54-4@2x.png"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/group-54-5@2x.png"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/group-54-6@2x.png"
                                : screenWidth >= 1920
                                  ? "https://c.animaapp.com/N6qZcdUt/img/group-54-7@2x.png"
                                  : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="liquidity-2"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "266px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "353px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "488px"
                          : screenWidth >= 1920
                            ? "531px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "743px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "986px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "1362px"
                          : screenWidth >= 1920
                            ? "1482px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "135px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "179px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "248px"
                          : screenWidth >= 1920
                            ? "269px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "36px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "48px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "67px"
                          : screenWidth >= 1920
                            ? "73px"
                            : undefined,
                }}
                alt="Liquidity"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--4.svg"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--5.svg"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--6.svg"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/liquidity--7.svg"
                          : undefined
                }
              />

              <div
                className="frame-10"
                style={{
                  gap:
                    screenWidth >= 768 && screenWidth < 992
                      ? "14.03px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "18.63px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "25.72px"
                          : screenWidth >= 1920
                            ? "28px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "124px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "165px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "228px"
                          : screenWidth >= 1920
                            ? "248px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "68px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "91px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "125px"
                          : screenWidth >= 1920
                            ? "136px"
                            : undefined,
                }}
              >
                <div
                  className="rectangle-3"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "15.75px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "20.92px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "28.88px"
                            : screenWidth >= 1920
                              ? "31.44px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "135.78px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "180.34px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "248.98px"
                            : screenWidth >= 1920
                              ? "271px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-30"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.01px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.32px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.35px"
                            : screenWidth >= 1920
                              ? "8px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-31"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.01px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.32px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.35px"
                            : screenWidth >= 1920
                              ? "8px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-32"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.01px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.32px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.35px"
                            : screenWidth >= 1920
                              ? "8px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-33"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.01px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.32px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.35px"
                            : screenWidth >= 1920
                              ? "8px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-34"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.01px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.32px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.35px"
                            : screenWidth >= 1920
                              ? "8px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                  }}
                />

                <div
                  className="ellipse-35"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.01px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "5.32px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "7.35px"
                            : screenWidth >= 1920
                              ? "8px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                  }}
                />

                <div
                  className="rectangle-4"
                  style={{
                    border:
                      screenWidth >= 768 && screenWidth < 992
                        ? "1.05px solid"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1.39px solid"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1.93px solid"
                            : screenWidth >= 1920
                              ? "2.1px solid"
                              : undefined,
                    borderRadius:
                      screenWidth >= 768 && screenWidth < 992
                        ? "15.75px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "20.92px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "28.88px"
                            : screenWidth >= 1920
                              ? "31.44px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "8.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "10.65px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "14.7px"
                            : screenWidth >= 1920
                              ? "16px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "135.78px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "180.34px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "248.98px"
                            : screenWidth >= 1920
                              ? "271px"
                              : undefined,
                  }}
                />
              </div>

              <img
                className="img-4"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "22px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "30px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "41px"
                          : screenWidth >= 1920
                            ? "45px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "197px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "262px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "362px"
                          : screenWidth >= 1920
                            ? "393px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "300px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "398px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "550px"
                          : screenWidth >= 1920
                            ? "598px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "127px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "169px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "234px"
                          : screenWidth >= 1920
                            ? "254px"
                            : undefined,
                }}
                alt="Element"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/99---4.svg"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/99---5.svg"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/99---6.svg"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/99---7.svg"
                          : undefined
                }
              />

              <img
                className="group-12"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "159px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "211px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "292px"
                          : screenWidth >= 1920
                            ? "318px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "508px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "675px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "932px"
                          : screenWidth >= 1920
                            ? "1015px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "260px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "345px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "476px"
                          : screenWidth >= 1920
                            ? "518px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "39px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "52px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "72px"
                          : screenWidth >= 1920
                            ? "79px"
                            : undefined,
                }}
                alt="Group"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/group-50-4@2x.png"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-50-5@2x.png"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-50-6@2x.png"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-50-7@2x.png"
                          : undefined
                }
              />
            </div>
          )}
        </div>

        <div
          id="service-section"
          className="page-service"
          style={{
            height:
              screenWidth < 375
                ? "508px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "461px"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "463px"
                    : screenWidth >= 500 && screenWidth < 768
                      ? "445px"
                      : screenWidth >= 768 && screenWidth < 992
                        ? "505.05px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "670.77px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "926.1px"
                            : screenWidth >= 1920
                              ? "1008px"
                              : undefined,
            marginLeft:
              screenWidth < 375
                ? "-2.00px"
                : screenWidth >= 768 && screenWidth < 992
                  ? "-97.00px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "-142.83px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "-199.00px"
                      : undefined,
            marginRight:
              screenWidth < 375
                ? "-2.00px"
                : screenWidth >= 768 && screenWidth < 992
                  ? "-97.00px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "-142.83px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "-199.00px"
                      : undefined,
            width:
              screenWidth < 375
                ? "324px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "373px"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "412px"
                    : screenWidth >= 500 && screenWidth < 768
                      ? "500px"
                      : screenWidth >= 768 && screenWidth < 992
                        ? "962px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1277.66px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1764px"
                            : screenWidth >= 1920
                              ? "1920px"
                              : undefined,
          }}
        >
          <div
            className="frame-11"
            style={{
              height:
                screenWidth < 375
                  ? "289px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "334px"
                    : screenWidth >= 414 && screenWidth < 500
                      ? "368px"
                      : screenWidth >= 500 && screenWidth < 768
                        ? "447px"
                        : screenWidth >= 768 && screenWidth < 992
                          ? "505px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "671px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "926px"
                              : screenWidth >= 1920
                                ? "1008px"
                                : undefined,
              left:
                screenWidth < 375
                  ? "22px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "26px"
                    : screenWidth >= 414 && screenWidth < 500
                      ? "28px"
                      : screenWidth >= 500 && screenWidth < 768
                        ? "34px"
                        : screenWidth >= 768 && screenWidth < 992
                          ? "-154px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "-204px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "-282px"
                              : screenWidth >= 1920
                                ? "-307px"
                                : undefined,
              top:
                (screenWidth >= 375 && screenWidth < 414) || screenWidth < 375
                  ? "-1px"
                  : (screenWidth >= 414 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 768)
                    ? "-2px"
                    : (screenWidth >= 1366 && screenWidth < 1920) ||
                        screenWidth >= 1920 ||
                        (screenWidth >= 768 && screenWidth < 992) ||
                        (screenWidth >= 992 && screenWidth < 1366)
                      ? "0"
                      : undefined,
              width:
                screenWidth < 375
                  ? "252px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "291px"
                    : screenWidth >= 414 && screenWidth < 500
                      ? "321px"
                      : screenWidth >= 500 && screenWidth < 768
                        ? "390px"
                        : screenWidth >= 768 && screenWidth < 992
                          ? "593px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "788px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1088px"
                              : screenWidth >= 1920
                                ? "1184px"
                                : undefined,
            }}
          >
            {((screenWidth >= 375 && screenWidth < 414) ||
              (screenWidth >= 414 && screenWidth < 500) ||
              screenWidth < 375) && (
              <div
                className="frame-12"
                style={{
                  gap:
                    screenWidth < 375
                      ? "16px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "18px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "35px"
                          : undefined,
                  width:
                    screenWidth < 375
                      ? "252px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "291px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "321px"
                          : undefined,
                }}
              >
                <div
                  className="frame-13"
                  style={{
                    gap:
                      screenWidth < 375
                        ? "3px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "4px"
                          : undefined,
                  }}
                >
                  <div
                    className="frame-14"
                    style={{
                      gap:
                        screenWidth < 375
                          ? "3.87px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "4.46px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "4.92px"
                              : undefined,
                      padding:
                        screenWidth < 375
                          ? "1.55px 0px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "1.78px 0px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "1.97px 0px"
                              : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-10"
                      style={{
                        fontSize:
                          screenWidth < 375
                            ? "16px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "16.1px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "17.7px"
                                : undefined,
                        letterSpacing:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          screenWidth < 375
                            ? "0.08px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "0.09px"
                              : undefined,
                      }}
                    >
                      Liquidity provider
                    </div>
                  </div>

                  <p className="text-wrapper-11">
                    Our firm excels in sophisticated trading approaches,
                    leveraging cutting-edge technology and quantitative methods.
                    We offer market-making services with a custom trading engine
                    capable of millisecond reactions, ensuring optimal liquidity
                    provision. Our statistical arbitrage models employ complex
                    mathematical algorithms to identify and exploit
                    co-integrating relationships between assets.
                  </p>
                </div>

                <div className="frame-15">
                  <div
                    className="frame-16"
                    style={{
                      gap:
                        screenWidth < 375
                          ? "3.87px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "4.46px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "4.92px"
                              : undefined,
                      padding:
                        screenWidth < 375
                          ? "1.55px 0px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "1.78px 0px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "1.97px 0px"
                              : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-12"
                      style={{
                        fontSize:
                          screenWidth < 375
                            ? "16px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "16.1px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "17.7px"
                                : undefined,
                        letterSpacing:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          screenWidth < 375
                            ? "0.08px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "0.09px"
                              : undefined,
                      }}
                    >
                      Comprehensive Financial Services
                    </div>
                  </div>

                  <p className="text-wrapper-11">
                    We provide a wide array of financial services tailored to
                    the cryptocurrency ecosystem. In the exchange space, we
                    enhance liquidity while limiting volatility through
                    high-frequency and quantitative trading strategies. Our
                    asset management division employs a multi-strategy approach
                    to deliver consistent and uncorrelated returns from the
                    market.
                  </p>
                </div>

                <div
                  className="frame-17"
                  style={{
                    gap:
                      screenWidth < 375
                        ? "2px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "3px"
                          : undefined,
                  }}
                >
                  <div
                    className="frame-18"
                    style={{
                      gap:
                        screenWidth < 375
                          ? "3.87px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "4.46px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "4.92px"
                              : undefined,
                      padding:
                        screenWidth < 375
                          ? "1.55px 0px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "1.78px 0px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "1.97px 0px"
                              : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-13"
                      style={{
                        fontSize:
                          screenWidth < 375
                            ? "16px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "16.1px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "17.7px"
                                : undefined,
                        letterSpacing:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          screenWidth < 375
                            ? "0.08px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "0.09px"
                              : undefined,
                      }}
                    >
                      Technical Expertise and Optimization
                    </div>
                  </div>

                  <p className="text-wrapper-11">
                    Our technical prowess extends beyond trading to provide
                    valuable support and optimization services. We specialize in
                    enhancing trading systems, improving execution speed, and
                    building stable, robust trading infrastructure. Combined
                    with our trading acumen, positions us as a comprehensive
                    solution provider in the quantitative trading and
                    cryptocurrency market-making landscape.
                  </p>
                </div>
              </div>
            )}

            {screenWidth >= 500 && screenWidth < 768 && (
              <>
                <p className="text-wrapper-14">
                  Our firm excels in sophisticated trading approaches,
                  leveraging cutting-edge technology and quantitative methods.
                  We offer market-making services with a custom trading engine
                  capable of millisecond reactions, ensuring optimal liquidity
                  provision. Our statistical arbitrage models employ complex
                  mathematical algorithms to identify and exploit co-integrating
                  relationships between assets.
                </p>

                <p className="text-wrapper-15">
                  We provide a wide array of financial services tailored to the
                  cryptocurrency ecosystem. In the exchange space, we enhance
                  liquidity while limiting volatility through high-frequency and
                  quantitative trading strategies. Our asset management division
                  employs a multi-strategy approach to deliver consistent and
                  uncorrelated returns from the market.
                </p>

                <p className="text-wrapper-16">
                  Our technical prowess extends beyond trading to provide
                  valuable support and optimization services. We specialize in
                  enhancing trading systems, improving execution speed, and
                  building stable, robust trading infrastructure. Combined with
                  our trading acumen, positions us as a comprehensive solution
                  provider in the quantitative trading and cryptocurrency
                  market-making landscape.
                </p>

                <div className="frame-19">
                  <div className="text-wrapper-17">Liquidity provider</div>
                </div>

                <div className="frame-20">
                  <div className="text-wrapper-17">
                    Comprehensive Financial Services
                  </div>
                </div>

                <div className="frame-21">
                  <div className="text-wrapper-17">
                    Technical Expertise and Optimization
                  </div>
                </div>
              </>
            )}

            {((screenWidth >= 1366 && screenWidth < 1920) ||
              screenWidth >= 1920 ||
              (screenWidth >= 768 && screenWidth < 992) ||
              (screenWidth >= 992 && screenWidth < 1366)) && (
              <>
                <div
                  className="group-13"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "478px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "635px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "877px"
                            : screenWidth >= 1920
                              ? "954px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "27px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "36px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "50px"
                            : screenWidth >= 1920
                              ? "54px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "556px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "738px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1019px"
                            : screenWidth >= 1920
                              ? "1109px"
                              : undefined,
                  }}
                >
                  <div
                    className="overlap-group-3"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "478px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "635px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "877px"
                              : screenWidth >= 1920
                                ? "954px"
                                : undefined,
                    }}
                  >
                    {((screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)) && (
                      <LogoToriiiWhite317
                        className={`${screenWidth >= 768 && screenWidth < 992 && "class-5"} ${screenWidth >= 992 && screenWidth < 1366 && "class-6"}`}
                      />
                    )}

                    {screenWidth >= 1366 && screenWidth < 1920 && (
                      <LogoToriiiWhite318 className="logo-toriii-white-3-18" />
                    )}

                    {((screenWidth >= 1366 && screenWidth < 1920) ||
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)) && (
                      <LogoToriiiWhite
                        className={`${screenWidth >= 768 && screenWidth < 992 && "class-7"} ${screenWidth >= 992 && screenWidth < 1366 && "class-8"} ${screenWidth >= 1366 && screenWidth < 1920 && "class-9"}`}
                        logoToriiiWhite={
                          screenWidth >= 768 && screenWidth < 992
                            ? "https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-6-13.svg"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-6-14.svg"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-6-15.svg"
                                : undefined
                        }
                      />
                    )}

                    {screenWidth >= 1920 && (
                      <>
                        <LogoToriiiWhite319 className="logo-toriii-white-3-19" />
                        <LogoToriiiWhite
                          className="logo-toriii-white-6"
                          logoToriiiWhite="https://c.animaapp.com/N6qZcdUt/img/logo-toriii-white-6-16.svg"
                        />
                      </>
                    )}
                  </div>
                </div>

                <img
                  className="frame-22"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "281px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "373px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "514px"
                            : screenWidth >= 1920
                              ? "560px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "520px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "691px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "954px"
                            : screenWidth >= 1920
                              ? "1038px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "128px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "170px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "234px"
                            : screenWidth >= 1920
                              ? "255px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "73px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "97px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "134px"
                            : screenWidth >= 1920
                              ? "146px"
                              : undefined,
                  }}
                  alt="Frame"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/frame-39921.svg"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/frame-39921-1.svg"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39921-2.svg"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/frame-39921-3.svg"
                            : undefined
                  }
                />

                <img
                  className="group-14"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "81px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "108px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "149px"
                            : screenWidth >= 1920
                              ? "162px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "299px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "397px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "548px"
                            : screenWidth >= 1920
                              ? "596px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "131px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "174px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "241px"
                            : screenWidth >= 1920
                              ? "262px"
                              : undefined,
                  }}
                  alt="Group"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-39-5@2x.png"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-39-7@2x.png"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-39-9@2x.png"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-39-11@2x.png"
                            : undefined
                  }
                />
              </>
            )}
          </div>

          <div
            className="logo-list"
            style={{
              alignItems:
                (screenWidth >= 375 && screenWidth < 414) ||
                (screenWidth >= 414 && screenWidth < 500) ||
                screenWidth < 375
                  ? "flex-start"
                  : undefined,
              display:
                (screenWidth >= 375 && screenWidth < 414) ||
                (screenWidth >= 414 && screenWidth < 500) ||
                screenWidth < 375
                  ? "flex"
                  : undefined,
              flexDirection:
                (screenWidth >= 375 && screenWidth < 414) ||
                (screenWidth >= 414 && screenWidth < 500) ||
                screenWidth < 375
                  ? "column"
                  : undefined,
              gap:
                screenWidth < 375
                  ? "16px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "18px"
                    : screenWidth >= 414 && screenWidth < 500
                      ? "20px"
                      : undefined,
              height:
                screenWidth >= 500 && screenWidth < 768
                  ? "440px"
                  : screenWidth >= 768 && screenWidth < 992
                    ? "421px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "560px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "773px"
                        : screenWidth >= 1920
                          ? "841px"
                          : undefined,
              left:
                screenWidth < 375
                  ? "291px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "336px"
                    : screenWidth >= 414 && screenWidth < 500
                      ? "370px"
                      : screenWidth >= 500 && screenWidth < 768
                        ? "450px"
                        : screenWidth >= 768 && screenWidth < 992
                          ? "446px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "593px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "819px"
                              : screenWidth >= 1920
                                ? "891px"
                                : undefined,
              top:
                (screenWidth >= 375 && screenWidth < 414) ||
                (screenWidth >= 500 && screenWidth < 768) ||
                screenWidth < 375
                  ? "0"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "10px"
                    : screenWidth >= 768 && screenWidth < 992
                      ? "55px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "73px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "100px"
                          : screenWidth >= 1920
                            ? "109px"
                            : undefined,
              width:
                screenWidth < 375
                  ? "51px"
                  : screenWidth >= 375 && screenWidth < 414
                    ? "59px"
                    : screenWidth >= 414 && screenWidth < 500
                      ? "65px"
                      : screenWidth >= 500 && screenWidth < 768
                        ? "79px"
                        : screenWidth >= 768 && screenWidth < 992
                          ? "371px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "492px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "680px"
                              : screenWidth >= 1920
                                ? "740px"
                                : undefined,
            }}
          >
            {((screenWidth >= 375 && screenWidth < 414) ||
              (screenWidth >= 414 && screenWidth < 500) ||
              (screenWidth >= 500 && screenWidth < 768) ||
              screenWidth < 375) && (
              <LogoToriiiWhite34
                className={`${screenWidth >= 375 && screenWidth < 414 && "instance-node"} ${screenWidth >= 414 && screenWidth < 500 && "logo-toriii-white-2"} ${screenWidth >= 500 && screenWidth < 768 && "class-10"} ${screenWidth < 375 && "logo-toriii-white-3"}`}
              />
            )}

            {screenWidth < 375 && (
              <LogoToriiiWhite61 className="logo-toriii-white-3" />
            )}

            {screenWidth >= 375 && screenWidth < 414 && (
              <LogoToriiiWhite65 className="instance-node" />
            )}

            {((screenWidth >= 375 && screenWidth < 414) ||
              (screenWidth >= 500 && screenWidth < 768) ||
              screenWidth < 375) && (
              <LogoToriiiWhite34
                className={`${screenWidth >= 500 && screenWidth < 768 && "class-11"} ${screenWidth < 375 && "logo-toriii-white-3"} ${screenWidth >= 375 && screenWidth < 414 && "instance-node"}`}
              />
            )}

            {screenWidth >= 375 && screenWidth < 414 && (
              <>
                <LogoToriiiWhite65 className="instance-node" />
                <LogoToriiiWhite34 className="instance-node" />
                <LogoToriiiWhite65 className="instance-node" />
                <LogoToriiiWhite34 className="instance-node" />
              </>
            )}

            {screenWidth >= 414 && screenWidth < 500 && (
              <>
                <LogoToriiiWhite69 className="logo-toriii-white-2" />
                <LogoToriiiWhite34 className="logo-toriii-white-2" />
                <LogoToriiiWhite69 className="logo-toriii-white-2" />
                <LogoToriiiWhite34 className="logo-toriii-white-2" />
                <LogoToriiiWhite69 className="logo-toriii-white-2" />
              </>
            )}

            {screenWidth >= 500 && screenWidth < 768 && (
              <>
                <LogoToriiiWhite315 className="logo-toriii-white-3-15" />
                <LogoToriiiWhite611 className="logo-toriii-white-6-11" />
                <LogoToriiiWhite611 className="logo-toriii-white-6-12" />
              </>
            )}

            {((screenWidth >= 1366 && screenWidth < 1920) ||
              screenWidth >= 1920 ||
              (screenWidth >= 768 && screenWidth < 992) ||
              (screenWidth >= 992 && screenWidth < 1366)) && (
              <>
                <div
                  className="frame-23"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "375px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "498px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "687px"
                            : screenWidth >= 1920
                              ? "748px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "22px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "29px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "40px"
                            : screenWidth >= 1920
                              ? "44px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "22px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "29px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "40px"
                            : screenWidth >= 1920
                              ? "44px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "327px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "434px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "599px"
                            : screenWidth >= 1920
                              ? "652px"
                              : undefined,
                  }}
                >
                  <p
                    className="text-wrapper-18"
                    style={{
                      fontSize:
                        screenWidth >= 768 && screenWidth < 992
                          ? "10px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "13.3px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "18.4px"
                              : screenWidth >= 1920
                                ? "20px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "75px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "100px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "140px"
                              : screenWidth >= 1920
                                ? "150px"
                                : undefined,
                      letterSpacing:
                        screenWidth >= 768 && screenWidth < 992
                          ? "0.05px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "0.07px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "0.09px"
                              : screenWidth >= 1920
                                ? "0.10px"
                                : undefined,
                      lineHeight:
                        screenWidth >= 768 && screenWidth < 992
                          ? "15.0px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "20.0px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "27.6px"
                              : screenWidth >= 1920
                                ? "30px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "26px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "34px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "47px"
                              : screenWidth >= 1920
                                ? "51px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "326px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "433px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "598px"
                              : screenWidth >= 1920
                                ? "651px"
                                : undefined,
                    }}
                  >
                    Our firm excels in sophisticated trading approaches,
                    leveraging cutting-edge technology and quantitative methods.
                    We offer market-making services with a custom trading engine
                    capable of millisecond reactions, ensuring optimal liquidity
                    provision. Our statistical arbitrage models employ complex
                    mathematical algorithms to identify and exploit
                    co-integrating relationships between assets.
                  </p>

                  <p
                    className="text-wrapper-19"
                    style={{
                      fontSize:
                        screenWidth >= 768 && screenWidth < 992
                          ? "10px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "13.3px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "18.4px"
                              : screenWidth >= 1920
                                ? "20px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "75px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "100px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "140px"
                              : screenWidth >= 1920
                                ? "150px"
                                : undefined,
                      letterSpacing:
                        screenWidth >= 768 && screenWidth < 992
                          ? "0.05px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "0.07px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "0.09px"
                              : screenWidth >= 1920
                                ? "0.10px"
                                : undefined,
                      lineHeight:
                        screenWidth >= 768 && screenWidth < 992
                          ? "15.0px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "20.0px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "27.6px"
                              : screenWidth >= 1920
                                ? "30px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "162px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "216px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "298px"
                              : screenWidth >= 1920
                                ? "324px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "326px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "433px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "598px"
                              : screenWidth >= 1920
                                ? "651px"
                                : undefined,
                    }}
                  >
                    We provide a wide array of financial services tailored to
                    the cryptocurrency ecosystem. In the exchange space, we
                    enhance liquidity while limiting volatility through
                    high-frequency and quantitative trading strategies. Our
                    asset management division employs a multi-strategy approach
                    to deliver consistent and uncorrelated returns from the
                    market.
                  </p>

                  <p
                    className="text-wrapper-20"
                    style={{
                      fontSize:
                        screenWidth >= 768 && screenWidth < 992
                          ? "10px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "13.3px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "18.4px"
                              : screenWidth >= 1920
                                ? "20px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "75px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "100px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "140px"
                              : screenWidth >= 1920
                                ? "150px"
                                : undefined,
                      letterSpacing:
                        screenWidth >= 768 && screenWidth < 992
                          ? "0.05px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "0.07px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "0.09px"
                              : screenWidth >= 1920
                                ? "0.10px"
                                : undefined,
                      lineHeight:
                        screenWidth >= 768 && screenWidth < 992
                          ? "15.0px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "20.0px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "27.6px"
                              : screenWidth >= 1920
                                ? "30px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "299px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "397px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "548px"
                              : screenWidth >= 1920
                                ? "597px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "326px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "433px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "598px"
                              : screenWidth >= 1920
                                ? "651px"
                                : undefined,
                    }}
                  >
                    Our technical prowess extends beyond trading to provide
                    valuable support and optimization services. We specialize in
                    enhancing trading systems, improving execution speed, and
                    building stable, robust trading infrastructure. Combined
                    with our trading acumen, positions us as a comprehensive
                    solution provider in the quantitative trading and
                    cryptocurrency market-making landscape.
                  </p>

                  <div
                    className="frame-24"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "5.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "6.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "9.19px"
                              : screenWidth >= 1920
                                ? "10px"
                                : undefined,
                      padding:
                        screenWidth >= 768 && screenWidth < 992
                          ? "2px 0px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "2.66px 0px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3.67px 0px"
                              : screenWidth >= 1920
                                ? "4px 0px"
                                : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-21"
                      style={{
                        fontSize:
                          screenWidth >= 768 && screenWidth < 992
                            ? "18px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "24px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "33.1px"
                                : screenWidth >= 1920
                                  ? "36px"
                                  : undefined,
                        letterSpacing:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.09px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "0.12px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "0.17px"
                                : screenWidth >= 1920
                                  ? "0.18px"
                                  : undefined,
                      }}
                    >
                      Liquidity provider
                    </div>
                  </div>

                  <div
                    className="frame-25"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "5.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "6.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "9.19px"
                              : screenWidth >= 1920
                                ? "10px"
                                : undefined,
                      padding:
                        screenWidth >= 768 && screenWidth < 992
                          ? "2px 0px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "2.66px 0px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3.67px 0px"
                              : screenWidth >= 1920
                                ? "4px 0px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "140px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "186px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "256px"
                              : screenWidth >= 1920
                                ? "279px"
                                : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-22"
                      style={{
                        fontSize:
                          screenWidth >= 768 && screenWidth < 992
                            ? "18px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "24px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "33.1px"
                                : screenWidth >= 1920
                                  ? "36px"
                                  : undefined,
                        letterSpacing:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.09px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "0.12px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "0.17px"
                                : screenWidth >= 1920
                                  ? "0.18px"
                                  : undefined,
                      }}
                    >
                      Comprehensive Financial Services
                    </div>
                  </div>

                  <div
                    className="frame-26"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "5.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "6.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "9.19px"
                              : screenWidth >= 1920
                                ? "10px"
                                : undefined,
                      padding:
                        screenWidth >= 768 && screenWidth < 992
                          ? "2px 0px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "2.66px 0px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3.67px 0px"
                              : screenWidth >= 1920
                                ? "4px 0px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "275px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "365px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "503px"
                              : screenWidth >= 1920
                                ? "548px"
                                : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-23"
                      style={{
                        fontSize:
                          screenWidth >= 768 && screenWidth < 992
                            ? "18px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "24px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "33.1px"
                                : screenWidth >= 1920
                                  ? "36px"
                                  : undefined,
                        letterSpacing:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.09px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "0.12px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "0.17px"
                                : screenWidth >= 1920
                                  ? "0.18px"
                                  : undefined,
                      }}
                    >
                      Technical Expertise and Optimization
                    </div>
                  </div>
                </div>

                <img
                  className="group-15"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "421px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "560px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "773px"
                            : screenWidth >= 1920
                              ? "841px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "371px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "492px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "680px"
                            : screenWidth >= 1920
                              ? "740px"
                              : undefined,
                  }}
                  alt="Group"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-63@2x.png"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-63-1.png"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-63-2.png"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-63-3.png"
                            : undefined
                  }
                />
              </>
            )}

            {screenWidth < 375 && (
              <>
                <LogoToriiiWhite61 className="logo-toriii-white-3" />
                <LogoToriiiWhite34 className="logo-toriii-white-3" />
                <LogoToriiiWhite61 className="logo-toriii-white-3" />
                <LogoToriiiWhite34 className="logo-toriii-white-3" />
                <LogoToriiiWhite61 className="logo-toriii-white-3" />
                <LogoToriiiWhite34 className="logo-toriii-white-3" />
              </>
            )}
          </div>
        </div>

        <div
          id="liquidity-section"
          className="page-liquidity"
          style={{
            height:
              screenWidth < 375
                ? "495.65px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "571.76px"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "630.55px"
                    : screenWidth >= 500 && screenWidth < 768
                      ? "767px"
                      : screenWidth >= 768 && screenWidth < 992
                        ? "378.79px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "503.08px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "694.57px"
                            : screenWidth >= 1920
                              ? "756px"
                              : undefined,
            marginLeft:
              screenWidth < 375
                ? "-1.55px"
                : screenWidth >= 768 && screenWidth < 992
                  ? "-97.00px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "-142.83px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "-199.00px"
                      : undefined,
            marginRight:
              screenWidth < 375
                ? "-1.55px"
                : screenWidth >= 768 && screenWidth < 992
                  ? "-97.00px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "-142.83px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "-199.00px"
                      : undefined,
            width:
              screenWidth < 375
                ? "323.11px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "372.72px"
                  : screenWidth >= 414 && screenWidth < 500
                    ? "411.05px"
                    : screenWidth >= 500 && screenWidth < 768
                      ? "500px"
                      : screenWidth >= 768 && screenWidth < 992
                        ? "962px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "1277.66px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "1764px"
                            : screenWidth >= 1920
                              ? "1920px"
                              : undefined,
          }}
        >
          {((screenWidth >= 1366 && screenWidth < 1920) ||
            screenWidth >= 1920 ||
            (screenWidth >= 768 && screenWidth < 992) ||
            (screenWidth >= 992 && screenWidth < 1366)) && (
            <div
              className="overlap-7"
              style={{
                height:
                  screenWidth >= 768 && screenWidth < 992
                    ? "215px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "285px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "394px"
                        : screenWidth >= 1920
                          ? "429px"
                          : undefined,
                left:
                  screenWidth >= 768 && screenWidth < 992
                    ? "476px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "633px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "874px"
                        : screenWidth >= 1920
                          ? "951px"
                          : undefined,
                top:
                  screenWidth >= 768 && screenWidth < 992
                    ? "76px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "100px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "139px"
                        : screenWidth >= 1920
                          ? "151px"
                          : undefined,
                width:
                  screenWidth >= 768 && screenWidth < 992
                    ? "315px"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "419px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "578px"
                        : screenWidth >= 1920
                          ? "629px"
                          : undefined,
              }}
            >
              <div
                className="frame-27"
                style={{
                  gap:
                    screenWidth >= 768 && screenWidth < 992
                      ? "72px 27.57px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "72px 36.61px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "72px 50.55px"
                          : screenWidth >= 1920
                            ? "72px 55.02px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "6px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "8px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "11px"
                          : screenWidth >= 1920
                            ? "12px"
                            : undefined,
                  padding:
                    screenWidth >= 768 && screenWidth < 992
                      ? "27.06px 9.52px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "35.93px 12.64px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "49.61px 17.46px"
                          : screenWidth >= 1920
                            ? "54px 19px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "10px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "13px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "18px"
                          : screenWidth >= 1920
                            ? "20px"
                            : undefined,
                }}
              >
                <div
                  className="frame-28"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "142px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "188.6px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "260.38px"
                            : screenWidth >= 1920
                              ? "283.41px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "280.11px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "372.02px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "513.64px"
                            : screenWidth >= 1920
                              ? "559.06px"
                              : undefined,
                  }}
                >
                  <div
                    className="frame-29"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "27.57px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "36.61px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "50.55px"
                              : screenWidth >= 1920
                                ? "55.02px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "17px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "23px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "32px"
                              : screenWidth >= 1920
                                ? "34px"
                                : undefined,
                    }}
                  >
                    {screenWidth >= 768 && screenWidth < 992 && (
                      <>
                        <LogoBinanceWhite2 className="logo-binance-white" />
                        <LogoGateioWhite5 className="logo-gateio-white" />
                      </>
                    )}

                    {screenWidth >= 992 && screenWidth < 1366 && (
                      <>
                        <LogoBinanceWhite4 className="logo-binance-white-4" />
                        <LogoGateioWhite6 className="logo-gateio-white-6" />
                      </>
                    )}

                    {screenWidth >= 1366 && screenWidth < 1920 && (
                      <>
                        <LogoBinanceWhite7 className="logo-binance-white-7" />
                        <LogoGateioWhite7 className="logo-gateio-white-7" />
                      </>
                    )}

                    {screenWidth >= 1920 && (
                      <>
                        <LogoBinanceWhite8 className="logo-binance-white-8" />
                        <LogoGateioWhite8 className="logo-gateio-white-8" />
                      </>
                    )}
                  </div>

                  <div
                    className="frame-30"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "27.57px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "36.61px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "50.55px"
                              : screenWidth >= 1920
                                ? "55.02px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "28px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "37px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "51px"
                              : screenWidth >= 1920
                                ? "55px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "59px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "79px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "109px"
                              : screenWidth >= 1920
                                ? "118px"
                                : undefined,
                    }}
                  >
                    <img
                      className="logo-max-white"
                      style={{
                        height:
                          screenWidth >= 992 && screenWidth < 1366
                            ? "30.92px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "42.69px"
                              : screenWidth >= 1920
                                ? "46.47px"
                                : screenWidth >= 768 && screenWidth < 992
                                  ? "23.28px"
                                  : undefined,
                        width:
                          screenWidth >= 992 && screenWidth < 1366
                            ? "144.71px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "199.79px"
                              : screenWidth >= 1920
                                ? "217.46px"
                                : screenWidth >= 768 && screenWidth < 992
                                  ? "108.96px"
                                  : undefined,
                      }}
                      alt="Logo max white"
                      src={
                        screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-5.svg"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-6.svg"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-7.svg"
                              : screenWidth >= 768 && screenWidth < 992
                                ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-4.svg"
                                : undefined
                      }
                    />

                    {screenWidth >= 768 && screenWidth < 992 && (
                      <LogoBitmexWhite5 className="logo-bitmex-white" />
                    )}

                    {screenWidth >= 992 && screenWidth < 1366 && (
                      <LogoBitmexWhite6 className="logo-bitmex-white-6" />
                    )}

                    {screenWidth >= 1366 && screenWidth < 1920 && (
                      <LogoBitmexWhite7 className="logo-bitmex-white-7" />
                    )}

                    {screenWidth >= 1920 && (
                      <LogoBitmexWhite8 className="logo-bitmex-white-8" />
                    )}
                  </div>

                  <div
                    className="frame-31"
                    style={{
                      gap:
                        screenWidth >= 768 && screenWidth < 992
                          ? "17.54px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "23.29px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "32.16px"
                              : screenWidth >= 1920
                                ? "35px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "5px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "6px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "8px"
                              : screenWidth >= 1920
                                ? "9px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "119px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "158px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "218px"
                              : screenWidth >= 1920
                                ? "237px"
                                : undefined,
                    }}
                  >
                    {screenWidth >= 768 && screenWidth < 992 && (
                      <LogoAceWhite5 className="logo-ace-white" />
                    )}

                    {screenWidth >= 992 && screenWidth < 1366 && (
                      <LogoAceWhite4 className="logo-ace-white-4" />
                    )}

                    {((screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)) && (
                      <LogoWooxWhite2
                        className={`${screenWidth >= 768 && screenWidth < 992 && "class-12"} ${screenWidth >= 992 && screenWidth < 1366 && "class-13"}`}
                      />
                    )}

                    {screenWidth >= 992 && screenWidth < 1366 && (
                      <LogoBitoproWhite6 className="logo-bitopro-white" />
                    )}

                    {screenWidth >= 1366 && screenWidth < 1920 && (
                      <LogoAceWhite7 className="logo-ace-white-7" />
                    )}

                    {screenWidth >= 1920 && (
                      <LogoAceWhite8 className="logo-ace-white-8" />
                    )}

                    {((screenWidth >= 1366 && screenWidth < 1920) ||
                      screenWidth >= 1920) && (
                      <LogoWooxWhite3
                        className={`${screenWidth >= 1920 && "class-14"} ${screenWidth >= 1366 && screenWidth < 1920 && "class-15"}`}
                      />
                    )}

                    {screenWidth >= 1920 && (
                      <LogoBitoproWhite8 className="logo-bitopro-white-8" />
                    )}

                    {((screenWidth >= 1366 && screenWidth < 1920) ||
                      (screenWidth >= 768 && screenWidth < 992)) && (
                      <LogoBitoproWhite7
                        className={`${screenWidth >= 768 && screenWidth < 992 && "class-16"} ${screenWidth >= 1366 && screenWidth < 1920 && "class-17"}`}
                      />
                    )}
                  </div>
                </div>
              </div>

              <img
                className="group-16"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "215px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "285px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "394px"
                          : screenWidth >= 1920
                            ? "429px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "315px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "419px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "578px"
                          : screenWidth >= 1920
                            ? "629px"
                            : undefined,
                }}
                alt="Group"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/group-51-4@2x.png"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-51-5@2x.png"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-51-6.png"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-51-7.png"
                          : undefined
                }
              />
            </div>
          )}

          <img
            className="frame-32"
            style={{
              height:
                screenWidth >= 768 && screenWidth < 992
                  ? "53px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "70px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "97px"
                      : screenWidth >= 1920
                        ? "106px"
                        : screenWidth < 375
                          ? "118px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "136px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "150px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "171px"
                                : undefined,
              left:
                screenWidth >= 768 && screenWidth < 992
                  ? "159px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "212px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "292px"
                      : screenWidth >= 1920
                        ? "318px"
                        : screenWidth < 375
                          ? "237px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "272px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "303px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "369px"
                                : undefined,
              top:
                (screenWidth >= 1366 && screenWidth < 1920) ||
                screenWidth >= 1920 ||
                (screenWidth >= 768 && screenWidth < 992) ||
                (screenWidth >= 992 && screenWidth < 1366)
                  ? "1px"
                  : screenWidth < 375
                    ? "47px"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "54px"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "55px"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "82px"
                          : undefined,
              width:
                screenWidth >= 768 && screenWidth < 992
                  ? "142px"
                  : screenWidth >= 992 && screenWidth < 1366
                    ? "188px"
                    : screenWidth >= 1366 && screenWidth < 1920
                      ? "260px"
                      : screenWidth >= 1920
                        ? "283px"
                        : screenWidth < 375
                          ? "44px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "51px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "56px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "64px"
                                : undefined,
            }}
            alt="Frame"
            src={
              screenWidth >= 768 && screenWidth < 992
                ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-4.svg"
                : screenWidth >= 992 && screenWidth < 1366
                  ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-5.svg"
                  : screenWidth >= 1366 && screenWidth < 1920
                    ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-6.svg"
                    : screenWidth >= 1920
                      ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-7.svg"
                      : screenWidth < 375
                        ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912.svg"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-1.svg"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-2.svg"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/frame-39912-3.svg"
                              : undefined
            }
          />

          {((screenWidth >= 1366 && screenWidth < 1920) ||
            screenWidth >= 1920 ||
            (screenWidth >= 768 && screenWidth < 992) ||
            (screenWidth >= 992 && screenWidth < 1366)) && (
            <>
              <div
                className="frame-33"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "53px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "71px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "98px"
                          : screenWidth >= 1920
                            ? "106px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "319px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "423px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "584px"
                          : screenWidth >= 1920
                            ? "636px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "474px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "629px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "868px"
                          : screenWidth >= 1920
                            ? "945px"
                            : undefined,
                }}
              >
                <div
                  className="overlap-group-4"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "53px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "71px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "98px"
                            : screenWidth >= 1920
                              ? "106px"
                              : undefined,
                  }}
                >
                  <div
                    className="group-17"
                    style={{
                      backgroundImage:
                        screenWidth >= 768 && screenWidth < 992
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-4.svg)"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-5.svg)"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-6.svg)"
                              : screenWidth >= 1920
                                ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-7.svg)"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "53px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "70px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "97px"
                              : screenWidth >= 1920
                                ? "106px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "474px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "629px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "868px"
                              : screenWidth >= 1920
                                ? "945px"
                                : undefined,
                    }}
                  >
                    <img
                      className="RL"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "6px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "8px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "11px"
                                : screenWidth >= 1920
                                  ? "12px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "9px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "12px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "17px"
                                : screenWidth >= 1920
                                  ? "18px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "5px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "6px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "8px"
                                : screenWidth >= 1920
                                  ? "9px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "11px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "15px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "20px"
                                : screenWidth >= 1920
                                  ? "22px"
                                  : undefined,
                      }}
                      alt="Rl"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/rl-4.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/rl-5.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/rl-6.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/rl-7.svg"
                                : undefined
                      }
                    />

                    <div
                      className="ellipse-36"
                      style={{
                        borderRadius:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.88px/0.97px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "1.17px/1.29px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "1.61px/1.78px"
                                : screenWidth >= 1920
                                  ? "1.75px/1.94px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "2px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "3px"
                              : (screenWidth >= 1366 && screenWidth < 1920) ||
                                  screenWidth >= 1920
                                ? "4px"
                                : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "467px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "620px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "856px"
                                : screenWidth >= 1920
                                  ? "932px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "39px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "52px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "71px"
                                : screenWidth >= 1920
                                  ? "78px"
                                  : undefined,
                        width:
                          (screenWidth >= 768 && screenWidth < 992) ||
                          (screenWidth >= 992 && screenWidth < 1366)
                            ? "2px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3px"
                              : screenWidth >= 1920
                                ? "4px"
                                : undefined,
                      }}
                    />

                    <div
                      className="ellipse-37"
                      style={{
                        borderRadius:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.88px/0.97px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "1.17px/1.29px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "1.61px/1.78px"
                                : screenWidth >= 1920
                                  ? "1.75px/1.94px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "2px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "3px"
                              : (screenWidth >= 1366 && screenWidth < 1920) ||
                                  screenWidth >= 1920
                                ? "4px"
                                : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "463px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "614px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "848px"
                                : screenWidth >= 1920
                                  ? "923px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "44px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "58px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "80px"
                                : screenWidth >= 1920
                                  ? "87px"
                                  : undefined,
                        width:
                          (screenWidth >= 768 && screenWidth < 992) ||
                          (screenWidth >= 992 && screenWidth < 1366)
                            ? "2px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3px"
                              : screenWidth >= 1920
                                ? "4px"
                                : undefined,
                      }}
                    />

                    <div
                      className="ellipse-38"
                      style={{
                        borderRadius:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.88px/0.97px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "1.17px/1.29px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "1.61px/1.78px"
                                : screenWidth >= 1920
                                  ? "1.75px/1.94px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "2px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "3px"
                              : (screenWidth >= 1366 && screenWidth < 1920) ||
                                  screenWidth >= 1920
                                ? "4px"
                                : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "457px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "607px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "839px"
                                : screenWidth >= 1920
                                  ? "913px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "44px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "58px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "80px"
                                : screenWidth >= 1920
                                  ? "87px"
                                  : undefined,
                        width:
                          (screenWidth >= 768 && screenWidth < 992) ||
                          (screenWidth >= 992 && screenWidth < 1366)
                            ? "2px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3px"
                              : screenWidth >= 1920
                                ? "4px"
                                : undefined,
                      }}
                    />

                    <div
                      className="ellipse-39"
                      style={{
                        borderRadius:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.88px/0.97px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "1.17px/1.29px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "1.61px/1.78px"
                                : screenWidth >= 1920
                                  ? "1.75px/1.94px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "2px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "3px"
                              : (screenWidth >= 1366 && screenWidth < 1920) ||
                                  screenWidth >= 1920
                                ? "4px"
                                : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "466px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "619px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "855px"
                                : screenWidth >= 1920
                                  ? "930px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "34px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "45px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "62px"
                                : screenWidth >= 1920
                                  ? "68px"
                                  : undefined,
                        width:
                          (screenWidth >= 768 && screenWidth < 992) ||
                          (screenWidth >= 992 && screenWidth < 1366)
                            ? "2px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3px"
                              : screenWidth >= 1920
                                ? "4px"
                                : undefined,
                      }}
                    />

                    <div
                      className="ellipse-40"
                      style={{
                        borderRadius:
                          screenWidth >= 768 && screenWidth < 992
                            ? "0.88px/0.97px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "1.17px/1.29px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "1.61px/1.78px"
                                : screenWidth >= 1920
                                  ? "1.75px/1.94px"
                                  : undefined,
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "2px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "3px"
                              : (screenWidth >= 1366 && screenWidth < 1920) ||
                                  screenWidth >= 1920
                                ? "4px"
                                : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "462px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "613px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "847px"
                                : screenWidth >= 1920
                                  ? "922px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "39px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "52px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "71px"
                                : screenWidth >= 1920
                                  ? "78px"
                                  : undefined,
                        width:
                          (screenWidth >= 768 && screenWidth < 992) ||
                          (screenWidth >= 992 && screenWidth < 1366)
                            ? "2px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "3px"
                              : screenWidth >= 1920
                                ? "4px"
                                : undefined,
                      }}
                    />
                  </div>

                  <img
                    className="vector-5"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "30px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "40px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "55px"
                              : screenWidth >= 1920
                                ? "60px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "23px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "31px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "42px"
                              : screenWidth >= 1920
                                ? "46px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "231px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "307px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "423px"
                              : screenWidth >= 1920
                                ? "461px"
                                : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth >= 768 && screenWidth < 992
                        ? "https://c.animaapp.com/N6qZcdUt/img/vector-18@2x.png"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-21@2x.png"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-24@2x.png"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/vector-27@2x.png"
                              : undefined
                    }
                  />
                </div>
              </div>

              <div
                className="frame-34"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "66px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "88px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "121px"
                          : screenWidth >= 1920
                            ? "132px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "500px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "663px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "916px"
                          : screenWidth >= 1920
                            ? "997px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "311px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "413px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "570px"
                          : screenWidth >= 1920
                            ? "620px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "302px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "401px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "554px"
                          : screenWidth >= 1920
                            ? "603px"
                            : undefined,
                }}
              >
                <div
                  className="frame-35"
                  style={{
                    gap:
                      screenWidth >= 768 && screenWidth < 992
                        ? "6.7px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "8.89px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "12.28px"
                            : screenWidth >= 1920
                              ? "13.36px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "23px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "31px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "43px"
                            : screenWidth >= 1920
                              ? "47px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "99px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "131px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "181px"
                            : screenWidth >= 1920
                              ? "197px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "41px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "54px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "75px"
                            : screenWidth >= 1920
                              ? "82px"
                              : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-24"
                    style={{
                      fontSize:
                        screenWidth >= 768 && screenWidth < 992
                          ? "26.8px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "35.6px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "49.1px"
                              : screenWidth >= 1920
                                ? "53.5px"
                                : undefined,
                      marginBottom:
                        screenWidth >= 768 && screenWidth < 992
                          ? "-1.11px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "-1.55px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "-1.79px"
                              : screenWidth >= 1920
                                ? "-1.78px"
                                : undefined,
                      marginTop:
                        screenWidth >= 768 && screenWidth < 992
                          ? "-2.45px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "-3.33px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "-4.24px"
                              : screenWidth >= 1920
                                ? "-4.45px"
                                : undefined,
                    }}
                  >
                    TORIII TECHNOLOGY CORP.
                  </div>
                </div>

                <p
                  className="text-wrapper-25"
                  style={{
                    fontSize:
                      screenWidth >= 768 && screenWidth < 992
                        ? "4.8px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "6.3px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "8.7px"
                            : screenWidth >= 1920
                              ? "9.5px"
                              : undefined,
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "28px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "36px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "52px"
                            : screenWidth >= 1920
                              ? "56px"
                              : undefined,
                    left:
                      screenWidth >= 768 && screenWidth < 992
                        ? "99px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "131px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "181px"
                            : screenWidth >= 1920
                              ? "197px"
                              : undefined,
                    letterSpacing:
                      screenWidth >= 768 && screenWidth < 992
                        ? "0.02px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "0.03px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "0.04px"
                            : screenWidth >= 1920
                              ? "0.05px"
                              : undefined,
                    lineHeight:
                      screenWidth >= 768 && screenWidth < 992
                        ? "7.1px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "9.5px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "13.1px"
                            : screenWidth >= 1920
                              ? "14.2px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "204px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "270px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "373px"
                            : screenWidth >= 1920
                              ? "406px"
                              : undefined,
                  }}
                >
                  Our firm excels in sophisticated trading approaches,
                  leveraging cutting-edge technology and quantitative methods.
                  We offer market-making services with a custom trading engine
                  capable of millisecond reactions, ensuring optimal liquidity
                  provision. Our statistical arbitrage models employ complex
                  mathematical algorithms to identify and exploit co-integrating
                  relationships between assets.
                </p>

                <img
                  className="path"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "64px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "85px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "117px"
                            : screenWidth >= 1920
                              ? "127px"
                              : undefined,
                    top:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "3px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "5px"
                          : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "68px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "90px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "124px"
                            : screenWidth >= 1920
                              ? "135px"
                              : undefined,
                  }}
                  alt="Path"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/path7214-4.svg"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/path7214-5.svg"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/path7214-6.svg"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/path7214-7.svg"
                            : undefined
                  }
                />
              </div>

              <div
                className="frame-36"
                style={{
                  height:
                    screenWidth >= 768 && screenWidth < 992
                      ? "293px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "389px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "537px"
                          : screenWidth >= 1920
                            ? "585px"
                            : undefined,
                  left:
                    screenWidth >= 768 && screenWidth < 992
                      ? "160px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "213px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "294px"
                          : screenWidth >= 1920
                            ? "320px"
                            : undefined,
                  top:
                    screenWidth >= 768 && screenWidth < 992
                      ? "86px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "114px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "157px"
                          : screenWidth >= 1920
                            ? "171px"
                            : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "297px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "394px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "544px"
                          : screenWidth >= 1920
                            ? "592px"
                            : undefined,
                }}
              >
                <img
                  className="liquidity-providing"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "84px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "112px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "154px"
                            : screenWidth >= 1920
                              ? "168px"
                              : undefined,
                    left:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "2px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "3px"
                          : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "35px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "47px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "65px"
                            : screenWidth >= 1920
                              ? "70px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "274px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "364px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "503px"
                            : screenWidth >= 1920
                              ? "547px"
                              : undefined,
                  }}
                  alt="Liquidity providing"
                  src={
                    screenWidth >= 768 && screenWidth < 992
                      ? "https://c.animaapp.com/N6qZcdUt/img/liquidity-providing.svg"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "https://c.animaapp.com/N6qZcdUt/img/liquidity-providing-1.svg"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/liquidity-providing-2.svg"
                          : screenWidth >= 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/liquidity-providing-3.svg"
                            : undefined
                  }
                />

                <div
                  className="overlap-8"
                  style={{
                    height:
                      screenWidth >= 768 && screenWidth < 992
                        ? "152px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "202px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "279px"
                            : screenWidth >= 1920
                              ? "304px"
                              : undefined,
                    top:
                      screenWidth >= 768 && screenWidth < 992
                        ? "141px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "187px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "258px"
                            : screenWidth >= 1920
                              ? "281px"
                              : undefined,
                    width:
                      screenWidth >= 768 && screenWidth < 992
                        ? "297px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "394px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "544px"
                            : screenWidth >= 1920
                              ? "592px"
                              : undefined,
                  }}
                >
                  <div
                    className="overlap-9"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "152px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "202px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "279px"
                              : screenWidth >= 1920
                                ? "304px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "297px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "394px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "544px"
                              : screenWidth >= 1920
                                ? "592px"
                                : undefined,
                    }}
                  >
                    <img
                      className="vector-6"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "55px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "73px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "100px"
                                : screenWidth >= 1920
                                  ? "109px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "84px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "111px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "153px"
                                : screenWidth >= 1920
                                  ? "167px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "287px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "382px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "527px"
                                : screenWidth >= 1920
                                  ? "574px"
                                  : undefined,
                      }}
                      alt="Vector"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-13-1.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-13-2.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/vector-13-3.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/vector-13-4.svg"
                                : undefined
                      }
                    />

                    <img
                      className="group-18"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "127px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "168px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "232px"
                                : screenWidth >= 1920
                                  ? "253px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "48px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "64px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "88px"
                                : screenWidth >= 1920
                                  ? "96px"
                                  : undefined,
                      }}
                      alt="Group"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-57@2x.png"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-57-1@2x.png"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/group-57-2@2x.png"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/group-57-3@2x.png"
                                : undefined
                      }
                    />

                    <img
                      className="vector-7"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "53px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "71px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "97px"
                                : screenWidth >= 1920
                                  ? "106px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "84px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "112px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "154px"
                                : screenWidth >= 1920
                                  ? "168px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "99px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "132px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "182px"
                                : screenWidth >= 1920
                                  ? "198px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "212px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "282px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "390px"
                                : screenWidth >= 1920
                                  ? "424px"
                                  : undefined,
                      }}
                      alt="Vector"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-19.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-22.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/vector-25.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/vector-28.svg"
                                : undefined
                      }
                    />

                    <img
                      className="vector-8"
                      style={{
                        height:
                          screenWidth >= 768 && screenWidth < 992
                            ? "6px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "8px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "11px"
                                : screenWidth >= 1920
                                  ? "12px"
                                  : undefined,
                        left:
                          screenWidth >= 768 && screenWidth < 992
                            ? "192px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "255px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "352px"
                                : screenWidth >= 1920
                                  ? "383px"
                                  : undefined,
                        top:
                          screenWidth >= 768 && screenWidth < 992
                            ? "99px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "132px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "182px"
                                : screenWidth >= 1920
                                  ? "198px"
                                  : undefined,
                        width:
                          screenWidth >= 768 && screenWidth < 992
                            ? "102px"
                            : screenWidth >= 992 && screenWidth < 1366
                              ? "136px"
                              : screenWidth >= 1366 && screenWidth < 1920
                                ? "187px"
                                : screenWidth >= 1920
                                  ? "204px"
                                  : undefined,
                      }}
                      alt="Vector"
                      src={
                        screenWidth >= 768 && screenWidth < 992
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-10-1.svg"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-10-2.svg"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/vector-10-3.svg"
                              : screenWidth >= 1920
                                ? "https://c.animaapp.com/N6qZcdUt/img/vector-10-4.svg"
                                : undefined
                      }
                    />
                  </div>

                  <img
                    className="frame-37"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "20px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "27px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "37px"
                              : screenWidth >= 1920
                                ? "40px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "82px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "108px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "150px"
                              : screenWidth >= 1920
                                ? "163px"
                                : undefined,
                      top:
                        screenWidth >= 768 && screenWidth < 992
                          ? "54px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "71px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "98px"
                              : screenWidth >= 1920
                                ? "107px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "202px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "269px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "371px"
                              : screenWidth >= 1920
                                ? "404px"
                                : undefined,
                    }}
                    alt="Frame"
                    src={
                      screenWidth >= 768 && screenWidth < 992
                        ? "https://c.animaapp.com/N6qZcdUt/img/frame-39913.svg"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39913-1.svg"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/frame-39913-2.svg"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/frame-39913-3.svg"
                              : undefined
                    }
                  />

                  <img
                    className="img-5"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "40px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "53px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "73px"
                              : screenWidth >= 1920
                                ? "80px"
                                : undefined,
                      left:
                        screenWidth >= 768 && screenWidth < 992
                          ? "69px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "91px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "126px"
                              : screenWidth >= 1920
                                ? "137px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "218px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "289px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "400px"
                              : screenWidth >= 1920
                                ? "435px"
                                : undefined,
                    }}
                    alt="Element"
                    src={
                      screenWidth >= 768 && screenWidth < 992
                        ? "https://c.animaapp.com/N6qZcdUt/img/----1.svg"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/----1-1.svg"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/----1-2.svg"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/----1-3.svg"
                              : undefined
                    }
                  />
                </div>

                <div
                  className="frame-38"
                  style={{
                    gap:
                      screenWidth >= 768 && screenWidth < 992
                        ? "14.03px"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "18.63px"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "25.72px"
                            : screenWidth >= 1920
                              ? "28px"
                              : undefined,
                    left:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "2px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "3px"
                          : undefined,
                  }}
                >
                  <img
                    className="rectangle-5"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "65.14px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "86.51px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "119.44px"
                              : screenWidth >= 1920
                                ? "130px"
                                : undefined,
                    }}
                    alt="Rectangle"
                    src={
                      screenWidth >= 768 && screenWidth < 992
                        ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-46.svg"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-46-1.svg"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-46-2.svg"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-46-3.svg"
                              : undefined
                    }
                  />

                  <div
                    className="ellipse-41"
                    style={{
                      border:
                        screenWidth >= 768 && screenWidth < 992
                          ? "1.05px solid"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "1.39px solid"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1.93px solid"
                              : screenWidth >= 1920
                                ? "2.1px solid"
                                : undefined,
                      borderRadius:
                        screenWidth >= 768 && screenWidth < 992
                          ? "4.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "5.32px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "7.35px"
                              : screenWidth >= 1920
                                ? "8px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                    }}
                  />

                  <div
                    className="ellipse-42"
                    style={{
                      border:
                        screenWidth >= 768 && screenWidth < 992
                          ? "1.05px solid"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "1.39px solid"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1.93px solid"
                              : screenWidth >= 1920
                                ? "2.1px solid"
                                : undefined,
                      borderRadius:
                        screenWidth >= 768 && screenWidth < 992
                          ? "4.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "5.32px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "7.35px"
                              : screenWidth >= 1920
                                ? "8px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                    }}
                  />

                  <div
                    className="ellipse-43"
                    style={{
                      border:
                        screenWidth >= 768 && screenWidth < 992
                          ? "1.05px solid"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "1.39px solid"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1.93px solid"
                              : screenWidth >= 1920
                                ? "2.1px solid"
                                : undefined,
                      borderRadius:
                        screenWidth >= 768 && screenWidth < 992
                          ? "4.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "5.32px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "7.35px"
                              : screenWidth >= 1920
                                ? "8px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                    }}
                  />

                  <div
                    className="ellipse-44"
                    style={{
                      border:
                        screenWidth >= 768 && screenWidth < 992
                          ? "1.05px solid"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "1.39px solid"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1.93px solid"
                              : screenWidth >= 1920
                                ? "2.1px solid"
                                : undefined,
                      borderRadius:
                        screenWidth >= 768 && screenWidth < 992
                          ? "4.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "5.32px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "7.35px"
                              : screenWidth >= 1920
                                ? "8px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                    }}
                  />

                  <div
                    className="ellipse-45"
                    style={{
                      border:
                        screenWidth >= 768 && screenWidth < 992
                          ? "1.05px solid"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "1.39px solid"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1.93px solid"
                              : screenWidth >= 1920
                                ? "2.1px solid"
                                : undefined,
                      borderRadius:
                        screenWidth >= 768 && screenWidth < 992
                          ? "4.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "5.32px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "7.35px"
                              : screenWidth >= 1920
                                ? "8px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                    }}
                  />

                  <div
                    className="ellipse-46"
                    style={{
                      border:
                        screenWidth >= 768 && screenWidth < 992
                          ? "1.05px solid"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "1.39px solid"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "1.93px solid"
                              : screenWidth >= 1920
                                ? "2.1px solid"
                                : undefined,
                      borderRadius:
                        screenWidth >= 768 && screenWidth < 992
                          ? "4.01px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "5.32px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "7.35px"
                              : screenWidth >= 1920
                                ? "8px"
                                : undefined,
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                    }}
                  />

                  <img
                    className="rectangle-6"
                    style={{
                      height:
                        screenWidth >= 768 && screenWidth < 992
                          ? "8.02px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "10.65px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "14.7px"
                              : screenWidth >= 1920
                                ? "16px"
                                : undefined,
                      width:
                        screenWidth >= 768 && screenWidth < 992
                          ? "65.14px"
                          : screenWidth >= 992 && screenWidth < 1366
                            ? "86.51px"
                            : screenWidth >= 1366 && screenWidth < 1920
                              ? "119.44px"
                              : screenWidth >= 1920
                                ? "130px"
                                : undefined,
                    }}
                    alt="Rectangle"
                    src={
                      screenWidth >= 768 && screenWidth < 992
                        ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-53.svg"
                        : screenWidth >= 992 && screenWidth < 1366
                          ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-53-1.svg"
                          : screenWidth >= 1366 && screenWidth < 1920
                            ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-53-2.svg"
                            : screenWidth >= 1920
                              ? "https://c.animaapp.com/N6qZcdUt/img/rectangle-53-3.svg"
                              : undefined
                    }
                  />
                </div>
              </div>
            </>
          )}

          {((screenWidth >= 375 && screenWidth < 414) ||
            (screenWidth >= 414 && screenWidth < 500) ||
            (screenWidth >= 500 && screenWidth < 768) ||
            screenWidth < 375) && (
            <>
              <div
                className="frame-39"
                style={{
                  height:
                    screenWidth < 375
                      ? "41px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "47px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "56px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "72px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "236px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "270px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "299px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "358px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "177px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "204px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "216px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "270px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "48px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "55px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "66px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "85px"
                            : undefined,
                }}
              >
                <div
                  className="overlap-group-5"
                  style={{
                    backgroundImage:
                      screenWidth < 375
                        ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-1.svg)"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-3.svg)"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-5.svg)"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "url(https://c.animaapp.com/N6qZcdUt/img/polygon-1-7.svg)"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "48px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "55px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "66px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "85px"
                              : undefined,
                  }}
                >
                  <img
                    className="polygon"
                    style={{
                      height:
                        screenWidth < 375
                          ? "40px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "46px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "55px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "71px"
                                : undefined,
                      left:
                        screenWidth < 375
                          ? "4px"
                          : (screenWidth >= 375 && screenWidth < 414) ||
                              (screenWidth >= 414 && screenWidth < 500)
                            ? "5px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "7px"
                              : undefined,
                      top:
                        screenWidth < 375
                          ? "4px"
                          : (screenWidth >= 375 && screenWidth < 414) ||
                              (screenWidth >= 414 && screenWidth < 500)
                            ? "5px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "7px"
                              : undefined,
                      width:
                        screenWidth < 375
                          ? "40px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "46px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "55px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "71px"
                                : undefined,
                    }}
                    alt="Polygon"
                    src={
                      screenWidth < 375
                        ? "https://c.animaapp.com/N6qZcdUt/img/polygon-2-1.svg"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "https://c.animaapp.com/N6qZcdUt/img/polygon-2-3.svg"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/polygon-2-5.svg"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/polygon-2-7.svg"
                              : undefined
                    }
                  />

                  <img
                    className="img-6"
                    style={{
                      height:
                        screenWidth < 375
                          ? "18px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "21px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "25px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "32px"
                                : undefined,
                      left:
                        screenWidth < 375
                          ? "22px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "25px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "30px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "39px"
                                : undefined,
                      top:
                        screenWidth < 375
                          ? "13px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "15px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "18px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "24px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "4px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "5px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "6px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "8px"
                                : undefined,
                    }}
                    alt="Img"
                    src={
                      screenWidth < 375
                        ? "https://c.animaapp.com/N6qZcdUt/img/--1.svg"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "https://c.animaapp.com/N6qZcdUt/img/--3.svg"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/--5.svg"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/--7.svg"
                              : undefined
                    }
                  />
                </div>
              </div>

              <div
                className="frame-40"
                style={{
                  height:
                    screenWidth < 375
                      ? "31px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "36px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "40px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "48px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "22px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "25px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "28px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "34px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "278px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "321px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "354px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "430px"
                            : undefined,
                }}
              >
                <div
                  className="overlap-10"
                  style={{
                    height:
                      screenWidth < 375
                        ? "31px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "36px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "40px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "48px"
                              : undefined,
                  }}
                >
                  <div
                    className="group-19"
                    style={{
                      backgroundImage:
                        screenWidth < 375
                          ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14.svg)"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-1.svg)"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-2.svg)"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "url(https://c.animaapp.com/N6qZcdUt/img/vector-14-3.svg)"
                                : undefined,
                      height:
                        screenWidth < 375
                          ? "31px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "36px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "40px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "48px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "278px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "321px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "354px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "430px"
                                : undefined,
                    }}
                  >
                    <img
                      className="RL-2"
                      style={{
                        height:
                          screenWidth < 375
                            ? "3px"
                            : (screenWidth >= 375 && screenWidth < 414) ||
                                (screenWidth >= 414 && screenWidth < 500)
                              ? "4px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "5px"
                                : undefined,
                        left:
                          screenWidth < 375
                            ? "5px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "6px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "7px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "8px"
                                  : undefined,
                        top:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "3px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "4px"
                              : undefined,
                        width:
                          screenWidth < 375
                            ? "6px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "7px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "8px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "10px"
                                  : undefined,
                      }}
                      alt="Rl"
                      src={
                        screenWidth < 375
                          ? "https://c.animaapp.com/N6qZcdUt/img/rl.svg"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "https://c.animaapp.com/N6qZcdUt/img/rl-1.svg"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "https://c.animaapp.com/N6qZcdUt/img/rl-2.svg"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "https://c.animaapp.com/N6qZcdUt/img/rl-3.svg"
                                : undefined
                      }
                    />

                    <div
                      className="ellipse-47"
                      style={{
                        borderRadius:
                          screenWidth < 375
                            ? "0.52px/0.57px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "0.59px/0.66px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "0.66px/0.73px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "0.8px/0.88px"
                                  : undefined,
                        height:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                        left:
                          screenWidth < 375
                            ? "274px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "316px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "349px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "424px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "23px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "26px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "29px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "35px"
                                  : undefined,
                        width:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                      }}
                    />

                    <div
                      className="ellipse-48"
                      style={{
                        borderRadius:
                          screenWidth < 375
                            ? "0.52px/0.57px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "0.59px/0.66px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "0.66px/0.73px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "0.8px/0.88px"
                                  : undefined,
                        height:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                        left:
                          screenWidth < 375
                            ? "271px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "313px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "345px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "420px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "26px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "30px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "33px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "40px"
                                  : undefined,
                        width:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                      }}
                    />

                    <div
                      className="ellipse-49"
                      style={{
                        borderRadius:
                          screenWidth < 375
                            ? "0.52px/0.57px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "0.59px/0.66px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "0.66px/0.73px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "0.8px/0.88px"
                                  : undefined,
                        height:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                        left:
                          screenWidth < 375
                            ? "268px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "310px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "341px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "415px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "26px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "30px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "33px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "40px"
                                  : undefined,
                        width:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                      }}
                    />

                    <div
                      className="ellipse-50"
                      style={{
                        borderRadius:
                          screenWidth < 375
                            ? "0.52px/0.57px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "0.59px/0.66px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "0.66px/0.73px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "0.8px/0.88px"
                                  : undefined,
                        height:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                        left:
                          screenWidth < 375
                            ? "273px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "315px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "348px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "423px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "20px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "23px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "25px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "31px"
                                  : undefined,
                        width:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                      }}
                    />

                    <div
                      className="ellipse-51"
                      style={{
                        borderRadius:
                          screenWidth < 375
                            ? "0.52px/0.57px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "0.59px/0.66px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "0.66px/0.73px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "0.8px/0.88px"
                                  : undefined,
                        height:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                        left:
                          screenWidth < 375
                            ? "271px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "313px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "345px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "419px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "23px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "26px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "29px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "35px"
                                  : undefined,
                        width:
                          (screenWidth >= 375 && screenWidth < 414) ||
                          (screenWidth >= 414 && screenWidth < 500) ||
                          screenWidth < 375
                            ? "1px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "2px"
                              : undefined,
                      }}
                    />
                  </div>

                  <img
                    className="vector-9"
                    style={{
                      height:
                        screenWidth < 375
                          ? "18px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "20px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "23px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "27px"
                                : undefined,
                      top:
                        screenWidth < 375
                          ? "14px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "16px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "17px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "21px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "135px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "156px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "172px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "210px"
                                : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth < 375
                        ? "https://c.animaapp.com/N6qZcdUt/img/vector-3@2x.png"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "https://c.animaapp.com/N6qZcdUt/img/vector-7@2x.png"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/vector-11@2x.png"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/vector-16@2x.png"
                              : undefined
                    }
                  />
                </div>
              </div>

              <div
                className="frame-41"
                style={{
                  height:
                    screenWidth < 375
                      ? "64px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "74px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "81px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "99px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "17px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "20px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "22px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "27px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "428px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "494px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "543px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "662px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "292px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "337px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "372px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "452px"
                            : undefined,
                }}
              >
                <div
                  className="frame-42"
                  style={{
                    gap:
                      screenWidth < 375
                        ? "6.47px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "7.47px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "8.24px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "10.02px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "23px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "26px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "29px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "35px"
                              : undefined,
                    left:
                      screenWidth < 375
                        ? "89px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "103px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "113px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "138px"
                              : undefined,
                    top:
                      screenWidth < 375
                        ? "40px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "46px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "50px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "61px"
                              : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-26"
                    style={{
                      fontSize:
                        screenWidth < 375
                          ? "25.9px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "29.9px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "32.9px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "40.1px"
                                : undefined,
                      marginBottom:
                        screenWidth < 375
                          ? "-1.02px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "-1.18px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "-1.26px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "-1.47px"
                                : undefined,
                      marginTop:
                        screenWidth < 375
                          ? "-2.32px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "-2.68px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "-2.91px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "-3.47px"
                                : undefined,
                    }}
                  >
                    TORIII TECHNOLOGY CORP.
                  </div>
                </div>

                <p
                  className="text-wrapper-27"
                  style={{
                    fontSize:
                      screenWidth < 375
                        ? "4.6px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "5.3px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "5.8px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "7.1px"
                              : undefined,
                    height:
                      screenWidth < 375
                        ? "28px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "32px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "36px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "44px"
                              : undefined,
                    left:
                      screenWidth < 375
                        ? "89px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "103px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "113px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "138px"
                              : undefined,
                    letterSpacing:
                      screenWidth < 375
                        ? "0.02px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "0.03px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "0.04px"
                            : undefined,
                    lineHeight:
                      screenWidth < 375
                        ? "6.9px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "8.0px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "8.8px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "10.7px"
                              : undefined,
                    top:
                      screenWidth < 375
                        ? "0"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500) ||
                            (screenWidth >= 500 && screenWidth < 768)
                          ? "-1px"
                          : undefined,
                    width:
                      screenWidth < 375
                        ? "197px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "227px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "250px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "305px"
                              : undefined,
                  }}
                >
                  Our firm excels in sophisticated trading approaches,
                  leveraging cutting-edge technology and quantitative methods.
                  We offer market-making services with a custom trading engine
                  capable of millisecond reactions, ensuring optimal liquidity
                  provision. Our statistical arbitrage models employ complex
                  mathematical algorithms to identify and exploit co-integrating
                  relationships between assets.
                </p>

                <img
                  className="path-2"
                  style={{
                    height:
                      screenWidth < 375
                        ? "54px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "62px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "68px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "83px"
                              : undefined,
                    left:
                      screenWidth < 375
                        ? "13px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "15px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "16px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "20px"
                              : undefined,
                    top:
                      screenWidth < 375
                        ? "5px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "6px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "8px"
                            : undefined,
                    width:
                      screenWidth < 375
                        ? "57px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "66px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "72px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "88px"
                              : undefined,
                  }}
                  alt="Path"
                  src={
                    screenWidth < 375
                      ? "https://c.animaapp.com/N6qZcdUt/img/path7214.svg"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "https://c.animaapp.com/N6qZcdUt/img/path7214-1.svg"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "https://c.animaapp.com/N6qZcdUt/img/path7214-2.svg"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "https://c.animaapp.com/N6qZcdUt/img/path7214-3.svg"
                            : undefined
                  }
                />
              </div>

              <img
                className="frame-43"
                style={{
                  height:
                    screenWidth < 375
                      ? "170px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "196px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "216px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "263px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "34px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "39px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "40px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "52px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "43px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "51px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "55px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "69px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "192px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "221px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "244px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "297px"
                            : undefined,
                }}
                alt="Frame"
                src={
                  screenWidth < 375
                    ? "https://c.animaapp.com/N6qZcdUt/img/frame-39923.svg"
                    : screenWidth >= 375 && screenWidth < 414
                      ? "https://c.animaapp.com/N6qZcdUt/img/frame-39923-1.svg"
                      : screenWidth >= 414 && screenWidth < 500
                        ? "https://c.animaapp.com/N6qZcdUt/img/frame-39923-2.svg"
                        : screenWidth >= 500 && screenWidth < 768
                          ? "https://c.animaapp.com/N6qZcdUt/img/frame-39923-3.svg"
                          : undefined
                }
              />

              <div
                className="overlap-11"
                style={{
                  height:
                    screenWidth < 375
                      ? "189px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "218px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "241px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "293px"
                            : undefined,
                  left:
                    screenWidth < 375
                      ? "23px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "26px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "29px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "35px"
                            : undefined,
                  top:
                    screenWidth < 375
                      ? "224px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "259px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "285px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "347px"
                            : undefined,
                  width:
                    screenWidth < 375
                      ? "277px"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "320px"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "353px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "429px"
                            : undefined,
                }}
              >
                <div
                  className="frame-44"
                  style={{
                    gap:
                      screenWidth < 375
                        ? "72px 24.25px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "72px 27.97px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "72px 30.85px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "72px 37.53px"
                              : undefined,
                    left:
                      screenWidth < 375
                        ? "5px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "6px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "7px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "8px"
                              : undefined,
                    padding:
                      screenWidth < 375
                        ? "23.8px 8.37px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "27.45px 9.66px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "30.28px 10.65px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "36.83px 12.96px"
                              : undefined,
                    top:
                      screenWidth < 375
                        ? "9px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "10px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "11px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "14px"
                              : undefined,
                  }}
                >
                  <div
                    className="frame-45"
                    style={{
                      height:
                        screenWidth < 375
                          ? "124.91px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "144.09px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "158.91px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "193.3px"
                                : undefined,
                      width:
                        screenWidth < 375
                          ? "246.4px"
                          : screenWidth >= 375 && screenWidth < 414
                            ? "284.24px"
                            : screenWidth >= 414 && screenWidth < 500
                              ? "313.46px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "381.3px"
                                : undefined,
                    }}
                  >
                    <div
                      className="frame-46"
                      style={{
                        gap:
                          screenWidth < 375
                            ? "24.25px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "27.97px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "30.85px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "37.53px"
                                  : undefined,
                        left:
                          screenWidth < 375
                            ? "15px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "17px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "19px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "23px"
                                  : undefined,
                      }}
                    >
                      {screenWidth < 375 && (
                        <>
                          <LogoBinanceWhite1 className="logo-binance-white-1" />
                          <LogoGateioWhite1 className="logo-gateio-white-1" />
                        </>
                      )}

                      {screenWidth >= 375 && screenWidth < 414 && (
                        <>
                          <LogoBinanceWhite2 className="logo-binance-white-2" />
                          <LogoGateioWhite2 className="logo-gateio-white-2" />
                        </>
                      )}

                      {screenWidth >= 414 && screenWidth < 500 && (
                        <>
                          <LogoBinanceWhite3 className="logo-binance-white-3" />
                          <LogoGateioWhite3 className="logo-gateio-white-3" />
                        </>
                      )}

                      {screenWidth >= 500 && screenWidth < 768 && (
                        <>
                          <LogoBinanceWhite4 className="logo-binance-white-6" />
                          <LogoGateioWhite4 className="logo-gateio-white-4" />
                        </>
                      )}
                    </div>

                    <div
                      className="frame-47"
                      style={{
                        gap:
                          screenWidth < 375
                            ? "24.25px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "27.97px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "30.85px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "37.53px"
                                  : undefined,
                        left:
                          screenWidth < 375
                            ? "24px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "28px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "31px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "38px"
                                  : undefined,
                        top:
                          screenWidth < 375
                            ? "52px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "60px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "66px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "81px"
                                  : undefined,
                      }}
                    >
                      <img
                        className="logo-max-white-2"
                        style={{
                          height:
                            screenWidth >= 414 && screenWidth < 500
                              ? "26.06px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "31.69px"
                                : screenWidth < 375
                                  ? "20.45px"
                                  : screenWidth >= 375 && screenWidth < 414
                                    ? "23.63px"
                                    : undefined,
                          width:
                            screenWidth >= 414 && screenWidth < 500
                              ? "121.93px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "148.32px"
                                : screenWidth < 375
                                  ? "95.71px"
                                  : screenWidth >= 375 && screenWidth < 414
                                    ? "110.56px"
                                    : undefined,
                        }}
                        alt="Logo max white"
                        src={
                          screenWidth >= 414 && screenWidth < 500
                            ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-2.svg"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-3.svg"
                              : screenWidth < 375
                                ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white.svg"
                                : screenWidth >= 375 && screenWidth < 414
                                  ? "https://c.animaapp.com/N6qZcdUt/img/logo-max-white-1.svg"
                                  : undefined
                        }
                      />

                      {((screenWidth >= 375 && screenWidth < 414) ||
                        screenWidth < 375) && (
                        <LogoBitmexWhite5
                          className={`${screenWidth < 375 && "class-18"} ${screenWidth >= 375 && screenWidth < 414 && "class-19"}`}
                        />
                      )}

                      {screenWidth >= 414 && screenWidth < 500 && (
                        <LogoBitmexWhite3 className="logo-bitmex-white-3" />
                      )}

                      {screenWidth >= 500 && screenWidth < 768 && (
                        <LogoBitmexWhite4 className="logo-bitmex-white-4" />
                      )}
                    </div>

                    <div
                      className="frame-48"
                      style={{
                        gap:
                          screenWidth < 375
                            ? "15.43px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "17.79px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "19.62px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "23.87px"
                                  : undefined,
                        left:
                          screenWidth < 375
                            ? "4px"
                            : (screenWidth >= 375 && screenWidth < 414) ||
                                (screenWidth >= 414 && screenWidth < 500)
                              ? "5px"
                              : screenWidth >= 500 && screenWidth < 768
                                ? "6px"
                                : undefined,
                        top:
                          screenWidth < 375
                            ? "104px"
                            : screenWidth >= 375 && screenWidth < 414
                              ? "120px"
                              : screenWidth >= 414 && screenWidth < 500
                                ? "133px"
                                : screenWidth >= 500 && screenWidth < 768
                                  ? "162px"
                                  : undefined,
                      }}
                    >
                      {screenWidth < 375 && (
                        <LogoAceWhite1 className="logo-ace-white-1" />
                      )}

                      {screenWidth >= 375 && screenWidth < 414 && (
                        <LogoAceWhite5 className="logo-ace-white-5" />
                      )}

                      {((screenWidth >= 375 && screenWidth < 414) ||
                        screenWidth < 375) && (
                        <LogoWooxWhite2
                          className={`${screenWidth < 375 && "class-20"} ${screenWidth >= 375 && screenWidth < 414 && "class-21"}`}
                        />
                      )}

                      {screenWidth >= 375 && screenWidth < 414 && (
                        <LogoBitoproWhite2 className="logo-bitopro-white-2" />
                      )}

                      {screenWidth >= 414 && screenWidth < 500 && (
                        <LogoAceWhite3 className="logo-ace-white-3" />
                      )}

                      {screenWidth >= 500 && screenWidth < 768 && (
                        <LogoAceWhite4 className="logo-ace-white-6" />
                      )}

                      {((screenWidth >= 414 && screenWidth < 500) ||
                        (screenWidth >= 500 && screenWidth < 768)) && (
                        <LogoWooxWhite3
                          className={`${screenWidth >= 500 && screenWidth < 768 && "class-22"} ${screenWidth >= 414 && screenWidth < 500 && "class-23"}`}
                        />
                      )}

                      {screenWidth >= 500 && screenWidth < 768 && (
                        <LogoBitoproWhite8 className="logo-bitopro-white-4" />
                      )}

                      {screenWidth < 375 && (
                        <LogoBitoproWhite1 className="logo-bitopro-white-1" />
                      )}

                      {screenWidth >= 414 && screenWidth < 500 && (
                        <LogoBitoproWhite6 className="logo-bitopro-white-6" />
                      )}
                    </div>
                  </div>
                </div>

                <img
                  className="group-20"
                  style={{
                    height:
                      screenWidth < 375
                        ? "189px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "218px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "241px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "293px"
                              : undefined,
                    width:
                      screenWidth < 375
                        ? "277px"
                        : screenWidth >= 375 && screenWidth < 414
                          ? "320px"
                          : screenWidth >= 414 && screenWidth < 500
                            ? "353px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "429px"
                              : undefined,
                  }}
                  alt="Group"
                  src={
                    screenWidth < 375
                      ? "https://c.animaapp.com/N6qZcdUt/img/group-51@2x.png"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "https://c.animaapp.com/N6qZcdUt/img/group-51-1@2x.png"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "https://c.animaapp.com/N6qZcdUt/img/group-51-2@2x.png"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "https://c.animaapp.com/N6qZcdUt/img/group-51-3@2x.png"
                            : undefined
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>

      <footer
        className="footer"
        style={{
          padding:
            (screenWidth >= 1366 && screenWidth < 1920) ||
            screenWidth >= 1920 ||
            (screenWidth >= 768 && screenWidth < 992) ||
            (screenWidth >= 992 && screenWidth < 1366)
              ? "16px"
              : undefined,
        }}
      >
        <div
          className="footer-container"
          style={{
            borderRadius:
              (screenWidth >= 375 && screenWidth < 414) ||
              (screenWidth >= 414 && screenWidth < 500) ||
              (screenWidth >= 500 && screenWidth < 768) ||
              screenWidth < 375
                ? "18px 18px 0px 0px"
                : (screenWidth >= 1366 && screenWidth < 1920) ||
                    screenWidth >= 1920 ||
                    (screenWidth >= 768 && screenWidth < 992) ||
                    (screenWidth >= 992 && screenWidth < 1366)
                  ? "16px"
                  : undefined,
            gap:
              screenWidth < 375
                ? "48px"
                : screenWidth >= 375 && screenWidth < 414
                  ? "64px"
                  : (screenWidth >= 414 && screenWidth < 500) ||
                      (screenWidth >= 500 && screenWidth < 768)
                    ? "100px"
                    : undefined,
            justifyContent:
              (screenWidth >= 375 && screenWidth < 414) ||
              (screenWidth >= 414 && screenWidth < 500) ||
              (screenWidth >= 500 && screenWidth < 768) ||
              screenWidth < 375
                ? "center"
                : (screenWidth >= 1366 && screenWidth < 1920) ||
                    screenWidth >= 1920 ||
                    (screenWidth >= 768 && screenWidth < 992) ||
                    (screenWidth >= 992 && screenWidth < 1366)
                  ? "space-between"
                  : undefined,
            padding:
              (screenWidth >= 375 && screenWidth < 414) || screenWidth < 375
                ? "18px 0px"
                : screenWidth >= 414 && screenWidth < 500
                  ? "18px 34px"
                  : (screenWidth >= 1366 && screenWidth < 1920) ||
                      (screenWidth >= 500 && screenWidth < 768) ||
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                    ? "26px 34px"
                    : screenWidth >= 1920
                      ? "26px 79px"
                      : undefined,
          }}
        >
          {((screenWidth >= 375 && screenWidth < 414) ||
            (screenWidth >= 414 && screenWidth < 500) ||
            (screenWidth >= 500 && screenWidth < 768) ||
            screenWidth < 375) && (
            <>
              <div
                className="cc"
                style={{
                  marginLeft:
                    screenWidth >= 414 && screenWidth < 500
                      ? "-6.00px"
                      : undefined,
                }}
              >
                <p
                  className="text-wrapper-28"
                  style={{
                    fontSize:
                      screenWidth < 375
                        ? "10px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "12px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "14px"
                            : undefined,
                    letterSpacing:
                      screenWidth < 375
                        ? "0.05px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "0.06px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "0.07px"
                            : undefined,
                  }}
                >
                  © 2024 Toriii Technology Corp.
                </p>
              </div>

              <div
                className="email"
                style={{
                  gap:
                    (screenWidth >= 375 && screenWidth < 414) ||
                    screenWidth < 375
                      ? "4px"
                      : (screenWidth >= 414 && screenWidth < 500) ||
                          (screenWidth >= 500 && screenWidth < 768)
                        ? "8px"
                        : undefined,
                  marginRight:
                    screenWidth >= 414 && screenWidth < 500
                      ? "-6.00px"
                      : undefined,
                }}
              >
                <img
                  className="email-icon"
                  style={{
                    height:
                      screenWidth < 375
                        ? "10.75px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "12.75px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "16px"
                            : undefined,
                    width:
                      screenWidth < 375
                        ? "14.33px"
                        : (screenWidth >= 375 && screenWidth < 414) ||
                            (screenWidth >= 414 && screenWidth < 500)
                          ? "17px"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "21.33px"
                            : undefined,
                  }}
                  alt="Email icon"
                  src={
                    screenWidth < 375
                      ? "https://c.animaapp.com/N6qZcdUt/img/email-icon.svg"
                      : screenWidth >= 375 && screenWidth < 414
                        ? "https://c.animaapp.com/N6qZcdUt/img/email-icon-1.svg"
                        : screenWidth >= 414 && screenWidth < 500
                          ? "https://c.animaapp.com/N6qZcdUt/img/email-icon-2.svg"
                          : screenWidth >= 500 && screenWidth < 768
                            ? "https://c.animaapp.com/N6qZcdUt/img/email-icon-3.svg"
                            : undefined
                  }
                />

                <div className="text-wrapper-28">
                  <div
                    className="text-wrapper-30"
                    style={{
                      fontSize:
                        screenWidth < 375
                          ? "10px"
                          : (screenWidth >= 375 && screenWidth < 414) ||
                              (screenWidth >= 414 && screenWidth < 500)
                            ? "12px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "14px"
                              : undefined,
                      letterSpacing:
                        screenWidth < 375
                          ? "0.05px"
                          : (screenWidth >= 375 && screenWidth < 414) ||
                              (screenWidth >= 414 && screenWidth < 500)
                            ? "0.06px"
                            : screenWidth >= 500 && screenWidth < 768
                              ? "0.07px"
                              : undefined,
                    }}
                  >
                    Email: contact@toriii.tech
                  </div>
                </div>
              </div>
            </>
          )}

          {((screenWidth >= 1366 && screenWidth < 1920) ||
            screenWidth >= 1920 ||
            (screenWidth >= 768 && screenWidth < 992) ||
            (screenWidth >= 992 && screenWidth < 1366)) && (
            <>
              <div className="cc-2">
                <p
                  className="text-wrapper-29"
                  style={{
                    fontSize:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "16px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "20px"
                          : undefined,
                    letterSpacing:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "0.08px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "0.10px"
                          : undefined,
                  }}
                >
                  © 2024 Toriii Technology Corp.
                </p>
              </div>

              <img
                className="stroke-design"
                style={{
                  height:
                    (screenWidth >= 768 && screenWidth < 992) ||
                    (screenWidth >= 992 && screenWidth < 1366)
                      ? "6px"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "12px"
                        : screenWidth >= 1920
                          ? "10px"
                          : undefined,
                  width:
                    screenWidth >= 768 && screenWidth < 992
                      ? "107px"
                      : screenWidth >= 992 && screenWidth < 1366
                        ? "182px"
                        : screenWidth >= 1366 && screenWidth < 1920
                          ? "301px"
                          : screenWidth >= 1920
                            ? "376px"
                            : undefined,
                }}
                alt="Stroke design"
                src={
                  screenWidth >= 768 && screenWidth < 992
                    ? "https://c.animaapp.com/N6qZcdUt/img/stroke-design.svg"
                    : screenWidth >= 992 && screenWidth < 1366
                      ? "https://c.animaapp.com/N6qZcdUt/img/stroke-design-1.svg"
                      : screenWidth >= 1366 && screenWidth < 1920
                        ? "https://c.animaapp.com/N6qZcdUt/img/stroke-design-2.svg"
                        : screenWidth >= 1920
                          ? "https://c.animaapp.com/N6qZcdUt/img/stroke-design-3.svg"
                          : undefined
                }
              />

              <div className="cc-3">
                <div
                  className="text-wrapper-30"
                  style={{
                    fontSize:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "16px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "20px"
                          : undefined,
                    letterSpacing:
                      (screenWidth >= 768 && screenWidth < 992) ||
                      (screenWidth >= 992 && screenWidth < 1366)
                        ? "0.08px"
                        : (screenWidth >= 1366 && screenWidth < 1920) ||
                            screenWidth >= 1920
                          ? "0.10px"
                          : undefined,
                  }}
                >
                  Email: contact@toriii.tech
                </div>
              </div>
            </>
          )}
        </div>
      </footer>
    </div>
  );
};
