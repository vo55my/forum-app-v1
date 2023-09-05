import TagItem from "./TagItem";

const TagsList = ({ threads = [] }) => {
  return (
    <div className="my-3 d-flex">
      <h4 className="mx-2">Tag : </h4>
      {threads.map((thread) => (
        <TagItem text={thread.category} />
      ))}
    </div>
  );
};

export default TagsList;
