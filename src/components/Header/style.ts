import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLiveGameHeaderWrapper = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.background.faded};

  .game-name {
    background-color: ${({ theme }) => theme.color.background.faded};
    border: 1px solid ${({ theme }) => theme.color.border.tertiary};
    padding: 4px 24px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;

    .player-detail {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 4px 8px;
      border-radius: 40px;
      border: 1px solid ${({ theme }) => theme.color.border.primary};
      background-color: ${({ theme }) => theme.color.white};

      .player-avatar {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        object-fit: cover;
      }

      .player-name {
        font-size: 14px;
        line-height: 20px;
        color: ${({ theme }) => theme.color.text.primary};
      }
    }

    .live-game-detail {
      display: flex;
      column-gap: 8px;
      justify-content: flex-end;
      align-items: center;

      .live-player-count {
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.text.primary};
      }

      .live-status {
        padding: 4px 8px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.color.error.primary};
        color: ${({ theme }) => theme.color.white};
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
      }
    }
  }
`;

export const StyledMainHeaderWrapper = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.background.faded};

  .main-navigation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 16px;

    .main-navigation-dropdown-content {
      width: unset;
    }
  }

  .side-navigation {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.color.background.faded};
    border-radius: 50%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  white-space: nowrap;
  transition: color 300ms ease-in-out;
`;
