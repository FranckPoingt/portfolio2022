import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const snow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(650px);
  }
`;

const astronaut = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const BoxOfStar = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  transform: translateY(0px);
  height: 700px;

  &.box-of-star1 {
    animation: ${snow} 5s linear infinite;
  }

  &.box-of-star2 {
    animation: ${snow} 5s -1.64s linear infinite;
  }

  &.box-of-star3 {
    animation: ${snow} 5s -2.30s linear infinite;
  }

  &.box-of-star4 {
    animation: ${snow} 5s -3.30s linear infinite;
  }
`;

export const Star = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #FFF;
  position: absolute;
  z-index: 10;
  opacity: 0.7;

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
    z-index: 10;
    top: 80px;
    left: 70px;
    opacity: .7;
  }

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 170px;
    opacity: .9;
  }
`;

export const StarPosition = styled.div`
  position: absolute;

  &.star-position1 {
    top: 30px;
    left: 20px;
  }

  &.star-position2 {
    top: 110px;
    left: 250px;
  }

  &.star-position3 {
    top: 60px;
    left: 570px;
  }

  &.star-position4 {
    top: 120px;
    left: 900px;
  }

  &.star-position5 {
    top: 20px;
    left: 1120px;
  }

  &.star-position6 {
    top: 90px;
    left: 1280px;
  }

  &.star-position7 {
    top: 30px;
    left: 1480px;
  }
`;

export const Astronaut = styled.div`
  width: 250px;
  height: 300px;
  position: absolute;
  z-index: 11;
  top: calc(50% - 150px);
  left: calc(50% - 125px);
  animation: ${astronaut} 5s linear infinite;
`;

export const Schoolbag = styled.div`
  width: 100px;
  height: 150px;
  position: absolute;
  z-index: 1;
  top: calc(50% - 75px);
  left: calc(50% - 50px);
  background-color: #94b7ca;
  border-radius: 50px 50px 0 0 / 30px 30px 0 0;
`;

export const Head = styled.div`
width: 97px;
  height: 80px;
  position: absolute;
  z-index: 3;
  background: -webkit-linear-gradient(left, #e3e8eb 0%, #e3e8eb 50%, #fbfdfa 50%, #fbfdfa 100%);
  border-radius: 50%;
  top: 34px;
  left: calc(50% - 47.5px);

  &:after {
    content: "";
    width: 60px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 30px);
    background: -webkit-linear-gradient(top, #15aece 0%, #15aece 50%, #0391bf 50%, #0391bf 100%);
    border-radius: 15px;
  }

  &:before {
    content: "";
    width: 12px;
    height: 25px;
    position: absolute;
    top: calc(50% - 12.5px);
    left: -4px;
    background-color: #618095;
    border-radius: 5px;
    box-shadow: 92px 0px 0px #618095;
  }
`;

export const Body = styled.div`
  width: 85px;
  height: 100px;
  position: absolute;
  z-index: 2;
  background-color: #fffbff;
  border-radius: 40px / 20px;
  top: 105px;
  left: calc(50% - 41px);
  background: -webkit-linear-gradient(left, #e3e8eb 0%, #e3e8eb 50%, #fbfdfa 50%, #fbfdfa 100%);
`;

export const Panel = styled.div`
  width: 60px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: calc(50% - 30px);
  background-color: #b7cceb;

  &:before {
    content: "";
    width: 30px;
    height: 5px;
    position: absolute;
    top: 9px;
    left: 7px;
    background-color: #fbfdfa;
    box-shadow: 0px 9px 0px #fbfdfa, 0px 18px 0px #fbfdfa;
  }

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    top: 9px;
    right: 7px;
    background-color: #fbfdfa;
    border-radius: 50%;
    box-shadow: 0px 14px 0px 2px #fbfdfa;
  }
`;

export const Arm = styled.div`
  width: 80px;
  height: 30px;
  position: absolute;
  top: 121px;
  z-index: 2;

  &.arm-left {
    left: 30px;
  background-color: #e3e8eb;
  border-radius: 0 0 0 39px;
  
  &:before {
    content: "";
  width: 30px;
  height: 70px;
  position: absolute;
  top: -40px;
  border-radius: 50px 50px 0px 120px / 50px 50px 0 110px;
  left: 0;
  background-color: #e3e8eb;
  }

  &:after {
    content: "";
  width: 30px;
  height: 10px;
  position: absolute;
  top: -24px;
  background-color: #6e91a4;
  left: 0;
  }
  }

  &.arm-right {
    right: 30px;
  background-color: #fbfdfa;
  border-radius: 0 0 39px 0;

  &:before {
    content: "";
  width: 30px;
  height: 70px;
  position: absolute;
  top: -40px;
  border-radius: 50px 50px 120px 0 / 50px 50px 110px 0;
  right: 0;
  background-color: #fbfdfa;
  }

  &:after {
    content: "";
  width: 30px;
  height: 10px;
  position: absolute;
  top: -24px;
  right: 0;
  background-color: #b6d2e0;
  }
  }
`;

export const Leg = styled.div`
  width: 30px;
  height: 40px;
  position: absolute;
  z-index: 2;
  bottom: 70px;

  &.leg-left {
    left: 76px;
  background-color: #e3e8eb;
  transform: rotate(20deg);

  &:before {
    content: "";
  width: 50px;
  height: 25px;
  position: absolute;
  bottom: -26px;
  left: -20px;
  background-color: #e3e8eb;
  border-radius: 30px 0 0 0;
  border-bottom: 10px solid #6d96ac;
  }
  }

  &.leg-right {
    right: 73px;
  background-color: #fbfdfa;
  transform: rotate(-20deg);

  &:before {
    content: "";
  width: 50px;
  height: 25px;
  position: absolute;
  bottom: -26px;
  right: -20px;
  background-color: #fbfdfa;
  border-radius: 0 30px 0 0;
  border-bottom: 10px solid #b0cfe4;
  }
  }
`;
