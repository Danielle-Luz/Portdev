import { UserInfo } from "./UserInfo";
import { Header } from "../../components/Header";
import { Container, FullWidthWrapper } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon/LoadingIcon";
import { LoadingContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function Dashboard() {
  const {userData, getUserData} = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userIsLogged = localStorage.getItem("@USERID");

    if (!userIsLogged) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getUserData(setLoading);
  }, [userData]);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingIcon size={80} />
        </LoadingContainer>
      ) : (
        <FullWidthWrapper>
          <Container>
            <Header hasTinyLogo buttonText="Sair" darker to="/login" />
          </Container>
          <UserInfo user={userData} />
        </FullWidthWrapper>
      )}
    </>
  );
}
