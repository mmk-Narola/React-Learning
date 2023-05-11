type PersonProObj = {
  PersonObj: {
    name: string;
    des: string;
    age: number;
  };
};

const PersonObj = (prop: PersonProObj) => {
  return (
    <>
      <h2>🔥Prop with Object Type🔥</h2>
      <h3>
        I am {prop.PersonObj.name} and I am {prop.PersonObj.age} year old{" "}
        {prop.PersonObj.des}
      </h3>
    </>
  );
};

export default PersonObj;
