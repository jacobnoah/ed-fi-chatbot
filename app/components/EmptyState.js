export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="flex gap-x-4 rounded-md bg-gray-50 py-5 px-5 mb-12">
      <span className="text-xl sm:text-2xl" title="AI">
        <img src={"https://www.ed-fi.org/wp-content/themes/joints/assets/images/logos/logo.png"} width={75}/>
      </span>
      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">
        <p>I&apos;m an expert on the Ed-Fi ODS / API for Suite 3 v7.0.</p>
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
            explain the basics
          </button>
          , describe{" "}
          <button
            className="prompt-button"
            onClick={() =>
              setPrompt("Describe the different api endpoints. ")
            }
          >
            API Endpoints
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
            offer best technical practices
          </button>
        </p>
        <p>What do you want to chat about?</p>
      </div>
    </div>
  );
}
