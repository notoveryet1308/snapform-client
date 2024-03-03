import { FORM_TYPE } from "../../../appConfig";
import FormPreviewCard from "../../../components/FormPreviewCard";
import { StyledDashboardWrapper } from "./style";

function Dashboard() {
  return (
    <StyledDashboardWrapper>
      <div className="dashboard-content">
        <FormPreviewCard
          title="Javascrpipt quiz"
          createdAt="25 Feb 2024"
          questionCount={20}
          previewType={FORM_TYPE.LIVE_QUIZ}
          className="dashboard-form-preview-card"
        />
        <FormPreviewCard
          title="Annual feedback"
          createdAt="25 Feb 2024"
          questionCount={20}
          previewType={FORM_TYPE.DYNAMIC_FORM}
          className="dashboard-form-preview-card"
        />

        <FormPreviewCard
          title="Javascrpipt quiz"
          createdAt="25 Feb 2024"
          questionCount={20}
          previewType={FORM_TYPE.LIVE_QUIZ}
          className="dashboard-form-preview-card"
        />
        <FormPreviewCard
          title="Annual feedback"
          createdAt="25 Feb 2024"
          questionCount={20}
          previewType={FORM_TYPE.DYNAMIC_FORM}
          className="dashboard-form-preview-card"
        />
      </div>
    </StyledDashboardWrapper>
  );
}

export default Dashboard;
