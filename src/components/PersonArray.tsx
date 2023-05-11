type PersonListProps = {
  nameList: {
    name: string;
    age: number;
  }[];
};

const PersonArray = (props: PersonListProps) => {
  console.log(props);
  return (
    <>
      <h2>🚀Prop with Array Type🚀</h2>
      {props.nameList.map((itemList) => {
        return (
          <h3 key={itemList.name}>
            Name : {itemList.name} , age :{itemList.age}
          </h3>
        );
      })}
    </>
  );
};

export default PersonArray;
