export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="flex gap-x-4 rounded-md bg-gray-50 py-5 px-5 mb-12">
      <span className="text-xl sm:text-2xl" title="AI">
        <img src={"/tech-doc.png"} width={75}/>
      </span>
      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
        <p>Hi, I&apos;m the Ed-Fi Tech Doc</p>
        <p>
          I can{" "}
          <button
            className="prompt-button"
            onClick={() =>
              setPrompt(
                "Explain the basics for getting started"
              )
            }
          >
            explain the basics on getting started with Ed-Fi
          </button>
          , describe{" "}
          <button
            className="prompt-button"
            onClick={() =>
              setPrompt("Describe the different api endpoints. ")
            }
          >
            the Ed-Fi API Endpoints
          </button>{" "}
          and{" "}
          <button
            className="prompt-button"
            onClick={() =>
              setPrompt(
                "Give a random technical implementation of the Ed-Fi API using best practices"
              )
            }
          >
            offer best technical practices for implementing the Ed-Fi ODS and API
          </button>
        </p>
        <p>What would you like to learn about today?</p>
      </div>
    </div>
  );
}
