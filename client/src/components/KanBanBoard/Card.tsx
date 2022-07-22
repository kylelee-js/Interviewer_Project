import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Alert, Box, Snackbar } from "@mui/material/";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import KebabMenu from "./KebabMenu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import { setApplicantMine } from "../../api/applicantUpdate";
import { useAppDispatch, useAppSelector } from "../../store";
import { onSetMyApplicant } from "./kanbanSlice";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TagNote = styled.span`
  font-size: 12px;
  padding: 3px 5px;
  margin-right: 10px;
  background-color: grey;
  color: white;
  border-radius: 5px;
`;

const MenuButtonDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const CheckBoxDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
const poolPageBoards = ["개발", "마케팅", "경영지원", "디자인"];

interface CardProps extends ApplicantDataType {
  boardStatus: string;
  applicantIndex: number;
  type: string;
}

export default React.memo(function Card({
  id,
  applicantName,
  applicantIndex,
  tagNote = ["없음"],
  department,
  boardStatus,
  type,
  job,
  interviewer,
  isFailed = false,
  isFixed = false,
}: CardProps) {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/applicant/${id}`);
  };
  // TODO: 각 지원자 별로 setMine bool 값을 받아오기
  const userPk = useAppSelector((state) => state.auth.user?.pk);
  const dispatch = useAppDispatch();

  // TODO: 기본값은 isMine을 따른다 Alert 띄우는 모달
  const [open, setOpen] = useState(false);
  const [openOpp, setOpenOpp] = useState(false);

  return (
    // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
    <Draggable
      key={applicantName}
      index={applicantIndex}
      draggableId={"" + applicantName}
      // TODO: 이 옵션 크고 끄게 할 수 있도록
      isDragDisabled={isFixed || type == "pool"}
    >
      {(provided, snapshot) => {
        const style = {
          cursor: snapshot.isDragging ? "grab" : "auto",
          PointerEvent: "none",
          ...provided.draggableProps.style,
        };
        return (
          <Wrapper>
            <Box
              sx={{
                minWidth: 250,
                width: "90%",
                maxWidth: 320,
                position: "relative",
                boxSizing: "border-box",
              }}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={style}
            >
              <MuiCard variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {department} - {job}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {applicantName}{" "}
                    {isFailed && (
                      <Tooltip title="해당 지원자는 전형 탈락상태입니다.">
                        <BlockIcon
                          color="error"
                          sx={{ verticalAlign: "text-top" }}
                        />
                      </Tooltip>
                    )}{" "}
                    {isFixed && (
                      <Tooltip title="해당 지원자는 검토 중입니다.">
                        <LockIcon sx={{ verticalAlign: "text-top" }} />
                      </Tooltip>
                    )}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {myPageBoards[+boardStatus]}
                  </Typography>
                  <Typography variant="body2">
                    {/* well meaning and kindly. FIXME: 한줄 자기소개?
                    <br /> */}
                    {tagNote?.map((tag) => (
                      <TagNote key={tag}>#{tag}</TagNote>
                    ))}
                  </Typography>
                </CardContent>

                <MenuButtonDiv>
                  <CardActions>
                    <KebabMenu
                      type={type}
                      id={id}
                      status={boardStatus}
                      applicantIndex={applicantIndex}
                      isFailed={isFailed}
                      isFixed={isFixed}
                    />
                  </CardActions>
                </MenuButtonDiv>
              </MuiCard>
            </Box>
          </Wrapper>
        );
      }}
    </Draggable>
  );
});
