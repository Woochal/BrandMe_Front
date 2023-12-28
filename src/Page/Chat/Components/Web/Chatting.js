import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Brandon from "../../../../Assets/brandon_final.gif";

const Chatting = ({ chatModelResult, isLoading, preInput }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatModelResult, isLoading, preInput]);

  return (
    <Column ref={chatRef}>
      {chatModelResult.map((chat, i) => {
        if (i % 2 == 0) {
          return (
            <>
              <Row>
                <ChatContainerBrandon>
                  <ChatName>
                    <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
                    <div style={{ width: "0.625rem" }} />
                    <Body4>
                      브랜딩 어시스턴트 <b>Brandon</b>
                    </Body4>
                  </ChatName>
                  <div style={{ height: "0.625rem" }} />
                  <ChatBubbleBrandon>{chat.content}</ChatBubbleBrandon>
                </ChatContainerBrandon>
              </Row>
            </>
          );
        } else {
          return (
            <Row style={{ justifyContent: "flex-end" }}>
              <ChatBubbleUser>{chat.content}</ChatBubbleUser>
            </Row>
          );
        }
      })}
      {isLoading && chatModelResult.length > 0 ? (
        <>
          <Row style={{ justifyContent: "flex-end" }}>
            <ChatBubbleUser>{preInput}</ChatBubbleUser>
          </Row>
          <Row>
            <ChatContainerBrandon>
              <ChatName>
                <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
                <div style={{ width: "0.625rem" }} />
                <Body4>
                  브랜딩 어시스턴트 <b>Brandon</b>
                </Body4>
              </ChatName>
              <div style={{ height: "0.625rem" }} />
              <ChatBubbleBrandon>
                분석 중이다. 기다려라. 이 짜식아.
              </ChatBubbleBrandon>
            </ChatContainerBrandon>
          </Row>
        </>
      ) : null}
      {isLoading && chatModelResult.length === 0 ? (
        <Row>
          <ChatContainerBrandon>
            <ChatName>
              <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
              <div style={{ width: "0.625rem" }} />
              <Body4>
                브랜딩 어시스턴트 <b>Brandon</b>
              </Body4>
            </ChatName>
            <div style={{ height: "0.625rem" }} />
            <ChatBubbleBrandon>
              로딩 중이다. 기다려라. 이 짜식아.
            </ChatBubbleBrandon>
          </ChatContainerBrandon>
        </Row>
      ) : null}
    </Column>
  );
};

export default Chatting;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 56.25rem;
  padding: 0.625rem 0;
  min-height: 60vh;
  height: 65vh;
  color: white;
  overflow-y: scroll;
  z-index: 10;
`;

const ChatContainerBrandon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ChatName = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

const BrandonIn = keyframes` 
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  35% {
    transform: scale(1);
  }

  100% {
    opacity: 1;
  }
`;

const BrandonImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  object-fit: cover;
  animation: ${BrandonIn} 1.5s linear 1s forwards;
`;

// theme 파일 폰트 적용 방법 + style-components 사용
const Body4 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body4};
  font-weight: ${({ theme }) => theme.fontWeights.Body4};
  line-height: ${({ theme }) => theme.LineHeight.Body4};
`;

const ChatBubbleBrandon = styled.div`
  width: 49.0625rem;
  padding: 1.5rem;
  border-radius: 0 0.625rem 0.625rem 0.625rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(calc(var(--text-field-blur, 6.25rem) / 2));
`;

const ChatBubbleUser = styled.div`
  width: 49.0625rem;
  padding: 1.5rem;
  margin: 3.125rem 0;
  border-radius: 0.625rem 0.625rem 0 0.625rem;
  background: var(--ver-2-text-field, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(3.125rem);
`;
