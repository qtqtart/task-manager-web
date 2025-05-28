import { useGetCurrentUserQuery } from "@entities/user";
import { useUpdateProjectMutation } from "@features/project/update-project";
import ArchiveIcon from "@mui/icons-material/Archive";
import EditIcon from "@mui/icons-material/Edit";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useDialog } from "@shared/hooks/use-dialog";
import { FC, memo, MouseEvent, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ProjectModel } from "../types";
import { randomGradientBg } from "../utils";

type Props = {
  project: ProjectModel;
};

const ProjectItem_: FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const navigate = useNavigate();

  const user = useGetCurrentUserQuery();
  const [updateProject, updateProjectState] = useUpdateProjectMutation();
  const handleToggleIsArchived = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      await updateProject({
        id: project.id,
        data: {
          isArchived: !project.isArchived,
        },
      }).unwrap();
    },
    [updateProject, project.id, project.isArchived],
  );

  const dialog = useDialog();

  const backgroundImage = useMemo(
    () => randomGradientBg(project.title),
    [project.title],
  );

  return (
    <>
      <Card
        onClick={() => navigate(project.id)}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 1,
          cursor: "pointer",
        }}
      >
        {project.imageUrl ? (
          <Box
            component="img"
            src={project.imageUrl}
            alt={project.title}
            sx={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              maxHeight: "200px",
              borderRadius: theme.spacing(2),
            }}
          />
        ) : (
          <Card
            sx={{
              width: "100%",
              minHeight: "200px",
              maxHeight: "200px",
              backgroundImage,
            }}
          />
        )}

        <Stack
          sx={{
            minWidth: 0,
            flexGrow: 1,
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.disabled",
              overflow: "hidden",
              wordBreak: "break-all",
              textOverflow: "ellipsis",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
          >
            {project.description}
          </Typography>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title={project.owner.username}>
              <Avatar
                src={project.owner.imageUrl ?? undefined}
                alt={project.owner.username}
              >
                {project.owner.username[0].toUpperCase()}
              </Avatar>
            </Tooltip>

            {project.members.length > 0 && (
              <Divider flexItem orientation="vertical" />
            )}

            <AvatarGroup>
              {project.members.map((member) => (
                <Avatar
                  key={member.id}
                  src={member.imageUrl ?? undefined}
                  alt={member.username}
                >
                  {member.username[0].toUpperCase()}
                </Avatar>
              ))}
            </AvatarGroup>
          </Stack>

          {user.data?.id === project.owner.id && (
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {!project.isArchived && (
                <Tooltip title={t("edit")}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      dialog.onOpen();
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title={t(project.isArchived ? "unarchive" : "archive")}>
                <IconButton
                  loading={updateProjectState.isLoading}
                  onClick={handleToggleIsArchived}
                >
                  {project.isArchived ? <UnarchiveIcon /> : <ArchiveIcon />}
                </IconButton>
              </Tooltip>
            </Stack>
          )}
        </Stack>

        {project.isArchived && (
          <Chip
            color="error"
            label={t("archived")}
            sx={{
              position: "absolute",
              top: theme.spacing(2),
              right: theme.spacing(2),
              zIndex: 10,
              typography: "caption",
            }}
          />
        )}
      </Card>
    </>
  );
};

export const ProjectItem = memo(ProjectItem_);
