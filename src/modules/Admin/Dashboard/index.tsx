import dayjs from "dayjs";
require("dayjs/locale/en");

import useGetAllLiveQuiz from "../../../api/hook/useGetAllLiveQuiz";
import { FORM_TYPE } from "../../../appConfig";
import FormPreviewCard from "../../../components/FormPreviewCard";
import Loader from "../../../components/UI/Loader";
import { StyledDashboardWrapper } from "./style";

function Dashboard() {
  const { isLoading, data, isError } = useGetAllLiveQuiz();

  console.log({ data });

  return (
    <StyledDashboardWrapper>
      <div className="dashboard-content">
        {isLoading && <Loader />}
        {!isLoading &&
          !isError &&
          data.map((d) => (
            <FormPreviewCard
              key={d.id}
              id={d.id}
              title={d.title}
              createdAt={dayjs(d.createdAt).format("D MMM YYYY")}
              questionCount={d.questions.length}
              previewType={
                d.isLiveQuiz ? FORM_TYPE.LIVE_QUIZ : FORM_TYPE.DYNAMIC_FORM
              }
            />
          ))}
      </div>
    </StyledDashboardWrapper>
  );
}

export default Dashboard;
