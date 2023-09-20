/* eslint-disable react/prop-types */
import SingleQuestion from "./SingleQuestion";

const Accordian = ({ questions, activeId, toggleQuestion }) => (
  <section className="container">
    <h1>Questions</h1>
    {questions.map((question) => {
      return (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        ></SingleQuestion>
      );
    })}
  </section>
);
export default Accordian;
