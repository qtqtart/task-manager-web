import { useCurrentUser } from "@features/auth/is-auth";
import { UpdateProjectDialog } from "@features/project/update-project";
import { ProjectFragment } from "@generated";
import ArchiveIcon from "@mui/icons-material/Archive";
import EditIcon from "@mui/icons-material/Edit";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  IconButton,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { useDialog } from "@shared/hooks/use-dialog";
import { FC, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { randomGradientBg } from "../utils";

type Props = {
  project: ProjectFragment;
};

const ProjectItem_: FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { user } = useCurrentUser();

  const backgroundImage = useMemo(
    () => randomGradientBg(project.title),
    [project.title],
  );

  const dialog = useDialog();

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 1,
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
              backgroundBlendMode: "overlay",
            }}
          />
        )}

        <TextField
          label={t("formSchema.title.label")}
          defaultValue={project.title}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />

        <TextField
          label={t("formSchema.description.label")}
          defaultValue={project.description}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
          multiline
          minRows={3}
          maxRows={3}
        />

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
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

          {user?.id === project.user.id && (
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <IconButton>
                {project.isArchived ? <UnarchiveIcon /> : <ArchiveIcon />}
              </IconButton>

              <IconButton onClick={dialog.onOpen}>
                <EditIcon />
              </IconButton>
            </Stack>
          )}
        </Stack>
      </Card>

      {project.id && (
        <UpdateProjectDialog
          projectId={project.id}
          open={dialog.open}
          onClose={dialog.onClose}
        />
      )}
    </>
  );
};

export const ProjectItem = memo(ProjectItem_);
