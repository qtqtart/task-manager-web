import { ProjectsList } from "@entities/project";
import { CreateProjectDialog } from "@features/project/create-project/ui/create-project-dialog";
import { useProjectFiltersStore } from "@features/project-filters";
import { Searchbar } from "@features/search";
import AddIcon from "@mui/icons-material/Add";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { Button, IconButton, Paper, Stack, Tooltip } from "@mui/material";
import { useDialog } from "@shared/hooks/use-dialog";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  const dialog = useDialog();

  const filters = useProjectFiltersStore();
  const handleChangeSearchTerms = useCallback(
    (searchTerms: string) => {
      filters.set({
        searchTerms,
      });
    },
    [filters],
  );
  const handleToggleIsArchived = useCallback(() => {
    filters.set({
      isArchived: !filters.isArchived,
    });
  }, [filters]);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          gap: 1,
          height: "100%",
        }}
      >
        <Paper
          variant="outlined"
          component={Stack}
          sx={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            gap: 1,
            p: 1,
            width: "100%",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <Tooltip title={t(filters.isArchived ? "unarchive" : "archive")}>
              <IconButton onClick={handleToggleIsArchived}>
                {filters.isArchived ? <UnarchiveIcon /> : <ArchiveIcon />}
              </IconButton>
            </Tooltip>

            <Searchbar
              searchTerms={filters.searchTerms}
              setSearchTerms={handleChangeSearchTerms}
            />
          </Stack>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={dialog.onOpen}
            sx={{
              flexShrink: 0,
            }}
          >
            {t("project")}
          </Button>
        </Paper>

        <ProjectsList />
      </Stack>

      <CreateProjectDialog open={dialog.open} onClose={dialog.onClose} />
    </>
  );
};

export default ProjectsPage;
