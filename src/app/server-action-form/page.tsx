import { SmartPaste } from "../components/smart-paste/smart-paste";

export default function Home() {
  const createContact = async (formData: FormData) => {
    "use server";

    console.log({
      name: formData.get("name"),
      title: formData.get("title"),
      location: formData.get("location"),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <form className="space-y-6 bg-white p-6 shadow-md rounded-lg border" action={createContact}>
        <div className="flex justify-between items-start">
          <p className="text-xl font-black">Create Contact</p>
          <SmartPaste />
        </div>
        <input name="name" placeholder="Name" className="w-full p-2 border" />
        <input name="title" placeholder="Title" className="w-full p-2 border" />
        <input name="location" placeholder="Location" className="w-full p-2 border" />
        <button type="submit" className="p-2 rounded bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
