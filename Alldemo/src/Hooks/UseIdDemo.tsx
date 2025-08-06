import { useId} from "react";

const UniqueID = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input className="border px-2 rounded ml-4" type="email" id={`${id}-email`} />

      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input className="border px-2 rounded ml-4 mt-4" type="text" id={`${id}-name`} />
    </div>
  );
};


 

const UniqueIDPage = () => {
  return (
    <div>
      <UniqueID />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        consequatur quos quidem cupiditate voluptatem aliquam consequuntur
        excepturi placeat, officia eos commodi et voluptatum beatae quis dicta
        repellat vero maiores nulla.
      </p>
      <UniqueID />
    </div>
  );
}; 


export default UniqueIDPage;