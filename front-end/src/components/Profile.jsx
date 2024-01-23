export const Profile = () => {
  return (
    <>
      <div className="w-24 h-24 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 mb-2"></div>
      <div className="w-24 border-2">{/* Star Icons here */}</div>
      <div className="text-primaryColor font-semibold">Name here</div>
      <div className="">Occupation here</div>
    </>
  );
};
// Multiple cards will be added so either make it a list and loop through it or use props to pass it to the parent.
