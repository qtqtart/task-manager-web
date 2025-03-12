import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("sign-in")}</title>
      </Helmet>
    </>
  );
};

export default ProjectsPage;
