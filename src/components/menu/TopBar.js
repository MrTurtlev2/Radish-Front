import React from 'react';
import styled from 'styled-components';
import RadishIcon from '../../images/RadishIcon';
import BookTab from '../common/book-tab/BookTab';
import Logo from '../../images/logo.webp';

const TopBar = ({onClick}) => {
	return (
		<TopBarWrapper>
			<RadishIcon svgHeight={70} svgWidth={80} />
			<LogoWrapper>
				<LogoImg src={Logo} />
			</LogoWrapper>
			<BookTab onClick={onClick} right={0} left='auto'/>
		</TopBarWrapper>
	);
};

export default TopBar;

const TopBarWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.pink};
    height: 70px;
    box-shadow: -54px 1px 22px -13px rgb(66 68 90);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
`;

const LogoWrapper = styled.div`
    width: calc(100% - 160px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 180px;
`;