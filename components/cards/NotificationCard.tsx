import { device } from "components/container/device";
import Icon from "components/icons";
import styled from "styled-components";
import Image from "next/image";

interface NotificationCardProps {
  close: () => void;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 240px;
  max-width: 260px;
  border-radius: 8px;
  background: #ffffff;
  padding: 40px 20px;

  @media ${device.tablet} {
    min-height: 300px;
    max-width: 345px;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

const CloseButton = styled.button`
  border: none;
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.palette.primary};
  }

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const XButtonClick = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  right: -16px;
  top: -16px;
  border-radius: 50%;
  background: #ffffff;
  width: 36px;
  display: grid;
  place-content: center;
  padding: 4px;

  :hover {
    color: ${({ theme }) => theme.palette.primary};

    svg {
      path {
        fill: ${({ theme }) => theme.palette.primary};
      }
    }
  }
`;

const GifContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const NotificationCard = (props: NotificationCardProps) => {
  const handleClickCloseModal = () => props.close();

  return (
    <CardContainer>
      <XButtonClick onClick={handleClickCloseModal}>
        <Icon name="close" width="32px" />
      </XButtonClick>
      <GifContainer>
        <Image
          src="/images/done.gif"
          alt="done"
          className="projectImage"
          layout="fill"
        />
      </GifContainer>
      <Text>
        I’ll reply ASAP, looking forward to what we can build together
      </Text>
      <CloseButton onClick={handleClickCloseModal}>
        CLOSE THIS DIALOG
      </CloseButton>
    </CardContainer>
  );
};

export default NotificationCard;
