import { Button } from "@mui/material";
import { useDialog } from "@shared/hooks/use-dialog";
import { CustomDialog } from "@shared/ui/custom-dialog";
import { FC, memo, useId } from "react";
import { useTranslation } from "react-i18next";

import { CreateProjectForm } from "./create-project-form";

type Props = Omit<ReturnType<typeof useDialog>, "onOpen">;

const CreateProjectDialog_: FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation();

  const id = useId();

  return (
    <CustomDialog
      maxWidth="sm"
      open={open}
      onClose={onClose}
      title={t("createProject")}
      content={<CreateProjectForm id={id} onClose={onClose} />}
      action={
        <>
          <Button
            variant="contained"
            color="inherit"
            type="submit"
            form={id}
            loading={false}
          >
            {t("apply")}
          </Button>
          <Button variant="text" onClick={onClose}>
            {t("cancel")}
          </Button>
        </>
      }
    />
  );
};

export const CreateProjectDialog = memo(CreateProjectDialog_);
