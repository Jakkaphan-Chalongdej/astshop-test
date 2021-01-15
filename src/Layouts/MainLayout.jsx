import React from "react";
import MainWrapper from "../components/UI/Wrappers/MainPageWrapper";
import SideMenuWrapper from "../components/UI/Wrappers/SideMenuWrapper";
import ContentWrapper from "../components/UI/Wrappers/PageContentWrapper";
import MainMenu from "../components/Menus/MainMenu";
import SideMenu from "../components/Menus/SideMenu";
import Footer from "../components/Footer/Index";
import Modal from "../components/UI/Modal/Modal";
import PropTypes from "prop-types";
import "./layout.scss";
const MainLayout = (props) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <div>
          <SideMenuWrapper
            showSideBar={props.showSideBar}
            toggleSideMenu={props.toggleSideBar}
          >
            <SideMenu
              cartItemNumber={props.storeCartCount}
              showBackDrop={props.showSideBar}
            />
          </SideMenuWrapper>
          <ContentWrapper>
            <header>
              <MainMenu
                cartItemNumber={props.storeCartCount}
                toggleSideBar={props.toggleSideBar}
              />
            </header>
            <main style={{ marginTop: "160px" }}>
              {props.children}
              {props.showModal ? (
                <Modal
                  showModal={props.showModal}
                  closeModalClick={props.closeModalProp}
                >
                  {props.modalMessage}
                </Modal>
              ) : null}
            </main>
            {/* <footer>
              <Footer />
            </footer> */}
             <Footer />
          </ContentWrapper>
        </div>
      </MainWrapper>
    </React.Fragment>
  );
};

MainLayout.propTpes = {
  storeCartCount: PropTypes.number.isRequired,
  showModal: PropTypes.bool,
  closeModalClick: PropTypes.func,
  modalMessage: PropTypes.string,
  showSideBar: PropTypes.bool,
  toggleSideBar: PropTypes.func.isRequired,
};

export default MainLayout;
